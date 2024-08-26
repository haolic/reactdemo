import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Line = () => {
  const ref = useRef<HTMLDivElement>();

  const init = () => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      ref.current.clientWidth / ref.current.clientHeight,
      1,
      500
    );

    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);

    ref.current.appendChild(renderer.domElement);

    const material = new THREE.LineBasicMaterial({ color: 0x00ffff });
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);
    scene.add(line);
    renderer.render(scene, camera);
  };

  useEffect(() => {
    init();
  }, []);
  return <div ref={ref} style={{ height: '100%', width: '100%' }}></div>;
};

export default Line;
