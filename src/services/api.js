import axios from 'axios';

const api = axios.create({ baseURL: 'https://nodeapi-rocketseat.herokuapp.com/api' });

export default api;