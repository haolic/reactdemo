import { useEffect, useRef } from 'react';
import WebGL from 'three/addons/capabilities/WebGL.js';
import * as THREE from 'three';

const HelloWorld = () => {
  const ref = useRef<HTMLDivElement>();

  const init = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      ref.current.clientWidth / ref.current.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(ref.current.clientWidth, ref.current.clientHeight);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    if (WebGL.isWebGLAvailable()) {
      ref.current.appendChild(renderer.domElement);
      animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      ref.current.appendChild(warning);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <div ref={ref} style={{ width: '100%', height: '100%' }} />;
};

export default HelloWorld;
