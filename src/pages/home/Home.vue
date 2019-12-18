<template>
    <div class="home">
        <!-- 轮播图 -->
         <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in img_list" :key="item">
            <img :src="item" alt="">
            <!-- <h3>{{ item }}</h3> -->
            </el-carousel-item>a
         </el-carousel>

        <!-- 仪表盘 -->
        <div id="f">
        <div id="a"><p class="c1">昆山天气情况:</p></div>
        <div id="b"><p class="c1">天气信息为:
        <button type="button" onclick='document.getElementById("c2").innerHTML="信息已经插入"'>
        点击我查询天气信息
        </button></p>
        </div>
        </div>
      <p></p>
       <!-- 室内信息-->id
    <div id="c">
    <div><p>室内:</p></div>
    <div>

      <!-- 模拟数值表插入 -->
    <div id="tooltip"></div>

    <div class="e2"><p id="c4">%23
      </p><button type="button" onclick='document.getElementById("c4").innerHTML="湿度已经插入"'>
        点击我查询湿度</button></div>
    <div class="e3"><p id="c5">3/m³
      </p><button type="button" onclick='document.getElementById("c5").innerHTML="PM2.5已经插入"'>
        点击我查询PM2.5</button></div>
    </div>
    </div>
     <!--设备运行状态-->
    <div id="run">
     设备运行状态
    </div>

       </div>
</template>
<script>
export default {
  data(){
    return {
     img_list:[
      require("../../assets/u51.jpg"),
      require("../../assets/u52.jpg"),
      require("../../assets/u53.jpg"),
      require("../../assets/u54.jpg"),
      require("../../assets/u55.jpg"),
      require("../../assets/u56.jpg")
      
       
     ]
    }
  },
}

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


// setInterval(function () {
//     option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
//     myChart.setOption(option, true);
// },2000);
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
    position: absolute;
   border: gray 3px solid;
    height: 200px;
    width: 100%;
    
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
#run{
position: absolute;
border: gray 3px solid;
height: 50px;
width: 100%;
margin-top: 200px;
}


</style>