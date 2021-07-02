import axios from 'axios';

export default {
    // GET ALL BOOKS
    getBooks: () => {
        return axios.get('/api/books');
    },
    // GET BOOKS WITH GIVEN ID
    getBook: (id) => {
        return axios.get(`/api/books/${id}`);
    },

    // DELETES THE BOOK WITH GIVEN ID
    deleteBook: (id) => {
        return axios.delete(`api/books/${id}`);
    },
    // SAVE BOOKS TO DB
    saveBook: (bookData) => {
        return axios.post('api/books', bookData)
    },
    getTitles: (bookTitle) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${bookTitle}`);
    }

};