import axios from 'axios';

const api = axios.create({
    baseURL: 'https://todolist-api-express.herokuapp.com'
});

export default api;