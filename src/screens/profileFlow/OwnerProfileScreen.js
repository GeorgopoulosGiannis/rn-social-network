import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Header, Icon } from "react-native-elements"
import { fetchOwnerProfile } from "../../actions/ownerActions";
import { connect } from "react-redux";

const OwnerProfileScreen = ({ navigation, ownerEmail }) => {

    useEffect(() => {
        fetchOwnerProfile(ownerEmail);
    }, [])
    console.log(ownerEmail)
    return (<View>
        <Text>{ownerEmail}</Text>
    </View>)
}

const mapStateToProps = (state) => {
    return {
        ownerEmail: state.chat.ownerEmail
    }
}

export default connect(mapStateToProps)(OwnerProfileScreen);