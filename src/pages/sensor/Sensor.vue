<template>
  <div class="sensor">
    <header>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="温度传感器" name="first">
           <article id="test">
          <div>
            <div class="b">
              <p>当前状态</p>
            </div>
            <div class="b1">内容</div>
          </div>
          <div class="c">
            <p>事件日志</p>
            <div class="c1">内容</div>
          </div>
        </article>
        </el-tab-pane>
        <el-tab-pane label="风速传感器" name="second">
          <article id="test">
          <div>
            <div class="b">
              <p>当前状态</p>
            </div>
            <div class="b1">内容</div>
          </div>
          <div class="c">
            <p>事件日志</p>
            <div class="c1">内容</div>
          </div>
        </article>
        </el-tab-pane>
        <el-tab-pane label="空气传感器" name="third">
          <article id="test">
          <div>
            <div class="b">
              <p>当前状态</p>
            </div>
            <div class="b1">内容</div>
          </div>
          <div class="c">
            <p>事件日志</p>
            <div class="c1">内容</div>
          </div>
        </article>
        </el-tab-pane>
        <el-tab-pane label="光线传感器" name="fourth">
          <article id="test">
          <div>
            <div class="b">
              <p>当前状态</p>
            </div>
            <div class="b1">内容</div>
          </div>
          <div class="c">
            <p>事件日志</p>
            <div class="c1">内容</div>
          </div>
        </article>
        </el-tab-pane>
        <el-tab-pane label="烟雾传感器" name="fifth"><article id="test">
          <div>
            <div class="b">
              <p>当前状态</p>
            </div>
            <div class="b1">内容</div>
          </div>
          <div class="c">
            <p>事件日志</p>
            <div class="c1">内容</div>
          </div>
        </article></el-tab-pane>
        <!-- <el-input v-model="tabData[0]" placeholder="请输入内容" clearable size="small" /> -->
        <el-tab-pane v-model="tabData[0]"></el-tab-pane>
       
      </el-tabs>
    </header>
     
    <!-- <div id="app">
      <ul>
        <li v-for="(item, index) in tabData">{{index}}--{{item}}</li>
      </ul>
    </div> -->

    <!-- <article id="test">
      <div>
        <div class="b">
          <p>当前状态</p>
        </div>
        <div class="b1">内容</div>
      </div>
      <div class="c">
        <p>事件日志</p>
        <div class="c1">内容</div>
      </div>
    </article> -->
    <!-- <footer>
      <p>在线时间</p>
    </footer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabData: ["1", "1", "1"],
      methods: {
        goBack() {
          console.log("go back");
        }
      }
    };
  }
};
</script>
<style scoped>
.sensor {
  height: 300px;
  width: 100%;
}
#test {
  width: 80%;
  overflow: hidden;
  margin-left: 1%;
  /* border: gray 3px solid; */
}
.b {
  position: absolute;
  width: 10%;
}
.b1 {
  position: absolute;
  background: palevioletred;
  width: 20%;
  height: 550px;
  margin-top: 50px;
}
.c {
  float: right;
  height: 600px;
  width: 70%;
}
.c1 {
  width: 100%;
  height: 550px;
  background: darksalmon;
}

header {
  margin-left: 1%;
  /* border: gray 3px solid; */
  height: 20%;
  width: 100%;
  margin-top: 2%;
  text-align: center;
}

[id^="a"] {
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  font-size: 16px;
  margin-left: 5%;
}

footer {
  border: gray 3px solid;
  width: 80%;
  height: 20%;
  margin-left: 10%;
}
#jiantou {
  height: 20px;
  width: 5%;
  position: absolute;
  margin-top: 20%;
}
</style>