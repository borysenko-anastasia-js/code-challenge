import {
  SET_USER
} from '../actions/user/actionTypes'

const initialState = {
  isLoggedin: false,
  userInfo: {}
}

export default function appReducer(state=initialState, action) {
  const { payload, type } = action

  switch (type) {
    case SET_USER:
      return Object.assign({}, state, {
        isLoggedin: true,
        userInfo: payload,
      })
    default:
      return state
  }
}