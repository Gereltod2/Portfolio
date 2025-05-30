import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

interface SuperRobotProps {
  position?: [number, number, number];
  scale?: number;
}

export function SuperRobot({ position = [0, 0, 0], scale = 1 }: SuperRobotProps) {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/models/Super_Robot.glb'); // Хэрвээ нэрэнд зай байвал "Super_Robot.glb" болгож өөрчил

  useFrame((state) => {
    if (!modelRef.current) return;
    modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <group ref={modelRef} position={position} scale={scale}>
      <primitive object={scene} />
    </group>
  );
}
