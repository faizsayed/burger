import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-53a97.firebaseio.com/'
});

export default instance;