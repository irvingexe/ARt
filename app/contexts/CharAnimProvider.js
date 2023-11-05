import React, { createContext, useContext, useState } from 'react'

const CharAnimContext = createContext({});

export const CharAnimProvider = ({children}) => {
  const [animations, setAnimations] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  return (
    <>
      <CharAnimContext.Provider value={{animations, setAnimations, animationIndex, setAnimationIndex}}>
        {children}
      </CharAnimContext.Provider>
    </>
  )
}

export const useCharAnim = () => {
  return useContext(CharAnimContext)
}
