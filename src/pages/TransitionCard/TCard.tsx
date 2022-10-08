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
}

const TCard = (props: TCardProps) => {
  const { position, name, status, unit, value } = props;

  const [isShow, setIsShow] = useState(false);
  const tId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    tId.current = setTimeout(() => {
      setIsShow(true);
    }, 1000);

    return () => {
      clearTimeout(tId.current as NodeJS.Timeout);
    };
  }, []);
  const defaultStyle = { top: position.y + 20, left: position.x };
  const showStyle = { top: position.y, left: position.x };

  return (
    <div
      style={isShow ? showStyle : defaultStyle}
      className={classnames('t-card-wrap', {
        show: isShow,
      })}
    >
      <div className="t-card-pointer">
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
