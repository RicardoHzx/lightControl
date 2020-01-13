<template>
    <div class="home" :style="ind" ref="opt2">
        <!-- 轮播图 -->
         <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in img_list" :key="item">
            <img :src="item" alt="">
            </el-carousel-item>
         </el-carousel>

        <!-- 仪表盘 -->
        <div id="f">

        <div id="a">
        <p style="font-size:30px;margin-top:-10px">房间数据情况:</p>
         <div id="myChart2" :style="{width:'850px', height:'480px',top:'1%'}"></div>
        </div>

        <div id="b"><p class="c1">天气信息为:
        <div id="weather">
           <iframe scrolling="no" src="https://tianqiapi.com/api.php?style=ts&skin=yahoo" 
           frameborder="0" width="450" height="290" allowtransparency="true"></iframe> 
        </div>
        </div>                  
        </div>
    
    <div id="butto">
         <!-- {{status}} -->
      <div class="tableTitle"><span class="midText"> 室内信息</span></div>
      <div id="myChart" style="height:200px;width:800px">
    </div>

     <el-divider content-position="left">.</el-divider>
   
    </div>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'

export default {
  name:"home",
  data(){
    return {
        img_list:[     
        require("../../assets/u55.jpg"),
        require("../../assets/u55.jpg"),
        require("../../assets/u55.jpg"),  
        ],     
        ind:{
            backgroundImage:"url(" + require("../../assets/u18.jpg")+")",
            backgroundPostion:"center center",
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
            height:'1000px'         
        },
        arr:[]
    }
  },
  created(){
      this.hellogetStatus().then(()=>{
      this.drawLine(this.status[2],this.status[3],this.status[4]);     

      });
      setInterval(()=>{
          this.hellogetStatus().then(()=>{
      this.drawLine(this.status[2],this.status[3],this.status[4]);     

          })
      },1000000)
      
  },
     mounted () {
        //console.log(this.$refs.opt2.style.height=window.innerHeight-95+"px");
      let that = this
      this.weather();
    },
    computed:{
      ...mapState('home',['status']),
    },
   methods:{
      ...mapActions('home',['hellogetStatus']),
      drawLine(data1,data2,data3){
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
            data:[34, 32, 30, 24, 25, 32, 31]
        },
        {
            name:'湿度',
            type:'line',
            stack: '总量',
            data:[30, 58, 37, 43, 44, 34, 49]
        },
        {
            name:'空气质量',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 164, 161]
        },
        {
            name:'pm2.5',
            type:'line',
            stack: '总量',
            data:[36, 37, 117, 34, 35, 107, 56]
        },
        {
            name:'甲醛',
            type:'line',
            stack: '总量',
            data:[37, 28, 27, 36, 29, 25, 39]
        }
    ]
            }
            );
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
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
                  value: data1,
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
                              return "{b|PM2.5}\n\n"+"{a|"+params.value+"个}"+"\n\n";
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
                  value: 200-parseInt(data1),
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
                  value: data2,
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
                              return "{b|温度}\n\n"+"{a|"+params.value+"°C}"+"\n\n{b|增长2%}";
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
                  value: 200-parseInt(data2),
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
                  value: data3,
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
                              return "{b|湿度}\n\n"+"{a|"+params.value+"个}"+"\n\n{b|增长2%}";
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
                  value: 200-parseInt(data3),
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