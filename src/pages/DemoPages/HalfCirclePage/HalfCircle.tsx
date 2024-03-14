import styles from './HalfCircle.module.less';

interface HalfCircleProps {
  /**
   * 半圆的大小
   */
  size?: number;
  /**
   * 虚线的宽度
   */
  strikeWidth?: number;
}

const HalfCircle = (props: HalfCircleProps) => {
  const { size = 200, strikeWidth = 5 } = props;
  const radius = size / 2;
  const bottomStartX = size * 0.05 + strikeWidth;

  const bottomEndX = size - size * 0.05;

  const sqrt = Math.sqrt(
    Math.pow(radius, 2) - Math.pow(radius - bottomStartX, 2)
  );

  const height = radius + sqrt;

  return (
    <svg
      className={styles.svg}
      style={{
        width: size + strikeWidth,
        height: height + strikeWidth,
      }}
    >
      <path
        d={`M ${bottomStartX} ${
          radius + sqrt
        } A ${radius} ${radius} 0 1 1 ${bottomEndX} ${radius + sqrt}`}
        fill="transparent"
        stroke="#306cf7"
        strokeWidth={strikeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default HalfCircle;
