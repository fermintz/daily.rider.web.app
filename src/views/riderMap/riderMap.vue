<template>
  <div class="riderMap">
    <div class="header">
      <v-btn icon class="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <div class="order-search">
        <input type="text" placeholder="주문번호검색">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <div class="userSelect">
        <v-btn 
          text 
          class="selector"
          @click="riderSelectorShow"
        >
          <label>{{rider}}</label>
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
        <div class="user-menu">
          <v-btn text v-for="item in ['전체','김동규','박수민']" :key="item" @click="riderSelectorHide(item)">{{item}}</v-btn>
        </div>
  
      </div>
    </div> <!-- header -->

    <div class="map-wrap">
      <div class="top-btns">
        <v-btn-toggle
          v-model="stateBtns"
          color="#292929"
          multiple
        >
          <v-btn text>
            <label>수거요청</label>
            <span>140</span>
          </v-btn>
          <v-btn text>
            <label>수거중</label>
            <span>2</span>
          </v-btn>
          <v-btn text>
            <label>출고대기</label>
            <span>18</span>
          </v-btn>
          <v-btn text>
            <label>배송대기</label>
            <span>10</span>
          </v-btn>
        </v-btn-toggle>
      </div>

      <div class="right-btns">
        <v-btn icon>
          <v-icon>mdi-email-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-traffic-light-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-crosshairs-gps</v-icon>
        </v-btn>
      </div>

      <kakao-map
        :center="[37.5536472, 126.9669724]"
        :level="6"
        :marker="marker"
        ref="kakaomap"
      />
    </div>

    <div class="orderList">
      <div class="handle">
        <span class="bar"></span>
      </div>
      <div class="order-item" v-for="item in 5" :key="item">
        <div class="top">
          <span class="state">수거예정</span>
          <span class="number">A-20315</span>
          <span class="amount">상품 11</span>
        </div>
        <div class="middle">
          <div class="left">
            <div class="time">
              1차
            </div>
            <div class="user">
              <span class="name">박수민</span>
              <span class="address">부산시 북구 구남언덕로 15 3층</span>
              <span class="gate">
                #12345 + 종눌러주세요
              </span>
            </div>
          </div>
          <div class="btns">
            <v-btn text>전화</v-btn>
            <v-btn text>수거완료</v-btn>
          </div>
        </div>
        <div class="msg">
          비닐에 담아두겠습니다 잘 부탁드려요
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import kakaoMap from '@/components/map.vue'

export default {
  components:{kakaoMap},
  data(){
    return{
      dragble:false,
      startPoint:null,
      endPoint:null,
      stateBtns:[],
      map: null,
      keyword: "",
      marker: {
        url: "./img/maker.png",
        widht: 33,
        height: 36,
      },
      rider:'전체'
    }
  },
  mounted(){
    this.dragset()
  },
  methods:{
    dragset(){
      const handle = document.querySelector('.handle');
      const list = document.querySelector('.orderList');
      const item = document.querySelectorAll('.order-item');
      const screenHt = window.innerHeight
      const bottomGap = screenHt - (item[0].clientHeight + 40)
      const topGap = 100

      list.style.top = bottomGap + 'px'
      list.style.overflowY = 'hidden';


      handle.addEventListener('touchstart', (e) => {
        e.preventDefault()
        this.startPoint = parseInt(e.changedTouches[0].clientY);
      },false)

      handle.addEventListener('touchmove', (e) => {
        list.style.transition = 'all 0s ease-out';
        const touchPoint = e.touches[0].clientY;
        if(touchPoint > topGap && touchPoint < bottomGap){
          list.style.top = parseInt(touchPoint) + 'px';
        }
      },false)
        
      handle.addEventListener('touchend', (e) => {
        this.endPoint = parseInt(e.changedTouches[0].clientY)
        list.style.transition = 'all 0.5s'
        
        if(this.startPoint >= this.endPoint){
          list.style.top = topGap + 'px';
          list.style.overflowY = 'auto';
        }else{
          list.style.top = bottomGap + 'px';
          list.style.overflowY = 'hidden';
          list.scrollTop = 0
        }
      },false)
    },

    riderSelectorHide(item){
      const userMenu = document.querySelector('.user-menu')
      this.rider = item;
      userMenu.style.display = 'none'
    },

    riderSelectorShow(){
      const userMenu = document.querySelector('.user-menu')
      if(userMenu.style.display === 'block'){
        userMenu.style.display = 'none'
      }else{
        userMenu.style.display = 'block'
      }
      
    }
     
  }
}
</script>

<style lang="stylesheet" src="./riderMap.scss" scoped/>