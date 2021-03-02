import {
  SET_USER
} from './actionTypes.js';

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user
  }
}