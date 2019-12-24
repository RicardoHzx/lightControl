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
        async openAir(context, data) {
            let response = await get('/kongtiao/open')
            return response;
        },
        async closeAir(context, data) {
            let response = await get('/kongtiao/close')
            return response;
        },
        async openWindow(context, data) {
            let response = await get('/chuanglian/open')
            return response;
        },
        async closeWindow(context, data) {
            let response = await get('/chuanglian/close')
            return response;
        },
    }
}