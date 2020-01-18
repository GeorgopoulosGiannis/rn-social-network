import React, { useEffect } from "react";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers/index";
import { signalRMiddleware } from "./src/middleware/signalRMiddleware";

import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";
import AuthScreen from "./src/screens/authFlow/LoginScreen"
import RegisterScreen from "./src/screens/authFlow/RegisterScreen"
import FeedScreen from "./src/screens/MainFlow/FeedScreen";
import ContactsScreen from "./src/screens/chatFlow/ContactsScreen";
import ChatScreen from "./src/screens/chatFlow/ChatScreen";
import ResolveAuthScreen from "./src/screens/authFlow/ResolveAuthScreen"
import OwnerProfileScreen from "./src/screens/profileFlow/OwnerProfileScreen";

const authFlow = createSwitchNavigator(
  {
    login: AuthScreen,
    register: RegisterScreen
  },
  {
    initialRouteName: 'login'
  }

);

const chatFlow = createStackNavigator({
  contacts: ContactsScreen,
  chat: ChatScreen
})
const ownerProfileFlow = createStackNavigator({
  base: OwnerProfileScreen
})
const mainFlow = createBottomTabNavigator({
  feed: FeedScreen,
  profile: ownerProfileFlow,
  chat: chatFlow

})
chatFlow.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};
const switchNavigator = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    auth: authFlow,
    main: mainFlow,
  }
);



const App = createAppContainer(switchNavigator);
const composeEnhancers = composeWithDevTools({
  // Specify custom devTools options
});

export default () => {
  return (
    <Provider
      store={createStore(
        reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk, signalRMiddleware))
        // Specify custom devTools options
      )}
    >
      <App
        ref={navigator => {
          setNavigator(navigator);
        }}
      />
    </Provider>
  );
};