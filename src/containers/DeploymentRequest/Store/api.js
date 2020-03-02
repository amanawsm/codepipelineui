import axios from 'axios';
import { API_URL } from '../../../utils/constants';

export const getDeploymentRequestListApi = async (param) => {
  try {
    //return dummyData
    const response = await axios({
      method: 'POST',
      url: `${API_URL}get-deployment-request `,
      headers: { 'Content-Type': 'application/json' },
      data: param.params
    });
    return response && response.data
  } catch (e) {
    return e;
  }
};

export const updateDploymentRequestStatusApi = async (param) => {
  try {
    console.log('PARAM: ', param);
    //return dummyData
    const response = await axios({
      method: 'PUT',
      url: `${API_URL}update-deployment-request  `,
      headers: { 'Content-Type': 'application/json' },
      data: param
    });
    return response && response.data
  } catch (e) {
    return e;
  }
}







