import { BackSide, Vector3 } from "three";
import { atmosphereFragmentShader, atmosphereVertexShader } from "./shaders";

interface AtmosphereProps {
  lightDirection: Vector3;
  verteces: number;
}

export const Atmosphere = ({ lightDirection, verteces }: AtmosphereProps) => {
  return (
    <mesh>
      <sphereGeometry args={[0, verteces, verteces]} />
      <shaderMaterial
        side={BackSide}
        vertexShader={atmosphereVertexShader}
        fragmentShader={atmosphereFragmentShader}
        transparent
        uniforms={{
          lightDirection: { value: lightDirection.clone() },
        }}
      />
    </mesh>
  );
};
