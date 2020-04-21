<template>
    <div class="rcfw ">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="行业招聘" name="first">
          <hyzp></hyzp>
        </el-tab-pane>
        <el-tab-pane label="资质申请" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="从业咨询" name="third">
          <img src="../../assets/images/shots/cyzx.png">
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import hyzp from './hangyezhaopin'
  export default {
    name: "rencaifuwu",
    components:{hyzp},
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
.rcfw{
    width: 1000px;
  margin: 0 auto;
}
</style>
