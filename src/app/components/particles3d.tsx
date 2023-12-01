"use client";
import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from "maath/random";

interface IParticles3dRef {
  rotation: {
    x: number
    y: number
  }
}

export function Particles3d() {
  const [sphere] = useState(() => random.inSphere(new Float32Array(150), { radius: 1.5, center: [0, 0, 0] }))
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars sphere={sphere as Float32Array} />
    </Canvas>
  )
}

interface StarsProps {
  sphere: Float32Array
}

function Stars({ sphere }: StarsProps) {
  const ref = useRef<IParticles3dRef>()

  useFrame((_state, delta) => {
    if (ref.current !== null && ref.current?.rotation !== undefined) {
      ref.current.rotation.x -= delta / 80
      ref.current.rotation.y += delta / 80
    }
    return 0
  })

  return (
    // @ts-ignore
    <mesh ref={ref}>
      <group rotation={[0, 0, Math.PI / 1]}>
        <Points positions={sphere} stride={3} frustumCulled={true}>
          <PointMaterial transparent color="#a0c4ff" size={0.005} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    </mesh>
  )
}
