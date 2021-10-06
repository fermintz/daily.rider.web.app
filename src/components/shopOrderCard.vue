<template>
  <div class="shopOrderCard" @click="$router.push('orderDetail')">
    <div class="item_head">
      <div class="icons">
        <span>주문완료</span>
        <span class="refound">반품</span>
      </div>
      <div class="order-date">
        2021.01.23 12:34
      </div>
    </div>
    <div class="item_cont">
      <div class="order_info">
        <div class="order_number">
          <span>주문번호</span>
          <strong>26481</strong>
        </div>
        <div class="user_info">
          <div class="name">박수민</div>
          <div class="address">부산시 북구 구남언덕로 15</div>
          <div class="product_info">
            <div class="product_info_item">
              <span>주문</span>
              <strong>15,900원</strong>
            </div>
            <div class="product_info_item">
              <span>상품</span>
              <strong>11개</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="item_btns" v-show="btns">
        <v-btn text class="phone" @click.stop="">
          <v-icon>mdi-phone</v-icon>
          <span>전화걸기</span>
        </v-btn>
        <v-btn text class="finish" @click.stop="">
          <span>입고완료</span>
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      btns:true
    }
  }
}
</script>

<style lang="scss" scoped>
.shopOrderCard{
  border-top:1px solid #c2c2c2;
  border-bottom:1px solid #c2c2c2;
  margin-top:10px;
  background:#fff;

  .item_head{
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:40px;
    border-bottom:1px solid #e2e2e2;
    padding:0 10px;

    .icons{
      display:flex;
      align-items:center;

      span{
        display:flex;
        align-items: center;
        justify-content: center;;
        font-size:11px;
        background:#292929;
        border-radius:3px;
        color:#fff;
        height:20px;
        padding:0 5px;
        margin-right:5px;
      }

      .refound{
        background:#DF0E68
      }
    }
    .order-date{
      font-size:11px;
    }
  }

  .item_cont{
    padding:15px;

    .order_info{
      display:flex;

      .order_number{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background:#FBF4F7;
        border-radius:5px;
        width:90px;
        span{
          font-size:9px;
          color:#898989
        }
        strong{
          display:block;
          font-size:18px;
        }
      }

      .user_info{
        margin-left:15px;

        .name{
            font-size:14px;
            font-weight:bold;
          }
        .address{
          font-size:11px;
          color:#898989;
          margin:5px 0;
        }
        .product_info{
          display:flex;

          .product_info_item{
            display:flex;
            align-items: center;
            justify-content: center;
            margin-right:5px;
            background: #F2F4F9;
            height:22px;
            padding:0 5px;
            border-radius:3px;
            span{
              font-size:12px;
              color:#888;
              margin-right:3px;
            }
            strong{
              font-size:12px;
            }
          }
        }
      }
    }
  }
  .item_btns{
    display:flex;
    align-items: center;
    margin-top:20px;
    border:1px solid #c2c2c2;
    border-radius:5px;
    overflow:hidden;
    background:#fff;

    .v-btn{
      flex:2;
      height:40px;
      border-radius:0;
      border-right:1px solid #c2c2c2;

      .v-icon{
        font-size:14px;
        margin-right:5px;
        color:#16AF80;
      }
      span{
        font-size:12px;
      }
    }
    .v-btn.finish{
      flex:3;
      border:0px;
      span{
        margin-right:0px;
        margin-left:5px;
      }
      .v-icon{
        margin-left:5px;
        margin-right:0px;
        color:#008BE8;
      }
    }
  }
}
</style>