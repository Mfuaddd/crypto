import React from 'react'
import FetchProvider from './FetchContext'

function MainProvider({children}) {
  return (
    <FetchProvider>
      {children}
    </FetchProvider>
  )
}

export default MainProvider