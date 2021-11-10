import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {connect} from 'react-redux';

import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreen(props) {
  const [pseudo, setPseudo] = useState('');

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "60%",
          height: "10%",
        }}
      >
        <Input
          placeholder="Nom"
          leftIcon={<Icon name="user" size={20} color="#C17543" />}
          onChangeText={(val) => setPseudo(val)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("BottomNavigator", {
              screen: "Gallery",
            });
          }}
        >
          <Ionicons name="arrow-forward-outline" size={25} style={{}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitPseudo: function(pseudo) { 
      dispatch( {type: 'savePseudo', pseudo: pseudo }) 
    }
  }
}

export default connect(
    null, 
    mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7C8B9",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#C17543',
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
});
