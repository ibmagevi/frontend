import { combineReducers } from "redux";
import user from "./user.reducer";
import login from "./login.reducer";
import register from "./register.reducer";
import auth from "./auth";

const authReducers = combineReducers({
  user,
  login,
  register,
  auth,
});

export default authReducers;
