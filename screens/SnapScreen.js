import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Camera } from 'expo-camera';

  export default function SnapScreen() {
    const [hasPermission, setHasPermission] = useState(null);
   
    useEffect(() => {
      
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
      
    }, []);
   }

