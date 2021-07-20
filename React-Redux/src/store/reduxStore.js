
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './CounterSlice'
import authSlice from './AuthSlice'




const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer},
})



export default store