import React, { useRef, useEffect } from 'react';
import { draw } from './utils';
import styles from './index.less';

const Canvas = () => {
  const canvasRef = useRef();
  useEffect(() => {
    if (draw) {
      draw(canvasRef.current);
    }
  }, []);
  return <div className={styles.canvasWrap} ref={canvasRef} />;
};

Canvas.label = 'Canvas';

export default Canvas;
