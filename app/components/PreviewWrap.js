import { useThree } from '@react-three/fiber';
import { useXR } from '@react-three/xr';
import React from 'react'

export const PreviewWrap = ({children, preview}) => {
  const {isPresenting} = useXR();

  useThree(({camera}) => {
    if (!isPresenting) camera.position.set(0, 0.3, 5);
  })

  return ( isPresenting ? children : preview )
}
