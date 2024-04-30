import React from 'react';
import { useGrid } from './GridContext';
import './Grid.css';

const Grid = ({ children}) => {
  const { defaultColumnWidth } = useGrid();

  const getColumnWidth = (size) => {
    if (!size || typeof size !== 'number' || size < 1 || size > 12) {
      return defaultColumnWidth;
    }
    return size;
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  };

  const itemStyle = (size) => ({
    flex: `0 0 ${(getColumnWidth(size) / 12) * 100}%`,
    maxWidth: `${(getColumnWidth(size) / 12) * 100}%`,
  });

  return (
    <div style={gridStyle}>
      {React.Children.map(children, (child) =>
        child ? React.cloneElement(child, { style: itemStyle(child.props.size) }) : null
      )}
    </div>
  );
};

export default Grid;
