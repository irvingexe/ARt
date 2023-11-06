import { useThree } from '@react-three/fiber';
import { useXR } from '@react-three/xr';
import React, { useEffect } from 'react'
import { useXrStatus } from '../contexts/XrStatusProvider';

export const PreviewWrap = ({children, preview}) => {
  const {isPresenting} = useXR();
  const {setXrPresenting} = useXrStatus();

  useEffect(() => {
    setXrPresenting(isPresenting)
  }, [isPresenting])

  useThree(({camera}) => {
    if (!isPresenting) camera.position.set(0, 0.3, 5);
  })

  return ( isPresenting ? children : preview )
}
