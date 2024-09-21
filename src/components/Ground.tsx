import { usePlane } from "@react-three/cannon";
import { groundTexture } from "../images/textures";
import { useCallback } from "react";

export default function Ground({ addCube }) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.5, 0],
  }));

  const handleClick = useCallback(
    (e) => {
      e.stopPropagation();
      const [x, y, z] = Object.values(e.point).map(Math.ceil);
      addCube(x, y, z);
    },
    [addCube]
  );

  groundTexture.repeat.set(100, 100);

  return (
    <mesh onClick={handleClick} ref={ref}>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={groundTexture} />
    </mesh>
  );
}
