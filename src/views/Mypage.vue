<template>
  <div class="mypage">
    <div class="head">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2>마이페이지</h2>
    </div>

    <div class="rider-info">
      <dl class="password">
        <dt>변경할 패스워드</dt>
        <dd>
          <input type="text" placeholder="패스워드입력">
        </dd>
      </dl>

      <div class="finish">
        <v-btn text>변경완료</v-btn>
      </div>
      <div class="logout">
      <v-btn text @click="$router.push('/login')">로그아웃</v-btn>
    </div>
    </div>

    
  </div>
</template>

<style lang="scss" scoped>
.mypage{
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

  .rider-info{
    padding:16px;

    dl{
      margin-bottom:20px;
      dt{
        margin-bottom:5px;
      }
      dd{
        input{width:100%;height:40px;background:#f2f2f2;padding:0 5px;border-radius:4px;}
      }
    }

    .finish{
      .v-btn{
        width:100%;
        height:50px;
        background:#2C9CD4;
        color:#fff;
        font-size:16px;
      }
    }

    .logout{
      margin-top:20px;
      text-align:right;

      .v-btn{

      }
    }
  }
}
</style>