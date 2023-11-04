'use client'

import { OrbitControls } from '@react-three/drei'
import { Interactive, useHitTest } from '@react-three/xr';
import React, { useRef, useState } from 'react'
import CubeContainer from './CubeContainer';

export default function XrHitCube() {

  const reticleRef = useRef();
  const [cubes, setCubes] = useState([]);

  const placeCube = (e) => {
    let position = e.intersection.object.position.clone();
    let id = date.now();
    setCubes([...cubes, {position, id}])
  }

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(reticleRef.current.position, reticleRef.current.quaternion, reticleRef.current  .scale);
    reticleRef.current.rotation.set(-Math.PI/2, 0, 0);
  })

  return (
    <>
      <ambientLight/>
      <OrbitControls/>
      {cubes.map((e)=>{
        return(<CubeContainer key={e.id} position={e.position}/>)
      })}
      <Interactive onSelect={placeCube}>
        <mesh ref={reticleRef} rotation-x={-Math.PI/2}>
          <ringGeometry args={[0.15, 0.2, 32]}/>
          <meshStandardMaterial color={'white'}/>
        </mesh>
      </Interactive>
    </>
  )
}
