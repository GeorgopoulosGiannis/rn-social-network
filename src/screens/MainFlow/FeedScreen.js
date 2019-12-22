import React from "react";
import { View, Text } from "react-native";
import { Header, Icon } from "react-native-elements"
import AsyncStorage from "@react-native-community/async-storage";

const FeedScreen = ({ navigation }) => {

    const logOut = async () => {
        await AsyncStorage.clear();
        navigation.navigate('login')
    }
    
    return (<View>
        <Header
            rightComponent={<Icon name='menu' onPress={() => logOut()} />}
        />
        <Text>feedScreen</Text>
    </View>)
}

export default FeedScreen;