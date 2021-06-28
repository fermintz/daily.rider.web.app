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
        <div class="orderItem" v-for="item in 5" :key="item">
          <div class="state">
            <span>배송완료</span>
            <dl>
              <dt>주문일</dt>
              <dd>2021.01.23</dd>
            </dl>
          </div>
          <div class="user-info">
            <span class="name">박수민</span>
            <span class="address">부산광역시 금정구 부산대학로 63번길 2 과학기술연구동 201호</span>
            <span class="phone">010-8525-4561</span>
            <span class="gate">*누르고 4512 누루고 종모양 눌러주세요!</span>
          </div>
          <div class="btns">
            <v-btn text>주소복사</v-btn>
            <v-btn text>네비안내</v-btn>
          </div>
        </div>
      </div>
    </div>

    <div class="divider" />
  </div>
</template>

<style lang="scss" scoped>
.searchView{
  height:100%;
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

  .list{
    .orderItem{
      border-bottom:1px solid #e2e2e2;
      padding:16px;
      display:flex;

      .state{
        margin-right:15px;

        span{
          display:flex;
          justify-content: center;
          align-items: center;
          background:#292929;
          color:#fff;
          border-radius:5px;
          font-size:10px;
          padding:3px;
          height:36px;
        }

        dl{
          margin-top:10px;
          dt{font-size:11px;color:#888}
          dd{
            font-size:11px;
          }
        }
      }
      .user-info{
        flex:1;
        font-size:12px;
        span{
          display:block;
          margin-bottom:4px;
        }

        .name{
          font-size:14px;
        }
        .phone{
          color:#08B882
        }
        .gate{

        }
      }
      .btns{
        margin-left:10px;
        display:flex;
        flex-direction: column;
        .v-btn{
          border:1px solid #e2e2e2;
          height:22px;
          min-width:auto;
          padding:0 5px;
          margin-bottom:8px;
          font-size:10px;
        }

      }
    }
    .orderItem:last-child{
      border:0px;
    }
  }
}
</style>