import React from 'react';
import ResizeWrap from 'resize-container';
import LazyLoad from './Lazyload';

const ResizeByNPM = () => {
  return (
    <ResizeWrap
      leftPart={<div>左边</div>}
      rightPart={<LazyLoad />}
    />
  );
};

ResizeByNPM.label = 'npm上的resize包';

export default ResizeByNPM;
