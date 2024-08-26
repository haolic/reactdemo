import React, { useRef, useEffect, useState } from 'react';

const size = 300;
const lineWidth = 20;

const pathGen = size => {
  const realDiameter = size - lineWidth;
  const realRadius = realDiameter / 2;
  return `M ${size / 2},${size / 2} m 0,-${
    realDiameter / 2
  } a ${realRadius},${realRadius} 0 1 1 0,${realDiameter} a ${realRadius},${realRadius} 0 1 1 0,-${realDiameter}`;
};

const SvgPathCircle = () => {
  const domRef = useRef();
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    setPercent(0.4);
  }, []);

  const add = () => {
    const newP = percent + 0.1;
    if (newP >= 1) {
      setPercent(0);
    } else {
      setPercent(newP);
    }
  };
  const realDiameter = size - lineWidth;
  const perimeter = realDiameter * Math.PI;
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
          }}
          ref={domRef}
        >
          <svg
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#05a" />
              <stop offset="50%" stopColor="#a55" />
              <stop offset="100%" stopColor="#0a5" />
            </linearGradient>
            <path
              d={pathGen(size)}
              strokeLinecap="round"
              strokeWidth={lineWidth}
              fillOpacity="0"
              style={{
                strokeDasharray: `${perimeter}, ${perimeter}`,
                strokeDashoffset: '0px',
                stroke: '#f5f5f5',
              }}
            ></path>
            <path
              d={pathGen(size)}
              stroke=""
              strokeLinecap="round"
              strokeWidth={lineWidth}
              opacity="1"
              fillOpacity="0"
              style={{
                stroke: 'url(#linear)',
                strokeDasharray: `${perimeter * percent}, ${perimeter}`,
                strokeDashoffset: '0px',
                transition: 'all 0.5s cubic-bezier(0.28, 0.27, 0.13, 1.58) 0s',
              }}
            ></path>
          </svg>
          <span
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <span
              style={{
                fontSize: size / 9,
              }}
            >
              {(percent * 100).toFixed(2)}
            </span>
            <span style={{ marginLeft: 10 }}>%</span>
          </span>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: 15,
        }}
      >
        <button onClick={add}>点击加</button>
      </div>
    </div>
  );
};

SvgPathCircle.label = '圆环Path';

export default SvgPathCircle;
