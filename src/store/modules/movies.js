import axios from "@/plugins/axios"
import IDs from "../mock/imdb_top.250"


const moviesStore = {
    namespaced: true,
    state: {
        top250IDs: IDs,
        currentPage: 1,
        moviesPerPage: 12
    },
    getters: {
        slicedIDs: ({ top250IDs }) => (from, to) => top250IDs.slice(from, to),
        currentPage: ({ currentPage }) => currentPage,
        moviesPerPage: ({ moviesPerPage }) => moviesPerPage
    },
    mutations: {},
    actions: {
        async fetchMovies({ getters }) {
            const { currentPage, moviesPerPage, slicedIDs} = getters;
            const from = (currentPage * moviesPerPage) - moviesPerPage;
            const to = currentPage * moviesPerPage;
            const moviesToFetch = slicedIDs(from, to);
            console.log(moviesToFetch);
            const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
            console.log(requests);
            const response = await Promise.all(requests);
            console.log(response);
        }
    }
};

export default moviesStore;