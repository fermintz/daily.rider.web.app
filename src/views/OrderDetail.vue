<template>
  <div class="orderDetail">

    <Confirm ref="confirm"/>
    <PostMessage ref="postMessage" />

    <div class="head">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push('historyView')">
        <v-icon>mdi-history</v-icon>
      </v-btn>
    </div>

    <div class="map"></div>

    <div class="order-info">
      <dl>
        <dt>주문일시</dt>
        <dd>
          <span>21.06.20</span>
          <span>오후 06:55</span>
        </dd>
      </dl>
      <dl class="pickup">
        <dt>수거희망일</dt>
        <dd>
          <span>21.06.21</span>
          <span>월요일</span>
        </dd>
      </dl>
    </div>

    <div class="order-btns">

      <v-btn text 
        @click="modalHandle($refs.confirm, true, '주문취소', '주문 취소할까요?')"
      >
        <label>주문취소</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <v-btn text
        @click="modalHandle($refs.confirm, true, '패널티취소', '주문취소 후 패널티(3,000원)를 부과할까요?')"
      >
        <label>패널티취소</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <v-btn text
        @click="modalHandle($refs.confirm, true, '수거지연알림', '수거지연안내 문자를 발송할까요?')"
      >
        <label>수거지연안내</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <v-btn text
        @click="modalHandle($refs.confirm, true, '배송지연안내', '배송지연안내 문자를 발송할까요?')"
      >
        <label>배송지연안내</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <v-btn text
        @click="()=>this.$refs.postMessage.handle(true)"
      >
        <label>사용자알림</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      

    </div>

    

    <div class="info-box user-info">
      <h4>주문자정보</h4>

      <dl>
        <dt>사용자명</dt>
        <dd>박수민</dd>
      </dl>
      <dl>
        <dt>전화번호</dt>
        <dd>010-8525-4561</dd>
      </dl>
      <dl>
        <dt>주소지</dt>
        <dd>
          부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호
        </dd>
      </dl>
      <dl>
        <dt>출입문</dt>
        <dd>별 누루고 3451 마지막 종 눌러주세요</dd>
      </dl>

      <div class="user_info_btns">
        <v-btn text>
          <v-icon>mdi-phone</v-icon>
          <span>전화</span>

        </v-btn>
        <v-btn text @click="snackbarHandle">
          <v-icon>mdi-content-copy</v-icon>
          <span>주소복사</span> 
        </v-btn>
      </div>
    </div>

    <div class="info-box user-message">
      <dl>
        <dt>
          고객 요청사항
        </dt>
        <dd>
          빠른 배송 부탁드립니다.
        </dd>
      </dl>
    </div>

    <div class="product_info">
      <dl class="user_product">
        <dt>검수 완료 후 변동내역</dt>
        <dd>
          <div class="item check">
            <div class="left">
              <label>와이셔츠</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              2
            </div>
            <div class="total">
              8,000 원
            </div>
          </div> <!-- item -->
          <div class="item">
            <div class="left">
              <label>정장하의</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              3
            </div>
            <div class="total">
              12,000 원
            </div>
          </div>
        </dd>
      </dl>

      <div class="divider"/>

      <dl class="user_product">
        <dt>고객 주문내역</dt>
        <dd>
          <div class="item">
            <div class="left">
              <label>와이셔츠</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              3
            </div>
            <div class="total">
              12,000 원
            </div>
          </div>
          <div class="item">
            <div class="left">
              <label>정장하의</label>
              <div class="price">
                <span>4,000원</span>
                <strong>3,000원</strong>
              </div>
            </div>
            <div class="amount">
              3
            </div>
            <div class="total">
              12,000 원
            </div>
          </div>
        </dd>
      </dl>
    </div>

    <div class="page_bottom">
      <div class="btns">
        <v-btn text class="finish">
          <label>세탁시작</label>
          <v-icon> mdi-arrow-right-circle </v-icon>
        </v-btn>
      </div>
    </div>
    <Snackbars ref="snackbar"/>   
  </div>
</template>

<script>
import Confirm from '@/components/modal/confirm.vue'
import PostMessage from '@/components/modal/postMessage.vue'
import Snackbars from "@/components/snackbars.vue"

export default {
  components:{
    Confirm, PostMessage, Snackbars,
  },
  data() {
    return {
      photos: [
        {
          src: "https://source.unsplash.com/random",
        },
        {
          src: "https://source.unsplash.com/random",
        },
      ],
    };
  },
  watch:{
    
  },
  methods:{
    modalHandle(refs, value, title, message){
      refs.handle(value);
      refs.title = title;
      refs.message = message;
    },
    snackbarHandle(){
      this.$refs.snackbar.handle(true);
      this.$refs.snackbar.message = '주소가 복사되었습니다'
    }
  },
};
</script>

<style lang="scss" scoped>
.orderDetail {
  position: relative;
  height: 100%;
  background: #f8f8f8;
  padding-bottom:90px;

  .head{
    width:100%;
    left:0px;
    top:0px;
    position: absolute;
    display:flex;
    justify-content: space-between;
    align-items: center;
    height:60px;
    padding:0 10px;

    .v-btn{
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
    }
  }
}

