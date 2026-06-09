"use client";

import { useGLTF } from "@react-three/drei";

type TreeProps = {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
};

export default function Tree({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}: TreeProps) {
  const { scene } = useGLTF("/models/trees/Pine.glb");

  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}

useGLTF.preload("/models/trees/Pine.glb");