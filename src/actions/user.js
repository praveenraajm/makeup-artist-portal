import axios from 'axios';
import { getErrorObject } from 'utils/apiUtils';

export const USER_LIST_REQUEST = 'USER_LIST_REQUEST';
export const USER_LIST_SUCCESS = 'USER_LIST_SUCCESS';
export const USER_LIST_FAIL = 'USER_LIST_FAIL';

export const getUsers = () => async (dispatch) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const res = await axios.get('/users');
    dispatch({
      type: USER_LIST_SUCCESS,
      payload: res.data?.data
    });
  } catch (err) {
    dispatch({
      type: USER_LIST_FAIL,
      payload: getErrorObject(err)
    });
  }
};
