import React from 'react';
import { Text, Link, DefaultButton, FontWeights, getTheme, mergeStyleSets, Stack } from '@fluentui/react';
import Navigation from '../navigation/navigation';

import './app.css';

const theme = getTheme();

function App() {
 
  return (
    <div className="App">
     <Navigation></Navigation>
    </div>
  );
}

export default App;


