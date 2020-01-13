import {post,get,post_array} from '@/http/axios'
export default {
    namespaced: true,
    state: {
        status:[],
    },
    mutations: {
        refreshStatus(state,data){
            state.status=data;
        }
    },
    actions: {
        async hellogetStatus(context,data) {
            // alert(1)
            let response = await get('/sensor/getSensorData')
            context.commit('refreshStatus',response.data)
            return response;
        },

    }
}