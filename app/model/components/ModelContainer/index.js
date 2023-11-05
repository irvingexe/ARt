import React, { useContext } from 'react'
import Model from './Model'
import { HitContext } from '../../../contexts/XrHitProvider/HitContext';
import { PreviewWrap } from '../../../components/PreviewWrap';
import AnimatedModel from './AnimatedModel';

export const ModelContainer = () => {

  let hitPoints = useContext(HitContext);
  
  return (
    <PreviewWrap preview={<Model position={[0,0,0]} model3d={'/assets/models/druid.gltf'}/>}>
      {/*<Model position={[...hitPoints].pop().position} model={'/assets/models/witch.gltf'}/>*/}
      <AnimatedModel 
        position={[...hitPoints].pop().position} 
        model3d={'/assets/models/druid.gltf'}
      />
    </PreviewWrap>
  )
}
