import React from 'react'
import { useHandleApp } from './useHandleApp';
import { AppContext } from './app-context';

const withAppContext = (Component: React.ComponentType) => {
  return () => {
    const contextValue = useHandleApp();
    return (
      <AppContext.Provider value={contextValue}>
        <Component />
      </AppContext.Provider>
    )
  }
}

export default withAppContext