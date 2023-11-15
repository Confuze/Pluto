import { useFrame, useLoader } from "@react-three/fiber"
import { useMemo, useRef } from "react";
import { Mesh, TextureLoader } from "three";

function SceneContent() {
  const circleRef = useRef<Mesh>(null!);
  const responsiveSize = window.innerWidth / window.innerHeight / 4;
  useFrame((state, delta) => {
    circleRef.current.rotation.x -= delta * 0.1
    circleRef.current.rotation.y -= delta * 0.2

    console.log(window.innerHeight / window.innerWidth)

    if (window.scrollY <= window.innerHeight) {
      state.camera.position.x = 10 * responsiveSize * (window.scrollY / window.innerHeight)
      state.camera.position.z = 5 - 0.5 * (window.scrollY / window.innerHeight) * responsiveSize
    } else if (state.camera.position.x < 10 * responsiveSize) {
      state.camera.position.x = 10 * responsiveSize
      state.camera.position.z = 5 - 0.5 * responsiveSize
    }
  })
  
  const positionCount = 10000
  
  const positions = useMemo<Float32Array>(() => {
    const positions = [];
    for (let i=0;i<positionCount*3;i++) {
      const x = (Math.random() - 0.5) * 18;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;

      positions.push(x, y, z)
    }
    return new Float32Array(positions);
  }, [positionCount])

  const [colormap, normalmap] = useLoader(TextureLoader, ["map2.webp", "normalmap.webp"]);

  return (
    <>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={positionCount}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          size={0.01}
          color={0xffffff}
        />
      </points>
      <mesh position={[5.5 * responsiveSize,0,0]} ref={circleRef}>
        <sphereGeometry args={[5 * responsiveSize, 64, 32]} />
        <meshStandardMaterial depthTest={false} map={colormap} normalMap={normalmap}/>
      </mesh>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={0.3} position={[-200,-500,600]} />
    </>
  )
}

export default SceneContent
