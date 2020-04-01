<template>
  <div class="c-message-container">
        <el-card class="box-card" v-for="v in 1" :key="v">
                <div slot="header" class="clearfix">
                  <span style="font-size:18px">面授学习</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院篮球课程培训</span>
                    <span>进入项目</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院网球课程培训</span>
                    <span>进入项目</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院羽毛球课程培训</span>
                    <span>进入项目</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院舞蹈课程培训</span>
                    <span>进入项目</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院武术课程培训</span>
                    <span>进入项目</span>
                  </div>
                </div>
              </el-card>
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


</style>
