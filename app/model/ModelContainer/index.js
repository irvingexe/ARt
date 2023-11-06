import React from 'react'
import Model from './StaticModel'
import { PreviewWrap } from '../../components/PreviewWrap';
import AnimatedModel from './AnimatedModel';
import { useXrHits } from '../../contexts/XrHitProvider';
import { useGLTF } from '@react-three/drei';
import { prefix } from '@/app/prefix';

export const ModelContainer = () => {
  const modelURL = `${prefix}/assets/models/druid.gltf`;
  const { nodes, materials, animations, parser } = useGLTF(modelURL);
  let hitPoints = useXrHits();
  let model;

  Array.from(parser.associations.keys()).forEach(e => {
    if (e.type === 'SkinnedMesh') model = e.name
  })
  
  return (
    <PreviewWrap preview={<Model position={[0,0,0]} model={modelURL}/>}>
      {!animations.length 
        ? <Model position={[...hitPoints].pop().position} model={modelURL}/>
        : <AnimatedModel 
            position={[...hitPoints].pop().position} 
            model={model}
            nodes={nodes}
            materials={materials}
            animations={animations}
          />}
    </PreviewWrap>
  )
}
