<template>
  <div class="container">
    <p class="title">国赛徐晨皓4-2逆转萨姆索诺夫 方博遗憾出局</p>
    <p class="subtitle">发布人：广东体育职业技术学院 发布时间：2020-01-24 10:17:51 浏览次数：72</p>
    <div>
      <img src="../assets/images/info1.jpg" alt />
    </div>
    <p
      class="content"
    >北京时间1月29日，2020年德国乒乓球公开赛，男单资格赛第二轮，徐晨皓4-2逆转老将萨姆索诺夫， 方博1-4不敌斯托亚诺夫，遗憾出局。

　　徐晨皓的对手是老将萨姆索诺夫，首局比赛徐晨皓5-11失利，第二局12-10扳回一城，第三局老萨11-9拿下，随后三局徐晨皓以11-9、11-6、11-7拿下，进而4-2战胜对手。方博1-4不敌斯托亚诺夫，遗憾出局。

　　向鹏4-0苏帕纳特，周雨4-0卢博米尔，闫安4-0横扫纽丁克，丢掉首局的赵子豪4-1逆转斯祖迪，周启豪4-3险胜萨里弗，徐瑛彬4-1马科斯，徐海东4-3逆转哈贝松。

　　混双资格赛第一轮 林高远/孙颖莎 11-3、11-8、11-6奥托/莫雷罗 。（小小）</p>
    
  </div>
</template>

<script type="text/javascript">
import vuePickers from "vue-pickers";
export default {
  data() {
    // 数据
    return {};
  },
  computed: {},
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
.container {
  margin: 10px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}

.container p {
  margin: 8px 50px;
  text-indent: 2em;
  line-height: 25px;
  text-align: justify;
}

.title {
  font-size: 22px;
}

.subtitle {
  font-size: 14px;
}
.content {
  font-size: 16px;
  line-height: 30px;
}
</style>
