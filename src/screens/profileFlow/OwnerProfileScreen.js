import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { Header, Icon, Avatar, Card, Text } from "react-native-elements"
import { uploadImage } from "../../actions/ownerActions";
import { connect } from "react-redux";
import styles from "./OwnerProfileScreen.style"
import { imageUrl } from "../../api/request";
import ImagePicker from 'react-native-image-picker';

const OwnerProfileScreen = ({ navigation, profile, uploadImage }) => {
    const [avatarSrc, setAvatarSrc] = useState("");
    useEffect(() => {
        console.log(imageUrl + profile.avatar)
        //setAvatarSrc(imageUrl + profile.avatar);
        setAvatarSrc(imageUrl+profile.avatar);
    }, [profile]);
    showImgPicker = (event) => {

        ImagePicker.showImagePicker({}, (response) => {
            uploadImage(response, profile.email);
        })
    }
    return (
        <View style={styles.wrapper}>
            <Avatar
                size="xlarge"
                rounded
                source={{
                    uri: avatarSrc
                }}
                activeOpacity={0.7}
                editButton={{ name: 'camera', type: 'feather', iconStyle: { marginBottom: 4 } }}
                showEditButton
                onEditPress={(event) => { showImgPicker(event, profile.email, uploadImage) }}
            />
            <Text>{profile.alias}</Text>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.owner.profile,
    }
}

export default connect(mapStateToProps, { uploadImage })(OwnerProfileScreen);