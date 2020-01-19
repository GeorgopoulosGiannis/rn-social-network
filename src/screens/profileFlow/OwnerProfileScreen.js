import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Text, ButtonGroup, ListItem } from "react-native-elements"
import { connect } from "react-redux";
import styles from "./OwnerProfileScreen.style"
import { imageUrl } from "../../api/request";
import OwnerAvatar from "../../components/OwnerAvatar";
import PostCard from "../../components/PostCard";
import { List } from "native-base";


const OwnerProfileScreen = ({ navigation, profile, images }) => {
    const [avatarSrc, setAvatarSrc] = useState("../../../resources/images/facebook.jpeg");

    /// TODO CREATE SEPARATE HOOK TO DOWNLOAD IMAGES
    useEffect(() => {
        setAvatarSrc(imageUrl + profile.avatar);
    }, [profile]);
    const renderItem = ({ item }) => {
        return <PostCard />
    }
    const renderHeader = () => {
        return (
            <View style={{alignItems:'center'}}>
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
    const buttons = ['Images', 'Notifications']
    return (
        <View style={styles.wrapper}>

            <FlatList
                keyExtractor={(item, index) => { return index }}
                ListHeaderComponent ={renderHeader}
                data={images}
                renderItem={renderItem}
            />
        </View>
    )
}
const mapStateToProps = (state) => {
    console.log(state.owner);
    return {
        profile: state.owner.profile,
        images: state.owner.images
    }
}


export default connect(mapStateToProps, {})(OwnerProfileScreen);