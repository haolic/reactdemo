import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';
import styles from './JobItem.module.less';

export interface IJob {
  name: string;
  status: 'success' | 'fail';
  time: number; //毫秒时间戳
}
interface IJobSelf extends IJob {
  isfirstJob?: boolean;
  isFirstNode?: boolean;
  isLastNode?: boolean;
}

const statusMap = {
  success: <CheckCircleOutlined />,
  fail: <CloseCircleOutlined />,
};

const JobItem = (props: IJobSelf) => {
  const { name, status, time, isfirstJob, isFirstNode, isLastNode } = props;
  const [showLine, setShowLine] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLine(true);
    }, 100);
  }, []);
  return (
    <div className={styles['job-item']}>
      <svg className={styles.svg}>
        {!isFirstNode && isfirstJob && (
          <path
            className={styles.line}
            d={showLine ? 'M0 72 l40 0' : 'M0 72 l0 0'}
          ></path>
        )}
        {!isLastNode && isfirstJob && (
          <path
            className={styles.line}
            d={showLine ? 'M190 72 l40 0' : 'M192 72 l0 0'}
          ></path>
        )}
        {!isFirstNode && !isfirstJob && (
          <path
            className={styles.line}
            d={
              showLine
                ? 'M10 20 m10 0 a10,10 0 0,1 10,10 l0 35 a10,10 0 0,0 10,10'
                : 'M10 20 m0 0 a0,0 0 0,1 0,0 l0 0 a0,0 0 0,0 -0,0'
            }
          ></path>
        )}
        {!isLastNode && !isfirstJob && (
          <path
            className={styles.line}
            d={
              showLine
                ? 'M211 20 a10,10 0 0,0 -10,10 l0 35 a10,10 0 0,1 -10,10'
                : 'M211 20 a0,0 0 0,0 -0,0 l0 0 a0,0 0 0,0 -0,0'
            }
          ></path>
        )}
      </svg>
      <div
        className={styles['job-status']}
        style={{ color: status === 'success' ? '#95de64' : '#ff7875' }}
      >
        {statusMap[status]}
      </div>
      <div className={styles['job-name']}>{name}</div>
      <div className={styles['job-time']}>{dayjs(time).format('HH:mm:ss')}</div>
    </div>
  );
};

export default JobItem;
