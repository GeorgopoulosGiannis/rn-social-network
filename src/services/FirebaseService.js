import { firebase } from "@react-native-firebase/messaging";
import { Platform } from "react-native";

let fcmToken;
let unsubscribeOnMessage;
let unsubscribeOnTokenRefresh;

export const RegisterFirebaseEvents = async () => {
    fcmToken = await getToken();
    console.log('register firebase')
    unsubscribeOnMessage = firebase.messaging().onMessage(async (remoteMessage) => {
        debugger;
        console.log('FCM Message Data:', remoteMessage.data);
    });
    unsubscribeOnTokenRefresh = firebase.messaging().onTokenRefresh(async (token) => {
        console.log('TOKEN refresh :', token)
    })
    return fcmToken;
}

export const UnsubscribeFirebaseEvents = () => {
    unsubscribeOnMessage();
    unsubscribeOnTokenRefresh();
}

const getToken = async () => {
    if (Platform.OS == 'ios' && !firebase.messaging().isRegisteredForRemoteNotifications) {
        await firebase.messaging().registerForRemoteNotifications();
    }
    const fcmToken = await firebase.messaging().getToken();
    return fcmToken;
}






// Unsubscribe from further message events
//unsubscribeOnMessage();


