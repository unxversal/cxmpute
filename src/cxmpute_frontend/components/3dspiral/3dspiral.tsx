import * as THREE from 'three'
import * as React from 'react'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { LayerMaterial, Base, Depth, Fresnel } from 'lamina'
import { Mesh } from 'three';
import { Vector3 } from 'three';

export default function Spiral() {
  // const base = '#ff4eb8'
  // const colorA = '#00ffff'
  // const colorB = '#ff8f00'

  // const base = '#32c1ff'
  // const colorA = '#966cff' //474747
  // const colorB = '#4fcaff'


  // const base = '#32c1ff'
  // const colorA = '#28ff43'
  // const colorB = '#272727'

  const base = '#000000'
  const colorA = '#000000'
  const colorB = '#696969'

  
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, -0.75, 0.75], fov: 80, near: 0.001 }}>
      <Suspense fallback={null}>
        <Bg base={base} colorA={colorA} colorB={colorB} />
        <Flower base={base} colorA={colorA} colorB={colorB} />
        <mesh>
          <sphereGeometry args={[0.2, 64, 64]} />
          <meshPhysicalMaterial depthWrite={false} transmission={1} thickness={10} roughness={0.65} />
        </mesh>
        {/* <OrbitControls /> */}
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} color={colorA} />
        <ambientLight intensity={0.4} />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  )
}

interface BgProps {
    base: string;
    colorA: any;
    colorB: any;
}

function Bg({ base, colorA, colorB }: BgProps) {
  const mesh = useRef(null); // Add the Mesh type here
  useFrame((state, delta) => {
    if (mesh.current) {
        (mesh.current as any).rotation.x = (mesh.current as any).rotation.y = (mesh.current as any).rotation.z += delta
      } 
    })
  return (
    <mesh ref={mesh} scale={100}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial attach="material" side={THREE.BackSide}>
        <Base color={base} alpha={1} mode="normal" />
        <Depth 
            colorA={colorB} 
            colorB={colorA} 
            alpha={0.5} 
            mode="normal" 
            near={0} 
            far={300} 
            origin={new Vector3(100, 100, 100)} 
        />
      </LayerMaterial>
    </mesh>
  )
}

function Flower({ base, colorA, colorB }: BgProps) {
  const mesh = useRef()
  const depth = useRef()
  useFrame((state, delta) => {
    if (mesh.current && depth.current) {
        (mesh.current as any).rotation.z += delta / 2;
        (depth.current as any).origin.set(-state.mouse.y, state.mouse.x, 0);
    }
  })
  return (
    <mesh rotation-y={Math.PI / 2} scale={[2, 2, 2]} ref={mesh}>
      <torusKnotGeometry args={[0.4, 0.05, 400, 32, 3, 7]} />
      <LayerMaterial>
        <Base color={base} alpha={1} mode="normal" />
        <Depth colorA={colorB} colorB={colorA} alpha={0.5} mode="normal" near={0} far={3} origin={new Vector3(1, 1, 1)} />
        <Depth ref={depth} colorA={colorB} colorB="black" alpha={0.7} mode="lighten" near={0.25} far={2} origin={new Vector3(1, 0, 0)} />
        <Fresnel mode="softlight" color="white" intensity={0.3} power={2} bias={0} />
      </LayerMaterial>
    </mesh>
  )
}
