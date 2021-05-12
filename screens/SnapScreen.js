import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import IconIonic from "react-native-vector-icons/Ionicons";
import { Button, Overlay } from "react-native-elements";

function SnapScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.torch);
  const [visible, setVisible] = useState(false);

  let camera = useRef(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  let cameraDisplay;
  if (hasPermission && isFocused) {
    cameraDisplay = (
      <Camera ref={ref=> (camera = ref)} style={{ flex: 1}} type={type} flashMode={flash}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress=
            {() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <IconIonic name="camera-reverse" size={20} color="#ffffff" />
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
           setFlash(
             flash === Camera.Constants.FlashMode.torch
               ? Camera.Constants.FlashMode.off
               : Camera.Constants.FlashMode.torch
           );
         }}>
          
            <IconFontAwesome name="flash" size={20} color="#ffffff" />
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flash{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    );
  } else {
    cameraDisplay = <View style={{ flex: 1 }}></View>;
  }

  return  <View style={{flex:1}}>
  <Overlay isVisible={visible}  width="auto" height="auto">
     <Text>Loading</Text>
   </Overlay>

 {cameraDisplay}

 <Button
     onPress={async () => {
       setVisible(true);
       if (camera) {
         let photo = await camera.takePictureAsync({quality: 0.3});
         setVisible(false);
       }
     }}
     icon={
         <IconFontAwesome
         name="save"
         size={20}
         color="#ffffff"
         />
     }
     title="Snap"
     buttonStyle={{backgroundColor: "#009788"}}
     type="solid"
 />

</View>;
}

export default SnapScreen;
