<template>
  <div class="model">
    <div class="left">
      <div class="button" v-for="item in models" :key="item.id">
        <el-tooltip class="item" effect="dark" :content="item.modelNote" placement="right-start">
          <el-button style="height:160px;width:220px;background-color:#D4D4D4;
border-color:black;" @click="openTable(item.modelId)">{{item.modelName}}</el-button>
        </el-tooltip>
      </div>
    </div>
    <div class="right">
      <el-button type="primary" round style="height:160px;width:220px" @click='openLightAll'>灯光全开</el-button>
      <el-button type="primary" round style="height:160px;width:220px" @click='closeLightAll'>灯光全关</el-button>
      <el-button type="primary" round style="height:160px;width:220px" @click='openAirAll'>空调打开</el-button>
      <el-button type="primary" round style="height:160px;width:220px" @click='closeAirAll'>空调关闭</el-button>
      <el-button type="primary" round style="height:160px;width:220px" @click='openWindowAll'>窗帘打开</el-button>
      <el-button type="primary" round style="height:160px;width:220px" @click='closeWindowAll'>窗帘关闭</el-button>
    </div>
  
  <!-- 抽屉 -->
  <el-drawer title="模式操作信息" :visible.sync="table" direction="rtl" size="50%">
    <!-- 表格 -->
    <el-table :data="logs.list">
      <el-table-column prop="modelId" label="模式" width="150"></el-table-column>
      <el-table-column prop="event" label="使用次数" width="200"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="logs.total">
    </el-pagination>
     <el-row style="margin-top:30px">
     <!-- 定时开启 -->
    <el-button type="text" @click="timeOpen">&nbsp;定时开启&nbsp;</el-button>
    <!-- 定时关闭 -->
    <el-button type="text" @click="timeClose">&nbsp;定时关闭&nbsp;</el-button>
    <!-- 按钮 -->
   
      <el-button  type="primary"  style='margin-left:50px' @click="openModels">&nbsp;永久开启&nbsp;</el-button>
      <el-button  type="primary" @click="closeModels">&nbsp;确认关闭&nbsp;</el-button>
      <el-button type="danger" style='margin-left:450px' @click="deleteModels">&nbsp;&nbsp;删除模式&nbsp;&nbsp;</el-button>
    </el-row>
  </el-drawer>

<!-- {{models}} -->

<!-- <el-row class="a" v-for="item in models" :key="item.id" >
  <el-tooltip class="item" effect="dark" :content="item.modelNote" placement="right-start">
  <el-button style="height:160px;width:220px" @click="openTable(item.modelId)">{{item.modelName}}</el-button>
  </el-tooltip>
</el-row> -->


<!-- <el-row class="right">
  <el-button type="primary" round style="height:160px;width:220px" @click='openLightAll'>灯光全开</el-button>
  <el-button type="primary" round style="height:160px;width:220px" @click='closeLightAll'>灯光全关</el-button>
  <el-button type="primary" round style="height:160px;width:220px" @click='openAirAll'>空调打开</el-button>
</el-row> -->
<!-- <el-row class="right">
  <el-button type="primary" round style="height:160px;width:220px" @click='closeAirAll'>空调关闭</el-button>
  <el-button type="primary" round style="height:160px;width:220px" @click='openWindowAll'>窗帘打开</el-button>
  <el-button type="primary" round style="height:160px;width:220px" @click='closeWindowAll'>窗帘关闭</el-button>
</el-row> -->


</div>
        
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
import Vue from 'vue'
 export default {
    data() {
      return {
       table: false,
       dialog: false,
       id:"",
       loading: false,
       pageNum:0,
       pageSize:6,
       visible:false
      };
    }, 
    created(){
      this.findAllModel()
      this.findById()
    },
    
    computed:{
      ...mapState('model',['models','logs']),
    },
    methods:{
      ...mapActions('model',['openlight','closeLight','openAir','closeAir','openWindow','closeWindow','findAllModel','findLogById','openModel','closeModel','deleteModel','timingOpen','timeClosure']),
      hellooss(){
      console.log('sss')
    },
      // 定时开启
      timeOpen() {
        this.$prompt('请输入时间', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
           let obj = {
            modelId:this.id,
            time:value,
          }
          console.log(value,'hdiuabuib')
          this.timingOpen(obj);
          // this.timingOpen(this.id,value);

           this.$message({
            type: 'success',
            message: value+'秒后开启'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      // 定时关闭
      timeClose() {
        this.$prompt('请输入时间', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          let obj = {
            modelId:this.id,
            time:value,
          }
          this.timeClosure(obj);

          this.$message({
            type: 'success',
            message: value+'秒后关闭'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
         
      },
      //打开模式
      openModels(){
        this.table=false
        this.openModel(this.id);
      },
      // 关闭模式
       closeModels(){
        this.table=false
        this.closeModel(this.id);
      },
      // 删除模式
      deleteModels(){
        this.visible=false
        this.table=false
        this.deleteModel(this.id);
      },
      //查询日志
      openTable(key){
        this.table=true
        this.id=key;
        let obj = {
          modelId:key,
          pageNum:1,
          pageSize:6
        }
        console.log(key)
        this.findLogById(obj);
      },
      // --------灯控---------------  
      openLightAll(){
        this.closeLight();
      },
      closeLightAll(){
        this.openLight();
      },
      openAirAll(){
        this.closeAir();
      },
      closeAirAll(){
        this.openAir();
      },
       openWindowAll(){
        this.closeWindow();
      },
       closeWindowAll(){
        this.openWindow();
      },
      // 分页
      findById(){
        let obj = {
          pageNum:this.pageNum,
          pageSize:6,
          modelId:this.id
        }
        this.findLogById(obj)
      },
       // 分页
      handleCurrentChange(val) {
        this.pageNum = val - 1 
      }
    },
    // 监听分页
    watch:{
      pageNum:function(){
        this.findById()
      }
    }
  };

</script>
<style scoped>
    *{
      padding: 0;
    }
    .model{
      width:100%;
      display: flex;
      justify-content:space-around;
    }
    .left {
     display: flex;
     justify-content:space-between;
     flex-direction: row;
     flex-wrap: wrap;
     position: absolute;
     width:96%;
     height: 680px;
     margin-top: 10px;
       border-bottom:2px solid #8B7765;  
    }
    .button{
      width: 30%;
    }
    .right {
     display: flex;
     justify-content:space-between;
     flex-direction: row;
     flex-wrap: wrap;
      position: fixed;
      width:87%;
      height: 430px;
      margin-top: 700px;
       /* border-top:2px solid gray;  */
    }
</style>