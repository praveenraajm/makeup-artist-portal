import axios from 'axios';
import { toast } from 'react-toastify';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_SESSION_DETAILS
} from '../actions/session';
import {
  setAccessToken,
  setSessionDetails,
  setIsAuthenticated,
  getIsAuthenticated,
  removeSession
} from '../utils/localStorage';

const initialState = {
  loading: false,
  user: {},
  error: '',
  isAuthenticated: getIsAuthenticated()
};

const setSessionDetailsResult = (state, payload) => ({
  ...state,
  user: payload
});

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SESSION_DETAILS:
      return setSessionDetailsResult(state, payload);
    case LOGIN_REQUEST: {
      return {
        ...state,
        isAuthenticated: false,
        loading: true
      };
    }

    case LOGIN_SUCCESS: {
      const { sessionContext, token } = payload;
      axios.defaults.headers.common = {
        SessionContext: sessionContext
      };

      setAccessToken(token);
      setSessionDetails(payload);
      setIsAuthenticated(true);

      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    }

    case LOGIN_FAIL: {
      toast.error(payload.message);
      removeSession();
      return {
        ...state,
        loading: false
      };
    }

    case LOGOUT: {
      removeSession();
      return {
        ...state,
        user: {},
        loading: false,
        isAuthenticated: false
      };
    }

    default:
      return state;
  }
}
