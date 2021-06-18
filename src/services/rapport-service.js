import axios from 'axios';
import authHeader from './auth-header';

import getApiUrl from './auth-config';
const API_URL = getApiUrl();

class RapportService {
  
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getSharedUserRapport(user) {
    return axios.get(API_URL + 'users/'+user+'/shares', { headers: authHeader() });
  }

  getComments(rapport){
    return axios.get(API_URL + 'rapports/'+rapport+'/comments', { headers: authHeader() });
  }

  addComments(comments){
    return axios.post(API_URL + 'comments',comments,{ headers: authHeader() });
  }

  
}

export default new RapportService();
