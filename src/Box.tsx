import { MeshProps } from '@react-three/fiber';
import React from 'react';

type Props = MeshProps;

interface State {
  active: boolean;
  hovered: boolean;
}

class Box extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      active: false,
      hovered: false,
    };
  }

  // // This reference will give us direct access to the mesh
  // const mesh = useRef()
  // // Set up state for the hovered and active state
  // const [hovered, setHover] = useState(false)
  // const [active, setActive] = useState(false)
  // // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // // Return view, these are regular three.js elements expressed in JSX
  render() {
    const { active, hovered } = this.state;
    return (
      <mesh
        {...this.props}
        // ref={mesh}
        scale={active ? 1.5 : 1}
        // onClick={(event) => setActive(!active)}
        // onPointerOver={(event) => setHover(true)}
        // onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    );
  }
}

export default Box;
