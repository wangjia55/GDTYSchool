<!-- 3*3新享计划组件 -->
<template>
 
  <div class="new-lists " @click="childClick">
    <div class='btw'  @click="toShow">
      <p>{{datas.defaultData[0].text}}</p>
      <span></span>
    </div>
    <div>
      <vue-pickers
        :show="datas.show"
        :columns="datas.columns"
        :defaultData="datas.defaultData"
        :selectData="datas.pickData"
        @cancel="close"
        @confirm="confirmFn"></vue-pickers>
    </div>
    <div class="car-mengban"  v-show="datas.show"></div>
  </div>
</template>
<script type="text/javascript">
 import vuePickers from 'vue-pickers'
export default {
  data() {
    // 数据
    return {
      vals:'',
      chooseval:''
    }
  },
  computed: {
    
  },
  components: {
    // 组件名称
    vuePickers
  },
  methods: {
     childClick () {
       let object = {
         text: this.chooseval,
         val:this.vals
       }
        this.$emit('childByValue',object)
      },
     close() {
      this.datas.show = false
    },
    confirmFn(val) {
      this.datas.show = false
      this.datas.defaultData = [val.select1];
      this.chooseval = val.select1.text;
      this.vals = val.select1.value;
  
    },
    toShow() {
      this.datas.show = true
    }
    // 事件函数
  },
  props: ["datas"],
  created: function() {
    
    // 页面加载的时候触发的函数
  }
};
</script>
<style lang="scss">
.new-lists {
  
  border-bottom: 1px solid #ddd;
  > div:nth-of-type(1) {
    align-items: center;
    > p {
      @include f(15px, #999, 50px);
    }
    > span {
      display: inline-block;
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 10px solid #666;
    
    }
  }
}
.car-mengban{
  width:100%;
  position:fixed;
  top:0;
  left:0;
  z-index: 2;
  background-color: rgba(0,0,0,0.5);
  opacity: 0.5;
  height:100vh;
}

</style>
