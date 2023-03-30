import React, { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Adam = ({ isMobile }) => {
  const adam = useGLTF('./adamHead/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />

      <primitive 
      object={adam.scene}
      scale={isMobile ? 4 : 4.7}
      position={isMobile ? [1, -2, 1] : [0, -10.25, -.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
    
  )
}

const AdamCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(max-width: 500px)');

      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change',
      handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change',
        handleMediaQueryChange);
      }
    }, [])


  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fav: 25 }}
    gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Adam isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default AdamCanvas;
