"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = () => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.004}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const StarCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-0 pointer-events-none">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <StarBackground />
    </Canvas>
  </div>
);

export default StarCanvas;
