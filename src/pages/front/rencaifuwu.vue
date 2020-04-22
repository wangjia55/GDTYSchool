<template>
  <div class="message-container">
    <el-carousel>
      <el-carousel-item type="card" :interval="3000">
        <img style="width:100%;" src="../../assets/images/zixun23.png" alt />
      </el-carousel-item>
    </el-carousel>

    <div class="rcfw">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="行业招聘" name="first">
          <hyzp></hyzp>
        </el-tab-pane>
        <el-tab-pane label="资质申请" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="从业咨询" name="third">
          <img src="../../assets/images/shots/cyzx.png" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import hyzp from "./hangyezhaopin";
export default {
  name: "rencaifuwu",
  components: { hyzp },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.rcfw {
  width: 1000px;
  margin: 10px auto;
}

.el-tabs {
  border: 0 !important;
}

.el-tabs__header {
  border: 0 !important;
  margin-left: 100px;
}
.el-tabs__item:hover {
  width: 220px !important;
  color: #417eff !important;
  background: rgb(102, 147, 245) !important;
  border: 0 !important;
  font-size: 16px;
}
.el-tabs__item {
  width: 220px !important;
  height: 45px;
  line-height: 45px;
  border: 0 !important;
  color: #ffffff !important;
  background: #417eff !important;
  border-radius: 50px;
  margin: 0 20px;
  text-align: center;
  flex: 2 !important;
  font-size: 16px;
}
.el-tabs__item.is-active {
  width: 220px !important;
  color: #ffffff !important;
  background: rgb(34, 71, 151) !important;
  border: 0 !important;
  border-radius: 50px;
  font-size: 16px;
}
.el-tabs__nav {
  width: 220px !important;
  border-radius: 50px;
  margin: 0 20px;
  font-size: 16px;
}
</style>
