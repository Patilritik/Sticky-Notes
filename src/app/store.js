import {configureStore} from '@reduxjs/toolkit'
import NoteReducer from '../slices/slice'

export const store = configureStore({
    reducer : NoteReducer,

})