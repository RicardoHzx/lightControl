<template>
    <div class="sensor">
        <h1>当前模式：后面动态获取模式</h1>
        <!--返回箭头-->
        <div id="jiantou">
            此处是返回箭头
        </div>
    
    <header>
        
            <button id="a">温度传感器</button>
            <button id="a1">风速传感器</button>
            <button id="a2">空气传感器</button>
            <button id="a3">光线传感器</button>
            <button id="a4">烟雾传感器</button> 
    </header>

    <article id="test">
        <div>
        <div class="b">
            <p>当前状态</p>
        </div>
        <div class="b1">
            内容
        </div>
        </div>
        <div class="c">
            <p>事件日志</p>
            <div class="c1">
                内容
            </div>
        </div>
    </article>
    <footer>
        <p>在线时间</p>
    </footer>
   
    
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

}
#test{
    width: 80%;
    overflow:hidden;
    margin-left: 10%;
    border: gray 3px solid;
}
.b{
  position: absolute;
  width: 10%;
}
.b1{
    position: absolute;
    background: palevioletred;
    width: 20%;
    height: 550px;
    margin-top: 50px;
}
.c{
    float: right;
    height: 600px;
    width: 70%;

}
.c1{
   width: 100%;
    height: 550px;
    background:darksalmon
    
}

header{
    margin-left: 10%;
    border: gray 3px solid;
    height: 20%;
    width: 80%;
    text-align: center;
}


[id^='a']{
    background-color: #4CAF50; 
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    margin-left: 5%;
}


footer{
    border: gray 3px solid;
    width: 80%;
    height: 20%;
    margin-left: 10%;
}
#jiantou{
    height: 20px;
    width: 5%;
   position: absolute;
   margin-top: 20%;
}
#sensor{
    height: 100%;
    width: 100%;
}
</style>