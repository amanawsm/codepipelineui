import axios from 'axios';
import { API_URL } from '../../../utils/constants';


export const userLoginApi = async (postData) => {
  try {
   const response = await axios({
    method: 'POST',
    url: `${API_URL}login`,
    data: {'username': postData.email, 'password': postData.password},
    headers: {'Content-Type': 'application/json'},
  });
  axios.defaults.headers.common['Authorization'] = `Bearer ${response[0] && response[0].data && response[0].data.token}`;
    return response && response.data 
  } catch (e) {
    return e;
  }
};