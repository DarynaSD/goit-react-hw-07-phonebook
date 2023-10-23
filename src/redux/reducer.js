// import { combineReducers } from "redux";
import { contactReducer } from "./slice";
import storage from 'redux-persist/lib/storage' 
import persistReducer from "redux-persist/es/persistReducer";


const persistConfig = {
  key: 'root',
  storage,
  blackList: ['filter'],
}
const persistedReducer = persistReducer(persistConfig, contactReducer)

export const rootReducer = {
    contactsHandler: persistedReducer,
}