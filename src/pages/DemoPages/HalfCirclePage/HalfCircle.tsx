import styles from './HalfCircle.module.less';

interface HalfCircleProps {
  /**
   * 半圆的大小
   */
  size?: number;
  /**
   * 虚线的宽度
   */
  strokeWidth?: number;
  /**
   * 当前等级
   */
  currentLevel?: number;
}

const HalfCircle = (props: HalfCircleProps) => {
  const { size = 200, strokeWidth = 10, currentLevel = 0 } = props;
  const radius = size / 2; // 大圆的半径
  const lineRadius = radius * 0.8; // 虚线的半径(每段虚线不是沿着大圆周长的，半径比大圆小)
  const prevDegress = 25; // 水平向下转25度
  const dashDegress = strokeWidth / 1.2; // 每一段的角度
  const allDegress = 180 + prevDegress * 2; // 总共的角度
  // 分为5段，每一段的角度
  const perDegress = (allDegress - dashDegress * 4) / 5;

  // 圆心到底部的距离
  const bottomHeight = radius * Math.sin(prevDegress * (Math.PI / 180));
  // 图形总高度
  const height = radius + bottomHeight;

  const firstStartX = radius - radius * Math.cos(prevDegress * (Math.PI / 180));
  const firstStartY = radius + radius * Math.sin(prevDegress * (Math.PI / 180));

  // 第一段结束角度
  const firstEndDegress = -prevDegress + perDegress;
  // 第一段结束点
  const firstEndX =
    radius - radius * Math.cos(firstEndDegress * (Math.PI / 180));
  const firstEndY =
    radius - radius * Math.sin(firstEndDegress * (Math.PI / 180));
  // 第二段起始角度
  const secondStartDegress = firstEndDegress + dashDegress;
  // 第二段起始点
  const secondStartX =
    radius - radius * Math.cos(secondStartDegress * (Math.PI / 180));
  const secondStartY =
    radius - radius * Math.sin(secondStartDegress * (Math.PI / 180));
  // 第二段结束角度
  const secondEndDegress = secondStartDegress + perDegress;
  // 第二段结束点
  const secondEndX =
    radius - radius * Math.cos(secondEndDegress * (Math.PI / 180));
  const secondEndY =
    radius - radius * Math.sin(secondEndDegress * (Math.PI / 180));
  // 第三段起始角度
  const thirdStartDegress = secondEndDegress + dashDegress;
  // 第三段起始点
  const thirdStartX =
    radius - radius * Math.cos(thirdStartDegress * (Math.PI / 180));
  const thirdStartY =
    radius - radius * Math.sin(thirdStartDegress * (Math.PI / 180));
  // 第三段结束角度
  const thirdEndDegress = thirdStartDegress + perDegress;
  // 第三段结束点
  const thirdEndX =
    radius - radius * Math.cos(thirdEndDegress * (Math.PI / 180));
  const thirdEndY =
    radius - radius * Math.sin(thirdEndDegress * (Math.PI / 180));

  // 第四段起始角度
  const fourthStartDegress = thirdEndDegress + dashDegress;
  // 第四段起始点
  const fourthStartX =
    radius - radius * Math.cos(fourthStartDegress * (Math.PI / 180));
  const fourthStartY =
    radius - radius * Math.sin(fourthStartDegress * (Math.PI / 180));
  // 第四段结束角度
  const fourthEndDegress = fourthStartDegress + perDegress;
  // 第四段结束点
  const fourthEndX =
    radius - radius * Math.cos(fourthEndDegress * (Math.PI / 180));
  const fourthEndY =
    radius - radius * Math.sin(fourthEndDegress * (Math.PI / 180));
  // 第五段起始角度
  const fifthStartDegress = fourthEndDegress + dashDegress;
  // 第五段起始点
  const fifthStartX =
    radius - radius * Math.cos(fifthStartDegress * (Math.PI / 180));
  const fifthStartY =
    radius - radius * Math.sin(fifthStartDegress * (Math.PI / 180));
  // 第五段结束角度
  const fifthEndDegress = fifthStartDegress + perDegress;
  // 第五段结束点
  const fifthEndX =
    radius - radius * Math.cos(fifthEndDegress * (Math.PI / 180));
  const fifthEndY =
    radius - radius * Math.sin(fifthEndDegress * (Math.PI / 180));

  const allLines = [
    {
      text: 'bad',
    },
    {
      start: [firstStartX, firstStartY],
      end: [firstEndX, firstEndY],
      text: 'normal',
    },
    {
      start: [secondStartX, secondStartY],
      end: [secondEndX, secondEndY],
      text: 'good',
    },
    {
      start: [thirdStartX, thirdStartY],
      end: [thirdEndX, thirdEndY],
      text: 'better',
    },
    {
      start: [fourthStartX, fourthStartY],
      end: [fourthEndX, fourthEndY],
      text: 'great',
    },
    {
      start: [fifthStartX, fifthStartY],
      end: [fifthEndX, fifthEndY],
      text: 'excellent',
    },
  ];

  let level = currentLevel;

  if (currentLevel < 0) {
    level = 0;
  }
  if (currentLevel > 5) {
    level = 5;
  }

  return (
    <svg
      className={styles.svg}
      style={{
        width: size,
        height: height,
        padding: strokeWidth / 1.5, // 防止虚线被裁切掉边
      }}
    >
      <text
        x={radius}
        y={radius}
        fontSize={42}
        fill={level >= 2 ? '#306cf7' : '#e6f4ff'}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {allLines[level || 0]?.text}
      </text>
      {allLines.map((line, index) => {
        if (!line.start) {
          return null;
        }
        return (
          <path
            key={line.text}
            d={`M ${line.start[0]} ${line.start[1]} A ${lineRadius} ${lineRadius} 0 0 1 ${line.end[0]} ${line.end[1]}`}
            fill="transparent"
            stroke={level >= index ? '#306cf7' : '#c7d7fa'}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

export default HalfCircle;
