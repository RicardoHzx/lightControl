<template>
    <div class="home">
        <!-- 轮播图 -->
         <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in img_list" :key="item">
            <img :src="item" alt="">
            </el-carousel-item>a
         </el-carousel>

        <!-- 仪表盘 -->
        <div id="f">
          <!-- 折线图的插入地方 -->
        <div id="a"><p class="c1">昆山天气情况:</p></div>
        <div id="b"><p class="c1">天气信息为:
          <!-- 动态获取网络资源 -->
        <button type="button" onclick='document.getElementById("c2").innerHTML="信息已经插入"'>
        点击我查询天气信息
        </button></p>
        </div>
        </div>

      <p></p>
<<<<<<< HEAD

       <!-- 室内信息-->id
=======
       <!-- 室内信息-->
       <!-- <div class="tableTitle"><span class="midText"> 室内信息</span></div> -->
>>>>>>> e8eae51e70dd28c600d0781baaa4c8f552c253ed
    <div id="c">
      <div class="tableTitle"><span class="midText"> 室内信息</span></div>
      <div id="myChart1" :style="{width: '400px', height: '400px'}"></div>
      <div id="myChart2" :style="{width: '400px', height: '400px'}"></div>
      <div id="myChart3" :style="{width: '400px', height: '400px'}"></div>
    </div>

<<<<<<< HEAD
      <!-- 模拟数值表插入位置 -->
    <div id="tooltip"></div>
      <!-- 模拟数值表插入位置 -->
=======
      <!-- 模拟数值表插入 --> 
    <!-- <div id="tooltip"></div>

>>>>>>> e8eae51e70dd28c600d0781baaa4c8f552c253ed
    <div class="e2"><p id="c4">%23
      </p><button type="button" onclick='document.getElementById("c4").innerHTML="湿度已经插入"'>
        点击我查询湿度</button></div>
      <!-- 模拟数值表插入位置 -->
    <div class="e3"><p id="c5">3/m³
      </p><button type="button" onclick='document.getElementById("c5").innerHTML="PM2.5已经插入"'>
        点击我查询PM2.5</button></div>
    </div>
    </div> -->
     <!--设备运行状态-->
<<<<<<< HEAD
    <div id="run">
      <!-- 如果可以得到传感器的数值即返回正常反之亦然 -->
     设备运行状态
    </div>
</div>
=======
     <el-divider content-position="left">.</el-divider>
      <div id="run">
       <div class="tableTitle"><span class="midText"> 设备运行状态</span></div>
        
      </div>

  </div>
>>>>>>> e8eae51e70dd28c600d0781baaa4c8f552c253ed
</template>
<script>



export default {
  neme:"home",
  data(){
    return {
     img_list:[
      require("../../assets/u51.jpg"),
      require("../../assets/u52.jpg"),
      require("../../assets/u53.jpg"),
      require("../../assets/u54.jpg"),
      require("../../assets/u55.jpg"),
      require("../../assets/u56.jpg")  
     ],   
    }
  },
<<<<<<< HEAD
}

//折线图

// option = {
//     xAxis: {
//         type: 'category',
//         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: [820, 932, 901, 934, 1290, 1330, 1320],
//         type: 'line'
//     }]
// };


// 数值表

//     option = {
//     tooltip : {
//         formatter: "{a} <br/>{b} : {c}%"
//     },
//     toolbox: {
//         feature: {
//             restore: {},
//             saveAsImage: {}
//         }
//     },
//     series: [
//         {
//             name: '业务指标',
//             type: 'gauge',
//             detail: {formatter:'{value}%'},
//             data: [{value: 50, name: '完成率'}]
//         }
//     ]
// };
=======
   mounted () {
      let that = this
      this.drawLine();
    },
  methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
        let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        // 绘制图表
        var option1 = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                {
                    name: '室内温度',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '温度'}]
                }
            ]
        };
        myChart1.setOption(option1)
        // 湿度
        var option2 = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                {
                    name: '室内湿度',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: '湿度'}]
                }
            ]
        };
        myChart2.setOption(option2)
        //PM2.5
        var option3 = {
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            series: [
                {
                    name: '室内PM2.5',
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: 'PM2.5'}]
                }
            ]
        };
        myChart3.setOption(option3)
>>>>>>> e8eae51e70dd28c600d0781baaa4c8f552c253ed

        setInterval(function () {
            option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
            myChart.setOption(option, true);
        },2000);
      }
    }
  }

</script>
<style scoped>
  .el-carousel__item h3 {
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    width: 100%;
    height: inherit;
  }
  .tableTitle {
    position: relative;
    margin: 50px auto;
    width: 600px;
    height: 1px;
    background-color: #d4d4d4;
    text-align: center;
    font-size: 24px;
    color: rgba(101, 101, 101, 1);
  }
 .midText {
    position: absolute;
    left: 50%;
    background-color: #ffffff;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }

  #a{
    position: absolute;
    border: gray 3px solid;
    height: 250px;
    width: 55%;
}
#b{
   position: absolute;
    border: gray 3px solid;
    float: left;
   
    margin-left: 58%;
    width: 40%;
    height: 250px;
}
#c{
    /* position: absolute;
    border: gray 3px solid;
    height: 200px;
    width: 100%; */
    width: 100%;
    height: 400px;
    float: left;
}
#myChart1{
  float: left;
}
#myChart2{
  float: left;
}
#myChart3{
  float: left;
}
#f{
  width: 100%;
  height: 250px;
}
.e1{
  position: absolute;
}
.e2{
    position: absolute;
    float: left;
    margin-left:30%;
     
}
.e3{
    margin-left: 60%;
    position: absolute;
    float: left;
   
}
/* #run{
position: absolute;
border: gray 3px solid;
height: 50px;
width: 100%;
margin-top: 200px;
} */


</style>