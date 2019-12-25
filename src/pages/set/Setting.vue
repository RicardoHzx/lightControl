<template>
  <div class="setting">
    <h1>欢迎来到我的设置模式</h1>
    <el-form ref="form" :model="form" label-width="80px" style="margin-top:2%">
  <el-form-item label="模式名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="触发条件">
    <el-select v-model="form.region" placeholder="请选择触发条件">
      <el-option label="前门开" value="1"></el-option>
      <el-option label="后门开" value="1"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="触发设备">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="普通灯1" name="type"></el-checkbox>
      <el-checkbox label="普通灯2" name="type"></el-checkbox>
      <el-checkbox label="普通灯2" name="type"></el-checkbox>
      <el-checkbox label="窗帘开" name="type"></el-checkbox>
      <el-checkbox label="窗帘关" name="type"></el-checkbox>
      <el-checkbox label="空调开" name="type"></el-checkbox>
      <el-checkbox label="空调关" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>


<el-form-item label="RGB调节">
   <div class="block">
      <span class="demonstration">R:</span>
    <el-slider
      v-model="val1"
      show-input @change="change">
    </el-slider>
  </div>

  <div class="block">
    <span class="demonstration">G:</span>
    <el-slider
      v-model="val2"
      show-input>
    </el-slider>
  </div>

  <div class="block">
   <span class="demonstration">B:</span>
   <el-slider
      v-model="val3"
      show-input>
    </el-slider>
  </div>
    

   </el-form-item>

  <el-form-item label="模式描述">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  
</div>
</template>
<script>
 export default {
    data() {
      return {
        form: {
          name: 'liis',
          region: '',
          type: [],
          resource: '',
          desc: ''
         
        },
         val1: 0,
         val2: 40,
        val3: 0
      }


     


    },
    methods: {
      onSubmit() {
        console.log('submit!'); 
      },
     
      change(val){
        console.log(this.form);
        console.log(val);
        

      },
      
      formatTooltip(val) {
        return val / 100;
      }
    }
 }
  
</script>
<style scoped>

</style>