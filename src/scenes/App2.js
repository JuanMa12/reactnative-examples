import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  var avatar = require('./assets/avatar.jpg');

  return (
    <View style={styles.container}>
      <StatusBar style={styles.bar} />
      <Image source={avatar} style={styles.avatar} />
      <Text>Socio Latam</Text>
      <Text>User Name Test</Text>
      <Button title="806 millas" />
      <View>
        <Text>Barranquilla-cali</Text>
        <Text>$100.000</Text>
      </View>
      <View>
        <Text>Barranquilla-cali</Text>
        <Image source={avatar} style={styles.avatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  bar: {
    backgroundColor: 'blue',
    height: 10
  },
  avatar: {
    width: '80',
    height: '80',

    justifyContent: 'center',
  },
});
