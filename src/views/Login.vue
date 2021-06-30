<template>
  <div class="login">
    <div class="inner">
      <div class="logo">
        <div class="logo-img">
          <img src="@/assets/logo.png">
        </div>
        <div class="logo-text">
          <h2>데일리세탁</h2>
          <span>Rider</span>
        </div>
      </div>

      <div class="form">
        <dl>
          <dt><v-icon>mdi-account-circle</v-icon></dt>
          <dd><input type="text" placeholder="아이디"></dd>
        </dl>
        <dl>
          <dt><v-icon>mdi-lock</v-icon></dt>
          <dd><input type="password"  placeholder="비밀번호"></dd>
        </dl>
        <v-btn text @click="$router.push('/')">
          로그인
        </v-btn>
      </div>
      <p class="password-find" v-ripple @click="$refs.passFind.handle(true)">
        비밀번호 찾기
      </p>
    </div>

    <PassFind ref="passFind"/>
  </div>
</template>

<script>
import PassFind from '@/components/modal/passFind.vue'

export default {
  components:{PassFind,},
}
</script>

<style lang="scss" scoped>
.login{
  min-height:100%;
  padding:40px;

  .inner{
    min-height:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .logo{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .logo-img{
      img{
        display:block;
        height:120px;
      }
    }
    .logo-text{
      text-align:center;
      h2{
        margin-top:15px;
      }
      span{
        margin-top:5px;
        font-family:'Roboto';
        color:#2C9CD4;
      }
    }
  }


  .form{
    width:100%;
    margin-top:50px;

    dl{
      display:flex;
      align-items: center;
      border:1px solid #c2c2c2;
      margin-bottom:10px;
      border-radius:4px;

      dt{
        .v-icon{
          width:46px;
          font-size:20px;
          color:#c2c2c2;
        }
      }
      dd{
        flex:1;
        input{
          width:100%;
          height:46px;
          outline: none;
          font-size:14px;
        }
      }
    }

    .v-btn{
      width:100%;
      height:50px;
      background: #2C9CD4;
      color:#fff;
      font-size:16px;
      font-weight:bold;
      border-radius:4px;
    }
  }

  .password-find{
    margin-top:30px;
    padding:5px 15px;
    background:#f2f2f2;
    border-radius:100px;
    font-size:12px;
  }
}
</style>