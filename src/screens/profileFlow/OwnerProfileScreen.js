import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import styles from "./OwnerProfileScreen.style"
import { imageUrl } from "../../api/request";
import OwnerListHeader from "../../components/OwnerListHeader";
import PostCard from "../../components/PostCard";



const OwnerProfileScreen = ({ navigation, profile, images }) => {


    const renderItem = ({ item }) => {
        return <PostCard 
        title={profile.alias}
        imageSrc = {item}
         />
    }
    const renderHeader = () => {
        return (
            <View style={{ flex: 1 }}>
                <OwnerListHeader
                    uploaderEmail={profile.email}
                    alias={profile.alias}
                    avatarSrc={profile.avatar}
                    buttons={buttons}
                />
            </View>
        )
    }
    const buttons = ['Posts', 'Notifications']
    return (
        <View style={styles.wrapper}>

            <FlatList
                keyExtractor={(item, index) => { return item + index }}
                ListHeaderComponent={renderHeader}
                data={profile.imageURLs}
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