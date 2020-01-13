import {get} from '../../http/axios'

export default {
  namespaced: true,
  state: {
    XData:[],
    YData:[],
    XData2:[],
    YData2:[],
    XData3:[],
    YData3:[],
    XData4:[],
    YData4:[],
    XData5:[],
    YData5:[],
    XData6:[],
    YData6:[],
    XData7:[],
    YData7:[],
    tableD:[],
    tableD2:[],
    tableD3:[],
    tableD4:[],
    tableD5:[],
    tableD6:[],
    tableD7:[]

  },
  mutations: {
    refreshLogs(state, tableD){
    state.tableD =  tableD
    }, 
    refreshLogs2(state, tableD2){
    state.tableD2 =  tableD2
    }, 
    refreshLogs3(state, tableD3){
    state.tableD3 =  tableD3
    },
    refreshLogs4(state, tableD4){
    state.tableD4 =  tableD4
    }, 
    refreshLogs5(state, tableD5){
    state.tableD5 =  tableD5
    }, 
    refreshLogs6(state, tableD6){
    state.tableD6 =  tableD6
    },
    refreshLogs7(state, tableD7){
    state.tableD7 =  tableD7
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
  setXData3(state,data){
    state.XData3 = data;
  },
  setYData3(state,data){
    state.YData3 = data;
  },
  setXData4(state,data){
    state.XData4 = data;
  },
  setYData4(state,data){
    state.YData4 = data;
  },
  setXData5(state,data){
    state.XData5 = data;
  },
  setYData5(state,data){
    state.YData5 = data;
  },
  setXData6(state,data){
    state.XData6 = data;
  },
  setYData6(state,data){
    state.YData6 = data;
  },
  setXData7(state,data){
    state.XData7= data;
  },
  setYData7(state,data){
    state.YData7 = data;
  },
},
//  表格
  actions: {
    async getData(context,params){
      let res = await get('/log/selectsensorlogid?modelId=8',params);
      console.log(res.data,'========data----');
      context.commit('refreshLogs',res.data.list)
  },

  async getData2(context,params){
    let res = await get('/log/selectsensorlogid?modelId=9',params);
    console.log(res.data,'========data----');
    context.commit('refreshLogs2',res.data.list)
},

async getData3(context,params){
  let res = await get('/log/selectsensorlogid?modelId=1',params);
  console.log(res.data,'========data----');
  context.commit('refreshLogs3',res.data.list)
},
async getData4(context,params){
  let res = await get('/log/selectsensorlogid?modelId=2',params);
  console.log(res.data,'========data----');
  context.commit('refreshLogs4',res.data.list)
},

async getData5(context,params){
  let res = await get('/log/selectsensorlogid?modelId=3',params);
  console.log(res.data,'========data----');
  context.commit('refreshLogs5',res.data.list)
},

async getData6(context,params){
  let res = await get('/log/selectsensorlogid?modelId=10',params);
  console.log(res.data,'========data----');
  context.commit('refreshLogs6',res.data.list)
},

async getData7(context,params){
  let res = await get('/log/selectsensorlogid?modelId=11',params);
  console.log(res.data,'========data----');
  context.commit('refreshLogs7',res.data.list)
},




    async getXYData({commit},data){
      console.log('------------------------------');
      // X轴
      let arr = await get('http://123.56.29.54:8888/log/selectLogTime/?pageNum=1&pageSize=10&sensorId=8');
      console.log(arr);
      // Y轴
      let rs = await get('http://123.56.29.54:8888/log/selectLogData?pageNum=1&pageSize=10&sensorId=8');
      commit('setXData',arr.data.list)
      commit('setYData',rs.data.list)
      
      
    } , 
    
    async getXYData2({commit,dispatch},data){
      // X轴
      let arr = await get('http://123.56.29.54:8888/log/selectLogTime/?pageNum=1&pageSize=10&sensorId=9');
      console.log(arr);
      // Y轴
      let rs = await get('http://123.56.29.54:8888/log/selectLogData?pageNum=1&pageSize=10&sensorId=9');
      commit('setXData2',arr.data.list)
      commit('setYData2',rs.data.list)
      dispatch('getData2')
    } ,

    async getXYData3({commit,dispatch},data){
      // X轴
      let arr = await get('http://123.56.29.54:8888/log/selectLogTime/?pageNum=1&pageSize=10&sensorId=1');
      console.log(arr);
      // Y轴
      let rs = await get('http://123.56.29.54:8888/log/selectLogData?pageNum=1&pageSize=10&sensorId=1');
      commit('setXData3',arr.data.list)
      commit('setYData3',rs.data.list)
      dispatch('getData3')
    },
    async getXYData4({commit,dispatch},data){
      // X轴
      let arr = await get('http://123.56.29.54:8888/log/selectLogTime/?pageNum=1&pageSize=10&sensorId=2');
      console.log(arr);
      // Y轴
      let rs = await get('http://123.56.29.54:8888/log/selectLogData?pageNum=1&pageSize=10&sensorId=2');
      commit('setXData4',arr.data.list)
      commit('setYData4',rs.data.list)
      dispatch('getData4')
    },  
    async getXYData5({commit,dispatch},data){
      // X轴
      let arr = await get('http://123.56.29.54:8888/log/selectLogTime/?pageNum=1&pageSize=10&sensorId=3');
      console.log(arr);
      // Y轴
      let rs = await get('http://123.56.29.54:8888/log/selectLogData?pageNum=1&pageSize=10&sensorId=3');
      commit('setXData5',arr.data.list)
      commit('setYData5',rs.data.list)
      dispatch('getData5')
    },  
    async getXYData6({commit,dispatch},data){
      // X轴
      let arr = await get('http://123.56.29.54:8888/log/selectLogTime/?pageNum=1&pageSize=10&sensorId=10');
      console.log(arr);
      // Y轴
      let rs = await get('http://123.56.29.54:8888/log/selectLogData?pageNum=1&pageSize=10&sensorId=10');
      commit('setXData6',arr.data.list)
      commit('setYData6',rs.data.list)
      dispatch('getData6')
    },
    async getXYData7({commit,dispatch},data){
      // X轴
      let arr = await get('http://123.56.29.54:8888/log/selectLogTime/?pageNum=1&pageSize=10&sensorId=11');
      console.log(arr);
      // Y轴
      let rs = await get('http://123.56.29.54:8888/log/selectLogData?pageNum=1&pageSize=10&sensorId=11');
      commit('setXData7',arr.data.list)
      commit('setYData7',rs.data.list)
      dispatch('getData7')
    }  
  }
}
