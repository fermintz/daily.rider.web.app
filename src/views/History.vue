<template>
  <div class="history">
    
    <div class="head">
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h4>작업 히스토리</h4>
    </div>
    
    <div class="history-list">
      <ul>
        <li class="user">
          <div class="cont">
            세탁예약을 완료했어요!
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="user">
          <div class="cont">
            수선부탁드려요, 바지 밑단을 잘라주세요! 꺠끗하게 부탁드려요! 티나지 않게! 
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="system">
          <div class="cont">
            세탁물수거를 시작하였습니다.
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="system">
          <div class="cont">
            세탁물수거를 완료하였습니다.
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="system">
          <div class="image">
            <img src="https://source.unsplash.com/random">
          </div>
          <div class="date">오늘 12:34</div>
        </li>
        <li class="system">
          <div class="cont">
            <div class="add-payment">
              <h4>추가결제요청</h4>
              <p>맡기신 코트에 오염정도가 심해 추가 세탁이 필요합니다</p>
              <span>5,900 원</span>
              <v-btn text>결제하기</v-btn>
            </div>
          </div>
          <div class="date">오늘 12:34</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
.history{
  .head{
    position:sticky;
    top:0px;
    width:100%;
    display:flex;
    align-items: center;
    height:60px;
    padding:0 10px;
    background:#fff;
    border-bottom:1px solid #e2e2e2;

    .v-btn{
      width: 40px;
      height: 40px;
  
    }

    h4{
      font-size:18px;
      margin-left:15px;
      padding:0px;
      line-height:18px;
    }
  }

  ul{
    padding:0px;
  }

  .history-list{
    padding:15px;

    ul{
      li{
        display:flex;
        align-items: flex-end;
        margin-bottom:15px;

        .image{
          max-width:70%;
          overflow:hidden;
          img{width:100%;display:block;}
        }
        .cont{
          padding:12px;
          font-size:13px;
        }

        .add-payment{
          h4{font-size:14px;}
          p{margin:0px;margin-top:5px;color:#888;}
          span{
            margin-top:10px;
            display:block;
            text-align:right;
            font-size:14px;
            font-weight:bold;
          }
          .v-btn{
            width:100%;
            background:#292929;
            color:#fff;
            margin-top:10px;
            font-size:14px;
            height:46px;
          }
        }

        .date{
          font-size:10px;
          color:#888;
          width:100px;
        }
      }

      li.user{
        flex-direction: row-reverse;
        .image{
          border-radius:10px 0px 10px 10px;
        }
        .cont{
          background:#FBEFF4;
          border-radius:10px 0 10px 10px;
        }
        .date{text-align:right;margin-right:5px;}
      }
      li.system{
        .image{
          border-radius:0px 10px 10px 10px;
        }
        .cont{
          background:#F2F3F8;
          border-radius:0 10px 10px 10px;
        }
        .date{margin-left:5px;}
      }
    }
  }
}
</style>