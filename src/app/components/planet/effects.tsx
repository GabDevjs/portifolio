import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

export function Effects() {
  return (
    <>
      <EffectComposer multisampling={10}>
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <Bloom mipmapBlur luminanceThreshold={0.79} levels={6} intensity={10} />
      </EffectComposer>
    </>
  );
}
