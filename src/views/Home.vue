<template>
  <div class="home">
     <div class="header">
         <span>Yltf-Game01-未命名</span>
     </div>
     <div class="main">

         <div class="gameMenu"></div>
         <div class="gameView"></div>

     </div>
     <div class="footer">
         <span>@DesignBy YltfWorkgroup 2020.10.13 21:38</span>
     </div>
  </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<style scoped lang="scss">
@import url("../styles/style.scss");
.home{
    width: 100%;
    height: calc(100vh - 14px);
    // background-color:$backColor;
    .header{
        @include flexCenter;
        height: 5%;
        background-color: blueviolet;
        span{
            font-size: $textSize;
        }
    }
    .main{
        height: 80%;
        background-color: chartreuse;
    }
    .footer{
        @include flexCenter;
        align-items: flex-end;
        height: 15%;
        background-color: coral;
        overflow: hidden;
        span{
            font-size: $textSize;
            line-height: 25px;
        }
    }
}
</style>