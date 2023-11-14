import { useRef } from 'react';
import styles from './index.module.less';

const ScreenCapture = () => {
  const videoRef = useRef<HTMLVideoElement>();

  const start = async () => {
    if (videoRef.current.srcObject) {
      videoRef.current.srcObject = null;
    } else {
      videoRef.current.srcObject = await navigator.mediaDevices.getDisplayMedia(
        {
          video: true,
          audio: true,
        }
      );
    }
  };

  return (
    <div style={{ padding: '0 20px', textAlign: 'center' }}>
      <button id="start" onClick={start}>
        Start/Stop
      </button>

      <video className={styles.video} autoPlay ref={videoRef}>
        Your browser doesn't support HTML5.
      </video>
    </div>
  );
};

ScreenCapture.title = '屏幕录制';

export default ScreenCapture;
