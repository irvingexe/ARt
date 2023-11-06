"use client"

import { Canvas } from '@react-three/fiber'
import React, { useCallback, useState } from 'react'
import { ARButton, XR } from '@react-three/xr'
import XrHitProvider from '../contexts/XrHitProvider'
import { ModelContainer } from './ModelContainer'
import { OrbitControls } from '@react-three/drei'
import { CharAnimProvider } from '../contexts/CharAnimProvider'
import { Interface } from '../components/Interface'
import { XrStatusProvider } from '../contexts/XrStatusProvider'
import Cube from '../cube/CubeContainer/Cube'

export default function Model() {
  const [overlayContent, setOverlayContent] = useState();
  const interfaceRef = useCallback((node) => {
    if (node !== null) {
      setOverlayContent(node);
    }
  });

  return (
    <div className='ar-root'>
      <XrStatusProvider>
        <CharAnimProvider>
          <ARButton 
            className='ar-button' 
            sessionInit={{
              requiredFeatures: ['hit-test'],
              optionalFeatures: ['dom-overlay'],
              domOverlay: {root: overlayContent}
            }}
          />
          <Canvas>
            <XR>
              <ambientLight/>
              <pointLight position={[0, 20, 10]} intensity={900} />
              <OrbitControls/>
              <XrHitProvider>
                <Cube position={[0,0,-5]} />
              </XrHitProvider>
            </XR>
          </Canvas>
          <Interface ref={interfaceRef}/>
        </CharAnimProvider>
      </XrStatusProvider>
    </div>
  )
}
