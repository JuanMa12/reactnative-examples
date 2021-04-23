import React from 'react';
import { StatusBar, ScrollView, View, Text, Image, StyleSheet, Button} from 'react-native';

const styles = require('./src/assets/css/global')

export default function App() {

  return (
    <ScrollView>
      <StatusBar translucent barStyle="light-content" backgroundColor='#1c404a'/>
      <View style={styles.container}>
        <Image
          style= {styles.avatar}
          source= {{
            uri : 'https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png'
          }}>
        </Image>
        <Text style={styles.type_user}>Socio latam</Text>
        <Text style={styles.name}>Username Lastname</Text>
        <Text style={styles.cellphone}>30021457849</Text>
      </View>

      <View>
        <Text style={styles.btn}>806 Millas</Text>
        <View style={styles.list_price}>
          <Text>Barranquilla-Bogotá</Text>
          <Text>$200.000</Text>
        </View>
        <View style={styles.list_price}>
          <Text>Barranquilla-Medellin</Text>
          <Text>$200.000</Text>
        </View>
        <View style={styles.list_price}>
          <Text>Barranquilla-Cali</Text>
          <Text>$200.000</Text>
        </View>
      </View>

      <View style={styles.promotion}>
        <Text style= {styles.text_promotion}>Barranquilla-Cali</Text>
        <Image
          style= {styles.image_promotion}
        source= {{
          uri : 'https://s1.eestatic.com/2020/09/25/omicrono/tecnologia/tecnologia-aviacion-tecnologia_523458626_160908905_1024x576.jpg'
        }}>
        </Image>
      </View>
      <View style={styles.promotion}>
        <Text style= {styles.text_promotion}>Barranquilla-Cali</Text>
        <Image
          style= {styles.image_promotion}
        source= {{
          uri : 'https://static.hosteltur.com/app/public/uploads/img/articles/2020/04/27/L_142101_aeropuerto-de-hong-kong.jpg'
        }}>
        </Image>
      </View>

    </ScrollView>

  );
}
