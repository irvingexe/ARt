/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
        
import React, { useEffect, useRef } from 'react'
import { useGLTF, 

useAnimations } from '@react-three/drei'
import { useCharAnim } from '../../../contexts/CharAnimProvider'

export default function AnimatedModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(props.model3d);
  const { actions, names } = useAnimations(animations, group);
  const {setAnimations, animationIndex} = useCharAnim();

  useEffect(() => {
    setAnimations(names);
  }, [])

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();

    return () => {
      actions[names[animationIndex]]?.fadeOut(0.5);
    }
  }, [animationIndex])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1.91} >
        <primitive object={nodes.root} />
        <skinnedMesh 
          geometry={nodes.druid.geometry} 
          material={materials.color_main} 
          skeleton={nodes.druid.skeleton} 
        />
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/druid.gltf')
