<template>
    <div class="about" :style="pig" ref="opt">
    <div>
      <!-- 缺少跳转 样式 -->
      <button >我是返回按钮</button>
    </div>

        
    </div>
</template>
<script>
export default {
  data(){
    return {
     pig:{
       backgroundImage:"url(" + require("../../assets/u1.png")+ ")",
       backgroundPostion:"center center",
       backgroundRepeat:"no-repeat",
       backgroundSize: "cover",
      // 静态设置高度 height:""
       
    }
  }
},

// 动态获取高度
 mounted(){
       console.log(this.$refs.opt.style.height=window.innerHeight-95+"px");
 }
}
</script>
<style scoped>

</style>