import axios from "@/plugins/axios"
import IDs from "../mock/imdb_top.250"


const moviesStore = {
    namespaced: true,
    state: {
        top2IDs: IDs
    },
    getters: {},
    mutations: {},
    actions: {
        async fetchMovies(context) {
            console.log(context);
            const response = await axios.get('/', {
                params: {
                    i: "tt1285016"
                }
            });
            console.log(response);
        }
    }
};

export default moviesStore;