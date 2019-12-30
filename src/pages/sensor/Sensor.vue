<template>
  <div class="sensor">
    <header>
      <el-tabs v-model="activitename">
        <el-tab-pane label="温度传感器" name="first" @click="getXYData()" >
          <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">温度折线图</p>
              <div id="myChart1" :style="{width:'850px', height:'500px',right:'30px'}"></div>
          </div>
          </div>
         <!-- 表格 --> 
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
          <div id="biao">
            <el-table :data="tableD" border style="width: 80%">
              <el-table-column
                prop="sensorId"
                label="传感器id"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sensorTime"
                label="传感器时间"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sensorData"
                label="传感器数据">
              </el-table-column>
                </el-table>
            </div>
          </div>
        </div>
        </article>
        </el-tab-pane>
        <!-- ----------------------------------------------------------- -->

        <el-tab-pane label="风速传感器" name="second"  @click="getXYData2()">
           <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">风速折线图</p>
              <div id="myChart2" :style="{width:'850px', height:'500px',right:'30px'}"></div>
          </div>
          </div>
         <!-- 表格 --> 
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
          <div id="biao">
            <el-table :data="tableD2" border style="width: 80%">
              <el-table-column
                prop="sensorId"
                label="传感器id"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sensorTime"
                label="传感器时间"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sensorData"
                label="传感器数据">
              </el-table-column>
                </el-table>
            </div>
          </div>
        </div>
        </article>
        </el-tab-pane>

  <!-- ----------------------------------------------------------- -->


        <el-tab-pane label="光线传感器" name="fourth">
         <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">温度折线图</p>
              <div id="myChart1" :style="{width:'850px', height:'500px',right:'30px'}"></div>
          </div>
          </div>
         <!-- 表格 --> 
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
          <div id="biao">
            <el-table :data="tableD" border style="width: 80%">
              <el-table-column
                prop="sensorId"
                label="传感器id"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sensorTime"
                label="传感器时间"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sensorData"
                label="传感器数据">
              </el-table-column>
                </el-table>
            </div>
          </div>
        </div>
        </article>
        </el-tab-pane>

  <!-- ----------------------------------------------------------- -->


        <el-tab-pane label="烟雾传感器" name="fifth">
         <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">温度折线图</p>
              <div id="myChart1" :style="{width:'850px', height:'500px',right:'30px'}"></div>
          </div>
          </div>
         <!-- 表格 --> 
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
          <div id="biao">
            <el-table :data="tableD" border style="width: 80%">
              <el-table-column
                prop="sensorId"
                label="传感器id"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sensorTime"
                label="传感器时间"
                width="180">
              </el-table-column>
              <el-table-column
                prop="sensorData"
                label="传感器数据">
              </el-table-column>
                </el-table>
            </div>
          </div>
        </div>
        </article>





        </el-tab-pane>
        <!-- <el-input v-model="tabData[0]" placeholder="请输入内容" clearable size="small" /> -->
        <el-tab-pane v-model="tabData[0]"></el-tab-pane>
        </el-tabs>

    </header>
 
  </div>
</template>

<script>

import {mapState,mapActions}from 'vuex'
export default {
name: 'eCharts',   
data() {
    return {
activitename:"first",
      //  tableData: 
      tabData: ["1", "1", "1"],
      methods: {
        goBack() {
          console.log("go back");
        }
      }
    };
  },

  computed:{
 ...mapState('sensor',['XData','YData','tableD','tableD2','XData2','YData2']),
  },
  created(){
    this.getXYData();
    this.getXYData2();
    this.getData().then(function(){
      console.log(this.tableD,'=======================');
    });
    this.getData2();
     
    
  },
  mounted(){
     
        this.drawLine(this.XData,this.YData);
        this.drawLine2(this.XData2,this.YData2);
    },

  methods:{
    ...mapActions('sensor',['getXYData','getData','getXYData2','getData2']),
            drawLine(XData,YData){
            // 基于准备好的dom，初始化echarts实例
            var myChart1 = this.$echarts.init(document.getElementById('myChart1'))
            // 绘制图表
            myChart1.setOption({
                title: { text: '温度折线图' },
                tooltip: {},
                xAxis: {
                type: 'category',
                boundaryGap: false,
                data: XData
    },
    yAxis: {
        type: 'value',
       
        
    },
    series: [{
        data:YData,
        type: 'line',
        areaStyle: {}
    }]});
     },
     // ------------------------------------------------------------------------------------
         drawLine2(XData2,YData2){
            // 基于准备好的dom，初始化echarts实例
            var myChart2 = this.$echarts.init(document.getElementById('myChart2'))
            // 绘制图表
            myChart2.setOption({
                title: { text: '风速折线图' },
                tooltip: {},
                xAxis: {
                type: 'category',
                boundaryGap: false,
                data: XData2
    },
    yAxis: {
        type: 'value',
       
        
    },
    series: [{
        data:YData2,
        type: 'line',
        areaStyle: {}
    }]});
     }   
     // ------------------------------------------------------------------------------------
     }
};




</script>
<style scoped>
.sensor {
  height: 300px;
  width: 100%;
}
#test {
  height: 100%;
  width: 100%;
  overflow: hidden;

  
  /* border: gray 3px solid; */
}
.b {
  margin-left: 5%;
  position: absolute;
  
  width: 10%;
}
.b1 {
  position: absolute;

  width: 50%;
  height: 550px;
  margin-top: 50px;
}
.c {
  margin-left: 50%;
  float: left;
  height: 600px;
  width: 60%;
}
.c1 {

  margin-top:8%;
  width: 100%;
  height: 400px;
  border-left: gray 2px solid;  
  
}

header {
  margin-left: 1%;
  height: 20%;
  width: 100%;
  margin-top: 2%;
  text-align: center;
}

[id^="a"] {
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin-left: 5%;
}

footer {
  border: gray 3px solid;
  width: 80%;
  height: 20%;
  margin-left: 10%;
}
#jiantou {
  height: 20px;
  width: 5%;
  position: absolute;
  margin-top: 20%;
}
#sensor{
    height: 100%;
    width: 100%;
}
#biao{
  margin-left: 3%;
  
}
</style>