<template>
  <div class="laundry">
    <v-btn icon @click="$router.go(-1)" class="backBtn">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <div class="map"></div>
    <div class="shop">
      <div class="shop-info">
        <span class="name">백양세탁소</span>
        <span class="address"
          >부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호
          페이오티</span
        >
        <span class="phone">051-336-3307</span>
      </div>
      <div class="btns">
        <v-btn text plain>
          <v-icon>mdi-phone</v-icon>
          <span>전화하기</span>
        </v-btn>
        <v-btn text plain>
          <v-icon>mdi-map-marker</v-icon>
          <span>네비안내</span>
        </v-btn>
        <v-btn text plain>
          <v-icon>mdi-content-copy</v-icon>
          <span>주소복사</span>
        </v-btn>
      </div>
    </div>

    <div class="workTabs">
      <v-btn
        text
        plain
        v-for="(item, index) in ['입고대기', '출고대기']"
        :key="index"
        :class="{ active: tabActive === index }"
        @click="tabActive = index"
      >
        <label>{{ item }}</label
        >(<span>{{ index }}</span
        >)
      </v-btn>
    </div>

    <div class="workList">
      <OrderCard v-for="item in 6" :key="item" />
    </div>
  </div>
</template>

<script>
import OrderCard from "@/components/orderCard.vue";


export default {
  components: {
    OrderCard,
  },
  data() {
    return {
      tabActive: 0,
    };
  },
  mounted(){
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
  },
  methods:{
    initMap(){ 
      var container = document.querySelector('.map'); 
      var options = { 
        center: new kakao.maps.LatLng(35.2105418752911, 128.98077408555307), 
        level: 3 }; 
      var map = new kakao.maps.Map(container, options); 
      //마커추가하려면 객체를 아래와 같이 하나 만든다.
      var marker = new kakao.maps.Marker({ position: map.getCenter() }); 

      marker.setMap(map); 
    }, 
    
    addScript(){ 
      const script = document.createElement('script'); 
      /* global kakao */ 
      script.onload = () => 
        kakao.maps.load(this.initMap); 
        script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fd35148c932ea7489978edead48076f2'; document.head.appendChild(script); 
    }
  }
};
</script>

<style lang="scss" scoped>
.laundry {
  height: 100%;
  background: #f8f8f8;

  .v-btn.backBtn {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 45px;
    height: 45px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    z-index:10;
  }

  .map {
    height: 240px;
    background: #c2c2c2;
  }

  .shop {
    padding: 20px;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    background: #fff;

    .shop-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span.name {
        font-size: 16px;
        font-weight: bold;
      }
      span.address {
        text-align: center;
        margin-top: 5px;
        color: #888;
      }
      span.phone {
        color: #08b882;
        margin-top: 10px;
      }
    }

    .btns {
      display: flex;
      border: 1px solid #e2e2e2;
      border-radius: 5px;
      overflow: hidden;
      margin-top: 15px;

      .v-btn {
        flex: 1;
        border-radius: 0px;
        border-right: 1px solid #e2e2e2;

        .v-icon {
          font-size: 14px;
          margin-right: 4px;
          color: #c2c2c2;
        }
        span {
          font-size: 12.5px;
        }
      }
    }
  }

  .workTabs {
    display: flex;
    background: #fff;

    .v-btn {
      flex: 1;
      height: 50px;
      border-radius: 0px;
      font-size: 13px;
      border-bottom: 3px solid #e2e2e2;

      span {
        color: #df0e68;
      }
    }

    .v-btn.active {
      border-color: #008be8;
    }
  }
}
</style>
