import {
  createStore,
  combineReducers,
  applyMiddleware,
  Store,
  AnyAction,
} from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import userReducer, { UserState } from "../slices/userSlice";
import { AuthState } from "../interfaces/actions";

export interface RootState {
  auth: AuthState;
  user: UserState;
}

type AppActions = AnyAction;

type AppStore = Store<RootState, AppActions>;

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const store: AppStore = createStore(rootReducer, applyMiddleware(thunk));

export default store;
