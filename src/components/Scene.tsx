import { Canvas } from "@react-three/fiber"
import SceneContent from "./SceneContent";

function Scene() {
  return (
    <div className="h-[100vh] w-full bg-dark fixed top-0 left-0 z-[-1]">
      <Canvas>
        <SceneContent />
      </Canvas>
    </div>
  )
}

export default Scene;
