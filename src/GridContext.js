import React, { createContext, useContext, useState } from 'react';

const GridContext = createContext();

export const GridProvider = ({ children }) => {
  const [defaultColumnWidth, setDefaultColumnWidth] = useState(12);

  return (
    <GridContext.Provider value={{ defaultColumnWidth, setDefaultColumnWidth }}>
      {children}
    </GridContext.Provider>
  );
};

export const useGrid = () => useContext(GridContext);
