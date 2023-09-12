import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { AnimatedWoman } from '../models/AnimatedWoman.jsx'

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <ContactShadows blur={2} />
      <OrbitControls />
      <AnimatedWoman />
      <AnimatedWoman position-x={1} hairColor="red" />
    </>
  );
};