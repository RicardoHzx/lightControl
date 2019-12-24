<template>
  <div class="setting">
    <h1>欢迎来到我的设置模式</h1>
    <el-form ref="form" :model="form" label-width="80px" style="margin-top:2%">
  <el-form-item label="模式名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="触发条件">
    <el-select v-model="form.region" placeholder="请选择触发条件">
      <el-option label="进入房间" value="1"></el-option>
      <el-option label="离开房间" value="2"></el-option>
      <el-option label="客人到访" value="3"></el-option>
      <el-option label="工作" value="4"></el-option>
      <el-option label="火灾" value="5"></el-option>
      <el-option label="失窃" value="6"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="触发设备">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="普通灯1" name="type"></el-checkbox>
      <el-checkbox label="普通灯2" name="type"></el-checkbox>
      <el-checkbox label="灯带1" name="type"></el-checkbox>
      <el-checkbox label="灯带2" name="type"></el-checkbox>
    </el-checkbox-group>
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
          name: '',
          region: '',
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');//.then(function(data){
        //   alert
        //})
      }
    }
  }
</script>
<style scoped>

</style>