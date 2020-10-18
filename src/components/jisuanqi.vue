<template>
  <div class="jisuanqi">
      <div class="contanier">
          <div class="resultView">
              <input type="text" disabled>
              <input type="text" disabled>
          </div>
          <div class="inputView">

          </div>
      </div>
      <h2>111</h2>
  </div>
</template>

<script>
export default {
    name:'jisuanqi',
    data(){
        return {
            
            }
    },
    methods:{
        
    }
}
</script>

<style scoped lang="scss">
.jisuanqi{
    @include mainInView;
    background-color: darkgoldenrod;
    .contanier{
        width:25vw;
        height:55vh;
        min-width: 250px;
        min-height: 320px;
        margin-top: 5px;
        margin-left: 5px;
        background-color: #fff;
        padding: 2px;
        .resultView{
            width: 100%;
            height: 20%;
            background-color: deepskyblue;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            input{
                width: calc(100% - 10px);
                height: 40%;
                margin-top: 2px;
                margin-bottom:2px;
                border: none;
                background-color: #fff;
                border-radius: 4px;;
            }
        }
        .inputView{
            width: 100%;
            height: 80%;
            background-color: gold;
        }
    }
}
</style>