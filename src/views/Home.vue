<template>
  <div class="home">
     <div class="header" @click="backhome">
         <span>{{title}}</span>
     </div>
     <div class="main">

         <menu-view :mlist="menulist" @routerto="routerTo"></menu-view>
         <div class="mainView">
             <router-view />
         </div>

         <div class="homeView">
             <h1>首页</h1>
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
        this.initInfoData();
    },
    methods:{
        // 初始化主页面数据
        initInfoData(){
            this.getMainInfoData().then((res) => {
                this.title = res.proTitle;
                this.author = res.author;
                this.lastUpdate = res.lastUpdate;
                this.menulist = res.menulistData;
            }); 
        },
        //从data.json中获取主页的显示数据
        async getMainInfoData () {
            let reqdata = {
                reqType:'initInfo'
            }
            let result = await mainService.getInfoData(reqdata);
            return result
        },

        routerTo(id, path, name){
            this.title = name;
            this.$router.push({ path:path,jquery:{ id:id } });
            console.log(id,path,name);
        },
        //回到首页
        backhome(){
            this.initInfoData();
            this.$router.push('/home');
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
        &:hover{
            background-color: rgb(174, 116, 228);
            span{
                color:#fff;
            }
        }
    }
    .main{
        height: 85%;
        background-color: $backColor;
        position: relative;
        .mainView{
            height: calc(100% - #{$menuheight} - #{$viewborder});
            width: calc(100% - #{$viewborder});
            border-width:#{$viewbwidth};
            border-style: $borderStyle;
            border-color: $borderColor;
            box-shadow: inset 0 0 5px 1px $borderColor;
            @include flexCenter;
        }
        .homeView{
            height: calc(100% - #{$menuheight} - #{$viewborder} - 8px);
            width: calc(100% - #{$viewborder} - 8px);
            background-color: mediumspringgreen;
            box-shadow: 0 0 5px 1px $borderColor;
            position: absolute;
            top:calc(#{$menuheight} + #{$viewborder} + 3px);
            left:calc(#{$viewbwidth} + 4px);
            overflow-y: scroll;
            &::-webkit-scrollbar{
                display: none;
            }
            z-index:0;
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