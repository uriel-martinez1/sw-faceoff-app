import axios from 'axios';

const http = axios.create({
    baseURL: 'https://swapi.dev/api' // axios is expecting the variable to be set as baseURL
});

export default {
    // this is where the http methods that all components can use to make call to the SWAPI api
    getPeople() {
        return http.get('/people');
    },
    getPeoplePagination(page) {
        return http.get(`/people/?page=${page}`)
    },
}