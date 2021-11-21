import './App.css';

import { Avatar, Button } from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import Lights from './components/Lights';
import Stars from './components/Stars';

function MouseMove() {
  useFrame((e) => {
    e.camera.position.set(e.mouse.x * 10, e.mouse.y * 10, 30);
  });
  return null;
}

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <Canvas
          className="canvas"
          dpr={[1, 2]}
          camera={{ fov: 100, position: [0, 0, 30] }}
          onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#000004'))}
          onWheel={() => console.log('click')}
        >
          <MouseMove />
          <Stars count={80} />
          <Lights />
        </Canvas>
        <div className="content-container">
          <Avatar alt="Remy Sharp" src="/public/photo.jpg" />
          <h1>Rio</h1>
          <h3>Web & App Developer</h3>
          <Button variant="contained">Get started</Button>;
        </div>
      </header>
    </div>
  );
}
