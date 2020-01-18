import React,{useState} from "react";
import { Avatar } from "react-native-elements";
import { uploadImage } from "../actions/ownerActions";
import ImagePicker from "react-native-image-picker";

showImgPicker = (event,uploaderEmail) => {
    ImagePicker.showImagePicker({}, (response) => {
        uploadImage(response, uploaderEmail);
    })
}

const OwnerAvatar = ({ avatarSrc, uploaderEmail }) => {

    return (
        <Avatar
            size="xlarge"
            rounded
            source={{
                uri: avatarSrc
            }}
            activeOpacity={0.7}
            showEditButton
            onEditPress={(event) => { showImgPicker(event,uploaderEmail) }}
        />
    )
}

export default OwnerAvatar;