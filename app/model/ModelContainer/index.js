import React from 'react'
import Model from './StaticModel'
import { PreviewWrap } from '../../components/PreviewWrap';
import AnimatedModel from './AnimatedModel';
import { useXrHits } from '../../contexts/XrHitProvider';

export const ModelContainer = () => {

  let hitPoints = useXrHits();
  
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
