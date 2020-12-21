import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import PushNotification from 'react-native-push-notification';
import Notif from './src/notification';
import firebase from '@react-native-firebase/app';
const App = () => {
  useEffect(() => {
    firebase.initializeApp(this)
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);
      },

      onRegistrationError: function (err) {
        console.error(err.message, err);
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);
  console.log(Notif('dlkfjsdlkfj', 'sjfhjdfhdf'));
  return (
    <View>
      <Text onPress={() => Notif('dlkfjsdlkfj', 'sjfhjdfhdf')}>
        push notification
      </Text>
    </View>
  );
};

export default App;
