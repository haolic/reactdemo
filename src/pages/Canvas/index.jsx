import React, { useRef, useEffect } from 'react';
import { draw } from './utils';
import styles from './index.less';

const Canvas = () => {
  const canvasRef = useRef();
  const inst = useRef({});
  useEffect(() => {
    inst.current = draw(canvasRef.current);
    console.log(inst)
  }, []);

  const clearCanvas = () => {
    const { width, height } = inst.current.canvas;
    const nowCtx = inst.current.ctx;
    nowCtx.clearRect(0, 0, width, height);
  };
  const reset = () => {
    const instCtx = inst.current;
    instCtx.ctx.beginPath();
    instCtx.drawRect();
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.canvasWrap} ref={canvasRef} />
      <div className={styles.bar}>
        <button onClick={clearCanvas}>清空</button>
        <button onClick={reset}>画长方形</button>
      </div>
    </div>
  );
};

Canvas.label = 'Canvas';

export default Canvas;
