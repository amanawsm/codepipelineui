
import {
  GET_AUTH_USER,
} from './constant';
import {
  UNAUTH_USER
} from '../../../utils/constants';

/**
 * Get User Info for Login
 * @param {String} email
 */
export const getUserLogin = postData => ({
  type: GET_AUTH_USER, postData,
});

/**
 * Logout 
 */
export const getLogout = () =>({
  type: UNAUTH_USER,
})