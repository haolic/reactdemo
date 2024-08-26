import React from 'react';
import JobItem, { IJob } from './JobItem';

export interface IStage {
  title: string;
  jobs: IJob[];
  isFirstNode?: boolean;
  isLastNode?: boolean;
}

const NodeItem = (props: IStage) => {
  const { title, jobs, isFirstNode, isLastNode } = props;
  return (
    <div>
      <div>{title}</div>
      {jobs.map((el: IJob, idx) => {
        return (
          <JobItem
            {...el}
            isfirstJob={idx === 0}
            isFirstNode={isFirstNode}
            isLastNode={isLastNode}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default NodeItem;
