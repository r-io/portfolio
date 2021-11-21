/* eslint-disable @typescript-eslint/no-explicit-any */
import { MeshLine } from 'meshline';

export class meshLine extends THREE.BufferGeometry {
  constructor();
  geometry: MeshLine;
  points: Float32Array | Array<number>;
  isMeshLine: boolean;

  setPoints(points: Float32Array | Array<number>, wcb?: (p: number) => any): void;
  setMatrixWorld(matrixWorld: THREE.Matrix4): void;
  setGeometry(g: THREE.BufferGeometry, c: (p: number) => any): void;
  raycast: (raycaster: THREE.Raycaster, intersects: THREE.Intersection[]) => void;
  compareV3(a: number, b: number): number;
  copyV3(a: number): [number, number, number];
}
