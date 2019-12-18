<template>
    <div class="sensor">

       <!--  <h1>传感器界面</h1>
    
    <header>
        
            <button id="a">温度传感器</button>
            <button id="a1">风速传感器</button>
            <button id="a2">空气传感器</button>
            <button id="a3">光线传感器</button>
            <button id="a4">烟雾传感器</button> 
    </header>

    <article id="test">
        <div class="b">
            <p>当前状态</p>
        </div>
        <div class="c">
            <p>事件日志</p>
        </div>
    </article>
    <footer>
        <p>在线时间</p>
    </footer>-->
    
    </div>
</template>

<script>
export default {
  data(){
    return {
     
    }
  },
}
</script>
<style scoped>
.sensor{
  height: 300px;
  width: 100%;
  background: #4CAF50;
}
#test{
    background: green;
    width: 100%;
    overflow:hidden;
}
.b{
  position: absolute;
  height: 300px;
  background: gray;
  width: 200px;
}
.c{
  
    float: right;
    margin-right: 10%;
    height: 300px;
    background:white;
    width: 600px;
}

header{
    background: red;
    height: 20%;
    width: 100%;
}


[id^='a']{
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin-left: 10%;
}


footer{
    background: blue;
    width: 100%;
    height: 20%;
}
</style>