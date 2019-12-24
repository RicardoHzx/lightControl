<template>
  <div class="model">
 

<el-drawer
 title="模式操作信息"
  :visible.sync="table"
  direction="rtl"
  size="50%">
   <el-table :data="gridData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="num" label="使用次数"></el-table-column>
    </el-table>
</el-drawer>


<el-row class="a">
  <el-tooltip class="item" effect="dark" content="该模式普通灯光亮起，灯带熄灭，主要用作照明" placement="right-start">
  
  <el-button style="height:160px;width:220px" @click="table = true">欢迎模式</el-button>
  
  </el-tooltip>
  <el-tooltip class="item" effect="dark" content="该模式的简介" placement="right-start">
  <el-button style="height:160px;width:220px">会客模式</el-button>
  </el-tooltip>
  <el-tooltip class="item" effect="dark" content="该模式的简介" placement="right-start">
  <el-button style="height:160px;width:220px">工作模式</el-button>
   </el-tooltip>
</el-row>

<el-row class="a">
   <el-tooltip class="item" effect="dark" content="该模式的简介" placement="right-start">
  <el-button style="height:160px;width:220px">勿扰模式</el-button>
  </el-tooltip>
   <el-tooltip class="item" effect="dark" content="该模式的简介" placement="right-start">
  <el-button style="height:160px;width:220px">娱乐模式</el-button>
  </el-tooltip>
   <el-tooltip class="item" effect="dark" content="该模式的简介" placement="right-start">
  <el-button style="height:160px;width:220px">离开模式</el-button>
  </el-tooltip>
</el-row>

<el-row class="a">
  <el-button type="primary" round style="height:160px;width:220px">灯光全开</el-button>
  <el-button type="primary" round style="height:160px;width:220px">灯光全关</el-button>
  <el-button type="primary" round style="height:160px;width:220px">空调打开</el-button>
</el-row>
<el-row class="a">
  <el-button type="primary" round style="height:160px;width:220px">空调关闭</el-button>
  <el-button type="primary" round style="height:160px;width:220px">窗帘打开</el-button>
  <el-button type="primary" round style="height:160px;width:220px">窗帘关闭</el-button>
</el-row>


</div>
        
</template>
<script>
 export default {
    data() {
      return {
       table: false,
      dialog: false,
      loading: false,
      gridData: [{
        date: '2019-12-13',
        name: '胡壮杰',
        num: '1'
      }, {
        date: '2019-12-13',
        name: '胡',
        num: '1'
      }, {
        date: '2019-12-13',
        name: '胡',
        num: '1'
      }, {
        date: '2019-12-13',
        name: '胡',
        num: '1'
      }],
      };
    }
  };

</script>
<style scoped>
  .a{
   /* margin-top: 3%;
   margin-left: 30%; */
   width:800px;
   margin: 3% auto;
  }
</style>