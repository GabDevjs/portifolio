"use client"
import { Canvas } from '@react-three/fiber';
import { Effects } from './effects';
import { Suspense } from 'react';
import { PrimaryScene } from './PrimaryScene';
import { Html } from "@react-three/drei";

function Loading() {
  return (
    <Html
      fullscreen
      style={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    </Html>
  );
}

export function Planet() {
  return (
    <div className='w-screen h-[60vh] md:h-screen absolute inset-x-0 top-[14%] animate-fade-in z-10'>
      <Canvas frameloop="demand" camera={{ fov: 40, position: [0, 0, 7], }}>
        <Effects />
        <Suspense fallback={<Loading />}>
          <PrimaryScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
