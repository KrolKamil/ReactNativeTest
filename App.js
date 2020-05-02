import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [mainText, setMainText] = useState('Hello World');

  const handleButtonPress = () => {
    setMainText('Hello Universe')
  }

  return (
    <View style={styles.container}>
      <Text>{mainText}</Text>
      <Button 
        onPress={handleButtonPress}
        title="Click me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
