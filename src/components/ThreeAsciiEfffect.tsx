import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect";

const ThreeAsciiEffect: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0, 0, 0);

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.set(0, 150, 500);

    // Set up lights
    const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight2.position.set(-500, -500, -500);
    scene.add(pointLight2);

    // Set up sphere
    const sphereGeometry = new THREE.SphereGeometry(200, 20, 10);
    const sphereMaterial = new THREE.MeshPhongMaterial({ flatShading: true });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Set up plane
    const planeGeometry = new THREE.PlaneGeometry(400, 400);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xe0e0e0 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.y = -200;
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Set up renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Set up ASCII effect
    const effect = new AsciiEffect(renderer, " .:-+*=%@#", { invert: true });
    effect.setSize(window.innerWidth, window.innerHeight);
    effect.domElement.style.color = "red";
    effect.domElement.style.backgroundColor = "black";

    if (mountRef.current) {
      mountRef.current.appendChild(effect.domElement);
    }

    // Set up controls
    const controls = new TrackballControls(camera, effect.domElement);

    // Handle window resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      effect.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onWindowResize);

    // Animation loop
    const animate = () => {
      const timer = Date.now();

      sphere.position.y = Math.abs(Math.sin(timer * 0.002)) * 150;
      sphere.rotation.x = timer * 0.0003;
      sphere.rotation.z = timer * 0.0002;

      controls.update();
      effect.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(effect.domElement);
      }
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeAsciiEffect;
