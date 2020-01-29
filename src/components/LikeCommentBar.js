import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";


const LikeCommentBar = ({ numberOfLikes = 10, numberOfComments = 20 }) => {
    return (
        <View style={{ justifyContent: 'space-around', backgroundColor: 'lightgrey', flexDirection: 'row',borderRadius:50,padding:5 }}>
            <View style={{flexDirection:'row'}}>
                <Text style={{ fontSize: 25, fontWeight:'bold'}}>{numberOfLikes}</Text>
                <Icon
                    name='like1'
                    //color='white'
                    type='antdesign'
                    size={30}
                    onPress={() => { console.log('like') }} />
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{ fontSize: 25,fontWeight:'bold' }}>{numberOfComments}</Text>
                <Icon

                    name='comments'
                    //color='white'
                    type='font-awesome'
                    size={30}
                    onPress={() => { console.log('like') }} />
            </View>
        </View>
    )
}

export default LikeCommentBar;