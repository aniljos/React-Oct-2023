//initial State
const initState = {
    isAuthenticated: false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}

//reducer
export const authReducer = (currentState=initState, action)=> {

    //return the updated state
    if(action.type === "SAVE_AUTH"){
        return action.payload;
    }

    return currentState;
}