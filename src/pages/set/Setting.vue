<template>
  <div class="setting">
    <h1>欢迎来到我的设置模式</h1>
    {{form}}
    {{setList}}
    <el-form ref="modelForm" :model="form" :rules="rules" label-width="80px" style="margin-top:2%">
      <el-form-item label="模式名称" prop="modelName">
        <el-input v-model="form.modelName"></el-input>
      </el-form-item>
      <el-form-item label="触发条件" prop="sensorData">
        <el-select v-model="form.sensorData" placeholder="请选择触发条件">
          <el-option label="前门开" value="FFFFFFFF0400020F"></el-option>
          <el-option label="后门开" value="FFFFFFFF0700020F"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="触发设备" prop="setList">
        <el-checkbox-group @change='handleChecked' v-model="setList">
          <el-checkbox label="1" name="1">一路灯</el-checkbox>
          <el-checkbox label="2" name="2">二路灯</el-checkbox>
          <el-checkbox label="3" name="3">三路灯</el-checkbox>
          <el-checkbox label="4" name="4">窗帘</el-checkbox>
          <el-checkbox label="5" name="5" >空调</el-checkbox>   
            <!--rgb1  -->
          <el-checkbox label="6" name="6">RGB一</el-checkbox>
            <div class="block">
                <span class="demonstration">R:</span>
              <el-slider v-model="form.val1" show-input @change="change" :max='255' ></el-slider>
            </div>
            <div class="block">
              <span class="demonstration">G:</span>
              <el-slider v-model="form.val2" show-input @change="change" :max='255'></el-slider>
            </div>
            <div class="block">
              <span class="demonstration">B:</span>
              <el-slider v-model="form.val3" show-input @change="change" :max='255'></el-slider>
            </div> 
            <!-- rgb2 -->
          <el-checkbox label="7" name="7">RGB二</el-checkbox>
            <div class="block">
                <span class="demonstration">R:</span>
              <el-slider v-model="form.val4" show-input @change="change" :max='255'>
              </el-slider>
            </div>
            <div class="block">
              <span class="demonstration">G:</span>
              <el-slider v-model="form.val5" show-input @change="change" :max='255'></el-slider>
            </div>
            <div class="block">
              <span class="demonstration">B:</span>
              <el-slider v-model="form.val6" show-input @change="change" :max='255'></el-slider>
            </div>
        </el-checkbox-group>
      </el-form-item>

     <!-- rgb1 -->
    <!-- <el-form-item prop="setList">
      <el-checkbox label="6" name="6">RGB一</el-checkbox>
        <div class="block">
            <span class="demonstration">R:</span>
          <el-slider v-model="form.val1" show-input @change="change" :max='255' ></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">G:</span>
          <el-slider v-model="form.val2" show-input @change="change" :max='255'></el-slider>
        </div>
        <div class="block">
          <span class="demonstration">B:</span>
          <el-slider v-model="form.val3" show-input @change="change" :max='255'></el-slider>
        </div>
   </el-form-item> -->
   <!-- rgb2 -->
   <!-- <el-form-item prop="setList">
    <el-checkbox label="7" name="7">RGB二</el-checkbox>
   <div class="block">
      <span class="demonstration">R:</span>
    <el-slider v-model="form.val4" show-input @change="change" :max='255'>
    </el-slider>
  </div>
  <div class="block">
    <span class="demonstration">G:</span>
    <el-slider v-model="form.val5" show-input @change="change" :max='255'></el-slider>
  </div>
  <div class="block">
    <span class="demonstration">B:</span>
    <el-slider v-model="form.val6" show-input @change="change" :max='255'></el-slider>
  </div>
   </el-form-item> -->

  <el-form-item label="模式描述">
    <el-input type="textarea" v-model="form.modelNote"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button plain type="primary" @click="onSubmit(form)">立即创建</el-button>
    <el-button @click="close">取消</el-button>
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
          setList: [],
          modelNote: '',
        },
        v1:true,
        v2:true,
        rules: {
          modelName: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          sensorData: [
            { required: true, message: '请选择触发条件', trigger: 'blur' }
          ],
          modelNote: [
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
      close(){
        // console.log('abc')
        console.log(this.$refs.modelForm)
        this.$refs.modelForm.resetFields();
        this.form={
          modelName: '',
          sensorData: '',
          setList: [],
          modelNote: '',
        };
        this.setList=[];
        // this.modelForm={}
      },
      onSubmit(obj) {
        var arr=[];
        this.$notify({
          title: '成功',
          message: '模式创建成功',
          type: 'success'
        });
       
        this.setList.forEach((item)=>{
            var obj={};
            if(item=='5'||item=='4'){
              if(item=="4"){
                obj.lightId=4;
                obj.swich=true;
                arr.push(obj)    
              }else{
                obj.lightId=5;
                obj.swich=true;
                arr.push(obj)
              }
               
            }else if(item=='6'||item=='7'){
              if(item=="6"){
                obj.lightId=6;
                obj.swich=true;
                obj.rgb=this.form.val1+","+this.form.val2+","+this.form.val3;
                 arr.push(obj)
              }else{
                obj.lightId=7;
                obj.swich=true;
                obj.rgb=this.form.val4+","+this.form.val5+","+this.form.val6
                 arr.push(obj)
              }
              
            }else{
              obj.lightId=parseInt(item)
              obj.swich=true;
              arr.push(obj)
            }
        })
        var str="";
        arr.forEach((item)=>{
          str+=item.lightId+"&";
          str+=item.rgb+"&";
          str+=item.swich;
        })
        console.log(arr)
        this.addModel({modelName:this.form.modelName,modelNote:this.form.modelNote,modelSwitch:true,sensorData:this.form.sensorData,settinglList:arr}).then(()=>{
         this.form={
          modelName: '',
          sensorData: '',
          setList: [],
          modelNote: '',
        };
        this.setList=[];
        })
      },
     
      change(val){
        console.log(this.form);
        console.log(val);
      },
      handleChecked(value) {
        console.log(value)
      },
    }
 }
  
</script>
<style scoped>

</style>