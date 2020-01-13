import { get,post} from '../../http/axios'


export default {
    namespaced: true,
    state: {
        models:[],
        logs:{},
    },
    mutations: {
        refreshModels(state,models){
            state.models = models
        },
        refreshLogs(state,logs){
            state.logs = logs
        }
    },
    actions: {
        //查找所有情景模式
        async findAllModel(context){
            let res = await get('/model/getAllModel')
            context.commit('refreshModels',res.data)
        },
        //查找前三情景模式
        async findAllModel(context){
            let res = await get('/model/getAllModel')
            context.commit('refreshModels',res.data)
        },
        //查看日志
        async findLogById(context,params){
            let res = await get('/log/selectlogid/',params)
            context.commit('refreshLogs',res.data)
        },
        //定时开启 
        async timingOpen(context,params){
            let res = await get('/model/timeOpen/',params)
            context.dispatch('findAllModel')
            context.commit('refreshModels',res.data)
        },
        //定时关闭
        async timeClosure(context,params){
            let res = await get('/model/timeClose/',params)
            context.dispatch('findAllModel')
            context.commit('refreshModels',res.data)
        },
        //开启模式
        async openModel(context,params){
            let res = await post('/model/openModel/'+params)
            context.dispatch('findAllModel')
            context.commit('refreshModels',res.data)
        },
        //关闭模式
        async closeModel(context,params){
            let res = await post('/model/closeModel/'+params)
            context.dispatch('findAllModel')
            context.commit('refreshModels',res.data)
        },
        //删除模式
        async deleteModel(context,id){
            let res = await post('/model/delModel/'+id)
            context.dispatch('findAllModel')
            context.commit('refreshModels',res.data)
        },

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