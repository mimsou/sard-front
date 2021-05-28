import axios from 'axios';
import authHeader from './auth-header';

import getApiUrl from './auth-config';

const API_URL = getApiUrl()+"viexs/";

class RoutesService {
  
  getMenuRoutes() {
    return axios.get(API_URL + 'all');
  }

  
}

export default new RoutesService();
