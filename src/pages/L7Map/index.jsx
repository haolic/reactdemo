import React, { useEffect, useRef } from 'react';
import { L7Plot } from '@antv/l7plot';
import styles from './index.module.less';

import world from './worldData';

const L7Map = () => {
  const domRef = useRef();
  useEffect(() => {
    window.plot = new L7Plot(domRef.current, {
      map: {
        type: 'amap',
        style: 'blank',
        center: [104.195397, 35.86166],
        zoom: 3.5,
        minZoom: 3.5,
        maxZoom: 3.5,
        pitch: 0,
        dragEnable: false,
      },
    });
    window.plot.addLayer({
      name: 'area',
      type: 'areaLayer',
      source: {
        data: world,
      },
      color: {
        field: 'code',
        value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
      },
      style: {
        opacity: 0.3,
        lineOpacity: 0.1,
        lineWidth: 0.5,
        stroke: '#22a2c9',
      },
    });
    window.plot.addLayer({
      name: 'flyLine',
      type: 'arcLayer',
      source: {
        data: [
          {
            coord: [
              [90, 30],
              [104.195397, 35.86166],
            ],
          },
        ],
        parser: {
          type: 'json',
          coordinates: 'coord',
        },
      },
      shape: 'arc',
      color: '#f90',
      size: 1,
      style: {
        opacity: 1,
        sourceColor: '#f90',
        targetColor: '#f90',
      },
      state: { active: true },
      animate: {
        enable: false,
        interval: 2,
        trailLength: 2,
        duration: 1,
      },
    });
  }, []);
  return <div ref={domRef} className={styles.container}></div>;
};

L7Map.label = 'L7地图';

export default L7Map;