.map {
  height: 240px;
  background: #e2e2e2;
}

.order-info {
  display: flex;
  align-items: center;
  height: 90px;
  background: #fff;
  border-bottom: 1px solid #e2e2e2;
  border-top: 1px solid #e2e2e2;

  dl {
    flex: 1;
    padding: 0 15px;
    border-right: 1px solid #e2e2e2;

    dt {
      font-size: 10px;
      color: #888;
    }
    dd {
      margin-top: 5px;
      span {
        display: block;
      }
    }
  }
  dl:last-child {
    border-right: 0px;
  }

  dl.pickup{
    dd{
      span{
        color:#de0059;
      }
    }
  }
}

.order-btns {
  margin-bottom:10px;
  background:#fff;
  padding:15px;
  border-bottom:1px solid #e2e2e2;

  .v-btn {
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    border:1px solid #c2c2c2;
    border-radius: 5px;
    padding: 0px 10px;
    height: 50px;
    margin-bottom:10px;
    box-shadow: 3px 3px 12px rgba(0,0,0,0.05);
    background:#fff;

    label {
      font-size: 14px;
      color: #292929;
    }
    .v-icon {
      font-size: 16px;
      color: #df0e68;
    }
  }


}

.info-box {
  border-bottom: 1px solid #e2e2e2;
  border-top:1px solid #e2e2e2;
  padding: 20px;
  background: #fff;

  h4 {
    margin-bottom: 15px;
    font-size: 16px;
  }
}

.user-info {
  dl {
    display: flex;
    margin-bottom: 10px;
    dt {
      width: 70px;
      color: #888;
    }
    dd {
      flex: 1;
    }
  }

  .user_info_btns{
    display:flex;
    border:1px solid #c2c2c2;
    margin-top:30px;
    border-radius:5px;
    overflow:hidden;

    .v-btn{
      border-radius:0;
      flex:1;
      height:40px;
      border-right:1px solid #c2c2c2;
      
      .v-icon{
        font-size:14px;
        margin-right:5px;
      }
      span{
        font-size:14px;
      }
    }
    .v-btn:last-child{
      border-right:0px;
    }
  }

  
}

.user-message {
  margin-top:10px;
  border-top:1px solid #e2e2e2;
  border-bottom:1px solid #e2e2e2;
  padding:20px;

  dt{
    font-size:16px;
    font-weight:bold;
    margin-bottom:15px;
  }
  dd {
    padding: 10px;
    border-radius:5px;
    background: #f8f6f1;
  }
}

.product_info{
  padding:20px;
  background:#fff;
  margin-top:10px;
  border-top:1px solid #e2e2e2;
  border-bottom:1px solid #e2e2e2;

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  dl{
     dt{
        font-size:16px;
        font-weight:bold;
        margin-bottom:15px;
      }
    }

  dl:last-child{
    margin-bottom:0px;
  }

  dl.user_product{


    dd{
      .item{
        display:flex;
        align-items: center;
        border:1px solid #e2e2e2;
        padding:15px;
        border-radius:5px;
        margin-bottom:10px;

        .left{
          flex:1;
          label{
            display:block;
            font-size:14px;
          }
          .price{
            display:flex;
            align-items: center;
            font-size:12px;
            span{
              text-decoration: line-through;
              color:#999;
            }
            strong{
              margin-left:5px;
            }
          }
        }

        .amount{
          display:flex;
          justify-content: center;
          align-items: center;
          border-radius:18px;
          width:30px;
          height:30px;
          font-size:12px;
          background:#f2f2f2;
        }
        .total{
          width:90px;
          text-align:right;
        }
      }

      .item.check{
        background:#FBEFF4;
        border:0px;
        .amount{
          color:#f11064;
          background:#fff;
        }
        .total{
          color:#f11064;
        }
      }

      .price_total{
        background:#f2f2f2;
        border-radius:5px;
        padding:15px;
        display:flex;
        align-items: center;
        justify-content: space-between;
        span{font-size:12px;}
        strong{font-weight:bold;}
      }  
    }
  }
}

.photo-info {
  p.no-data {
    background: #f8f8f8;
    padding: 10px;
  }

  .v-carousel{
    border-radius:5px;
    overflow:hidden;
  }

  .photo {
    position: relative;

    img {
      display:block;
    }
    
  }
}

.page_bottom{
  width:100%;
  border-top:1px solid #e2e2e2;
  position: fixed;
  bottom:0px;
  padding:10px;
  background:#fff;

  .btns{
    display:flex;
    align-items: center;

    .v-btn{
      flex:1;
      height:50px;
      border:1px solid #c2c2c2;
      margin-right:10px;
      font-size:14px;
      font-weight:bold;

      .v-icon{
        margin-left:5px;
        font-size:18px;
      }
    }

    .v-btn.finish{
      background:#008be8;
      color:#fff;
      border:0px;
    }

    .v-btn:last-child{
      margin-right:0px;
    }
  }
}
</style>
