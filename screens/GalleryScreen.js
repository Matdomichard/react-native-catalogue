
import React from 'react';
import { ScrollView } from 'react-native';
import {Card, Badge, Text} from 'react-native-elements';

import {connect} from 'react-redux';

function GalleryScreen(props) {

 let cardList = props.pictureList.map((url, i)=> {
   return (
     <Card key={i}>
       <Card.Image
         style={{ width: '100%', height: 170, marginBottom: 10 }}
         source={{ uri: url }}
       />
       <Badge status="success" value="homme"/>
       <Badge status="success" value="70 ans"/>
       <Badge status="success" value="barbe"/>
       <Badge status="success" value="joyeux !"/>
       <Badge status="success" value="cheveux gris"/>
     </Card>
   );
 });

 return (
   <ScrollView style={{marginTop: 25}}>
     
     <Text h4 style={{textAlign: 'center'}}>John's Gallery</Text>

     {cardList}
   
   </ScrollView>
 );
}

function mapStateToProps(state) {

 return { pictureList : state.pictureList }
}

export default connect(
 mapStateToProps,
 null
)(GalleryScreen);