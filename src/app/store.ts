import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";

import { pokemonApi } from "./services/api";
import counterReducer from "../features/counter/counterSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
