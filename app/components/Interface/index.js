import React, { forwardRef } from 'react'
import { useCharAnim } from '../../contexts/CharAnimProvider'
import './styles.css'

// eslint-disable-next-line react/display-name
export const Interface = forwardRef((props, ref) => {
  const {animations, animationIndex, setAnimationIndex} = useCharAnim();

  return (
    <div id='overlay-content' ref={ref}>
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
