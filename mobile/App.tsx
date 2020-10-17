import React from 'react';
import Routes from "./src/routes";
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications'
import { View, Button, Text } from 'react-native';
import Constants from 'expo-constants';

import { useFonts } from "expo-font";
import { 
  Nunito_600SemiBold, 
  Nunito_700Bold, 
  Nunito_800ExtraBold 
} from "@expo-google-fonts/nunito";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold
  })
  
  if (!fontsLoaded)  return null;

  /*async function registerForPushNotificationsAsync() {
    if (Constants.isDevice) {
      const { status: existingStatus } = await Permissions.getAsync(
        Permissions.NOTIFICATIONS
      );
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Permissions.askAsync(
          Permissions.NOTIFICATIONS
        );
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA---");
      console.log(await Notifications.getExpoPushTokenAsync());
      let token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB---");
    } else {
      alert('Must use physical device for Push Notifications');
    }
  };
  registerForPushNotificationsAsync()*/
  
  return (
    <Routes />
  );
}
