import axios from 'axios';
import { getErrorObject } from 'utils/apiUtils';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = (formData) => async (dispatch) => {
  const body = JSON.stringify(formData);
  dispatch({ type: LOGIN_REQUEST });
  try {
    const res = await axios.post('/login', body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: getErrorObject(err)
    });
  }
};

export const SET_SESSION_DETAILS = 'SET_SESSION_DETAILS';

export const setSessionDetails = (user) => async (dispatch) => {
  dispatch({
    type: SET_SESSION_DETAILS,
    payload: user
  });
};

export const LOGOUT = 'LOGOUT';

export const logout = () => async (dispatch) => {
  try {
    const res = await axios.post('/session/logout');
    dispatch({
      type: LOGOUT
    });
  } catch (err) {
    dispatch({
      type: LOGOUT
    });
  }
};
