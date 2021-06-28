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
        @click="()=>this.$refs.postMessage.handle(true)"
      >
        <label>사용자알림</label>
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>

    </div>

    <div class="order-info">
      <dl>
        <dt>주문일시</dt>
        <dd>
          <span>21.06.20</span>
          <span>오후 06:55</span>
        </dd>
      </dl>
      <dl>
        <dt>수거희망일</dt>
        <dd>
          <span>21.06.21</span>
          <span>월요일</span>
        </dd>
      </dl>
      <dl>
        <dt>수거요청시간</dt>
        <dd>
          <span>오전</span>
          <span>08:00~12:00</span>
        </dd>
      </dl>
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
        <dd>부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</dd>
      </dl>
      <dl>
        <dt>출입문</dt>
        <dd>별 누루고 3451 마지막 종 눌러주세요</dd>
      </dl>
    </div>

    <div class="info-box user-message">
      <h4>고객 요청사항</h4>
      <p>빠른 배송 부탁드립니다.</p>
    </div>

    <div class="info-box product">
      <h4>주문목록</h4>
      <ul>
        <li>
          <span class="name"
            >이불커버/침대커버(홀겹) <label>(6,900)</label></span
          >
          <span class="amount">8</span>
          <span class="price">55,200 원</span>
        </li>
        <li>
          <span class="name">베게커버 <label>(6,900)</label></span>
          <span class="amount">8</span>
          <span class="price">55,200 원</span>
        </li>
      </ul>
      <dl>
        <dt>합계</dt>
        <dd>79,900 원</dd>
      </dl>
    </div>

    <div class="next-btn" v-ripple>
      <label>수거완료</label>
      <span>
        <v-icon> mdi-arrow-right-circle </v-icon>
      </span>
    </div>

    
  </div>
</template>

<script>
import Confirm from '@/components/modal/confirm.vue'
import PostMessage from '@/components/modal/postMessage.vue'

export default {
  components:{
    Confirm, PostMessage
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
    }
  },
};
</script>

<style lang="scss" scoped>
.orderDetail {
  position: relative;
  height: 100%;
  background: #f8f8f8;

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
}

.order-btns {
  display: flex;
  margin-bottom:20px;
  background:#fff;
  border-top:1px solid #c2c2c2;
  border-bottom:1px solid #c2c2c2;

  .v-btn {
    display: flex;
    justify-content: space-between;
    flex: 1;
    border-radius: 0px;
    padding: 0px 10px;
    height: 44px;
    border-right: 1px solid #c2c2c2;

    label {
      font-size: 12px;
      color: #292929;
    }
    .v-icon {
      font-size: 16px;
      color: #df0e68;
    }
  }
  .v-btn:last-child {
    border-right: 0px;
  }

}

.info-box {
  border-bottom: 1px solid #e2e2e2;
  padding: 15px;
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
}

.user-message {
  p {
    padding: 10px;
    background: #f8f6f1;
  }
}

.product {
  ul {
    padding: 0px;
    margin: 0px;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      span.name {
        text-align: left;
        flex: 1;

        label {
          font-size: 10px;
          color: #888;
        }
      }
      span.amount {
        width: 40px;
        text-align: center;
      }
      span.price {
        width: 70px;
        text-align: right;
      }
    }

    li.change {
      color: #df0e68;
    }
  }
  dl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e2e2e2;
    margin-top: 15px;
    padding-top: 15px;

    dt {
      background: #595959;
      color: #fff;
      font-size: 10px;
      padding: 0 5px;
      border-radius: 3px;
    }
  }
}

.check-product {
  background: #fff6fa;
  dl {
    dt {
      background: #f11064;
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

.next-btn {
  margin-top: 20px;
  height: 56px;
  padding: 0 15px;
  display: flex;
  background: #008be8;
  justify-content: center;
  align-items: center;
  label {
    color: #fff;
    font-size: 16px;
  }
  .v-icon {
    margin-left: 10px;
    color: #fff;
  }
}
</style>
