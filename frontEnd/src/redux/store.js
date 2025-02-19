import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './user/UsersSlice.js'

const store=configureStore({
    reducer:{
        user:UserReducer,
    }
})

export default store