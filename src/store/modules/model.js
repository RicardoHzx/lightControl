import { get } from '../../http/axios'

export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async openLight(context, data) {
            let response = await get('/lightsOpen')
            return response;
        },
        async closeLight(context, data) {
            let response = await get('/lightsOff')
            return response;
        },
    }
}