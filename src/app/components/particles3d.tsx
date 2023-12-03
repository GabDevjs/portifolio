"use client";
import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from "maath/random";
import { TypedArray } from 'three';

interface IParticles3dRef {
  rotation: {
    x: number
    y: number
  }
}

export function Particles3d() {
  const [sphere, setSphere] = useState<Float32Array | TypedArray>(() => new Float32Array(90) || 0)

  useEffect(() => {
    setSphere(() => random.inSphere(new Float32Array(90) || 0))
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 1], }} className='w-full h-full'>
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
      ref.current.rotation.x -= delta / 20
      ref.current.rotation.y += delta / 20
    }
  })

  if (typeof sphere !== "object") {
    return null
  }

  return (
    // @ts-ignore
    <mesh ref={ref}>
      <group rotation={[0, 0, Math.PI / 1]} position={0}>
        <Points positions={sphere || 0} stride={3} frustumCulled={true}>
          <PointMaterial transparent radius={2} color="#a0c4ff" size={0.005} />
        </Points>
      </group>
    </mesh>
  )
}
