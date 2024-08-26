import React, { Fragment, useState } from 'react';
import FormItem from './FormItem';
import styles from './index.module.less';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

const DATE_FORMAT = 'YYYY-MM-DD';

enum planType {
  'keepNum' = '期数不变，减少月供金额',
  'keepPrincipal' = '每月还本金不变，减少期数',
}

// 房贷计算、提前还贷计算
const MortgageCalculation = () => {
  // 计算结果
  const [result, setResult] = useState([]);
  const calc: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // 获取表单数据
    const form = document.getElementById('moneyForm');
    const prepaymentForm = document.querySelector(`.${styles.prepaymentForm}`);

    const formData = new FormData(form as HTMLFormElement);
    let data = Object.fromEntries(formData.entries());
    if (prepaymentForm) {
      data = {
        ...data,
        ...Object.fromEntries(
          new FormData(prepaymentForm as HTMLFormElement).entries()
        ),
      };
    }
    // 提取数据
    const allMoney = parseFloat(data.allMoney as string) * 10000;
    const month = parseInt(data.month as string);
    const rate = parseFloat(data.rate as string) / 100;
    const startDate = data.startDate as string;
    const prepayment = parseFloat(data.prepayment as string) * 10000;
    const prepayDate = data.prepayDate as string;
    const plan = data.plan as string;
    const type = (data.type as string) || '等额本金';

    // 计算月利率
    const monthlyRate = rate / 12;

    // 定义结果数组
    let rowResult = [];

    // 等额本金还款
    if (type === '等额本金') {
      const monthlyPrincipal = allMoney / month;
      // 每月剩余本金
      let remainingPrincipal = allMoney;
      // 剩余期数
      let remainingMonths = month;
      // 当前月份
      let currentMonth = dayjs(startDate, DATE_FORMAT);

      // 当前期数
      let currentNum = 1;

      for (let i = 1; i <= month; i++) {
        currentNum = i;
        currentMonth = currentMonth.add(1, 'month');
        // 计算利息
        const interest = remainingPrincipal * monthlyRate;
        // 月供金额
        const totalPayment = monthlyPrincipal + interest;
        remainingPrincipal -= monthlyPrincipal;

        // 把计算结果添加到结果数组
        rowResult.push({
          month: currentNum,
          date: currentMonth.subtract(1, 'month').format(DATE_FORMAT),
          money: totalPayment.toFixed(2),
          principal: monthlyPrincipal.toFixed(2),
          interest: interest.toFixed(2),
          residualPrincipal: remainingPrincipal.toFixed(2),
        });
        // 提前还款处理
        if (
          Number(prepayment) > 0 &&
          currentMonth.isAfter(dayjs(prepayDate, DATE_FORMAT))
        ) {
          rowResult.push({
            month: '',
            date: prepayDate,
            money: '',
            principal: '',
            interest: '提前还款',
            residualPrincipal: prepayment.toFixed(2),
          });
          // 本金直接减少
          remainingPrincipal -= prepayment;

          if (plan === 'keepPrincipal') {
            break;
          }
        }
      }
      if (plan === 'keepPrincipal') {
        // 剩余期数
        remainingMonths = remainingPrincipal / monthlyPrincipal;
        for (let i = 1; i <= remainingMonths; i++) {
          currentNum = currentNum + 1;

          // 计算利息
          const interest = remainingPrincipal * monthlyRate;
          // 月供金额
          const totalPayment = monthlyPrincipal + interest;
          rowResult.push({
            month: currentNum,
            date: currentMonth.format(DATE_FORMAT),
            money: totalPayment.toFixed(2),
            principal: monthlyPrincipal.toFixed(2),
            interest: interest.toFixed(2),
            residualPrincipal: remainingPrincipal.toFixed(2),
          });
          currentMonth = currentMonth.add(1, 'month');

          remainingPrincipal -= monthlyPrincipal;
        }
      }
    }
    setResult(rowResult);
  };

  return (
    <div className={styles.wrap}>
      <h3>提前还房贷计算</h3>
      <form id="moneyForm" className={styles.form}>
        <FormItem
          label="贷款金额"
          type="number"
          name="allMoney"
          placeholder="金额"
          defaultValue={193}
          suffix="万元"
        />
        <FormItem
          label="贷款期数"
          type="number"
          name="month"
          placeholder="期数"
          defaultValue={360}
          suffix="月"
        />
        <FormItem
          label="贷款利率"
          type="number"
          name="rate"
          placeholder="年利率"
          defaultValue={4}
          suffix="%"
        />
        <FormItem
          label="还款方式"
          type="select"
          name="type"
          options={[
            { value: '等额本金', label: '等额本金' },
            { value: '等额本息', label: '等额本息' },
          ]}
          placeholder="请选择"
          disabled
        />

        <FormItem
          label="首次还款年月"
          type="date"
          name="startDate"
          placeholder="请选择"
          defaultValue={'2024-01-15'}
        />
      </form>
      <h4>提前还款配置</h4>
      <div>
        <form className={styles.prepaymentForm}>
          <FormItem
            label="提前还款金额"
            type="number"
            name="prepayment"
            placeholder="金额"
            defaultValue={60}
            suffix="万元"
          />
          <FormItem
            label="提前还款年月"
            type="date"
            name="prepayDate"
            placeholder="请选择"
            defaultValue={dayjs().add(1, 'month').format('YYYY-MM-DD')}
          />
          <FormItem
            label="剩余贷款安排"
            type="select"
            name="plan"
            options={[
              {
                value: 'keepPrincipal',
                label: planType.keepPrincipal,
              },
              {
                value: 'keepNum',
                label: planType.keepNum,
              },
            ]}
            placeholder="请选择"
          />
        </form>
      </div>

      <div className={styles.actions}>
        <button className={styles.submitBtn} onClick={calc}>
          计算
        </button>
      </div>
      <table className={styles.table} id="table">
        <thead>
          <tr>
            <td>期数</td>
            <td>还款日期</td>
            <td>月供金额</td>
            <td>本金</td>
            <td>利息</td>
            <td>剩余本金</td>
          </tr>
        </thead>
        <tbody>
          {result?.length ? (
            result.map((item, index) => {
              if (item.interest === '提前还款') {
                return (
                  <tr className={styles.prepaymentRow} key={index}>
                    <td></td>
                    <td>{item.date}</td>
                    <td colSpan={4}>
                      {item.interest}：{item.residualPrincipal}
                    </td>
                  </tr>
                );
              }
              return (
                <tr key={index}>
                  <td>{item.month}</td>
                  <td>{item.date}</td>
                  <td>{item.money}</td>
                  <td>{item.principal}</td>
                  <td>{item.interest}</td>
                  <td>{item.residualPrincipal}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={6} className={styles.tablePlaceholder}>
                暂无数据
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MortgageCalculation;
