import React, { useRef, useEffect } from 'react';

/**
 * navigator.mediaDevices可以使用的情况：
 * 1、localhost 域
 * 2、开启了 HTTPS 的域
 * 3、使用 file:/// 协议打开的本地文件（难怪我特么本地直接开也能用！）
 */

const Camera = () => {
  const ref = useRef();
  useEffect(() => {
    window.navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        ref.current.srcObject = stream;
        ref.current.onloadedmetadata = function (e) {
          ref.current.play();
        };
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <video
        ref={ref}
        style={{
          width: '600px',
        }}
      >
        您的浏览器不支持video
      </video>
    </div>
  );
};

Camera.label = '摄像头';

export default Camera;
