<template>
  <div class="c-message-container">
    <el-card class="box-card" v-for="v in 1" :key="v">
      <div slot="header" class="clearfix">
        <span style="font-size:18px">培训机构</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      
      <div class="btw mb20" style="background: white;">
        <div style="width:90%;margin:20px auto" class="divButton btw">
          <li>
            <img src="../../assets/images/jigou3.png" style="width:250px; border:#b6b6b6 1px solid;border-radius:15px; " />
          </li>
          <li>
            <img src="../../assets/images/jigou2.png" style="width:250px; border:#b6b6b6 1px solid;border-radius:15px; " />
          </li>
          <li>
            <img src="../../assets/images/jigou1.png" style="width:250px;border:#b6b6b6 1px solid; border-radius:15px; " />
          </li>
            <li>
            <img src="../../assets/images/jigou3.png" style="width:250px; border:#b6b6b6 1px solid;border-radius:15px; " />
          </li>
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
