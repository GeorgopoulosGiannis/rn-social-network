import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { tryLocalSignin } from "../../actions/authActions";

const ResolveAuthScreen = ({tryLocalSignin}) => {

    useEffect(() => {
        tryLocalSignin();
    }, []);

    return null;
};

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, { tryLocalSignin })(ResolveAuthScreen);
