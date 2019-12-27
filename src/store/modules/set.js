import {post,get} from '@/http/axios'
import data from '@/views/pdf/content';
export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        // async addModel(context, params) {
        //     let response = await post('/model/addModel',params)
        //     return response;
        // },
        async addModel(context, params) {
            let response = await post('/model/addModel/'+params.modelId+"/"+data)
            return response;
        },

    }
}