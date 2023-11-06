'use client'

import { Interactive, useHitTest } from '@react-three/xr';
import React, { createContext, useContext, useRef, useState } from 'react'

export const HitContext = createContext([]);

export const useXrHits = () => {
  return useContext(HitContext)
}

export default function XrHitProvider({children}) {

  const reticleRef = useRef();
  const [hitPoints, setHitPoints] = useState([{position: [0,0,-5], id: 1}]);

  const addHitPoints = (e) => {
    let position = e.intersection.object.position.clone();
    let id = date.now();
    setHitPoints([...hitPoints, {position, id}])
  }

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(reticleRef.current.position, reticleRef.current.quaternion, reticleRef.current.scale);
    reticleRef.current.rotation.set(-Math.PI/2, 0, 0);
  })

  return (
    <>
      <HitContext.Provider value={hitPoints}>
        {children}
      </HitContext.Provider>
      <Interactive onSelect={addHitPoints}>
        <mesh ref={reticleRef} rotation-x={-Math.PI/2}>
          <ringGeometry args={[0.15, 0.2, 32]}/>
          <meshStandardMaterial color={'white'}/>
        </mesh>
      </Interactive>
    </>
  )
}
