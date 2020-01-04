import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Header, Icon } from "react-native-elements"
import AsyncStorage from "@react-native-community/async-storage";
import {firebase} from "@react-native-firebase/messaging"


const FeedScreen = ({ navigation }) => {
    useEffect(()=>{
        firebase.messaging().hasPermission().then(enabled=>{
            console.log(enabled)
        })
        firebase.messaging().getToken().then(fcmToken=>{
            console.log(fcmToken)
        })
        console.log(firebase.app().name)
    })
    const logOut = async () => {
        await AsyncStorage.clear();
        navigation.navigate('login')
    }
    return (<View>
        <Header
            leftComponent={
                <Icon
                    name='user'
                    color='white'
                    type='antdesign'
                    onPress={() => { navigation.navigate() }} />}
            rightComponent={
                <Icon
                    name='logout'
                    type="antdesign"
                    color="white"
                    onPress={() => logOut()} />}
        />
        <Text>feedScreen</Text>
    </View>)
}

export default FeedScreen;