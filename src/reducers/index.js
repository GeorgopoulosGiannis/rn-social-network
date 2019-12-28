import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ContactsReducer from "./ContactsReducer";
import ChatReducer from "./ChatReducer";
import OwnerReducer from "./OwnerReducer";

export default combineReducers({
  auth: AuthReducer,
  contacts: ContactsReducer,
  chat: ChatReducer,
  owner:OwnerReducer
});