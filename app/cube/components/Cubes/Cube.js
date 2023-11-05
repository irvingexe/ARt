'use client'

import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

export default function CubeContainer({position}) {

  const cube = useRef()
  
  /*
  useFrame((state, delta) => {
    cube.current.rotation.y += 0.05;
  })
  */

  return (
    <>
      <mesh ref={cube} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]}/>
        <meshStandardMaterial color={'mediumpurple'}/>
      </mesh>
    </>
  )
}
