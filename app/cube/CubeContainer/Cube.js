'use client'

import React, { useRef } from 'react'

export default function Cube({position}) {

  const cube = useRef()
  
  /*
  useFrame((state, delta) => {
    cube.current.rotation.y += 0.05;
  })
  */

  return (
      <mesh ref={cube} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]}/>
        <meshStandardMaterial color={'mediumpurple'}/>
      </mesh>
  )
}
