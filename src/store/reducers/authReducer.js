import { SocialAPI } from "../../api/api";

const LOGIN = "login";


const initState = {
  userId: null,
};

const authReducer = (state = initState, action) => {
  switch (action.cas) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload,
      };

    default:
      return state;
  }
};

const loginAC = (data) => ({type:LOGIN, payload:data})


export const loginThunk =(body) => {
return (dispatch) => {
SocialAPI.login(body)
.then((res) =>{
    dispatch(loginAC(res.data.data.userId))
} )
}
}

export default authReducer;
