import React from 'react';
import Pipeline from './PipeLine';
import { IStage } from './NodeItem';

interface FC extends React.FC<{}> {
  title?: string;
}

// pipeline的数据

const data: IStage[] = [
  {
    title: '第一阶段',
    jobs: [
      {
        name: '第一个任务',
        status: 'success',
        time: 1588888888,
      },
    ],
  },
  {
    title: '第二阶段',
    jobs: [
      {
        name: '第一个任务',
        status: 'success',
        time: 1588888888,
      },
      {
        name: '第二个任务',
        status: 'fail',
        time: 1588888888,
      },
    ],
  },
  {
    title: '第3阶段',
    jobs: [
      {
        name: '第一个任务',
        status: 'success',
        time: 1588888888,
      },
      {
        name: '第二个任务',
        status: 'fail',
        time: 1588888888,
      },
    ],
  },
];

const PipeLinePage: FC = () => {
  return <Pipeline stages={data} />;
};

PipeLinePage.title = '流水线组件';

export default PipeLinePage;
