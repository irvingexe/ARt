import React, { createContext, useContext, useState } from 'react'

const XrStatusContext = createContext({});

export const XrStatusProvider = ({children}) => {
  const [isXrPresenting, setXrPresenting] = useState();
  return (
    <XrStatusContext.Provider value={{isXrPresenting, setXrPresenting}}>
      {children}
    </XrStatusContext.Provider>
  )
}

export const useXrStatus = () => {
  return useContext(XrStatusContext)
}
 