import React from 'react';
import { StatusBar, ScrollView, View, Text, Image, TextInput, Button} from 'react-native';

const styles = require('./src/assets/css/global')

export default function App() {

  return (
    <ScrollView>
      <StatusBar translucent barStyle="light-content" backgroundColor='#1c404a'/>
      <View style={styles.login}>
        <Text style={styles.title}>Latam</Text>
        <Image
          style= {styles.logo}
          source= {{
            uri : 'https://static.thenounproject.com/png/695191-200.png'
          }}>
        </Image>
        <Text style={styles.subtitle}>Sign In Account</Text>
        <View>
          <Text style={styles.text_label}>Email</Text>
          <TextInput style={styles.input}
          placeholder="Enter Email" />
        </View>
        <View>
          <Text style={styles.text_label}>Password</Text>
          <TextInput style={styles.input}
          placeholder="Enter Password" secureTextEntry={true} />
        </View>
        <Text style={styles.btn_login}>Sign</Text>
        <Text style={styles.copyright}>Developer By JuanMaDev</Text>
      </View>
    </ScrollView>

  );
}
