import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { Header, Icon, Avatar } from "react-native-elements"
import { fetchOwnerProfile } from "../../actions/ownerActions";
import { Container, Header as NativeHeader, Content, Card, CardItem, Thumbnail, Text as NativeText, Button, Icon as NativeIcon, Left, Body } from 'native-base';
import { connect } from "react-redux";
import styles from "./OwnerProfileScreen.style"

const OwnerProfileScreen = ({ navigation, ownerEmail }) => {

    useEffect(() => {
        fetchOwnerProfile(ownerEmail);
    }, [])
    console.log(ownerEmail)
    return (
        <Container>
            <Avatar
                size="xlarge"
                rounded
                source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                }}
                activeOpacity={0.7}
                showEditButton
            />
            <NativeText>{ownerEmail}</NativeText>
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: 'Image URL' }} />
                            <Body>
                                <NativeText>NativeBase</NativeText>
                                <NativeText note>April 15, 2016</NativeText>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} style={{ height: 200, width: 200, flex: 1 }} />
                            <NativeText>
                            //Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here//Your text here
                            </NativeText>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <NativeIcon name="logo-github" />
                                <NativeText>1,926 stars</NativeText>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        ownerEmail: state.chat.ownerEmail
    }
}

export default connect(mapStateToProps)(OwnerProfileScreen);