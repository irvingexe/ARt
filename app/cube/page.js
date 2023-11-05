"use client"

import { Canvas } from '@react-three/fiber'
import React, { createContext } from 'react'
import { ARButton, XR } from '@react-three/xr'
import XrHitProvider from '../components/XrHitProvider'
import { Cubes } from './components/Cubes'

export default function cube() {

  return (
    <div className='ar-root'>
      <ARButton sessionInit={{requiredFeatures: 'hit-test'}}/>
      <Canvas>
        <XR>
          <XrHitProvider>
            <Cubes/>
          </XrHitProvider>
        </XR>
      </Canvas>
    </div>
  )
}
