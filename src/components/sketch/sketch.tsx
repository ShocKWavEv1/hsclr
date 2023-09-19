import {
  getFragShader,
  MINT_SHADER,
  PARIS_DARK_SHADER,
  vertShader,
} from "@/constants/shaders";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Sketch = () => {
  const containerRef = useRef(null);
  const canvasRef: any = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const vertexShader = vertShader;
    const fragmentShader = getFragShader(PARIS_DARK_SHADER);

    // Set up Three.js scene here
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      48,
      windowSize.width / windowSize.height, // Use windowSize for aspect ratio
      1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    const canvasHeight = window.innerHeight * 1;
    renderer.setSize(windowSize.width, canvasHeight);

    // Create shader materials using the imported shaders
    const material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        time: { value: 0 },
        resolution: {
          value: new THREE.Vector2(windowSize.width, windowSize.height),
        },
      },
    });

    // Create mesh and add to the scene
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      -1, -1, 0, 1, -1, 0, 1, 1, 0,

      -1, -1, 0, 1, 1, 0, -1, 1, 0,
    ]);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Position camera
    camera.position.z = 1;

    // Animation and rendering code
    const animate = (time: any) => {
      // Update shader uniforms
      material.uniforms.time.value = time * 0.00045;

      // Render the scene
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };

    animate(1);

    // Update window size when it changes
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      // Update canvas size
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    // Check if window is defined before adding the event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Cleanup code when unmounting
      return () => {
        window.removeEventListener("resize", handleResize);
        // Cleanup code if necessary
      };
    }
  }, []); // No dependencies for initial setup

  return <canvas ref={canvasRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default Sketch;
