import axios from "axios";

// action types
export const LOGIN = "LOGIN";
// export const LOGOUT = "LOGOUT";
// Action Creators
export const ulogin = (clientData) => {
    return {
        type : LOGIN,
        payload: clientData
    }
}


// export const ulogout = () => {
//     return {
//         type : LOGOUT,
//     }
// }

export const loginDetails = (payload) => async (dispatch) => {
    const {data} = await axios("http://localhost:8080/users");
    let User = data.filter((e)=> {
        if(user.username === payload.username && user.pass === payload.password){
            return user;
        }
    });
    if(User){
        localStorage.setItem("userLoginDetails", JSON.stringify(User));
        dispatch(ulogin(User));
    };
}