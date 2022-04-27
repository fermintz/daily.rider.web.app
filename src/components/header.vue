<template>
  <div class="header">
    <div class="logo">
      <strong>데일리세탁</strong>
      <span @click="$router.push('mypage')">Rider</span>
    </div>
    <div class="btns">
      <v-btn icon @click="$router.push('riderMap')">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <v-btn icon @click="$router.push('searchView')">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.header{
  display:flex;
  justify-content: space-between;
  align-items: center;
  height:56px;
  background:#008BE8;
  padding:0 10px;

  .logo{
    color:#fff;
    strong{
      font-size:20px;
      letter-spacing:-0.7px;
    }
    span{color:#FFF700;margin-left:5px;}
  }

  .btns{
    .v-btn{
      height:40px;
      width:40px;
      padding:0px;
      margin-left:5px;

      .v-icon{
        color:#fff;
      }
    }
  }
}
</style>
