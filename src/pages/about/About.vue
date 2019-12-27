<template>

<div class="about" :style="pig" ref="opt1">
   <div id="er">
    
    <vue-particles
        color="#8B1A1A"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#8B1A1A"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
       <p class="text" style="font-size:60px;color:black;margin-left:40%" v-for="(text, index) in arr" :key="index">{{text}}</p>
    <router-view></router-view>
  </div>

  
    </div>
</template>
<script>
export default {
  data(){
    return {
      arr: [
    '感谢胡老师',
    '感谢郭老师 ',
    '感谢王老师',
    '感谢组员:乔侨',
    '感谢组员:徐诗骅',
    '感谢组员:李宣',
    '感谢组员:李春志',
    '感谢组员:姚骏发', 
    ],

     pig:{
       backgroundImage:"url(" + require("../../assets/u17.jpg")+")",
       backgroundPostion:"center center",
       backgroundRepeat:"no-repeat",
       backgroundSize: "cover",
       
     
       
    }
  }
},

// 动态获取高度
 mounted(){
       console.log(this.$refs.opt1.style.height=window.innerHeight-95+"px");
 }
}
</script>
<style scoped>
#er{ 
  animation: myMove 15s linear infinite;
  animation-fill-mode: forwards;
}
  /*文字无缝滚动*/
@keyframes myMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-1550px);
  }
}


</style>
