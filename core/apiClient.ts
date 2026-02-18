import axios from 'axios';

export class APIClient {
  static async get(endpoint: string) {
    return axios.get(`${process.env.API_URL}${endpoint}`);
  }

  static async post(endpoint: string, data: any) {
    return axios.post(`${process.env.API_URL}${endpoint}`, data);
  }
}
