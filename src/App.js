import React from "react";
import { GridProvider } from "./GridContext";
import Grid from "./Grid";

const App = () => {
  return (
    <GridProvider>
      <Grid>
        <div className="grid-item"size={12}>
          occupy 12 column
        </div>
        <div className="grid-item" size={6}>
          occupy 6 column
        </div>
        <div className="grid-item" size={3}>
          occupy 3 column
        </div>
        <div className="grid-item" size={2}>
          occupy 2 column
        </div>
        <div className="grid-item" size={5}>
          occupy 5 column
        </div>
      </Grid>
    </GridProvider>
  );
};

export default App;
