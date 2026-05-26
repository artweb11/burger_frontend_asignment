import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  //   useHelper,
} from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

function BurgerModel(props: any) {
  const refs = useRef<THREE.Mesh[]>([]);
  const burgerRef = useRef(null);

  // Load separate GLB files
  const bunTop = useGLTF("/models/bun_up.gltf");
  // const seeds = useGLTF("/models/seeds.gltf");
  const bunBottom = useGLTF("/models/bun_down.gltf");
  const salad = useGLTF("/models/salad.gltf");
  const patty = useGLTF("/models/patty.gltf");
  const cheese = useGLTF("/models/cheese.gltf");
  const tomatoes = useGLTF("/models/tomatoes.gltf");

  useEffect(() => {
    if (!refs.current || refs.current.length !== 6) {
      return;
    }
    refs.current.forEach((obj, i) => {
      if (!obj) return;

      //   if (i === 5) {
      //     window.obj = obj.children[0];
      //   }
      obj.position.y = 20;

      gsap.to(obj.position, {
        y: 0,
        duration: 1.7,
        delay: 0.4 + i * 0.25,
        ease: "power3.Out",
      });
    });
  }, [refs]);

  useFrame((_, delta) => {
    if (burgerRef.current)
      (burgerRef.current as THREE.Object3D).rotation.y += delta * 0.06;
  });

  return (
    <group {...props} dispose={null} ref={burgerRef}>
      {/* Bottom Bun */}
      <primitive
        object={bunBottom.scene}
        position={[0, 20, 0]}
        ref={(el) => (refs.current[0] = el)}
      />
      {/* Salad */}
      <primitive
        object={salad.scene}
        position={[0, 20, 0]}
        ref={(el) => (refs.current[1] = el)}
      />
      {/* Patty */}
      <primitive
        object={patty.scene}
        position={[0, 0, 0]}
        ref={(el) => (refs.current[2] = el)}
      />
      {/* Cheese */}
      <primitive
        object={cheese.scene}
        position={[0, 20, 0]}
        scale={[0.94, 1, 0.94]}
        ref={(el) => (refs.current[3] = el)}
      />
      {/* Tomatoes */}
      <primitive
        object={tomatoes.scene}
        position={[0, 20, 0]}
        ref={(el) => (refs.current[4] = el)}
      />
      {/* Top Bun */}
      <primitive
        object={bunTop.scene}
        position={[0, 20, 0]}
        ref={(el) => (refs.current[5] = el)}
      />
    </group>
  );
}

const Lights = () => {
  const lightRef = useRef<THREE.SpotLight>(null!);
  // useHelper(lightRef, THREE.SpotLightHelper, 'red')

  return (
    <spotLight
      position={[0, 4, 22]}
      intensity={22}
      angle={Math.PI * 0.1}
      penumbra={1.2}
      decay={1.4}
      ref={lightRef}
    />
  );
};

const BurgerScene = () => {
  return (
    <Canvas camera={{ position: [0, 20, 86], fov: 60 }}>
      <color attach="background" args={["#000000"]} />
      {/* <ambientLight intensity={0.1} /> */}
      {/* <directionalLight position={[0, 0, 20]} intensity={1.404} /> */}

      <Environment preset="night" environmentIntensity={0.1} />
      <Lights />
      <BurgerModel
        scale={[1.8, 1.4, 1.8]}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
      />

      {/* Camera Controls */}
      <OrbitControls enablePan={true} minDistance={3} maxDistance={8} />
      {/* 🎯 DOF postprocessing */}
      <EffectComposer>
        <DepthOfField
          focusDistance={4.2} // where focus starts
          focalLength={2.5} // strength of blur
          bokehScale={8} // blur intensity
          height={480}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default BurgerScene;
