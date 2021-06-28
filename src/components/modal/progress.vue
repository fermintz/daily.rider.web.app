<template>
  <v-dialog
    v-model="visible"
    width="unset"
  >
    <div class="dialog">
      <v-progress-circular
        indeterminate
        color="#DF0E68"
      ></v-progress-circular>
      <span>자료를 불러오는 중 입니다</span>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true
    }
  },
  mounted(){
    setTimeout(() => {
      this.visible = false
    }, 1000);
  },
  methods:{
    handle(value){
      this.visible = value
    }
  },
}
</script>

<style lang="scss" scoped>
.dialog{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:20px;
  background:#fff;

  span{margin-top:15px;}
}
</style>