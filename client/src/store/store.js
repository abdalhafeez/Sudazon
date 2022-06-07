import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import rootReducer from "./rootReducer"
const middleware = [thunk]
const initialState = { name: "some name" }
const reducers = combineReducers({ rootReducer })
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
