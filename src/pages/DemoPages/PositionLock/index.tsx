import { useEffect, useRef } from 'react';

const PositionLock = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loop = () => {
      // 获取窗口所在屏幕的位置
      const { screenX, screenY } = window;

      // 获取显示器的宽高
      const { width, height } = window.screen;
      const { innerWidth, innerHeight, outerHeight, outerWidth } = window;

      const x = width / 2 - 50 - (outerWidth - innerWidth) - screenX;
      const y = height / 2 - 50 - (outerHeight - innerHeight) - screenY;

      ref.current.style.left = `${x}px`;
      ref.current.style.top = `${y}px`;

      window.requestAnimationFrame(loop);
    };
    loop();
  }, []);
  return (
    <div>
      <div
        ref={ref}
        style={{
          position: 'fixed',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: '#27d135bf',
          textAlign: 'center',
          lineHeight: '100px',
          transition: 'left 0.2s, top 0.2s',
          color: '#fff',
          left: 0,
          top: 0,
        }}
      >
        圆圈
      </div>
    </div>
  );
};

export default PositionLock;
