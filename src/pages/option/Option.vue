<template>
    <div class="option" :style="n">
    12983712973128973128973927192837777777712333
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
       
     },
      data1:"",
      data2:"",
    }
  },
}

 
</script>
<style scoped>
.option{
  height: 100%;
  width: 100%;
 background: red;
}

</style>