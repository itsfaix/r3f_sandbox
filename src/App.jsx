import { Canvas, useFrame, useThree } from "@react-three/fiber"
import Model from "./Components/Robot-transformed"
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { OrbitControls, ScrollControls, Scroll, Stage, useGLTF } from "@react-three/drei"
import { useState } from "react"

function App() {

  const [expression, setExpression] = useState("Smile")
  
  {/* TO-DO mmesh movemnt to cursor */}
  function Mouse() {
    const { mouse } = useThree();

    return useFrame(() => {
    console.log(mouse.x, mouse.y, mouse.z);
    });
  }

  return (
    <> 
      <div id="canvas-container">
        <Canvas >
          <Mouse />
          <OrbitControls enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
          <ambientLight intensity={0.1}/>
          <directionalLight  intensity={2} position={[2, 2, 5]}/>
          <pointLight  intensity={1} color={[10, 2, 5]} distance={2.5} />
          <EffectComposer disableNormalPass>
            <ToneMapping />
          </EffectComposer>     
          <ScrollControls pages={3} >  
            <Stage intensity={0.4}>
              <Model expression={expression}/>
            </Stage>
            <Scroll html>
              <div className="flex flex-col items-center justify-center pt-10">
                <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl z-10">No Tutorials, No courses</h1>
                <h2 className="absolute top-30 left-1/2 transform -translate-x-1/2 text-xl z-10">Justcode</h2>
              </div>
              <div className="h-screen w-screen flex items-end justify-center pb-10 pointer-events-auto">
                <div className="flex gap-4">
                  
                  <button
                    className="btn"
                    onMouseOver={() => setExpression("Angry")}
                    onMouseLeave={() => setExpression("Smile")}
                  >
                    Press me
                  </button>

                  <button className="btn top-[100vh] "
                    onMouseOver={() => setExpression("Starry")}
                    onMouseLeave={() => setExpression("Smile")}
                  >
                    Nooo Way
                  </button>

                  <button className="btn top-[200vh] "
                    onMouseOver={() => setExpression("Cry")}
                    onMouseLeave={() => setExpression("Smile")}
                  >
                    Cryy
                  </button>
                </div>
              </div>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>     
    </>
  )
}

export default App
