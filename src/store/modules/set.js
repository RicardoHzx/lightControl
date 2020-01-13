import {post,get,post_array} from '@/http/axios'
import data from '@/views/pdf/content';
export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async addModel(context, params) {
            let response = await post_array('/model/addModel/{model}',params)
            return response;
        },

    }
}