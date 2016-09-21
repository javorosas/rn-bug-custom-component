import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Component = () => {
  return (
    <View>
      <Text>This is a custom component</Text>
    </View>
  );
}

const App = () => {
  return (
    <View>
      <Component style={styles.component} />
      <Component style={styles.component} />
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    backgroundColor: '#f88',
    marginVertical: 10
  }
});

export default App;
