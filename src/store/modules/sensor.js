import {get} from '../../http/axios'

export default {
  namespaced:true,
  state: {
  
  },
  mutations: {
  
  },
  actions: {
    async openKongtiao(context,data){
      let response =await get('/OpenOrClose/closeAirConditioner',{model:{}})
      return response;
    },
  }
}