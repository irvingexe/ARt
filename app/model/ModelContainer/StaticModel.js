'use client'

import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function StaticModel({position, model3d}) {
  const gltf = useLoader(GLTFLoader, model3d)

  return <primitive object={gltf.scene} position={position} />
}
