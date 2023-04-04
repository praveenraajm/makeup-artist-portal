import axios from 'axios';
import { toast } from 'react-toastify';
import {
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL
} from 'actions/user';

const initialState = {
  loading: false,
  error: '',
  users: []
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LIST_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }

    case USER_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: payload
      };
    }

    case USER_LIST_FAIL: {
      toast.error(payload.message);
      return {
        ...state,
        loading: false
      };
    }

    default:
      return state;
  }
}
