import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Badge } from 'react-native-elements';

export default function GalleryScreen() {
  return (
    <ScrollView style={{flex:1, marginTop: 50}}>
    <Card>
     <Card.Image
       style={{ width: '100%', height: 170, marginBottom: 10 }}
       source={require('../assets/picture-1.jpg')}
     />
     <Badge status="success" value="homme"/>
     <Badge status="success" value="70 ans"/>
     <Badge status="success" value="barbe"/>
     <Badge status="success" value="joyeux !"/>
     <Badge status="success" value="cheveux gris"/>
   </Card>


   <Card>
     <Card.Image
       style={{ width: '100%', height: 170, marginBottom: 10 }}
       source={require('../assets/picture-2.jpg')}
     />
     <Badge status="success" value="femme"/>
     <Badge status="success" value="lunettes"/>
     <Badge status="success" value="31 ans"/>
     <Badge status="success" value="joyeux !"/>
     <Badge status="success" value="cheveux chatain"/>
   </Card>
   </ScrollView>


  );
}


