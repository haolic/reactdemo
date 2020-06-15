import React, { useRef } from 'react';

const config = {
  width: 800,
  height: 600,
};

const RandomCanvas = () => {
  const canvasRef = useRef();
  const canDraw = useRef(false);

  const drawItem = ctx => {
    const x = Math.random() * config.width;
    const y = Math.random() * config.height;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.lineTo(x + 50, y + 70);
    ctx.lineTo(x, y + 70);
    ctx.lineTo(x, y);
    ctx.stroke();
  };
  const go = () => {
    if (canDraw.current) return;
    canDraw.current = true;
    draw();
  };
  const draw = () => {
    const ctx = canvasRef.current.getContext('2d');
    if (canDraw.current) {
      drawItem(ctx);
      requestAnimationFrame(draw);
    }
  };
  const stop = () => {
    canDraw.current = false;
  };
  return (
    <div>
      <div
        style={{
          border: '1px solid #f90',
          width: config.width,
          height: config.height,
          boxSizing: 'content-box',
        }}
      >
        <canvas ref={canvasRef} width="800" height="600" />
        <button onClick={go}>开始</button>
        <button onClick={stop}>停止</button>
      </div>
    </div>
  );
};

RandomCanvas.label = '随机画图';

export default RandomCanvas;
