<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal passFind">
      <div class="inner">
        <div class="top">
          <div class="head">
            <h3>비밀번호 찾기</h3>
            <v-btn icon  @click="visible=false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="cont">
            <input type="number" placeholder="'-'제외한 번호만 입력">
            <p>휴대폰번호를 입력해주세요 입력하신 번호로 임시번호가 발송됩니다.</p>
            <v-btn text class="finish" @click="visible=false">
              발송하기
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:false,
    }
  },

  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>
.passFind{
  .cont{
    input{
      height:45px;
      background:#f2f2f2;
      width:100%;
      padding:0 10px;
      border-bottom:1px solid #c2c2c2;
    }

    p{
      font-size:12px;color:#888;
      margin-top:10px;
    }

    .finish{
      height:50px;
      width:100%;
      background:#292929;
      color:#fff;
      font-size:16px;
    }
  }

  
}
</style>