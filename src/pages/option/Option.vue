<template>
    <div class="option" :style="n" ref='opt'>
      <div>
        <el-button type="text"  id="butt"  @click="dialogVisible1 = true">1111&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible1"
        width="30%"
       >
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button  @click="closeLight">关 闭</el-button>
          <el-button  type="primary" @click="openLight">开启灯光</el-button>
        </span>
      </el-dialog>

      <el-button type="text"  id="butt1"  @click="dialogVisible2 = true">2222&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible2"
        width="30%"
        >
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeLight">关 闭</el-button>
          <el-button type="primary" @click="openLight">开启灯光</el-button>
        </span>
      </el-dialog>

      <el-button type="text"  id="butt2"  @click="dialogVisible3 = true">3333&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible3"
        width="30%"
        >
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="closeLight">关 闭</el-button>
          <el-button type="primary" @click="openLight">开启灯光</el-button>
        </span>
      </el-dialog>

      <el-button type="text"  id="butt3" @click="a = true">444444&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="灯带一"
        :visible.sync="a"
        width="30%"
        :model="form"
        >{{form}}
        <span c="footer" class="dialog-footer">
           <span class="demonstration">R:</span>
           <el-slider v-model="form.value1" show-input @change="change" :max='255'></el-slider>
            <span class="demonstration">G:</span>
           <el-slider v-model="form.value2" show-input @change="change" :max='255'></el-slider>
            <span class="demonstration">B:</span>
           <el-slider v-model="form.value3" show-input @change="change" :max='255'></el-slider>
        </span>
      </el-dialog>
 

      <el-button type="text"  id="butt6" @click="b = true">7777&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="灯带二"
        :visible.sync="b"
        width="30%"
        :model="form"
        >
        <span c="footer" class="dialog-footer">
            <span class="demonstration">R:</span>
           <el-slider v-model="form.value4" show-input :max='255'></el-slider>
            <span class="demonstration">G:</span>
           <el-slider v-model="form.value5" show-input :max='255'></el-slider>
            <span class="demonstration">B:</span>
           <el-slider v-model="form.value6" show-input :max='255'></el-slider>
        </span>
      </el-dialog>
      </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return {
     n:{
       backgroundImage:"url(" + require("../../assets/u3.jpg")+ ")",
       backgroundPostion:"center center",
       backgroundRepeat:"no-repeat",
       backgroundSize: "cover",
     },
     form:{},
        value1: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        value5: 0,
        value6: 0,

      dialogVisible: false,
      dialogVisible1:false,
      dialogVisible2:false,
      dialogVisible3:false,
      a:false,
      b:false
    };
  },
//动态获取设置高度
 mounted(){
       console.log(this.$refs.opt.style.height=window.innerHeight-95+"px");
    },


    created(){

    },
    computed:{ 

    },  

    methods:{
      ...mapActions('option',['openLight1','closeLight1','openLight2','closeLight2','openRGB1','openRGB2']),
    
      openLight(){
        this.closeLight1();
        console.log("bbb")
      },
      closeLight(){
        this.openLight1();
        console.log("bbb")
      },

      openLightT(){
        this.closeLight2();
        console.log("light2")
      },
      closeLightT(){
        this.openLight2();
        console.log("light2")
      },
     
       change(val){
        console.log(this.form);
        console.log(val)
        this.openRGB1(this.form)
        this.openRGB2(this.form)
        
     },
    }
  };
</script>

<style scoped>
#butt{
  position: absolute;
  margin-left: 7%;
  margin-top: 9%;
}

#butt1{
  position: absolute;
  margin-left: 16%;
  margin-top: 10%;
}
#butt2{
  position: absolute;
  margin-left: 22%;
  margin-top: 11%;
}
#butt3{
  position: absolute;
  margin-left: 49%;
  margin-top: 9.5%;
}

#butt6{
  margin-left: 92%;
  margin-top: 9%;
  position: absolute; 

}
</style>