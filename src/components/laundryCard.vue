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
        <v-btn text>주소복사</v-btn>
      </div>
    </div>
    <div class="number">
      <span>02</span>
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
        border:1px solid #c2c2c2;
        padding:0 10px;
        margin-right:5px;
        font-size:11px;
      }

      .v-btn.phone{
        color:#08B882;
        border-color:#08B882;
      }
    }
  }

  .number{
    display:flex;
    align-items: center;
    justify-content: center;
    width:50px;
    height:50px;
    background:#f8f8f8;
    border-radius:25px;

    span{
      font-size:24px;
      font-weight:600;
      color:#DF0E68
    }
  }
}
</style>