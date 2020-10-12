<template>
  <div class="layout">
    <!-- <div class="header"></div> -->
    <yltfheader></yltfheader>

    <div class="main">
      <!-- <div class="sidebarNav"></div> -->
      <yltfsidebar></yltfsidebar>
      <!-- <div class="container"></div> -->
      <yltfhome></yltfhome>
    </div>

    <!-- <div class="footerNav"></div> -->
    <yltffooter></yltffooter>
  </div>
</template>

<script>
import yltfheader from "./yltfheader.vue";
import yltfsidebar from "./yltfsidebar.vue";
import yltffooter from "./yltffooter.vue";
import yltfhome from "../yltfhome.vue";

export default {
  name: "yltflayout",
  components: {
    yltfheader,
    yltfsidebar,
    yltfhome,
    yltffooter
  }
};
</script>

<style scoped lang="scss">

.layout{
  width: 100%;
  height: 100%;
  position: relative;
  .main{
    width: 100%;
    height: 400px;
    position: relative;
    overflow: hidden;
    .yltfsidebar{
      width: 200px;
      height: 400px;
      background-color: salmon;
      position: absolute;
      top: 0;
      left:0;
      overflow: hidden;
    }
    .yltfhome{
      width: 84%;
      height: 400px;
      background-color: rgb(147, 183, 224);
      border-right:5px solid rgb(223, 32, 166);
      position: absolute;
      top: 0;
      left:200px;
      overflow: hidden;
    }
  }
  .yltffooter{
    width: 100%;
    height: 50px;
    background-color: red;
    position: absolute;
    top: 450px;
    left:0px;
    overflow: hidden;
  }
}
</style>
