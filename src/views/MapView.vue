<template>
  <div class="map">
    <div class="head">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>

    <div class="state">
      <dl class="pickup" id="pickup" @click="testMap('안녕')">
        <dt>10</dt>
        <dd>수거</dd>
      </dl>
      <dl class="laundry-in"  id="laundry">
        <dt>2</dt>
        <dd>입고</dd>
      </dl>
      <dl class="laundry-out">
        <dt>4</dt>
        <dd>출고</dd>
      </dl>
      <dl class="delivery" id="delivery">
        <dt>1</dt>
        <dd>배송</dd>
      </dl>
    </div>

    <div class="bottom_wrap">
      
    </div>

    <div class="bottom_scroll_wrap">
      <div class="shop-info-box">
        <div class="top">
          <strong>선경세탁소</strong>
          <span>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티</span>
        </div>
        <div class="num_info">
          <div class="numBox in">
            <span>입고</span>
            <strong>1</strong> 
          </div>
          <div class="numBox out">
            <span>출고</span>
            <strong>4</strong>
          </div>
        </div>
        <div class="btns">
          <v-btn text>전화</v-btn>
          <v-btn text>주소복사</v-btn>
        </div>
      </div>

      <div class="user-info-box">
        <div class="top">
          <div class="name">박수민</div>
          <div class="number">31489</div>
        </div>
        <div class="pickup">
          <span>11.01(월)</span>
          <strong>08:00부터</strong>
        </div>
        <div class="address">
          부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티
        </div>
        <div class="summary">
          <span>상품 18개</span>
          <span>15,900원</span>
        </div>
        <div class="btns">
          <v-btn text>전화</v-btn>
          <v-btn text>주소복사</v-btn>
        </div>
      </div>

      <div class="user-info-box">
        <div class="top">
          <div class="name">박수민</div>
          <div class="number">31489</div>
        </div>
        <div class="pickup">
          <span>11.01(월)</span>
          <strong>08:00부터</strong>
        </div>
        <div class="address">
          부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호 페이오티
        </div>
        <div class="summary">
          <span>상품 18개</span>
          <span>15,900원</span>
        </div>
        <div class="btns">
          <v-btn text>전화</v-btn>
          <v-btn text>주소복사</v-btn>
        </div>
      </div>

      
    </div>

 
  </div>
</template>



<style lang="scss" scoped>
.map{
  position: relative;
  z-index:1;
  background: #f2f2f2;
  height:100%;
  padding:10px;
}

.head{
  width:100%;
  left:0px;
  top:0px;
  position: fixed;
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:60px;
  padding:0 10px;
  z-index:2;

  .v-btn{
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
  }
}

.state{
  position: fixed;
  top:10px;
  right:10px;
  display:Flex;
  flex-direction: column;
  z-index:2;
  background:#fff;
  border-radius:5px;
  border:1px solid #e2e2e2;

  dl{
    width:40px;
    border-bottom:1px solid #e2e2e2;
    text-align:center;
    padding:5px 0;
    dt{font-size:18px;font-weight:bold;}
    dd{font-size:11px;}
  }

  dl:last-child{
    border-bottom:0px;
  }

  dl.pickup{
    dt{
      color:#008BE8
    }
  }
  dl.laundry-in{
    dt{
      color:#08B882;
    }
  }
  dl.laundry-out{
    dt{
      color:#FF8000;
    }
  }
  dl.delivery{
    dt{
      color:#DF0E68
    }
  }
}

.bottom_scroll_wrap{
  position: fixed;
  display:flex;
  padding:15px;
  bottom:0px;
  left:0px;
  width:100%;
  overflow-y:scroll;

  .shop-info-box{
    position: relative;
    min-width:230px;
    min-height:230px;
    background:#fff;
    width:100%;
    padding:15px;
    border-radius:10px;
    border:1px solid #16AF80;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.06);
    margin-right:10px;

    .top{      
      flex:1;

      strong{
        display:block;
        font-weight:normal;
        font-size:14px;
        color:#16AF80;
      }
      span{
        display:block;
        font-size:11px;
        margin-top:10px;
        color:#898989;
      }
    }

    .num_info{
      display:flex;
      align-items: center;
      margin-top:10px;

      .numBox{
        flex:1;
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding:0 10px;
        text-align:center;
        height:30px;
        border-radius:5px;
        margin-right:5px;

        span{
          font-size:10px;
          display:block;
        }
        strong{
          font-size:14px;
          font-weight:500;
          font-family:'Roboto';
          display:block;
        }
      }
      .numBox:last-child{
        margin-right:0px;
      }

      .numBox.in{
        background:#F6EDF1;
        strong{
          color:#DF0E68
        }
      }
      .numBox.out{
        background:#F2F4F9;
        strong{
          color:#008BE8
        }
      }
    }

    .btns{
      position:absolute;
      width:100%;
      left:0px;
      padding:0 15px;
      bottom:15px;
      display:flex;

      .v-btn{
        flex:1;
        margin-right:10px;
        border:1px solid #d2d2d2;
        height:34px;
      }
      .v-btn:last-child{
        margin-right:0px;
      }
    }
  }

  
  
  
  .user-info-box{
    position: relative;
    display:flex;
    flex-direction: column;
    min-width:230px;
    min-height:230px;
    padding:15px;
    margin-right:10px;
    background:#fff;
    border-radius:10px;
    border:1px solid #d2d2d2;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.06);

    .top{
      display:flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom:10px;
    }
    .pickup{
      background:#f8f8f8;
      height:30px;
      display:flex;
      align-items: center;
      justify-content: center;
      
      span{
        margin-right:10px;
      }
      strong{
        color:#008BE8;
        font-weight:normal;
      }
    }
    .address{
      font-size:11px;
      color:#898989;
      margin:10px 0;
    }
    .summary{
      display:flex;
      margin-bottom:10px;
      span{
        display:flex;
        align-items: center;
        background:#F6EDF1;
        font-size:10px;
        margin-right:10px;
        height:20px;
        padding:0 5px;
        border-radius:3px;
      }
    }
    .btns{
      position:absolute;
      width:100%;
      left:0px;
      padding:0 15px;
      bottom:15px;
      display:flex;

      .v-btn{
        flex:1;
        margin-right:10px;
        border:1px solid #d2d2d2;
        height:34px;
      }
      .v-btn:last-child{
        margin-right:0px;
      }
    }
  }

  .user-info-box:last-child{
    margin-right:0px;
  }
}





</style>

