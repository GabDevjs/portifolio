import { Earth } from "../Earth";
import { OrbitControls } from "@react-three/drei";

export const PrimaryScene = () => {
  return (
    <>
      <OrbitControls autoRotate enableZoom={false} enableDamping={false} autoRotateSpeed={0.5} />
      <Earth />
    </>
  );
};
