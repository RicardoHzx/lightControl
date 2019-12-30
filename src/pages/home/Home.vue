<template>
    <div class="home" :style="ind" ref="opt2">
        <!-- 轮播图 -->
         <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in img_list" :key="item">
            <img :src="item" alt="">
            </el-carousel-item>a
         </el-carousel>

        <!-- 仪表盘 -->
        <div id="f">
        <div id="a">
        <p style="font-size:30px;margin-top:-10px">房间数据情况:</p>

         <div id="myChart2" :style="{width:'850px', height:'480px',top:'1%'}"></div>
        
        </div>
        <div id="b"><p class="c1">天气信息为:
        <button type="button" @click="weather()">
        点击我更新天气信息
        </button>

        <div id="weather">
           <iframe id="mainContent" width="54%" height="100%" frameborder="0"  ></iframe>
        </div>
        </div>                  
        </div>
     
    <div id="butto">
      <div class="tableTitle"><span class="midText"> 室内信息</span></div>
      <div id="myChart" style="height:200px;width:800px"></div>
    

     <el-divider content-position="left">.</el-divider>
   
    </div>
  </div>
</template>

<script>

export default {
 
  neme:"home",
  data(){
    return {
     img_list:[
      
      require("../../assets/u15.jpg"),
      require("../../assets/u55.jpg"),
    
     
      
     ],
     
     ind:{
       backgroundImage:"url(" + require("../../assets/u18.jpg")+")",
       backgroundPostion:"center center",
       backgroundRepeat:"no-repeat",
       backgroundSize: "cover",
       height:'1000px'       
       
    }
    }
  },
   
       
 
   mounted () {

        //console.log(this.$refs.opt2.style.height=window.innerHeight-95+"px");
      let that = this
      this.drawLine();
      this.weather();
    },
  methods:{
     
      weather(){
      var mainContent = document.getElementById('mainContent');
       mainContent.src = "http://tianqi.moji.com/"//嵌套网址
      },
      drawLine(){

            // 基于准备好的dom，初始化echarts实例
            var myChart2 = this.$echarts.init(document.getElementById('myChart2'))
            // 绘制图表
            myChart2.setOption({


      title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['温度','湿度','风力','pm2.5','甲醛']
    },
    grid: {
         left:'5%',
         right: '3%',
         bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'温度',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'湿度',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'风力',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'pm2.5',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'甲醛',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]


            }
            );



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
                                  color: '#000000',
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
                                  color: '#000000',
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
                                  color: '#000000',
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
    background-color: #ad1919;
    text-align: center;
    font-size: 24px;
    color: rgba(101, 101, 101, 1);
  }
 .midText {
     margin-top: -5%;
    position: absolute;
    left: 50%;  
    background-color:none;
    padding: 0 15px;
    transform: translateX(-50%) translateY(-50%);
  }

  #a{
    position: absolute;
    border-right: gray 3px dashed;
    height: 580px;
    width: 55%;
}
#b{
   position: absolute;
    float: left;
    margin-left: 58%;
    width: 40%;
    height: 200px;
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
#butto{
    
    float:left;
    margin-left: 55%; 
    
}
#weather{
    height: 200px;
}



</style>