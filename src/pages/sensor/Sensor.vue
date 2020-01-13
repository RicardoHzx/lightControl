<template>
  <div class="sensor">
    <header>
      <el-tabs v-model="activitename">
        <el-tab-pane label="甲醛传感器" name="first" @click="getXYData()" >
          <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">甲醛折线图</p>
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
        <el-tab-pane label="有机物质传感器" name="second"  @click="getXYData2()">
           <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">有机物质折线图</p>
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
        <el-tab-pane label="PM2.5传感器" name="fourth"  @click="getXYData3()">
         <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">PM2.5折线图</p>
              <div id="myChart3" :style="{width:'850px', height:'500px',right:'30px'}"></div>
          </div>
          </div>
         <!-- 表格 --> 
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
          <div id="biao">
            <el-table :data="tableD3" border style="width: 80%">
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
        <el-tab-pane label="温度传感器" name="fifth"  @click="getXYData4()">
         <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">温度折线图</p>
              <div id="myChart4" :style="{width:'850px', height:'500px',right:'30px'}"></div>
          </div>
          </div>
         <!-- 表格 --> 
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
          <div id="biao">
            <el-table :data="tableD4" border style="width: 80%">
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
          <el-tab-pane label="湿度传感器" name="sixth"  @click="getXYData5()">
         <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">湿度折线图</p>
              <div id="myChart5" :style="{width:'850px', height:'500px',right:'30px'}"></div>
          </div>
          </div>
         <!-- 表格 --> 
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
          <div id="biao">
            <el-table :data="tableD5" border style="width: 80%">
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
         <el-tab-pane label="空气质量传感器" name="seventh"  @click="getXYData6()">
         <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">空气质量折线图</p>
              <div id="myChart6" :style="{width:'850px', height:'500px',right:'30px'}"></div>
          </div>
          </div>
         <!-- 表格 --> 
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
          <div id="biao">
            <el-table :data="tableD6" border style="width: 80%">
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
         <el-tab-pane label="二氧化碳传感器" name="eighth"  @click="getXYData7()">
         <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">二氧化碳折线图</p>
              <div id="myChart7" :style="{width:'850px', height:'500px',right:'30px'}"></div>
          </div>
          </div>
         <!-- 表格 --> 
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
          <div id="biao">
            <el-table :data="tableD7" border style="width: 80%">
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
      tabData: ["1", "1", "1","1","1","1","1"],
      methods: {
        goBack() {
          console.log("go back");
        }
      }
    };
  },

  computed:{
 ...mapState('sensor',['XData','YData','tableD','tableD2','tableD3','XData2','YData2','XData3','YData3',
 'tableD4','XData4','YData4','tableD5','XData5','YData5','tableD6','XData6','YData6','tableD7','XData7','YData7',]),
  },
  created(){
    this.getXYData();
    this.getXYData2();
    this.getXYData3();
    this.getXYData4();
    this.getXYData5();
    this.getXYData6();
    this.getXYData7();
    this.getData().then(function(){
      console.log(this.tableD,'=======================');
    });
    this.getData2();
    this.getData3();
    this.getData4();
    this.getData5();  
    this.getData6();
    this.getData7();     
  },
  mounted(){
        this.drawLine(this.XData,this.YData);
        this.drawLine2(this.XData2,this.YData2);
        this.drawLine3(this.XData3,this.YData3);
        this.drawLine4(this.XData4,this.YData4);
        this.drawLine5(this.XData5,this.YData5);
        this.drawLine6(this.XData6,this.YData6);
        this.drawLine7(this.XData7,this.YData7);
    },

  methods:{
    ...mapActions('sensor',['getXYData','getData','getXYData2','getData2','getXYData3','getData3','getXYData4','getData4'
    ,'getXYData5','getData5','getXYData6','getData6','getXYData7','getData7']),
            drawLine(XData,YData){
            // 基于准备好的dom，初始化echarts实例
            var myChart1 = this.$echarts.init(document.getElementById('myChart1'))
            // 绘制图表
            myChart1.setOption({
                title: { text: '甲醛折线图' },
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
                title: { text: '有机物质折线图' },
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
                }, 
     // ------------------------------------------------------------------------------------
     drawLine3(XData3,YData3){
            // 基于准备好的dom，初始化echarts实例
            var myChart3 = this.$echarts.init(document.getElementById('myChart3'))
            // 绘制图表
            myChart3.setOption({
                title: { text: '风速折线图' },
                tooltip: {},
                xAxis: {
                type: 'category',
                boundaryGap: false,
                       data: XData3
                },
                yAxis: {
                    type: 'value',    
                },
                series: [{
                    data:YData3,
                    type: 'line',
                    areaStyle: {}
                }]});
                },
         // ------------------------------------------------------------------------------------
      drawLine4(XData4,YData4){
            // 基于准备好的dom，初始化echarts实例
            var myChart4 = this.$echarts.init(document.getElementById('myChart4'))
            // 绘制图表
            myChart4.setOption({
                title: { text: '风速折线图' },
                tooltip: {},
                xAxis: {
                type: 'category',
                boundaryGap: false,
                       data: XData4
                },
                yAxis: {
                    type: 'value',    
                },
                series: [{
                    data:YData4,
                    type: 'line',
                    areaStyle: {}
                }]});
                },  
         // ------------------------------------------------------------------------------------
        drawLine5(XData5,YData5){
            // 基于准备好的dom，初始化echarts实例
            var myChart5 = this.$echarts.init(document.getElementById('myChart5'))
            // 绘制图表
            myChart5.setOption({
                title: { text: '风速折线图' },
                tooltip: {},
                xAxis: {
                type: 'category',
                boundaryGap: false,
                       data: XData5
                },
                yAxis: {
                    type: 'value',    
                },
                series: [{
                    data:YData5,
                    type: 'line',
                    areaStyle: {}
                }]});
                }, 
         // ------------------------------------------------------------------------------------
        drawLine6(XData6,YData6){
            // 基于准备好的dom，初始化echarts实例
            var myChart6 = this.$echarts.init(document.getElementById('myChart6'))
            // 绘制图表
            myChart6.setOption({
                title: { text: '风速折线图' },
                tooltip: {},
                xAxis: {
                type: 'category',
                boundaryGap: false,
                       data: XData6
                },
                yAxis: {
                    type: 'value',    
                },
                series: [{
                    data:YData6,
                    type: 'line',
                    areaStyle: {}
                }]});
                },  
         // ------------------------------------------------------------------------------------
        drawLine7(XData7,YData7){
            // 基于准备好的dom，初始化echarts实例
            var myChart7 = this.$echarts.init(document.getElementById('myChart7'))
            // 绘制图表
            myChart7.setOption({
                title: { text: '风速折线图' },
                tooltip: {},
                xAxis: {
                type: 'category',
                boundaryGap: false,
                       data: XData7
                },
                yAxis: {
                    type: 'value',    
                },
                series: [{
                    data:YData7,
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