import './FirstContent.css';

import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, Container, Typography } from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import ScrollAnimation from 'react-animate-on-scroll';
import * as THREE from 'three';

import HeaderBar from './HeaderBar';
import Lights from './Lights';
import Stars from './Stars';
import TextAnimation from './TextAnimation';

function MouseMove() {
  useFrame((e) => {
    e.camera.position.set(e.mouse.x * 10, e.mouse.y * 10, 30);
  });
  return null;
}

export default function FirstContent() {
  const handleScroll = () => {
    document.getElementById('portfolio').scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start',
    });
  };

  return (
    <article id="top" className="first-content">
      <Canvas
        className="canvas"
        dpr={[1, 2]}
        camera={{ fov: 100, position: [0, 0, 30] }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color('#000004'))}
        onWheel={() => console.log('click')}
      >
        <MouseMove />
        <Stars count={50} />
        <Lights />
      </Canvas>
      <HeaderBar />
      <ScrollAnimation className="content-container" animateIn="fadeIn">
        <img className="image-logo" src="/logo.png" />
        <Typography variant="h2">Rio</Typography>
        <TextAnimation />
        <Container maxWidth="sm">
          <Typography variant="p">
            I'm just your ordinary developer who loves to help people, learn new things and
            passionate in creating web and apps. Solving problem and connecting two dots together
            are my daily routine.
          </Typography>
        </Container>
        <Button onClick={handleScroll} variant="contained" color="secondary">
          <KeyboardArrowDown />
          Explore
        </Button>
      </ScrollAnimation>
    </article>
  );
}
