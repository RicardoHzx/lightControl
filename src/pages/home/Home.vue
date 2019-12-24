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
        <div id="a"><p class="c1">昆山天气情况:</p></div>
        <div id="b"><p class="c1">天气信息为:
        <button type="button" onclick='document.getElementById("c2").innerHTML="信息已经插入"'>
        点击我查询天气信息
        </button></p>
        </div>
        </div>
      <p></p>
       <!-- 室内信息-->
       <!-- <div class="tableTitle"><span class="midText"> 室内信息</span></div> -->
    <div id="c">
      <div class="tableTitle"><span class="midText"> 室内信息</span></div>
      <div id="myChart" style="height:200px;width:800px"></div>
      <!-- <div id="myChart2" :style="{width: '400px', height: '400px'}"></div>
      <div id="myChart3" :style="{width: '400px', height: '400px'}"></div> -->
    </div>

      <!-- 模拟数值表插入 --> 
    <!-- <div id="tooltip"></div>

    <div class="e2"><p id="c4">%23
      </p><button type="button" onclick='document.getElementById("c4").innerHTML="湿度已经插入"'>
        点击我查询湿度</button></div>
    <div class="e3"><p id="c5">3/m³
      </p><button type="button" onclick='document.getElementById("c5").innerHTML="PM2.5已经插入"'>
        点击我查询PM2.5</button></div>
    </div>
    </div> -->
     <!--设备运行状态-->
     <el-divider content-position="left">.</el-divider>
      <div id="run">
       <div class="tableTitle"><span class="midText"> 设备运行状态</span></div>
      </div>

  </div>
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
   mounted () {
      let that = this
      this.drawLine();
    },
  methods:{
    
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
        // let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 0,
                shadowColor: '#203665'
            }
        };
        var option1 = {
          series: [{
              name: '第一个圆环',
              type: 'pie',
              clockWise: false,
              radius: [70, 80],
              itemStyle: dataStyle,
              hoverAnimation: false,
              center: ['15%', '50%'],
              data: [{
                  value: 25,
                  label: {
                      normal: {
                          rich: {
                              a: {
                                  color: '#3a7ad5',
                                  align: 'center',
                                  fontSize: 20,
                                  fontWeight: "bold"
                              },
                              b: {
                                  color: '#fff',
                                  align: 'center',
                                  fontSize: 16
                              }
                          },
                          formatter: function(params){
                              return "{b|在线统计}\n\n"+"{a|"+params.value+"个}"+"\n\n{b|增长2%}";
                          },
                          position: 'center',
                          show: true,
                          textStyle: {
                              fontSize: '14',
                              fontWeight: 'normal',
                              color: '#fff'
                          }
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#2c6cc4',
                          shadowColor: '#2c6cc4',
                          shadowBlur: 0
                      }
                  }
              }, {
                  value: 75,
                  name: 'invisible',
                  itemStyle: {
                      normal: {
                          color: '#24375c'
                      },
                      emphasis: {
                          color: '#24375c'
                      }
                  }
              }]
          }, {
              name: '第二个圆环',
              type: 'pie',
              clockWise: false,
              radius: [70, 80],
              itemStyle: dataStyle,
              hoverAnimation: false,
              center: ['50%', '50%'],
              data: [{
                  value: 50,
                  label: {
                      normal: {
                          rich: {
                              a: {
                                  color: '#d03e93',
                                  align: 'center',
                                  fontSize: 20,
                                  fontWeight: "bold"
                              },
                              b: {
                                  color: '#fff',
                                  align: 'center',
                                  fontSize: 16
                              }
                          },
                          formatter: function(params){
                              return "{b|离线统计}\n\n"+"{a|"+params.value+"个}"+"\n\n{b|增长2%}";
                          },
                          position: 'center',
                          show: true,
                          textStyle: {
                              fontSize: '14',
                              fontWeight: 'normal',
                              color: '#fff'
                          }
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#ef45ac',
                          shadowColor: '#ef45ac',
                          shadowBlur: 0
                      }
                  }
              }, {
                  value: 50,
                  name: 'invisible',
                  itemStyle: {
                      normal: {
                          color: '#412a4e'
                      },
                      emphasis: {
                          color: '#412a4e'
                      }
                  }
              }]
          }, {
              name: '第三个圆环',
              type: 'pie',
              clockWise: false,
              radius: [70, 80],
              itemStyle: dataStyle,
              hoverAnimation: false,
              center: ['85%', '50%'],
              data: [{
                  value: 75,
                  label: {
                      normal: {
                          rich: {
                              a: {
                                  color: '#603dd0',
                                  align: 'center',
                                  fontSize: 20,
                                  fontWeight: "bold"
                              },
                              b: {
                                  color: '#fff',
                                  align: 'center',
                                  fontSize: 16
                              }
                          },
                          formatter: function(params){
                              return "{b|缺报统计}\n\n"+"{a|"+params.value+"个}"+"\n\n{b|增长2%}";
                          },
                          position: 'center',
                          show: true,
                          textStyle: {
                              fontSize: '14',
                              fontWeight: 'normal',
                              color: '#fff'
                          }
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#613fd1',
                          shadowColor: '#613fd1',
                          shadowBlur: 0
                      }
                  }
              }, {
                  value: 25,
                  name: 'invisible',
                  itemStyle: {
                      normal: {
                          color: '#453284'
                      },
                      emphasis: {
                          color: '#453284'
                      }
                  }
              }]
          }]
      }
        
        myChart.setOption(option1)
       
       

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