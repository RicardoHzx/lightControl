<template>
    <div class="option" :style="n" ref='opt'>
      <div>
        <el-button type="text"  id="butt"  @click="dialogVisible = true">11111&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button  @click="dialogVisible = false">关 闭</el-button>
          <el-button  type="primary" @click="dialogVisible = false">开启灯光</el-button>
        </span>
      </el-dialog>

      <el-button type="text"  id="butt1"  @click="dialogVisible = true">&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
          <el-button type="primary" @click="dialogVisible = false;openLight" >开启灯光</el-button>
        </span>
      </el-dialog>

      <el-button type="text"  id="butt2"  @click="dialogVisible = true">&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
          <el-button type="primary" @click="dialogVisible = false">开启灯光</el-button>
        </span>
      </el-dialog>

      <el-button type="text"  id="butt3"  @click="dialogVisible = true">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
          <el-button type="primary" @click="dialogVisible = false">开启灯光</el-button>
        </span>
      </el-dialog>

       <el-button type="text"  id="butt4"  @click="dialogVisible = true">&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
          <el-button type="primary" @click="dialogVisible = false">开启灯光</el-button>
        </span>
      </el-dialog>

       <el-button type="text"  id="butt5"  @click="dialogVisible = true">&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
          <el-button type="primary" @click="dialogVisible = false">开启灯光</el-button>
        </span>
      </el-dialog>

       <el-button type="text"  id="butt6"  @click="dialogVisible = true">&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>选择你需要的操作</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关 闭</el-button>
          <el-button type="primary" @click="dialogVisible = false">开启灯光</el-button>
        </span>
      </el-dialog>
      </div>
      
      <!-- 测试按钮 -->
      <el-button @click='openLight'>dianjiwo</el-button>
    </div> 
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  neme:"option",
  data(){
    return {
     n:{
       backgroundImage:"url(" + require("../../assets/u3.jpg")+ ")",
       backgroundPostion:"center center",
       backgroundRepeat:"no-repeat",
       backgroundSize: "cover",
      //  height:""
     },
      dialogVisible: false
    }
  },

// 动态获取设置高度
 mounted(){
       console.log(this.$refs.opt.style.height=window.innerHeight-95+"px");
    },
//数据获取
   created(){

    },
    computed:{
      
    },
   
    methods:{
      ...mapActions('option',['openLight1','closeLight1','openLight2','closeLight2','openRgb1','closeRgb1','openRgb2','closeRgb2']),
      openLight(){
        this.closeLight1();
        console.log("aaaaaaaaaa")
      },
      closeLight(){
        this.openLight1();
        console.log("aaaaaaaaaa")
      },

         openLightT(){
        this.closeLight2();
        console.log("aaaaaaaaaa")
      },
      closeLightT(){
        this.openLight2();
        console.log("aaaaaaaaaa")
      },
      openRgb(){
        this.closeRgb1();
        console.log("aaaaaaaaaa")
      },
      closeRgb(){
        this.openRgb1();
        console.log("aaaaaaaaaa")
      },

      openRgbT(){
        this.closeRgb2();
        console.log("aaaaaaaaaa")
      },
      closeRgbT(){
        this.openRgb2();
        console.log("aaaaaaaaaa")
      }, 
    },
    methods:{
       handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      } 
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
#butt4{
   margin-left: 77%;
  margin-top: 11%;
  position: absolute;

}
#butt5{
  margin-left: 83%;
  margin-top: 10%;
  position: absolute;

}
#butt6{
  margin-left: 92%;
  margin-top: 9%;
  position: absolute; 

}

</style>