"use client"
import { useEffect, useState } from 'react';
import ReactGlobe, { Globe, Marker, Optional } from 'react-globe';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const MyGlobe = () => {
  const markers: Marker[] = [
    {
      id: 'marker1',
      city: 'Singapore',
      color: 'red',
      coordinates: [1.3521, 103.8198],
      value: 50,
    }
  ];

  // simple and extensive options to configure globe
  const options: Optional<any> = {
    ambientLightColor: 'red',
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    pointLightColor: 'gold',
    scale: 0.9,
    pointLightIntensity: 1.5,
    globeGlowColor: 'blue',
    markerTooltipRenderer: (marker: { city: any; value: any; }) => `${marker.city} (${marker.value})`,
  };

  const [globe, setGlobe] = useState<Globe>();
  console.log(globe);

  return (
    <ReactGlobe


    />
  )
}

export function Planet() {
  const [showComponente, setShowComponents] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 1280) {
      setTimeout(() => {
        setShowComponents(true)
      }, 1000)
    }
  }, [])

  return showComponente && (
    <MyGlobe />
  )
}
