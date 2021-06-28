<template>
  <div 
    class="laundryCard" 
    @click="$router.push('laundry')"
    v-ripple
  >
    <div class="left">
      <div class="name">백양세탁소</div>
      <div class="address">부산시 북구 구남언덕로 15 3층</div>
      <div class="btns">
        <v-btn text class="phone">051-336-3307</v-btn>
        <v-btn text>네비안내</v-btn>
        <v-btn text>주소복사</v-btn>
      </div>
    </div>
    <div class="right">
      <span>02</span>
      <v-icon>mdi-chevron-right</v-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.laundryCard{
  display:flex;
  align-items:center;
  margin-top:10px;
  border-top:1px solid #e2e2e2;
  border-bottom:1px solid #e2e2e2;
  padding:15px;
  background:#fff;

  .left{
    flex:1;
    .name{
      font-size:16px;
      line-height:16px;
      font-weight:600;
    }
    .address{
      margin-top:5px;
    }
    .btns{
      display:flex;
      align-items:center;
      margin-top:10px;

      .v-btn{
        height:24px;
        border:1px solid #e2e2e2;
        padding:0 10px;
        margin-right:5px;
      }

      .v-btn.phone{
        color:#08B882;
        border-color:#08B882;
      }
    }
  }

  .right{
    display:flex;
    align-items: center;

    span{
      font-size:24px;
      font-weight:600;
      margin-right:10px;
      color:#DF0E68
    }
    .v-icon{
      color:#a2a2a2;
    }
  }
}
</style>