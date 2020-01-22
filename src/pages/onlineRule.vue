<template>

    <div class="content">
        <p>1. 当本地的有效时长累计达到5分钟，才会上报，上报的触发点是点击屏幕的时候。</p>
        <p>2. 本地记录时长的有效时间单位是1分钟，即：连续使用APP达到1分钟或超过1分钟，才会触发本地时长的累计，直到达到5分钟。
        </p>
        <p>3. 如果打开APP使用不到1分钟就退出程序或者切换到后台，这个时间是无效时长，要重新累计。</p>
    </div>

</template>

<script type="text/javascript">
 import vuePickers from 'vue-pickers'
export default {
  data() {
    // 数据
    return {
    
    }
  },
  computed: {
    
  },
  components: {
    // 组件名称
    vuePickers
  },
  methods: {
   
    // 事件函数
  },
  props: ["datas"],
  created: function() {
    
    // 页面加载的时候触发的函数
  }
};
</script>
<style scoped>
.content{
    margin:20px 10px;
}

.content p{
  margin:20px 10px;
  font-size: 18px;
  line-height: 25px;
  text-align: justify;
}
</style>
