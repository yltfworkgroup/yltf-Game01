<template>
  <div class="home">
     <div class="header">
         <span>{{title}}</span>
     </div>
     <div class="main">

         <menu-view :mlist="menulist" @routerto="routerTo"></menu-view>
         <div class="mainView">
             <router-view />
         </div>

     </div>
     <div class="footer">
         <span>@DesignBy {{author}}, lastUpdate:{{lastUpdate}}</span>
     </div>
  </div>
</template>

<script>
import menuView from '../components/MenuView.vue';
import { mainService } from '../service/main.service.js';

export default {
    name:'home',
    components:{
        'menu-view':menuView
    },
    data() {
        return {
            title:'',
            author:'',
            lastUpdate:'',
            menulist:[]
        }
    },
    mounted() {
        // 初始化主页面数据
        this.getMainInfoData().then((res) => {
            this.title = res.proTitle;
            this.author = res.author;
            this.lastUpdate = res.lastUpdate;
            this.menulist = res.menulistData;
        }); 
    },
    methods:{
        //从data.json中获取主页的显示数据
        async getMainInfoData () {
            let reqdata = {
                reqType:'initInfo'
            }
            let result = await mainService.getInfoData(reqdata);
            return result
        },

        routerTo(id, path){
            this.$router.push({ path:path,jquery:{ id:id } });
            console.log(id);
            console.log(path);
        }
    }
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
        overflow: hidden;
        span{
            font-size: $textSize;
        }
    }
    .main{
        height: 85%;
        background-color: $backColor;
        .mainView{
            height: calc(100% - #{$menuheight} - #{$viewborder});
            width: calc(100% - #{$viewborder});
            border-width:#{$viewbwidth};
            border-style: $borderStyle;
            border-color: $borderColor;
            box-shadow: inset 0 0 5px 1px $borderColor;
            overflow-y: scroll;
            @include flexCenter;
            &::-webkit-scrollbar{
                display: none;
            }
        }
    }
    .footer{
        @include flexCenter;
        align-items: flex-end;
        height: 10%;
        background-color: rgb(78, 108, 190);
        overflow: hidden;
        span{
            font-size: $textSize;
            line-height: 25px;
        }
    }
}
</style>