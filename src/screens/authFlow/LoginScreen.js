import React from "react"
import { View } from "react-native";
import LoginScreen from "react-native-login-screen"
import { connect } from "react-redux";
import { loginUser, usernameChanged, passwordChanged } from "../../actions/authActions"


const AuthScreen = ({
    email,
    password,
    errorMessage,
    usernameChanged,
    passwordChanged,
    loginUser
}) => {
    const onLoginUser = () => {
        loginUser({ email, password });
    };
    const onUsernameChange = text => {
        usernameChanged(text);
    };
    const onPasswordChange = text => {
        passwordChanged(text);
    };
    return (
        <View>
            <LoginScreen
                // source={{
                //     uri: bgImage
                // }}
                onPress={ onLoginUser }
                loginButtonBackgroundColor="#a2a5a9"
                //logoComponent={}
                //passwordIconComponent={}
                //usernameIconComponent={(<AntDesign name="user" size={20} />)}
                // onSwitchValueChange={switchValue => {
                //     setSwitchValue(switchValue);
                // }}
                // switchValue={switchValue}
                usernameOnChangeText={email => onUsernameChange(email)}
                passwordOnChangeText={password => onPasswordChange(password)}
            >
            </LoginScreen>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
        email: state.auth.username,
        password: state.auth.password
    }
}

export default connect(mapStateToProps, { loginUser, usernameChanged, passwordChanged })(AuthScreen);