import React, { useEffect, useState, useRef } from 'react';
import { Table, TableColumnsType } from 'antd';

import './AutoScrollTable.less';

interface IProps {
  dataSource?: readonly any[];
  columns?: TableColumnsType<any>;
}

const AutoScrollTable: React.FC<IProps> = (props) => {
  const { dataSource = [], columns } = props;
  const tRef = useRef<NodeJS.Timeout>();
  const tRef2 = useRef<NodeJS.Timeout>();
  const indexRef = useRef<number>(0);
  const [renderDataSource, setRenderDataSource] = useState<any>([]);

  useEffect(() => {
    const renderData = dataSource?.slice(0, 4) || [];
    setRenderDataSource(renderData);

    tRef2.current = setTimeout(() => {
      const scroll = () => {
        const allRowDom = document.querySelectorAll(
          '.auto-scroll-table-wrap .ant-table-row',
        );

        const needShowDom = allRowDom[3];
        needShowDom.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
        renderData.shift();
        indexRef.current += 1;

        if (!dataSource[indexRef.current]) {
          indexRef.current = 0;
        }

        renderData.push(dataSource[indexRef.current]);
        setRenderDataSource([...renderData]);

        tRef.current = setTimeout(() => {
          scroll();
        }, 1000);
      };

      if (dataSource.length > 3) {
        scroll();
      }
    }, 1000);
    return () => {
      clearTimeout(tRef.current as NodeJS.Timeout);
      clearTimeout(tRef2.current as NodeJS.Timeout);
    };
  }, [dataSource]);

  return (
    <div className="auto-scroll-table-wrap">
      <Table
        dataSource={renderDataSource}
        columns={columns}
        size="small"
        scroll={{ y: 118 }}
        pagination={false}
      />
    </div>
  );
};

export default AutoScrollTable;
