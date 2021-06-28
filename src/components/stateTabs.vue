<template>
  <div class="stateTabs">
    <dl
      v-for="(item, index) in stateTabs"
      :key="index"
      :class="{ active: stateTabActive === index }"
      @click="stateTabActive = index"
    >
      <dt v-html="item.name"></dt>
      <dd>{{item.number}}</dd>
    </dl>
  </div>
</template>


<script>
export default {
  data() {
    return {
      stateTabActive: 0,
      stateTabs: [
        {
          name:"주문예약<div style='font-size:9px;color:#888;'>(금일제외)</div>",
          number: 9,
        },
        {
          name: "수거요청",
          number: 2,
        },
        {
          name: "세탁입고",
          number: 6,
        },
        {
          name: "세탁출고",
          number: 5,
        },
        {
          name: "배송대기",
          number: 1,
        },
      ],
    };
  },
  mounted(){

  },
  watch: {
    stateTabActive(newValue) {
      this.$emit('status', newValue);
    }
  },
  methods:{

  }
};
</script>

<style lang="scss" scoped>
.stateTabs {
  position:sticky;
  top:0px;
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  background:#fff;
  z-index:3;

  dl:first-child {
    flex: auto;
    width: 50px;
    align-items: flex-start;
    padding:8px;

    dt{
      text-align:left;      
    }
    dd {
      position:absolute;
      right:12px;bottom:5px;
      align-self: flex-end;
    }
  }

  dl.active {
    background:#FFF8FB;
    dd {
      color: #df0e68;
    }
  }

  dl.active:after {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border: 1px solid #df0e68;
  }

  dl {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    border-right: 1px solid #e2e2e2;
    height: 64px;
    margin: 0px;
    padding: 8px;

    dt {
      font-size: 11px;
      text-align: center;
    }
    dd {
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      margin-top: 4px;
    }
  }
}


</style>
