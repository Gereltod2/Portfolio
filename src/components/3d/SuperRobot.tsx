// src/components/3d/SuperRobot.tsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

interface Props {
  position?: [number, number, number];
  scale?: number;
}

export function SuperRobot({ position = [0, 0, 0], scale = 1 }: Props) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/Super_Robot.glb'); // public/models дотор байгаа гэж үзэв

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/Super_Robot.glb');
