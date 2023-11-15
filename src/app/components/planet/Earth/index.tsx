import { Sphere } from "@react-three/drei";
import { SRGBColorSpace, Vector3 } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useFrame, useLoader } from "@react-three/fiber";

import { earthFragmentShader, earthVertexShader } from "./shaders";
import { useEffect, useRef } from "react";
import { Atmosphere } from "../Atmosphere";

export const lightDirectionDELETE = new Vector3(1, 0, 0).applyAxisAngle(
  new Vector3(0, 0, 1),
  Math.PI * (13 / 180)
);

const verteces = Math.pow(2, 9);

export const Earth = () => {
  const [earthDayTexture, nightTexture, cloudTexture] = useLoader(
    TextureLoader,
    [
      "/experiment-earth-assets/8k_earth_daymap.jpg",
      "/experiment-earth-assets/8k_earth_nightmap.jpg",
      "/experiment-earth-assets/8k_earth_clouds.jpg",
    ]
  );

  earthDayTexture.colorSpace =
    nightTexture.colorSpace =
    cloudTexture.colorSpace =
    SRGBColorSpace;

  const initialRotation = new Vector3(1, 0, 0).applyAxisAngle(
    new Vector3(0, 0, 1),
    Math.PI * (13 / 180)
  );

  const uniformsRef = useRef({
    dayMap: { value: earthDayTexture },
    nightMap: { value: nightTexture },
    cloudMap: { value: cloudTexture },
    uTime: { value: 5 },
    lightDirection: { value: initialRotation.clone() },
  });

  useFrame((_, delta) => {
    uniformsRef.current.uTime.value += delta;
  });
  useEffect(() => {
    uniformsRef.current.lightDirection.value.copy(initialRotation);
  }, [initialRotation]);


  return (
    <Sphere args={[2.3, verteces, verteces]}  >
      <shaderMaterial
        vertexShader={earthVertexShader}
        fragmentShader={earthFragmentShader}
        uniforms={uniformsRef.current}
      />
      <Atmosphere lightDirection={initialRotation} />
    </Sphere>
  );
};
