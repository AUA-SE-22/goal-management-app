import axios from '../axios';
import { HOST_API } from '../../config';

const buildQuery = (query) => {
  const newQuery = Object.keys(query)
    .filter((key) => query[key])
    .map((key) => `${key}=${query[key]}`)
    .join('&');

  return newQuery ? `?${newQuery}` : '';
};

const waitApiCallTime = 300000;

export class ApiService {
  constructor() {
    if (!HOST_API) throw new Error('Please check .env config');
    this.BASE_URL = `${HOST_API}`;
  }

  buildUrl(resource) {
    return `${this.BASE_URL}/${resource}`;
  }

  get(resource, query = {}, config = {}) {
    return axios.get(`${this.buildUrl(resource) + buildQuery(query)}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      ...config,
      timeout: waitApiCallTime,
    });
  }

  post(resource, body, config) {
    return axios.post(this.buildUrl(resource), body, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      ...config,
      timeout: waitApiCallTime,
    });
  }

  put(resource, body, query = {}, config = {}) {
    return axios.put(`${this.buildUrl(resource) + buildQuery(query)}`, body, {
      ...config,
      timeout: waitApiCallTime,
    });
  }

  delete(resource, body, query = {}, config = {}) {
    return axios.delete(`${this.buildUrl(resource) + buildQuery(query)}`, {
      ...config,
      timeout: waitApiCallTime,
      data: body,
    });
  }
}
