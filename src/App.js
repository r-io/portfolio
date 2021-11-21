import './App.css';

import { Button, Container, createTheme, ThemeProvider } from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import HeaderBar from './components/HeaderBar';
import Lights from './components/Lights';
import Stars from './components/Stars';
import TextAnimation from './components/TextAnimation';

function MouseMove() {
  useFrame((e) => {
    e.camera.position.set(e.mouse.x * 10, e.mouse.y * 10, 30);
  });
  return null;
}

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#173a5e',
    },
    secondary: {
      main: '#0288d1',
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <article className="top-content">
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
          <HeaderBar />
          <div className="content-container">
            <h1>Rio</h1>
            <TextAnimation />
            <Container maxWidth="sm">
              <p>
                I'm just your ordinary developer who loves to help people, learn new things and
                passionate in creating web and apps. Solving problem and connecting two dots
                together are my daily routine.
              </p>
            </Container>
            <Button variant="contained" color="secondary">
              Get started
            </Button>
          </div>
        </article>
      </div>
    </ThemeProvider>
  );
}
