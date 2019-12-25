import { get } from '../../http/axios'
export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async openLight1(context, data) {
            let response = await get('/lightOpen/1')
            return response;
        },
        async closeLight1(context, data) {
            let response = await get('/lightClose/1')
            return response;
        },
        async openLight2(context, data) {
            let response = await get('/lightOpen/2')
            return response;
        },
        async closeLight2(context, data) {
            let response = await get('/lightClose/2')
            return response;
        },
       

    }
}