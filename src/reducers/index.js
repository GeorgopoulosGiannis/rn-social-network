import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ContactsReducer from "./ContactsReducer";
import ChatReducer from "./ChatReducer";

export default combineReducers({
  auth: AuthReducer,
  contacts: ContactsReducer,
  chat: ChatReducer
});