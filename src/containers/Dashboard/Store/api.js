import axios from 'axios';
import { API_URL } from '../../../utils/constants';

export const getEnvironemntsApi = async (param) => {
  try {
    //return dummyData
    const response = await axios({
      method: 'GET',
      url: `${API_URL}get-environments`,
      headers: { 'Content-Type': 'application/json' },
    });
    return response && response.data

  } catch (e) {
    return e;
  }
};


export const getprogramDetailApi = async (param) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${API_URL}get-applications`,
      headers: { 'Content-Type': 'application/json' },
      data: { 'environment': Number(param.tabId), 'app_type_id': Number(param.subTab) }
    });
    return response && response.data
  } catch (e) {
    return e;
  }
};

export const getSelectTabProgramDataApi = async (param) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${API_URL}get-application-types`,
      headers: { 'Content-Type': 'application/json' },
      data: { 'environment': Number(param.tabId) }
    });
    return response && response.data
  } catch (e) {
    return e;
  }
};

export const getappdataApi = async (param) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${API_URL}get-app-data `,
      headers: { 'Content-Type': 'application/json' },
      data: { 'env_id': Number(param.env_id), app_type_id: Number(param.app_type_id) }
    });
    return response && response.data
  } catch (e) {
    return e;
  }
};

export const getappProgramdataApi = async (param) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${API_URL}get-program-data`,
      headers: { 'Content-Type': 'application/json' },
      data: { 'env_id': Number(param.env_id), app_type_id: Number(param.app_type_id), app_name: param.app_name }
    });
    return response && response.data
  } catch (e) {
    return e;
  }
};
