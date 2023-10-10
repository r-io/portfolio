import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const randomPoint = (num) => {
  const min = -num;
  const max = num;
  return Math.random() * (max - min + 1) + min;
};

function Triangle({ position, rotation }) {
  const triangle = useRef();
  const mat = useRef();
  let statusColor = 1;
  useFrame((state, delta) => {
    triangle.current.position.y += delta * 5;
    if (triangle.current.position.y > 80) {
      triangle.current.position.y = -80;
    }
    triangle.current.rotation.x += delta;
    triangle.current.rotation.y += delta;

    if (statusColor === 1) {
      mat.current.color.g += delta * 0.1;
      if (mat.current.color.g > 1) {
        mat.current.color.g = 1;
        statusColor = 2;
      }
    }
    if (statusColor === 2) {
      mat.current.color.r -= delta * 0.1;
      if (mat.current.color.r < 0) {
        mat.current.color.r = 0;
        statusColor = 3;
      }
    }
    if (statusColor === 3) {
      mat.current.color.b += delta * 0.1;
      if (mat.current.color.b > 1) {
        mat.current.color.b = 1;
        statusColor = 4;
      }
    }
    if (statusColor === 4) {
      mat.current.color.g -= delta * 0.1;
      if (mat.current.color.g < 0) {
        mat.current.color.g = 0;
        statusColor = 5;
      }
    }
    if (statusColor === 5) {
      mat.current.color.r += delta * 0.1;
      if (mat.current.color.r > 1) {
        mat.current.color.r = 1;
        statusColor = 6;
      }
    }
    if (statusColor === 6) {
      mat.current.color.b -= delta * 0.1;
      if (mat.current.color.b < 0) {
        mat.current.color.b = 0;
        statusColor = 1;
      }
    }
  });

  return (
    <mesh ref={triangle} position={position} rotation={rotation}>
      <tetrahedronGeometry args={[2, 0]} />
      <meshStandardMaterial ref={mat} color="red" wireframe={true} wireframeLinewidth={1} />
    </mesh>
  );
}

export default function Triangles({ count }) {
  const props = useMemo(
    () =>
      new Array(count).fill().map(() => {
        const position = new THREE.Vector3(randomPoint(80), randomPoint(80), -randomPoint(30) - 30);
        const rotation = new THREE.Euler(randomPoint(90), randomPoint(90), randomPoint(90));
        return {
          position,
          rotation,
        };
      }),
    [count]
  );

  return (
    <group position={[0, 0, 0]} scale={[1, 1, 1]}>
      {props.map((prop, index) => (
        <Triangle key={index} {...prop} />
      ))}
    </group>
  );
}
