import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, ButtonGroup } from "react-native-elements"
import { connect } from "react-redux";
import styles from "./OwnerProfileScreen.style"
import { imageUrl } from "../../api/request";
import OwnerAvatar from "../../components/OwnerAvatar";
import PostCard from "../../components/PostCard";

const OwnerProfileScreen = ({ navigation, profile }) => {
    const [avatarSrc, setAvatarSrc] = useState("../../../resources/images/facebook.jpeg");

    /// TODO CREATE SEPARATE HOOK TO DOWNLOAD IMAGES
    useEffect(() => {
        setAvatarSrc(imageUrl + profile.avatar);
    }, [profile]);

    const buttons = ['Images', 'Notifications']
    return (
        <View style={styles.wrapper}>
            <OwnerAvatar
                avatarSrc={avatarSrc}
                uploaderEmail={profile.email}
            />
            <Text h3>{profile.alias}</Text>
            <ButtonGroup
                buttons={buttons}
                selectedIndex={0}
            />
            <PostCard />
        </View>
    )
}

const mapStateToProps = (state) => {
    console.log(state.owner);
    return {
        profile: state.owner.profile,
    }
}

export default connect(mapStateToProps, {})(OwnerProfileScreen);