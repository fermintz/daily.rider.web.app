<template>
  <div class="searchView">
    <div class="top">
      <div class="head">
        <v-btn icon @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <h2>주문검색</h2>
      </div>

      <div class="searchBox">
        <input type="text" placeholder="휴대전화 번호를 입력해주세요">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <p>예) 전화번호 뒷 4자리</p>
      </div>
    </div>
    
    <div class="divider" />

    <div class="searchResult">
      <p><b>'0808'</b> 검색결과입니다</p>

      <div class="list">
        <ShopOrderCard v-for="item in 10" :key="item" ref="shopOrderCard"/>
      </div> <!-- list -->
    </div>
  </div>
</template>

<script>
import ShopOrderCard from '@/components/shopOrderCard'
export default {
  components:{ShopOrderCard,},
  mounted(){
    this.$refs.shopOrderCard.btns = false
  }
}
</script>

<style lang="scss" scoped>
.searchView{
  padding-bottom:10px;

}

.top{
  background:#fff;
  border-bottom:1px solid #e2e2e2;

  .head{
    width:100%;
    left:0px;
    top:0px;
    display:flex;
    align-items: center;
    height:60px;
    padding:0 10px;
    
    h2{
      font-size:18px;
      margin-left:10px;
    }

    .v-btn{
      width: 40px;
      height: 40px;
    }
  }

  .searchBox{
    position: relative;
    padding:16px;
    input{
      width:100%;
      border-bottom:1px solid #e2e2e2;
      height:50px;
      outline: none;
    }
    input:focus{
      border-bottom:2px solid #008BE8;
    }

    .v-btn{
      position: absolute;
      width:50px;
      height:50px;
      top:16px;
      right:16px;
    }

    p{
      margin-top:10px;
      font-size:12px;
      color:#888;
    }
  }

}

.divider{
  height:10px;
  background: #f2f2f2;
}

.searchResult{
  background:#fff;
  border-top:1px solid #e2e2e2;
  border-bottom:1px solid #e2e2e2;

  p{
    margin:0px;
    padding:16px;
    border-bottom:1px solid #e2e2e2;
  }

}
</style>