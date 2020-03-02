import axios from 'axios';
import { API_URL } from '../../../utils/constants';

export const getNormalRequestListApi = async (param) => {
  try {
    const response =  await axios({
      method: 'POST',
      url: `${API_URL}get-normal-request`,
      headers: { 'Content-Type': 'application/json' },
      data: param.params
    });
    return response && response.data
  } catch (e) {
    return e;
  }
};
export const addNormalRequestListApi = async (param) => {
  try {
    let formData = new FormData();
    formData.append("title", param.title);
    formData.append("description", param.description);
    formData.append("attachment", param.attachment);
    formData.append("status", "open");
    formData.append("requested_by","aman1@gmail.com");

    return await axios({
      method: 'POST',
      url: `${API_URL}create-normal-request`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData
    });
  } catch (e) {
    return e;
  }
};







