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
        <dl>
          <dt v-ripple>
            <v-icon>
              mdi-phone
            </v-icon>
          </dt>
          <dd>전화</dd>
        </dl>
        <dl>
          <dt v-ripple>
            <v-icon>
              mdi-content-copy
            </v-icon>
          </dt>
          <dd>주소복사</dd>
        </dl>
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
      <ShopOrderCard v-for="item in 6" :key="item" />
    </div>
  </div>
</template>

<script>
import ShopOrderCard from "@/components/shopOrderCard.vue";


export default {
  components: {
    ShopOrderCard,
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
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 20px;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    background: #fff;

    .shop-info {
      margin-right:20px;
      span{
        display:block;
        text-align:left;
      }
      span.name {
        font-size: 16px;
        font-weight: bold;
      }
      span.address {
        font-size:11px;
        margin-top: 5px;
        color: #888;
      }
      span.phone {
        color: #08b882;
        margin-top: 5px;
      }
    }

    .btns {
      display: flex;

      dl{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right:10px;
        dt{
          display:flex;
          justify-content: center;
          align-items: center;
          width:40px;
          height:40px;
          border-radius:20px;
          background:#f2f2f2;
          .v-icon{
            font-size:18px;
          }
        }
        dd{
          text-align:center;
          font-size:10px;
          margin-top:5px;
        }
      }
      dl:last-child{
        margin-right:0px;
      }
    }
  }
  .workList{
    background:#f8f8f8;
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
