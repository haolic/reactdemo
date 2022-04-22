import React from 'react';
import NodeItem, { IStage } from './NodeItem';
import styles from './PipeLine.less';

interface IPipeline {
  stages: IStage[];
}

const PipeLine = (props: IPipeline) => {
  const { stages } = props;

  return (
    <div className={styles['pipeline-wrap']}>
      {stages.map((el, idx) => {
        const { title, jobs } = el;
        return (
          <NodeItem
            key={idx}
            title={title}
            jobs={jobs}
            isFirstNode={idx === 0}
            isLastNode={idx === stages.length - 1}
          />
        );
      })}
    </div>
  );
};

export default PipeLine;
