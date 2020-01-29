import React from "react";
import { Card, Icon } from "react-native-elements";
import { View, Text } from "react-native";
import LikeCommentBar from "./LikeCommentBar";
import { imageUrl } from "../api/request";

const PostCard = ({ title = "aaa", imageSrc }) => {
    return (
        <Card
            title={title}
            titleStyle={{ textAlign: 'left', marginLeft: 5 }}
            image={{
                uri: imageUrl + imageSrc
            }}>

            <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component structure than actual design.
                    </Text>
            <LikeCommentBar />
        </Card>
    )
}

export default PostCard;