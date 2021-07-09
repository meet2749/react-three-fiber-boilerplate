import './App.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Box from './models/box/Box';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[0, 0, 10]} />
          <Box />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
