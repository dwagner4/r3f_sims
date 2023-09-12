import './App.css';
import { Canvas } from "@react-three/fiber";
import { Experience } from "./exp/Experience";
import { HeadsUp } from "./components/headsup/HeadsUp.jsx"
import { Menu } from './components/menu/Menu.jsx'

import * as React from 'react';
import { appMachine } from './appMachine.js'
import { createActorContext } from '@xstate/react'

export const AppContext = createActorContext(appMachine)

console.log(AppContext)

function App() {
  
  return (
    <AppContext.Provider>
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </AppContext.Provider>
  );
}

export default App;
