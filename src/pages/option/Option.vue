<template>
    <div class="option" :style="n" ref='opt'>
      <div>
        <!-- 透明按钮 -->
        <button style="background: none;border:none;margin-top:10%;margin-left:4%" onclik="">我在这里 成品以后会用nbsp代替</button>
      </div>
    </div> 
</template>
<script>
export default {
  data(){
    return {
     n:{
       backgroundImage:"url(" + require("../../assets/u3.jpg")+ ")",
       backgroundPostion:"center center",
       backgroundRepeat:"no-repeat",
       backgroundSize: "cover",
      //  height:""
       
     }
    }
  },
  // 动态获取设置高度
    mounted(){
       console.log(this.$refs.opt.style.height=window.innerHeight-95+"px");
    }
    
}
</script>
<style scoped>


</style>