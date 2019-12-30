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
        async openRGB1(context, data) {
            let response = await get('/changeRGB/1/'+data.value1+"/"+data.value2+"/"+data.value3)
            return response;
        },
        async openRGB2(context, data) {
            let response = await get('/changeRGB/2/'+data.value4+"/"+data.value5+"/"+data.value6)
            return response;
        },
       

    }
}