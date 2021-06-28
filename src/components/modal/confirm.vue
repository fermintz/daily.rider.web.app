<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal">
      <div class="inner">
        <div class="top">
          <div class="head">
            <div class="title">
              <h3>{{title}}</h3>
              <p>{{message}}</p>
            </div>
            <v-btn icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
        <div class="btns">
          <v-btn text @click="handle(false)">취소</v-btn>
          <v-btn text @click="handle(false)" class="finish">확인</v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default{
  data(){
    return{
      visible:false,
      title:'',
      message:'',
    } 
  },
  methods:{
    handle(value){
      this.visible = value
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  font-size:14px;
  
  .inner{
    border-radius:10px;
    background:#fff;
    overflow:hidden;

    .cont{
      padding:16px;

      .head{
        display:Flex;
        justify-content: space-between;
        align-items: flex-start;

        .title{
          h3{
            font-size:18px;
            font-weight:bold;
          }
          p{
            font-size:13px;
            line-height:19px;
            margin:0px;
            margin-top:5px;
            padding:0px;
            color:#888;
          }
        }
        .v-btn{
          width:30px;
          height:30px;
          margin-left:20px;

          .v-icon{
            font-size:16px;
          }
        }
      }
    }

    .btns{
      display:flex;
      justify-content: flex-end;
      align-items: center;
      padding:10px 16px;
      border-top:1px solid #e2e2e2;
      background:#f8f8f8;

      .v-btn{
        border-radius:0px;
        height:36px;
        font-size:13px;
        border:1px solid #e2e2e2;
        margin-left:10px;
        border-radius:4px;
        background:#fff;
      }

      .v-btn.finish{
        font-weight:bold;
        color:#0CA0E2;
      }
    }
  }
}
</style>