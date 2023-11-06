'use client'

import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function StaticModel({position, model}) {
  const gltf = useLoader(GLTFLoader, model)

  return <primitive object={gltf.scene} position={position} />
}
