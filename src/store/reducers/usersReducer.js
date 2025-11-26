import { SocialAPI } from "../../api/api";

const GET_USERS = "get/users";
const CHANGE_PAGE = "change/page";
const IS_LOADING = "is/loading";

const initState = {
  users: [],
  currentPage: 1,
  isLoading: false,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

const getUsersAC = (data) => ({ type: GET_USERS, payload: data });
export const changePageAC = (newPage) => ({
  type: CHANGE_PAGE,
  payload: newPage,
});
const isLoadingAC = (bool) => ({ type: IS_LOADING, payload: bool });

export const userThunkCreator = () => {
  return (dispatch) => {
    dispatch(isLoadingAC(true));
    SocialAPI.getUsers().then((res) => {
      dispatch(getUsersAC(res.data.items));
      dispatch(isLoadingAC(false));
    });
  };
};

export default usersReducer;
