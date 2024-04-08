import axios from 'axios';
import getConfig from 'next/config';

const instance = axios.create({
  baseURL: 'http://localhost:4000'
});
export default instance