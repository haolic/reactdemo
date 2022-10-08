import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import './TCard.less';

interface TCardProps {
  position: {
    x: number;
    y: number;
  };
  value?: React.ReactNode;
  name?: React.ReactNode;
  unit?: React.ReactNode;
  status?: React.ReactNode;
  align?: 'left' | 'right' | string;
  delayRatio?: number;
}

const TCard = (props: TCardProps) => {
  const { position, name, status, unit, value, align, delayRatio } = props;

  const [isShow, setIsShow] = useState(false);
  const tId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    tId.current = setTimeout(() => {
      setIsShow(true);
    }, 1000 * (delayRatio || 0));

    return () => {
      clearTimeout(tId.current as NodeJS.Timeout);
    };
  }, [delayRatio]);

  let leftPos = position.x;
  if (align === 'left') {
    leftPos = position.x - 176;
  }

  const defaultStyle = { top: position.y + 20, left: leftPos };
  const showStyle = { top: position.y, left: leftPos };

  return (
    <div
      style={isShow ? showStyle : defaultStyle}
      className={classnames('t-card-wrap', {
        show: isShow,
      })}
    >
      <div
        className={classnames('t-card-pointer', {
          'pointer-card-align-left': align === 'left',
        })}
      >
        <div className="pointer-cycle"></div>
        <div className="pointer-line"></div>
      </div>
      <div>
        <span className="t-card-title">{name}</span>
        <span className="t-card-status">{status}</span>
      </div>
      <div>
        <span className="t-card-value">{value}</span>
        <span className="t-card-unit">/{unit}</span>
      </div>
    </div>
  );
};

export default TCard;
