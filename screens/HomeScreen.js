import React from "react";
import { StyleSheet, ImageBackground, Text, View } from "react-native";

import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/home.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "60%",
            height: "10%",
          }}
        >
          <Input
            placeholder="John"
            leftIcon={<Icon name="user" size={24} color="#eb4d4b" />}
          />
          <Button
            icon={<Icon name="arrow-right" size={20} color="#eb4d4b" />}
            //C'est ce props .navigate qui va me mettre mon renvoi vers le bottomnavigator --> avec en screen la page qu'il me faut
            title="Go to Gallery"
            type="solid"
            onPress={() => {
              props.navigation.navigate("BottomNavigator", {
                screen: "Gallery",
              });
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
