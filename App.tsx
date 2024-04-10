import React from 'react';
import {View} from 'react-native';
import Header from './src/components/Header';
import Home from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <View>
      <Header title={'Task Manager'} />
      <Home />
    </View>
  );
}

export default App;
