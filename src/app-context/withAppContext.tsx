import React from 'react'
import { useHandleApp } from './useHandleApp';
import { AppContext } from './app-context';
import useWebSocket from './useWebSocket';

const withAppContext = (Component: React.ComponentType) => {
  return () => {
    const contextValue = useHandleApp();
    const socket = useWebSocket();
    return (
      <AppContext.Provider value={{...contextValue, ...socket}}>
        <Component />
      </AppContext.Provider>
    )
  }
}

export default withAppContext