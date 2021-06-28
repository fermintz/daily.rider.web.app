<template>
  <div class="mapView">
    <div class="head">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </div>

    <div class="state">
      <dl class="pickup" id="pickup" @click="testMap('안녕')">
        <dt>{{pickupData.length}}</dt>
        <dd>수거</dd>
      </dl>
      <dl class="laundry-in"  id="laundry">
        <dt>{{laundry.length}}</dt>
        <dd>입고</dd>
      </dl>
      <dl class="laundry-out">
        <dt>4</dt>
        <dd>출고</dd>
      </dl>
      <dl class="delivery" id="delivery">
        <dt>{{deliveryData.length}}</dt>
        <dd>배송</dd>
      </dl>
    </div>

    <div class="order">
      <OrderCard />
    </div>

    <div class="map">

    </div>
  </div>
</template>

<script>
import OrderCard from '@/components/orderCard.vue'

export default {
  components:{
    OrderCard,
  },
  data(){
    return{
      selectMarker:null,
      pickupData:[
        {
          title: '카카오', 
          position: new kakao.maps.LatLng(33.450705, 126.570677)
        },
        {
          title: '생태연못', 
          position: new kakao.maps.LatLng(33.450936, 126.569477)
        },
        {
          title: '텃밭', 
          position: new kakao.maps.LatLng(33.450879, 126.569940)
        },
      ],
      laundry:[
        {
          title: '텃밭', 
          position: new kakao.maps.LatLng(33.450879, 126.569940)
        },
      ],
      deliveryData:[
        {
          title: '근린공원',
          position: new kakao.maps.LatLng(33.451393, 126.570738)
        }
      ],
    }
  },

  mounted(){
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
  },
  methods:{
    initMap(){ 
      var mapContainer = document.querySelector('.map'); 
      var mapOptions = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), 
        level: 3 }; 
      // 지도를 생성
      var map = new kakao.maps.Map(mapContainer, mapOptions);

      var MarkerSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png'

      function setMarker(position,img){
        const marker = new kakao.maps.Marker({
          map: map,
          position: position,
          image:img
        })
        
        kakao.maps.event.addListener(marker, 'click', function(){
          alert('바보')
        })
        
        marker.setMap(map)
      }

      function markerImage(src, size, option){
        let markerImg = new kakao.maps.MarkerImage(src, size, option)
        return markerImg;
      }
      
      
 
      this.pickupData.forEach((item) => {
        let size = new kakao.maps.Size(22, 26);
        let option = {  
              spriteOrigin: new kakao.maps.Point(10, 0),    
              spriteSize: new kakao.maps.Size(36, 98)  
            };   
        let setMarkerImage = markerImage(MarkerSrc, size, option)
        setMarker(item.position, setMarkerImage)
      })

      this.deliveryData.forEach((item) => {
        let size = new kakao.maps.Size(22, 26);
        let option = {  
              spriteOrigin: new kakao.maps.Point(10,72),    
              spriteSize: new kakao.maps.Size(36, 98)  
            };   
        let setMarkerImage = markerImage(MarkerSrc, size, option)
        setMarker(item.position, setMarkerImage)
      })
    },
    
    addScript(){ 
      const script = document.createElement('script'); 
      /* global kakao */ 
      script.onload = () => 
        kakao.maps.load(this.initMap); 
        script.src = 'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fd35148c932ea7489978edead48076f2'; 
        document.head.appendChild(script); 
    }
  }
}
</script>

<style lang="scss" scoped>
.mapView{
  position: relative;
  height:100%;
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

.order{
  position:fixed;  
  width:100%;
  z-index:2;
  bottom:0px;
  left:0px;
  padding:10px;

  .item{
    margin-top:0px;
    border-radius:10px;
    border:1px solid #e2e2e2;
    overflow:hidden;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.05);
  }
}


.map{
  position: relative;
  z-index:1;
  background: #f2f2f2;
  height:100%;
}

</style>

