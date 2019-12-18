<template>
    <div class="option" :style="note">
       
      </div>  
    
</template>
<script>
export default {
  data(){
    return {
     note:{
       backgroundImage:"url(" + require("../../assets/u3.jpg")+ ")",
       backgroundRepeat:"no-repeat",
       backgroundSize: "25px auto",
       marginTop:"5px",
     }
    }
  },
}

 
</script>
<style scoped>

</style>