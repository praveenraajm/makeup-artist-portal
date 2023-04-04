import { isNil } from 'lodash';

const ACCESS_TOKEN = 'accessToken';
const SESSION_DETAILS = 'sessionDetails';
const ISAUTHENTICATED = 'isAuthenticated';

export const setAccessToken = (token) => {
  window.localStorage.setItem(ACCESS_TOKEN, token);
};

export const getAccessToken = () => {
  const token = window.localStorage.getItem(ACCESS_TOKEN);
  if (isNil(token) || token === 'undefined') {
    window.localStorage.removeItem(ACCESS_TOKEN);
    return '';
  } else {
    return token || '';
  }
};

export const setSessionDetails = (session) => {
  window.localStorage.setItem(SESSION_DETAILS, JSON.stringify(session));
};

export const getSessionDetails = () => {
  const session = JSON.parse(window.localStorage.getItem(SESSION_DETAILS));
  if (isNil(session)) {
    window.localStorage.removeItem(SESSION_DETAILS);
    return null;
  }
  return session;
};

export const setIsAuthenticated = (value) => {
  window.localStorage.setItem(ISAUTHENTICATED, value);
};

export const getIsAuthenticated = () => {
  const isAuthenticated = window.localStorage.getItem(ISAUTHENTICATED);
  if (isNil(isAuthenticated)) {
    window.localStorage.removeItem(ISAUTHENTICATED);
    return '';
  } else {
    return isAuthenticated || false;
  }
};

export const removeSession = () => {
  window.localStorage.removeItem(SESSION_DETAILS);
  window.localStorage.removeItem(ACCESS_TOKEN);
  window.localStorage.removeItem(ISAUTHENTICATED);
};
