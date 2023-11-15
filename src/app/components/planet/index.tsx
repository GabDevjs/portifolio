import { Canvas } from '@react-three/fiber';
import { Effects } from './effects';
import { Suspense, useMemo, useState } from 'react';
import { PrimaryScene } from './PrimaryScene';

const PlanetBody = () => (
  <div className='w-screen h-[60vh] md:h-screen absolute inset-x-0 top-[14%]  z-10'>
    <Canvas frameloop="demand" camera={{ fov: 40, position: [0, 0, 7], }} >
      <Suspense fallback={<></>} >
        <Effects />
      </Suspense>
      <Suspense fallback={<></>} >
        <PrimaryScene />
      </Suspense>
    </Canvas>
  </div>
);


export function Planet() {
  const [showComponente, setShowComponents] = useState(false)
  useMemo(() => {
    setTimeout(() => {
      setShowComponents(true)
    }, 1000)
  }, [])

  return showComponente ? <PlanetBody /> : <></>
}
