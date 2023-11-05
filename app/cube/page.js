"use client"

import { Canvas } from '@react-three/fiber'
import React from 'react'
import { ARButton, XR } from '@react-three/xr'
import XrHitProvider from '../contexts/XrHitProvider'
import { CubeContainer } from './components/CubeContainer'

export default function cube() {

  return (
    <div className='ar-root'>
      <ARButton sessionInit={{requiredFeatures: 'hit-test'}}/>
      <Canvas>
        <XR>
          <XrHitProvider>
            <CubeContainer/>
          </XrHitProvider>
        </XR>
      </Canvas>
    </div>
  )
}
