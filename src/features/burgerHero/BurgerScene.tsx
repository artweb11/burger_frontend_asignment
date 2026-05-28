import { useEffect, useRef, type JSX } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Environment,
  //   useHelper,
} from "@react-three/drei";
// import * as THREE from "three";
import gsap from "gsap";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import type { Mesh, Object3D, SpotLight } from "three";

type BurgerModelProps = {
  controlsRef: React.RefObject<any>;
} & JSX.IntrinsicElements["group"];

function BurgerModel(props: BurgerModelProps) {
  const refs = useRef<Mesh[]>([]);
  const burgerRef = useRef(null);

  const { camera } = useThree();

  // Load separate GLB files
  const bunTop = useGLTF("/models/bun_up.gltf");
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
      if (i < 3) return;

      //   if (i === 5) {
      //     window.obj = obj.children[0];
      //   }
      obj.position.y = 20;

      gsap.to(obj.position, {
        y: 0,
        duration: 1.7,
        delay: 1 + i * 0.25,
        ease: "power3.Out",
      });
    });

    const controls = props.controlsRef.current;

    // const target = { x: 0, y: 190, z: 0 }; // start from above

    // set initial state
    camera.position.set(0, 190, 0);
    controls.target.set(0, 0, 0);
    controls.update();

    gsap.to(camera.position, {
      x: 0,
      y: 20,
      z: 86,
      duration: 4.5,
      ease: "power1.in",
      delay: 0.5,
      onUpdate: () => {
        controls.update();
      },
    });
  }, [refs]);

  useFrame((_, delta) => {
    if (burgerRef.current)
      (burgerRef.current as Object3D).rotation.y += delta * 0.06;
  });

  return (
    <group {...props} dispose={null} ref={burgerRef}>
      {/* Bottom Bun */}
      <primitive
        object={bunBottom.scene}
        position={[0, 0, 0]}
        ref={(el: Mesh) => (refs.current[0] = el)}
      />
      {/* Salad */}
      <primitive
        object={salad.scene}
        position={[0, 0, 0]}
        ref={(el: Mesh) => (refs.current[1] = el)}
      />
      {/* Patty */}
      <primitive
        object={patty.scene}
        position={[0, 0, 0]}
        ref={(el: Mesh) => (refs.current[2] = el)}
      />
      {/* Cheese */}
      <primitive
        object={cheese.scene}
        position={[0, 40, 0]}
        scale={[0.94, 1, 0.94]}
        ref={(el: Mesh) => (refs.current[3] = el)}
      />
      {/* Tomatoes */}
      <primitive
        object={tomatoes.scene}
        position={[0, 40, 0]}
        ref={(el: Mesh) => (refs.current[4] = el)}
      />
      {/* Top Bun */}
      <primitive
        object={bunTop.scene}
        position={[0, 40, 0]}
        ref={(el: Mesh) => (refs.current[5] = el)}
      />
    </group>
  );
}

const Lights = () => {
  const lightRef = useRef<SpotLight>(null!);
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
  const controlsRef = useRef(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 768;

  return (
    <Canvas camera={{ position: [0, 190, 0], fov: 60 }}>
      <color attach="background" args={["#000000"]} />
      {/* <ambientLight intensity={0.1} /> */}
      {/* <directionalLight position={[0, 0, 20]} intensity={1.404} /> */}

      <Environment preset="night" environmentIntensity={0.1} />
      <Lights />
      <BurgerModel
        scale={isMobile ? [1.2, 1, 1.2] : [1.8, 1.4, 1.8]}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
        controlsRef={controlsRef}
      />

      {/* Camera Controls */}
      <OrbitControls
        enablePan={true}
        minDistance={3}
        maxDistance={8}
        ref={controlsRef}
      />
      {/* DOF postprocessing */}
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
