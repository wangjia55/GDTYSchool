<!-- 3*3新享计划问答组件 -->
<template>
  <div class="qt-item btw">
    <div class="qt-question">
      <h2>{{mes.question}}</h2>
      <p v-for="item in mes.answer" :key="item">{{item}}</p>
      <yd-lightbox>
        <yd-lightbox-img class="qt-imgs" v-if="mes.imgsrc" :src="mes.imgsrc" alt></yd-lightbox-img>
      </yd-lightbox>
    </div>
    <div class="qt-point">
      <img @click="showTips(mes)" src="../assets/images/point.png" alt>
    </div>
   
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    // 数据
    return {};
  },
  computed: {},
  components: {
    // 组件名称
  },
  methods: {
    // 事件函数
    showTips(item){
      this.$emit('showTips',{
        item:item
      });
    }
  },
  props: ["mes"],
  created: function() {
    // 页面加载的时候触发的函数
  }
};
</script>
<style lang="scss">
.qt-item {
  width: 96%;
  margin: 20px auto;
  padding: 12px 10px;
  background: #f7f7f7;
  border-radius: 8px;
  .qt-question {
    text-align: justify;
    > h2 {
      @include f(16px, #984949, 25px);
      margin-bottom: 10px;
    }
    > p {
      @include f(12px, #999, 20px);
    }
  }
  .qt-point {
    img {
      width: 15px;
      height: 15px;
      margin-left: 10px;
      margin-top: 5px;
    }
  }
  .qt-imgs {
    width: 100%;
    margin: 10px auto;
  }

 
}
</style>
