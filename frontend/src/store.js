import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  noteCreateReducer,
  noteListReducer,
  noteUpdateReducer,
} from "./reducers/notesReducers";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  noteList: noteListReducer,
  noteCreate: noteCreateReducer,
  noteUpdate: noteUpdateReducer,
  userUpdate: userUpdateReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;
// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };
const middleware = [thunk];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
