import axios from "axios";
import { getUsersAC } from "../store/reducers/usersReducer";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
});

const SocialAPI = {
getUsers(dispatch){
   instance.get(`/users`)
   .then((res) => dispatch(getUsersAC(res.data.items)))
}
}

export {SocialAPI}