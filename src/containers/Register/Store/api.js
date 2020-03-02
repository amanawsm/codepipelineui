import axios from 'axios';
import { API_URL } from '../../../utils/constants';


export const userLoginApi = async (postData) => {
  try {   
    return await axios({
      method: 'POST',
      url: `${API_URL}login`,
      data: {'username': postData.email, 'password': postData.password},
      headers: {'Content-Type': 'application/json', },
    });
  } catch (e) {
    return e;
  }
};

export const userRegisterApi = async (postData) => {
  try {

    return await axios({
      method: 'POST',
      url: `${API_URL}register`,
      data: {'email': postData.email, 'password': postData.password, 'first_name': postData.first_name, 'last_name': postData.last_name},
      headers: {'Content-Type': 'application/json'},
    });
  } catch (e) {
    return e;
  }
};
