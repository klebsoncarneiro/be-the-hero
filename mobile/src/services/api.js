import axios from 'axios';

const api = axios.create({
    //pegar url do metro, localhost nao funciona
    baseURL: 'http://192.168.0.66:3333'
});

export default api;