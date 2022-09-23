import React from 'react';
import { Table, TableColumnsType } from 'antd';

interface IProps {
  dataSource?: readonly any[];
  columns?: TableColumnsType<any>;
}

const AutoScrollTable: React.FC<IProps> = (props) => {
  const { dataSource, columns } = props;

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={columns}
        size="small"
        scroll={{ y: 118 }}
      />
    </div>
  );
};

export default AutoScrollTable;
