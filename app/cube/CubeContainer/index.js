import React from 'react'
import Cube from './Cube'
import { PreviewWrap } from '@/app/components/PreviewWrap';
import { useXrHits } from '@/app/contexts/XrHitProvider';

export const CubeContainer = () => {

  const hitPoints = useXrHits();
  
  return (
    <PreviewWrap preview={<Cube key={0} position={[0,0,0]}/>}>
      {hitPoints.map((e)=>{
        return(<Cube key={e.id} position={e.position}/>)
      })}
    </PreviewWrap>
  )
}
