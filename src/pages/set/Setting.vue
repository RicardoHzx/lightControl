<template>
  <div class="setting">
    <h1>欢迎来到我的设置模式</h1>{{form}}
    {{setList}}
    <el-form ref="modelForm" :model="form" :rules="rules" label-width="80px" style="margin-top:2%">
      <el-form-item label="模式名称">
        <el-input v-model="form.modelName"></el-input>
      </el-form-item>
      <el-form-item label="触发条件">
        <el-select v-model="form.sensorData" placeholder="请选择触发条件">
          <el-option label="前门开" value="FFFFFFFF0400020F"></el-option>
          <el-option label="后门开" value="FFFFFFFF0700020F"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="触发设备">
        <el-checkbox-group @change='handleChecked' v-model="setList">
          <el-checkbox label="1" name="1">普通灯1</el-checkbox>
          <el-checkbox label="2" name="2">普通灯2</el-checkbox>
          <el-checkbox label="3" name="type">普通灯3</el-checkbox>
          <el-checkbox label="4" name="type">窗帘开</el-checkbox>
          <el-checkbox label="5" name="type">窗帘关</el-checkbox>
          <el-checkbox label="6" name="type">空调开</el-checkbox>
          <el-checkbox label="7" name="type">空调关</el-checkbox>
        </el-checkbox-group>
      </el-form-item>


     <!-- rgb1 -->
<el-form-item label="RGB一">
   <div class="block">
      <span class="demonstration">R:</span>
    <el-slider v-model="val1" show-input @change="change" :max='255' >
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">G:</span>
    <el-slider v-model="val2" show-input :max='255'>
    </el-slider>
  </div>
  <div class="block">
   <span class="demonstration">B:</span>
   <el-slider v-model="val3" show-input :max='255'>
    </el-slider>
  </div>
   </el-form-item>
   <!-- rgb2 -->
   <el-form-item label="RGB二">
   <div class="block">
      <span class="demonstration">R:</span>
    <el-slider v-model="form.val4" show-input :max='255'>
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">G:</span>
    <el-slider v-model="val5" show-input :max='255'></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">B:</span>
    <el-slider v-model="val6" show-input :max='255'></el-slider>
  </div>
   </el-form-item>

  <el-form-item label="模式描述">
    <el-input type="textarea" v-model="form.modelNote"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit(form)">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  
</div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'

 export default {
    data() {
      return {
        setList:[],
        form: {
          modelName: '',
          sensorData: '',
          type: [],
          modelNote: ''
        },
        rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择触发条件', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择类型', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入描述', trigger: 'blur' }
        ]
      },
         val1: 0,
         val2: 0,
         val3: 0,
         val4: 0,
         val5: 0,
         val6: 0
      }

    },
    methods: {
      ...mapActions('set',['addModel']),
      
      onSubmit(obj) {
        // console.log(setList[0].lightId)
        var arr=[];
        this.setList.forEach((item)=>{
            console.log(item)
            var obj={};
            obj.lightId=parseInt(item)
            obj.modelId=1;
            obj.rgb="66,66,66";
            obj.swich=true;
            arr.push(obj)
        })
        var str="";
        arr.forEach((item)=>{
          str+=item.lightId+"/";
          str+=item.modelId+"/";
          src+=item.rgb+"/";
          src+=item.swich;
        })
        console.log(str)
        console.log(arr)
        // this.addModel(obj)
      },
     
      change(val){
        console.log(this.form);
        console.log(val);
    
      },
      handleChecked(value) {
        console.log(value)
        // let checkedCount = value.length;
        // this.checkAll = checkedCount === this.cities.length;
        // this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      
      formatTooltip(val) {
        return val / 100;
      }
    }
 }
  
</script>
<style scoped>

</style>