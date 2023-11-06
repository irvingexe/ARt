import React, { forwardRef, useEffect, useState } from 'react'
import { useCharAnim } from '../../contexts/CharAnimProvider'
import './styles.css'
import { useXrStatus } from '@/app/contexts/XrStatusProvider';

// eslint-disable-next-line react/display-name
export const Interface = forwardRef((props, ref) => {
  const {animations, animationIndex, setAnimationIndex} = useCharAnim();
  const {isXrPresenting} = useXrStatus();
  const [isVisible, setVisible] = useState();

  useEffect(() => {
    setVisible(isXrPresenting)
  }, [isXrPresenting])

  return (
    <div id='overlay-content' className={!isVisible ? 'hidden' : ''} ref={ref}>
      <div className='dom-container'>
        <div className='button-container'>
          {animations.map((e, i)=>(
            <button 
              className={`button ${i===animationIndex ? 'active' : ''}`} 
              key={i} 
              onClick={()=>{setAnimationIndex(i)}}>
                {e}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
})
