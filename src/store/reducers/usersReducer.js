import { SocialAPI } from "../../api/api";

const GET_USERS = "get/users";
const CHANGE_PAGE = "change/page";
const IS_LOADING = "is/loading";
const TOTAL_USERS_COUNT = "total/users/count";

const initState = {
  users: [],
  currentPage: 1,
  isLoading: false,
  totalUsersCount: 0,
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
    case TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };

    default:
      return state;
  }
};

const getUsersAC = (data) => ({ type: GET_USERS, payload: data });
export const changePageAC = (newPage) => ({type: CHANGE_PAGE, payload: newPage,});
const isLoadingAC = (bool) => ({ type: IS_LOADING, payload: bool });
const totalUsersCountAC = (totalCount) => ({type: TOTAL_USERS_COUNT,  payload: totalCount,});

export const userThunkCreator = (page) => {
  return (dispatch) => {
    dispatch(isLoadingAC(true));
    SocialAPI.getUsers(page).then((res) => {
    dispatch(totalUsersCountAC(res.data.totalCount));
    dispatch(getUsersAC(res.data.items));
    dispatch(isLoadingAC(false));
    });
  };
};

export default usersReducer;
