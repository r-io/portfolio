import { extend, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import * as meshline from 'threejs-meshline';
import { MeshLineRaycast } from 'threejs-meshline';

extend(meshline);

const randomPoint = (num) => {
  const min = -num;
  const max = num;
  return Math.random() * (max - min + 1) + min;
};

function Star({ curve, color, speed }) {
  const star = useRef();
  const [active, setActive] = useState(false);
  useFrame(() => {
    star.current.uniforms.dashOffset.value -= speed;
    if (active) {
      star.current.uniforms.dashRatio.value = 0;
    } else {
      star.current.uniforms.dashRatio.value = 0.99;
    }
  });
  return (
    <mesh
      raycast={MeshLineRaycast}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      onClick={() => {
        if (active) {
          const color = star.current.uniforms.color;
          star.current.uniforms.color.value = {
            r: color.value.b,
            g: color.value.r,
            b: color.value.g,
          };
        }
      }}
    >
      <meshLine attach="geometry" vertices={curve} />
      <meshLineMaterial
        ref={star}
        transparent
        depthTest={false}
        lineWidth={0.1}
        color={color}
        dashArray={0.2}
        dashRatio={0.99}
      />
    </mesh>
  );
}

export default function Stars({ count }) {
  const radius = 1.5;

  const lines = useMemo(
    () =>
      new Array(count).fill().map(() => {
        const pos = new THREE.Vector3(-100, 0, 0);
        const yDirection = randomPoint(10);
        const zDirection = randomPoint(2);
        const points = new Array(30).fill().map((_, index) => {
          const angle = (index / 20) * Math.PI * 2;
          return pos
            .add(
              new THREE.Vector3(
                index,
                yDirection * Math.cos(angle) * radius * Math.max(0.2, Math.random()),
                zDirection
              )
            )
            .clone();
        });
        return {
          color: [1, 1, Math.random() / 2 + 0.5],
          speed: Math.max(0.001, 0.004 * Math.random()) / 2,
          curve: points,
        };
      }),
    [count]
  );

  return (
    <group position={[0, 0, 0]} scale={[1, 1, 1]}>
      {lines.map((line, index) => (
        <Star key={index} {...line} />
      ))}
    </group>
  );
}
