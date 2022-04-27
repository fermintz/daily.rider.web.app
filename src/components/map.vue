<template>
  <div class="map">
    <div id="overlayItem" class="overlayItem">
      <div class="name">
        박수민
      </div>
      <div class="inner">
        <dl>
          <dt>수거요청</dt>
          <dd>2</dd>
        </dl>
        <div class="number">
          2
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  props: ["center", "level", "marker"],
  data(){
    return{
      map: {},
    }
  },
  mounted(){
    if (window.kakao && window.kakao.maps) {
      this.inital();
    } else {
      this.kakaoScript();
    }
  },
  methods:{
    inital() {
      const mapContainer = document.getElementsByClassName("map")[0];
      const [lat, lng] = this.center;

      this.map = new kakao.maps.Map(mapContainer, {
        center: new kakao.maps.LatLng(lat, lng),
        level: this.level,
      });

      const { url, width, height } = this.marker;
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(lat, lng),
        image: new kakao.maps.MarkerImage(
          url,
          new kakao.maps.Size(width, height)
        ),
      });

      const overlayContent = document.getElementById('overlayItem')


      const CustomOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(lat, lng),
        content: overlayContent,
        xAnchor: -0.25,
        yAnchor: 1.0,
      })

      CustomOverlay.setMap(this.map);
      console.log(marker)
    },

    kakaoScript() {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.inital);
      script.src =
        "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=8180df1c5b5b6f3d47b1b60dfe933654&libraries=services";
      document.head.appendChild(script);
    },
  },
}
</script>

<style lang="scss" scoped>
.map{
  position: relative;
  z-index:1;
  width:100%;
  min-height:700px;

  .overlayItem{

    .inner{
      display:flex;
      background:#fff;
      padding:7px;
      border-radius:16px 16px 16px 0;
      border:3px solid #292929;
      position: relative;

      dl{
        text-align:center;
        &:last-child{
          margin-right:0;
        }
        dt{
          font-size:9px;
          letter-spacing: -0.4px;
        }
        dd{
          font-size:15px;
          line-height: 1.2;
          font-weight:bold;
        }
      }

      .number{
        display:flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right:-10px;
        top:-10px;
        width:20px;
        height:20px;
        background:#292929;
        color:#fff;
        border-radius:12px;
        font-size:10px;
      }
    }
  }
}
</style>