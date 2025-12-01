import { SocialAPI } from "../../api/api"

const GET_PROFILE = 'get/profile'

const initState = {
    profile: null
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload
            }

        default:
            return state
    }
}

const getProfileAC = (profileData) => ({ type: GET_PROFILE, payload: profileData })

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        SocialAPI.getProfile(userId)
            .then((res) => {
                dispatch(getProfileAC(res.data))
            })
    }
}

export default profileReducer