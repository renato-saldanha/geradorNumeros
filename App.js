import React, {Fragment, type Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Gerador from './componentes/GeradorNumeros';



const App: () => Node = () => {
  return (
    <Fragment>
      <Gerador/>
    </Fragment>
  );
};

const styles = StyleSheet.create({ 
  
});

export default App;
