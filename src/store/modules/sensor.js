import {get} from '../../http/axios'

export default {
  namespaced: true,
  state: {
    XData:[],
    YData:[],
    XData2:[],
    YData2:[],
  tableD:[],
  tableD2:[]
  },
  mutations: {
    refreshLogs(state, tableD){
    state.tableD =  tableD
    }, 
    refreshLogs2(state, tableD2){
      state.tableD2 =  tableD2
      }, 
  setXData(state,data){
    state.XData = data;
  },
  setYData(state,data){
    state.YData = data;
  },
  setXData2(state,data){
    state.XData2 = data;
  },
  setYData2(state,data){
    state.YData2 = data;
  },
},
//  表格
  actions: {
    async getData(context,params){
    
      let res = await get('/log/selectsensorlogid?modelId=1',params);
      console.log(res.data,'========data----');
      context.commit('refreshLogs',res.data.list)
  },

  async getData2(context,params){
    
    let res = await get('/log/selectsensorlogid?modelId=2',params);

    console.log(res.data,'========data----');
    context.commit('refreshLogs2',res.data.list)
},


    async getXYData({commit,dispatch},data){
      console.log('------------------------------');
      // X轴
      let arr = await get('http://123.56.29.54:8888/log/selectLogTime/?pageNum=1&pageSize=10&sensorId=1');
      console.log(arr);
      // Y轴
      let rs = await get('http://123.56.29.54:8888/log/selectLogData?pageNum=1&pageSize=10&sensorId=1');
      commit('setXData',arr.data.list)
      commit('setYData',rs.data.list)
      dispatch('getData2')
      
    } , 
    
    async getXYData2({commit},data){
      // X轴
      let arr = await get('http://123.56.29.54:8888/log/selectLogTime/?pageNum=1&pageSize=10&sensorId=2');
      console.log(arr);
      // Y轴
      let rs = await get('http://123.56.29.54:8888/log/selectLogData?pageNum=1&pageSize=10&sensorId=2');
      commit('setXData2',arr.data.list)
      commit('setYData2',rs.data.list)
      
    }  
  }
}
