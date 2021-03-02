import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import thunkMiddleware from 'redux-thunk'

import rootReducer from "../reducers"

// Redux store configration
function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware,
      thunk
    )
  )

  return store;
}

const store = configureStore()
export default store;