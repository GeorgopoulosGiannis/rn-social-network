import React from 'react';
import { View } from "react-native";
import { Text, ButtonGroup, Avatar } from "react-native-elements";
import ImagePicker from "react-native-image-picker";
import {imageUrl} from "../api/request";

showImgPicker = (event, uploaderEmail) => {
    ImagePicker.showImagePicker({}, (response) => {
        uploadImage(response, uploaderEmail);
    })
}

const OwnerListHeader = ({ avatarSrc, uploaderEmail, alias, buttons }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Avatar
                size="xlarge"
                rounded
                source={{
                    uri: imageUrl + avatarSrc
                }}
                activeOpacity={0.7}
                showEditButton
                onEditPress={(event) => { showImgPicker(event, uploaderEmail) }}
            />
            <Text h3>{alias}</Text>
            <ButtonGroup
                buttons={buttons}
                selectedIndex={0}
            />
        </View>
    )
}

export default OwnerListHeader;