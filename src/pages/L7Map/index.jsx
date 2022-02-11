import React, { useEffect, useRef } from 'react';
import { Area, L7Plot } from '@antv/l7plot';
import styles from './index.less';

const L7Map = () => {
  const domRef = useRef();
  useEffect(() => {
    Promise.all([
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/707cd4be-8ffe-4778-b863-3335eefd5fd5.json',
      ).then((data) => data.json()),
      fetch(
        'https://gw.alipayobjects.com/os/antfincdn/iP4LUS9o0t/flyline.json',
      ).then((data) => data.json()),
    ]).then(([world, flydata]) => {
      window.plot = new L7Plot(domRef.current, {
        map: {
          type: 'amap',
          style: 'blank',
          center: [120.19382669582967, 30.258134],
          zoom: 4,
          minZoom: 4,
          maxZoom: 4,
          pitch: 0,
          // dragEnable: false,
        },
      });
      // plot.addLayer({
      //   name: 'path',
      //   type: 'pathLayer',
      //   source: {
      //     data: world,
      //   },
      //   color: '#9f00ff',
      //   style: {
      //     opacity: 1,
      //   },
      // });
      plot.addLayer({
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
      plot.addLayer({
        name: 'flyLine',
        type: 'arcLayer',
        source: {
          data: [
            {
              coord: [
                [104.195397, 35.86166],
                [90, 30],
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
    });
  }, []);
  return <div ref={domRef} className={styles.container}></div>;
};

L7Map.label = 'L7地图';

export default L7Map;
