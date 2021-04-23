import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = require('./src/assets/css/global')

export default function App() {

  return (
    <ScrollView>
      <StatusBar translucent barStyle="light-content" backgroundColor='#1c404a'/>
      <WebView source={{ uri: 'https://juanmadev.com' }} />

    </ScrollView>

  );
}
