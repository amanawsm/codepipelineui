
import {
  GET_REGISTER_USER,
} from './constant';

/**
 * Get User Info for Register process
 * @param {String} email
 */
export const getUserRegistered = postData => ({
  type: GET_REGISTER_USER, postData
});