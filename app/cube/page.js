"use client"

import { Canvas } from '@react-three/fiber'
import React from 'react'
import CubeContainer from './CubeContainer'
import { ARButton, XR } from '@react-three/xr'
import XrHitCube from './XrHitCube'

export default function cube() {

  return (
    <div className='ar-root'>
      <ARButton sessionInit={{requiredFeatures: 'hit-test'}}/>
      <Canvas>
        <XR>
          <XrHitCube/>
        </XR>
      </Canvas>
    </div>
  )
}
