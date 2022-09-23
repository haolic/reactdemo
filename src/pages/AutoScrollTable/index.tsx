import React from 'react';
import AutoScrollTable from './AutoScrollTable';

interface FC extends React.FC<{}> {
  title?: string;
}

const AutoScrollTablePage: FC = () => {
  const columns = [
    {
      dataIndex: 'carNo',
      title: '车牌号',
    },
    {
      dataIndex: 'deliveryWarehouse',
      title: '发货仓库',
    },
    {
      dataIndex: 'deliveryTime',
      title: '发货时间',
    },
    {
      dataIndex: 'status',
      title: '在途状态',
      render: (v: any) => {
        return (
          <span style={{ color: 'lightgreen', fontWeight: 'bold' }}>{v}</span>
        );
      },
    },
  ];

  const dataSource = [
    {
      carNo: '浙AU075N',
      deliveryWarehouse: '发货仓库发货仓库发货仓库发货仓库',
      deliveryTime: '2022-07-06 HH:mm:ss',
      status: '正常',
    },
    {
      carNo: '浙A33223',
      deliveryWarehouse: '发货仓库发货仓库发货仓库发货仓库',
      deliveryTime: '2022-07-06 HH:mm:ss',
      status: '正常',
    },
    {
      carNo: '浙AF78964',
      deliveryWarehouse: '发货仓库发货仓库发货仓库发货仓库',
      deliveryTime: '2022-07-06 HH:mm:ss',
      status: '正常',
    },
    {
      carNo: '云AN12345',
      deliveryWarehouse: '发货仓库发货仓库发货仓库发货仓库',
      deliveryTime: '2022-07-06 HH:mm:ss',
      status: '正常',
    },
    {
      carNo: '云AN22222',
      deliveryWarehouse: '发货仓库发货仓库发货仓库发货仓库',
      deliveryTime: '2022-07-06 HH:mm:ss',
      status: '正常',
    },
  ];
  return (
    <div style={{ padding: 50 }}>
      <AutoScrollTable columns={columns} dataSource={dataSource} />
    </div>
  );
};

AutoScrollTablePage.title = '大屏滚动表格';

export default AutoScrollTablePage;
