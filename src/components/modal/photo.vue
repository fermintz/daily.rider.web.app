<template>
  <v-dialog
    v-model="visible"
  >
    <div class="modal">
      <div class="inner">
       
        <div class="top">
           <div class="head">
            <div class="title">
              <h3>수거완료처리</h3>
              <p>수거완료처리를 위해 사진을 업로드해주세요</p>
            </div>
            <v-btn icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div> <!-- head -->
          <div class="cont">
            <div class="img-area" v-if="imageVisible">
              <img src="https://source.unsplash.com/random">
            </div>
            <div class="imageUpload" v-else>
              <dl class="btn camera" v-ripple @click="imageVisible = true">
                <dt>
                  <v-icon>
                    mdi-camera
                  </v-icon>
                </dt>
                <dd>카메라</dd>
              </dl>
              <dl class="btn gallery" v-ripple @click="imageVisible = true">
                <dt>
                  <v-icon>
                    mdi-image
                  </v-icon>
                </dt>
                <dd>갤러리</dd>
              </dl>
            </div>
          </div> <!-- section -->
        </div> <!-- cont -->
        <div class="btns">
          <v-btn text @click="handle(false)">취소</v-btn>
          <v-btn text class="finish" @click="handle(false)">확인</v-btn>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>

export default {
  data(){
    return{
      imageVisible:false,
      visible:false,
    }
  },
  methods:{
    handle(value){
      this.visible = value;
      this.imageVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  .cont{
    .img-area{
      background:#f8f8f8;
      
      height:150px;
      margin-bottom:10px;
      border-radius:4px;
      overflow:hidden;
      display:flex;
      align-items: center;;
      justify-content: center;

      img{
        width:100%;
        display:block;
      }
    }

    .imageUpload{
      display:flex;
      margin-top:15px;
      align-items:center;

      dl{
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border:1px solid #e2e2e2;
        min-height:70px;
        margin-right:10px;
        border-radius:5px;
        dt{
          .v-icon{
            color:#c2c2c2;
          }
        }
        dd{
          font-size:12px;
          margin-top:2px;
          color:#888;
        }
      }
      dl:last-child{
        margin-right:0px;
      }
    }
  }
}
</style>

