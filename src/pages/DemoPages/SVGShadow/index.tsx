import styles from './index.module.less';

const SVGShadow = () => {
  return (
    <div>
      <svg width={600} height={600}>
        <defs>
          <filter id="path-shadow" x="0" y="0" width="200%" height="200%">
            <feOffset in="SourceAlpha" dx="2" dy="2" result="offset"></feOffset>
            <feGaussianBlur
              in="offset"
              stdDeviation="2"
              result="blur"
            ></feGaussianBlur>
            <feComposite
              in="SourceGraphic"
              in2="blur"
              operator="over"
            ></feComposite>
          </filter>
        </defs>

        <path
          filter="url(#path-shadow)"
          d="M 100 100 L 300 100 L 200 300 z"
          fill="red"
          className={styles.path}
        />
      </svg>
    </div>
  );
};

export default SVGShadow;
