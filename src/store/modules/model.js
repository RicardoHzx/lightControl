import { get } from '../../http/axios'


export default {
    namespaced: true,
    state: {

    },
    mutations: {

    },
    actions: {
        async openLight(context, data) {
            let response = await get('http://10.0.0.29:8888/lightsOpen')
            return response;
        },
        async closeLight(context, data) {
            let response = await get('http://10.0.0.29:8888/lightsOff')
            return response;
        },
        async openAir(context, data) {
            let response = await get('http://10.0.0.29:8888/kongtiao/open')
            return response;
        },
        async closeAir(context, data) {
            let response = await get('http://10.0.0.29:8888/kongtiao/close')
            return response;
        },
        async openWindow(context, data) {
            let response = await get('http://10.0.0.29:8888/chuanglian/open')
            return response;
        },
        async closeWindow(context, data) {
            let response = await get('http://10.0.0.29:8888/chuanglian/close')
            return response;
        },
    }
}