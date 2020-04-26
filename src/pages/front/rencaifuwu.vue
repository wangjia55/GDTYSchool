<template>
  <div class="message-container">
      <img style="width:100%;" src="../../assets/images/rencaifuwu.png" alt/>

    <div class="rcfw">
      <div class="arc">
        <div class="tab-item" :class="activeName===1" @click="activeName=1">行业招聘</div>
        <div class="tab-item" :class="activeName===2" @click="activeName=2">资质申请</div>
        <div class="tab-item" :class="activeName===3" @click="activeName=3">从业咨询</div>
      </div>
      <hyzp v-if="activeName==1"></hyzp>
      <div v-if="activeName==2"> 管理配置</div>
      <div v-if="activeName==3" class="flex-center" style="margin: 0 auto;">
        <img src="../../assets/images/shots/cyzx.png" class="mt20"/>
      </div>
      <!--<el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">-->
      <!--<el-tab-pane label="行业招聘" name="first">-->
      <!--<hyzp></hyzp>-->
      <!--</el-tab-pane>-->
      <!--<el-tab-pane label="资质申请" name="second">配置管理</el-tab-pane>-->
      <!--<el-tab-pane label="从业咨询" name="third">-->
      <!--<img src="../../assets/images/shots/cyzx.png" />-->
      <!--</el-tab-pane>-->
      <!--</el-tabs>-->
    </div>
  </div>
</template>

<script>
  import hyzp from "./hangyezhaopin";

  export default {
    name: "rencaifuwu",
    components: {hyzp},
    data() {
      return {
        activeName: "1",
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped lang="scss">
  .rcfw {
    width: 1200px;
    margin: 10px auto;

    .tab-item {
      width: 220px !important;
      height: 50px;
      line-height: 50px;
      border: 0 !important;
      color: #ffffff !important;
      background: #417EFF !important;
      border-radius: 50px;
      margin: 0 12px;
      text-align: center;
      -webkit-box-flex: 2 !important;
      -ms-flex: 2 !important;
      flex: 2 !important;
      font-size: 16px;
      &.active {
        width: 220px !important;
        color: #ffffff !important;
        background: #3161c7 !important;
        border: 0 !important;
        border-radius: 50px;
        font-size: 16px;
      }
    }
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
