import axios from 'axios';

export default {
    // GET ALL BOOKS
    getBooks: () => {
        return axios.get('/api/books');
    }
}