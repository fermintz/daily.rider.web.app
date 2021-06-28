<template>
  <v-snackbar
    v-model="visible"
    timeout="700"
    min-height="30"
  >
    <span>{{message}}</span>
  </v-snackbar>
</template>

<script>
export default {
  props:['text'],

  data(){
    return{
      visible:false,
      message:null,
    }
  },
  methods:{
    handle(value){
      this.visible = value;
    }
  }
}
</script>

<style lang="scss" scoped>
.v-snack{
  span{
    font-size:14px;
  }
}
</style>