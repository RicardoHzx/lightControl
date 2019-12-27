<template>
  <div class="sensor">
    <header>
      <el-tabs >
        <el-tab-pane label="温度传感器" name="first">
           <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">温度折线图</p>
              <div id="myChart1" :style="{width:'850px', height:'500px',right:'30px'}"></div>
            </div>

            <div class="b1">
            </div>
          </div>
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
              <div id="biao">
               <el-table
    :data="tableData"
    
    border
    style="width: 80%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
              </div>
            </div>
          </div>
        </article>
        </el-tab-pane>
        <el-tab-pane label="风速传感器" name="second">
          <article id="test">
           <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">风速折线图</p>
              <div id="myChart2" :style="{width:'850px', height:'500px',right:'30px'}"></div>
            </div>

            <div class="b1">
            </div>
          </div>
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
              <div id="biao">
               <el-table
    :data="tableData"
    
    border
    style="width: 80%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
              </div>
            </div>
          </div>

        </article>
        </el-tab-pane>
        <el-tab-pane label="光线传感器" name="fourth">
          <article id="test">
          <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">温度折线图</p>
              <div id="myChart1" :style="{width:'850px', height:'500px',right:'30px'}"></div>
            </div>

            <div class="b1">
            </div>
          </div>
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
              <div id="biao">
               <el-table
    :data="tableData"
    
    border
    style="width: 80%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
              </div>
            </div>
          </div>

        </article>
        </el-tab-pane>
        <el-tab-pane label="烟雾传感器" name="fifth"><article id="test">
           <div>
            <div class="b">
              <p style="font-size:30px;margin-left:290px;width:150px;">温度折线图</p>
              <div id="myChart1" :style="{width:'850px', height:'500px',right:'30px'}"></div>
            </div>

            <div class="b1">
            </div>
          </div>
          <div class="c">
            <p style="font-size:30px">事件日志</p>
            <div class="c1">
              <div id="biao">
               <el-table
    :data="tableData"
    
    border
    style="width: 80%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
              </div>
            </div>
          </div>
        </article></el-tab-pane>
        <!-- <el-input v-model="tabData[0]" placeholder="请输入内容" clearable size="small" /> -->
        <el-tab-pane v-model="tabData[0]"></el-tab-pane>
       
      </el-tabs>
    </header>
 
  </div>
</template>

<script>
export default {
name: 'eCharts',   
data() {
    return {
       tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      msg: 'Welcome to Your Vue.js App',
      tabData: ["1", "1", "1"],
      methods: {
        goBack() {
          console.log("go back");
        }
      }
    };
  },
  mounted(){
        this.drawLine();
    },

  methods:{
            drawLine(){
            // 基于准备好的dom，初始化echarts实例
            var myChart1 = this.$echarts.init(document.getElementById('myChart1'))
            // 绘制图表
            myChart1.setOption({
                title: { text: '温度折线图' },
                tooltip: {},
                xAxis: {

        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]}  );

      var myChart2 = this.$echarts.init(document.getElementById('myChart2'))
            // 绘制图表
            myChart2.setOption({
                title: { text: '风速折线图' },
                tooltip: {},
                xAxis: {

        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]}  );







        }
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
 background: #0d8613;
  
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