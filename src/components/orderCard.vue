<template>
  <div class="item" @click="$router.push('orderDetail')">
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
      <div class="top">
        <div class="pickup-info">
          <div class="pickup_number">
            21834
          </div>
          <div class="box">
            <span>01.26</span>
            <strong>월요일</strong>
          </div>
        </div>
        <div class="user-info">
          <dl class="name">
            <dd>박수민</dd>
          </dl>
          <dl class="phone">
            <dt><v-icon>mdi-phone</v-icon></dt>
            <dd>010-8525-4561</dd>
          </dl>
          <dl class="address">
            <dt><v-icon>mdi-map-marker</v-icon></dt>
            <dd>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</dd>
          </dl>
          <dl class="gate">
            <dt><v-icon>mdi-lock</v-icon></dt>
            <dd>경비 열쇠 9876 종 경비 열쇠 9876 종경비 열쇠 9876 종경비 열쇠 9876 종경비 열쇠 9876 종</dd>
          </dl>
        </div>
        <div class="btns">
          <v-btn text @click.stop="snackbar(true, '주소가 복사되었습니다')">주소복사</v-btn>
          <v-btn text >수거지연</v-btn>
          <v-btn text >배송지연</v-btn>
        </div>
      </div>
      <div class="item_bottom">
        <div class="product_info">
          <dl>
            <dt>상품</dt>
            <dd>11개</dd>
          </dl>
          <dl>
            <dt>주문금액</dt>
            <dd>15,900원</dd>
          </dl>
        </div>
        <v-btn class="finishBtn" text @click.stop="modal(true)">
          수거완료
        </v-btn>
      </div> 
      <div class="user_message">
        <dl>
          <dt><v-icon>mdi-message</v-icon></dt>
          <dd>문앞에 걸어둘게요!</dd>
        </dl>
      </div>
    </div> <!-- item_body -->
  </div> <!-- item -->
</template>

<script>
export default {
  methods:{
    modal(value){
      this.$emit('modal', value)
    },
    snackbar(value, text){
      this.$emit('snack', {visible:value, text:text})
    }  
  },
}
</script>

<style lang="scss" scoped>

.item{
  position: relative;
  margin-top:10px;
  background:#fff;
  border-top:1px solid #e2e2e2;
  border-bottom:1px solid #e2e2e2;
  min-height:100px;

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
    position: relative;
    padding:10px;
    min-height:150px;

    .top{
      display:flex;

      .pickup-info{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
        margin-right:15px;

        .pickup_number{
          display:flex;
          align-items: center;
          justify-content: center;
          border-radius:5px;
          background:#f2f2f2;
          width:100%;
          height:26px;
          margin-bottom:8px;
          font-size:14px;
          font-weight:500;
        }

        .box{
          display:flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width:60px;
          height:60px;
          border-radius:10px;
          border:1px solid #008BE8;
          span{font-size:12px;margin-bottom:2px;font-weight:500;}
          strong{font-size:14px;font-weight:normal;color:#008BE8;line-height:16px;}
        }
      }

      .user-info{
        flex:1;

        dl{
          display:flex;
          align-items: center;
          margin-bottom:5px;

          dt{
            display:flex;
            justify-content: center;
            align-items: center;
            margin-right:5px;
            .v-icon{
              font-size:11px;
            }
          }
          dd{
            font-size:12px;
            line-height:18px;
          }
        }
        dl.name{
          dd{
            font-size:14px;
          }
        }

        dl.phone{
          dt{
            .v-icon{color:#08B882}
          }
          dd{background:#E3F9F2;color:#08B882;padding:0 5px;border-radius:3px;}
        }

        dl.address{
          align-items:flex-start;
          dt{
            .v-icon{margin-top:3px;}
          }
        }
        dl.gate{
          align-items: flex-start;
          dt{
            .v-icon{
              color:#DF0E68;
              margin-top:2px; 
            }
          }
          dd{
            color:#DF0E68
          }
        }
      }

      .btns{
        display:flex;
        flex-direction: column;
        align-items: center;
        margin-left:15px;
        
        .v-btn{
          height:22px;
          min-width:unset;
          padding:0px 5px;
          border:1px solid #e2e2e2;
          font-size:10px;
          margin-bottom:8px;
        }
      }
    }

    .item_bottom{
      display:flex;
      align-items: flex-end;
      justify-content: space-between;
      
      .product_info{
        display:flex;
        align-items: center;
        margin-top:15px;

        dl{
          display:flex;
          align-items: center;
          justify-content: center;
          margin-right:5px;
          background: #F2F4F9;
          height:22px;
          padding:0 5px;
          border-radius:3px;

          dt{
            font-size:12px;
            color:#888;
            margin-right:3px;
          }
          dd{
            font-size:12px;
          }
        }
      }

      .finishBtn{
        min-width:unset;
        width:auto;
        height:36px;
        width:90px;
        font-size:13px;
        font-weight:600;
        letter-spacing: 0px;
        background: #292929;
        color:#fff;
      }
    }

    
  }
  .user_message{
    padding:10px;
    margin-top:10px;
    background: #F2F0E7;
    border-radius:5px;

    dl{
      display:flex;
      align-items: flex-start;

      dt{
        .v-icon{margin-right:8px;font-size:14px;}
      }
      dd{
        font-size:12px;
      }
    }    
  }
  
}
</style>