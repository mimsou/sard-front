import axios from 'axios';
import authHeader from './auth-header';

import getApiUrl from './auth-config';
const API_URL = getApiUrl();

class UserService {
  
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUser() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  
}

export default new UserService();
