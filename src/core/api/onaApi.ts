
import axios from 'axios';



const onaApi = axios.create({
  baseURL: '/api',
});


export default onaApi;


