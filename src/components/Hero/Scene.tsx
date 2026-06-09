"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Tree from "../models/Tree";

function CameraAnimation() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    camera.position.set(0, 8, 18);

    gsap.to(camera.position, {
      x: 0,
      y: 4,
      z: 8,
      duration: 4,
      ease: "power2.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    gsap.ticker.add(() => {
      camera.position.x += (mouse.current.x * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (4 - mouse.current.y * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(0, 3, -22);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera]);

  return null;
}

export default function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 4, 8],
        fov: 45,
      }}
    >
      <color attach="background" args={["#bfd9f2"]} />
      <fog attach="fog" args={["#bfd9f2", 25, 80]} />
      <CameraAnimation />

      <ambientLight intensity={1.2} />

      <directionalLight
        position={[12, 18, 8]}
        intensity={2.8}
        color="#FFE3A1"
        castShadow
      />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#718F61" />
      </mesh>

      <mesh position={[0, 0.01, -8]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.5, 30]} />
        <meshStandardMaterial color="#B8A78D" />
      </mesh>

      <mesh position={[-3.8, 4.0, -22]} rotation={[0, 0, 0.03]} castShadow>
        <boxGeometry args={[1.4, 8, 1.4]} />
        <meshStandardMaterial color="#9D8B73" />
      </mesh>

      <mesh position={[3.0, 3.5, -22]} rotation={[0, 0, -0.05]} castShadow>
        <boxGeometry args={[1.3, 7, 1.3]} />
        <meshStandardMaterial color="#9D8B73" />
      </mesh>

      <mesh position={[0, 7.4, -22]} rotation={[0, 0, -0.12]} castShadow>
        <boxGeometry args={[10, 0.9, 1.3]} />
        <meshStandardMaterial color="#9D8B73" />
      </mesh>

      <mesh position={[-14, 6, -48]}>
        <coneGeometry args={[8, 12, 4]} />
        <meshStandardMaterial color="#556B5D" />
      </mesh>

      <mesh position={[0, 9, -55]}>
        <coneGeometry args={[10, 16, 4]} />
        <meshStandardMaterial color="#4E5F52" />
      </mesh>

      <mesh position={[16, 5, -46]}>
        <coneGeometry args={[7, 10, 4]} />
        <meshStandardMaterial color="#445247" />
      </mesh>

      <mesh position={[-12, 2, -14]}>
        <sphereGeometry args={[5, 16, 16]} />
        <meshStandardMaterial color="#627B58" />
      </mesh>

      <mesh position={[18, 3, -24]}>
        <sphereGeometry args={[5, 16, 16]} />
        <meshStandardMaterial color="#627B58" />
      </mesh>

      <mesh position={[-8, 2.5, -28]}>
        <sphereGeometry args={[6, 16, 16]} />
        <meshStandardMaterial color="#58704F" />
      </mesh>

      <mesh position={[12, 1.5, -20]}>
        <sphereGeometry args={[6, 16, 16]} />
        <meshStandardMaterial color="#58704F" />
      </mesh>

      <Tree position={[-6, 0, -10]} scale={0.8} />
      <Tree position={[6, 0, -12]} scale={0.8} />

      <Tree position={[-8, 0, -18]} scale={0.9} />
      <Tree position={[8, 0, -20]} scale={0.9} />

      <Tree position={[-10, 0, -28]} scale={1.0} />
      <Tree position={[10, 0, -30]} scale={1.0} />

      <Tree position={[-16, 0, -8]} scale={0.9} />
      <Tree position={[16, 0, -10]} scale={0.9} />

      <Tree position={[-18, 0, -16]} scale={1.0} />
      <Tree position={[18, 0, -18]} scale={1.0} />

      <Tree position={[-20, 0, -24]} scale={1.1} />
      <Tree position={[20, 0, -26]} scale={1.1} />

      <Tree position={[-22, 0, -34]} scale={1.2} />
      <Tree position={[22, 0, -36]} scale={1.2} />

      <Tree position={[-26, 0, -44]} scale={1.3} />
      <Tree position={[26, 0, -46]} scale={1.3} />

      <Tree position={[-30, 0, -54]} scale={1.4} />
      <Tree position={[30, 0, -56]} scale={1.4} />

      <Tree position={[-5, 0, -24]} scale={0.85} />
      <Tree position={[12, 0, -16]} scale={0.75} />

      <Tree position={[-15, 0, -32]} scale={1.05} rotation={[0, 0.6, 0]} />
      <Tree position={[14, 0, -28]} scale={0.95} rotation={[0, -0.4, 0]} />

      <Tree position={[-24, 0, -18]} scale={1.1} rotation={[0, 1.2, 0]} />
      <Tree position={[26, 0, -22]} scale={1.0} rotation={[0, 0.8, 0]} />

      <Tree position={[-28, 0, -38]} scale={1.25} rotation={[0, -0.9, 0]} />
      <Tree position={[18, 0, -42]} scale={1.15} rotation={[0, 0.5, 0]} />

      <Tree position={[-35, 0, -70]} scale={1.8} />
      <Tree position={[35, 0, -75]} scale={1.9} />

      <Tree position={[-45, 0, -90]} scale={2.2} />
      <Tree position={[45, 0, -95]} scale={2.3} />

      <Tree position={[-18, 0, 5]} scale={2.5} />
      <Tree position={[18, 0, 5]} scale={2.5} />
    </Canvas>
  );
}