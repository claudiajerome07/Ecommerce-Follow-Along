import {setEmail} from './UsersSlice.js'

export const setUserEmail=(email)=>(dispatch)=>{
    dispatch(setEmail(email));
    return
}

