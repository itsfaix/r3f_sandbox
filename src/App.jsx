import { Canvas } from "@react-three/fiber"
import Model from "./Components/Robot-transformed"
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { OrbitControls } from "@react-three/drei"
function App() {

  return (
    <>
        <div className="flex flex-col items-center justify-center pt-10">
          <h1 className="text-3xl pb-3">No Tutorials, No courses</h1>
          <h2>Justcode</h2>
        </div>

        <div id="canvas-container">
          <Canvas>
            <OrbitControls enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
            <ambientLight intensity={0.1}/>
            <directionalLight  intensity={2} position={[2, 2, 5]}/>
            <pointLight  intensity={1} color={[10, 2, 5]} distance={2.5} />
            <EffectComposer disableNormalPass>
              <ToneMapping />
            </EffectComposer>          
            <Model/>
          </Canvas>
        </div>

        <footer className="flex flex-col items-center justify-center pb-10">
          <button
            className="
              px-6 py-2
              rounded-md
              border border-white/60
              text-white
              bg-black/60
              hover:bg-black/80
              hover:border-white
              active:scale-95
              transition-all duration-200
              text-sm
            "
          >
            Press me
          </button>
        </footer>
     
    </>
  )
}

export default App
