import React, { useContext } from 'react'
import Cube from './Cube'
import { HitContext } from '../../../components/XrHitProvider/HitContext';
import { PreviewWrap } from '@/app/components/PreviewWrap';

export const Cubes = () => {

  let hitPoints = useContext(HitContext);
  
  return (
    <PreviewWrap preview={<Cube key={0} position={[0,0,0]}/>}>
      {hitPoints.map((e)=>{
      return(<Cube key={e.id} position={e.position}/>)
    })}
    </PreviewWrap>
  )
}
