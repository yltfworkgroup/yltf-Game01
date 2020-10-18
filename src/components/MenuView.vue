<template>
  <div class="menuview">
    <ul class="ullist">
      <li class="liStyle" v-for="(item,index) in menulist" :key="item+index">
        <span v-text="item.name"></span>
        <ul class="morelist" v-if="item.subs">
          <li class="liStyle" v-for="(ite,inde) in item.subs" :key="ite+inde">
            <span v-text="ite.name" @click="viewChange(ite.id,ite.path,ite.name)"></span>
          </li>
        </ul>
      </li>
  <!-- 
      <li class="liStyle">
        <span>项目说明</span>
        <ul class="morelist">
          <li class="liStyle"><span>目录</span></li>
          <li class="liStyle"><span>正文</span></li>
          <li class="liStyle"><span>附录</span></li>
        </ul>
      </li>
      <li class="liStyle"><span>项目结构</span></li>
  -->
    </ul> 
  </div>
</template>
 
<script>
export default {
    name:'menuview',
    props:{
      mlist:Array
    },
    // 由于props传值是单向的,当父组件中的值传递到子组件时
    // 若子组件直接使用props中的数据,可以正常使用,
    // 若要对props中的数据进行加工后再使用
    // 则应使用computed计算属性对其进行加工,然后将值绑定即可正常使用
    computed:{
      menulist(){
        return this.mlist
      }
    },
    mounted(){
      
    },
    data () {
      return {
        
      }
    },
    methods: {
      viewChange (id, path, name) {
        this.$emit("routerto", id, path, name)
      }
    }
}
</script>

<style scoped lang="scss">
.menuview{
  height: $menuheight;
  line-height: $menuheight;
  width: 100%;
  background-color: $menubkColor;
  box-shadow: inset 0 0 5px 1px $menubSColor;
  .ullist{
    display: flex;
    height: 100%;
    span{
      @include flexCenter;
      justify-content: left;
      padding: 0 5px;
      font-size: $textSize;
      color: white;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:hover{
        border-radius: 2px;
        background-color: $menubSColor;
        color: $textColor;
      }
    }
    .liStyle{
      margin-left:4px;
      margin-right:4px;
      position: relative;
      &:hover{
        .morelist{
          display: block;
        }
      }
      .morelist{
        width:150px;
        background-color:gray;
        border-radius:4px;
        padding: 5px 0;
        position: absolute;
        top:100%;
        left:0;
        display: none;
        z-index:10;
      }
    }
  }
  
}
</style>