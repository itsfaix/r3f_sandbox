import { Canvas } from "@react-three/fiber"
import Model from "./Components/Robot-transformed"
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { OrbitControls, ScrollControls, Scroll, Stage } from "@react-three/drei"

import { useState } from "react"
function App() {

  const [expression, setExpression] = useState("Smile")

  return (
    <>  
      

      <div id="canvas-container">
        <Canvas >
          <OrbitControls enableZoom={false} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}/>
          <ambientLight intensity={0.1}/>
          <directionalLight  intensity={2} position={[2, 2, 5]}/>
          <pointLight  intensity={1} color={[10, 2, 5]} distance={2.5} />
          <EffectComposer disableNormalPass>
            <ToneMapping />
          </EffectComposer>     
          <ScrollControls pages={3}> 
            <Scroll html>
              <div className="flex flex-col items-center justify-center pt-10">
                <h1 className="text-3xl pb-3">No Tutorials, No courses</h1>
                <h2>Justcode</h2>
              </div>
            </Scroll>
            <Stage intensity={0.4}>
              <Model expression={expression}/>
            </Stage>
            <Scroll html>
              <footer className="flex flex-col items-center justify-center pb-10">
              <button
                className="btn"
                onMouseOver={() => {
                  setExpression("Angry")

                }}

                onMouseLeave={() => {
                  setExpression("Smile")

                }}
              >
                Press me
              </button>

              <button className="btn">
                Press me too
              </button>
            </footer>
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>

      
            
    </>
  )
}

export default App
