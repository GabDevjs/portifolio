import { Sphere } from "@react-three/drei";
import { SRGBColorSpace, Vector3 } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

import { earthFragmentShader, earthVertexShader } from "./shaders";
import { Atmosphere } from "../Atmosphere";

export const Earth = () => {
  const [earthDayTexture, nightTexture, cloudTexture] = useLoader(
    TextureLoader,
    [
      "/experiment-earth-assets/8k_earth_daymap.min.webp",
      "/experiment-earth-assets/8k_earth_nightmap.min.webp",
      "/experiment-earth-assets/8k_earth_clouds.min.webp",
    ]
  );

  earthDayTexture.colorSpace = nightTexture.colorSpace = cloudTexture.colorSpace = SRGBColorSpace;

  const initialRotation = new Vector3(0, 1, 1)

  return (
    <Sphere args={[2.3, 61, 61]}  >
      <shaderMaterial
        vertexShader={earthVertexShader}
        fragmentShader={earthFragmentShader}
        uniforms={{
          dayMap: { value: earthDayTexture },
          nightMap: { value: nightTexture },
          cloudMap: { value: cloudTexture },
          lightDirection: { value: initialRotation.clone() },
        }}
      />
      <Atmosphere lightDirection={initialRotation} verteces={61} />
    </Sphere>
  );
};
