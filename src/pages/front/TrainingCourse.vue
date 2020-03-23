<template>
  <div class="TrainingCourse init">
    <div class="row" style="background: #007aff;">
      <div v-for="v in ['首页','管理机构','课程介绍','联系我们']"
           class="curpoint header-item"
      >{{v}}
      </div>
      <div class="header-item" style="flex: 1;text-align: right;margin-right: 50px;">
        2020年3月13日 星期五
      </div>
    </div>

    <div class="btw mt10">
      <el-card class="box-card flex-base">
        <div slot="header" class="clearfix">
          <span style="font-size: 18px;">通知公告</span>
        </div>
        <div style="font-size: 16px;">通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告通知公告</div>
      </el-card>
      <el-card class="box-card flex-base " style="">
        <div class="w100 col" style="height: 220px;align-items: center;justify-content: center; padding: 80px;">
          <el-input placeholder="请输入" v-model="yhm">
            <template slot="prepend">用户名</template>
          </el-input>
          <el-input placeholder="请输入" class="mt20" v-model="mm">
            <template slot="prepend">密码&nbsp&nbsp&nbsp</template>
          </el-input>
          <div class="btw w100" style="margin-top: 10px;">
            <el-checkbox v-model="jzmm">记住密码</el-checkbox>
            <el-link target="_blank">忘记密码？</el-link>
          </div>
          <div class="flex-center w100" style="margin-top: 10px;">
            <el-button type="primary" style="width: 100px;margin-right: 20px;">登录</el-button>
            <el-button type="primary" style="width: 100px;">注册</el-button>
          </div>
        </div>
      </el-card>
    </div>

    <div class="row mt20" style="border: 3px solid lightskyblue; border-radius: 10px; padding: 10px 20px;">
      <div class="my-card" style="width: 140px;">课程学习<br/>步骤说明</div>

      <div class="step" style="flex: 1;display: flex; justify-content: center;align-items: center;">
        <div class="my-card">步骤1</div>
        <i class="el-icon-right"></i>
        <div class="my-card">步骤2</div>
        <i class="el-icon-right"></i>
        <div class="my-card">步骤3</div>
        <i class="el-icon-right"></i>
        <div class="my-card">步骤4</div>
        <i class="el-icon-right"></i>
        <div class="my-card">步骤5</div>
      </div>
    </div>

    <el-card class="box-card mt20">
      <div slot="header" class="clearfix">
        <span style="font-size: 18px;">课程介绍</span>
        <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <div class="arc tzgg">
        <div class="my-card">运动防护类</div>
        <div class="my-card">健康指导类</div>
        <div class="my-card">竞技类</div>
        <div class="my-card">运动防护类</div>
        <div class="my-card">运动防护类</div>
      </div>
    </el-card>

    <div class="btw mt20">
      <el-card class="box-card flex-base">
        <div slot="header" class="clearfix">
          <span style="font-size:18px">常用链接</span>
        </div>
        <div>
          <div style="width:70%;margin:20px auto" class="divButton btw">
            <div>广东省体育局</div>
            <div>邮箱系统</div>
          </div>
          <div style="width:70%;margin:20px auto" class="divButton btw">
            <div>综合门户</div>
            <div>OA办公平台</div>
          </div>
        </div>
      </el-card>
      <el-card class="box-card flex-base">
        <div slot="header" class="clearfix">
          <span style="font-size: 18px;">访问量</span>
        </div>
        <div class="lll col arc">
          <div>日浏览量: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp395</div>
          <div>月浏览量: &nbsp&nbsp11850</div>
          <div>年浏览量: 144175</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TrainingCourse",
    data() {
      return {
        yhm: '',
        mm: '',
        jzmm: false,
      }
    }
  }
</script>

<style scoped lang="scss">
  .TrainingCourse {
    .flex-base {
      flex: 0 0 49%;
    }
    .header-item {
      width: 180px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 18px;
      color: white;
      background: #007aff;
    }

    .my-card {
      background: #4abcfa;
      padding: 20px;
      color: white;
      font-size: 18px;
      border-radius: 5px;
      text-align: center;
    }

    .step {
      > div {
      }
      > i {
        margin: 0 10px;
        font-size: 40px;
        color: lightskyblue;
      }
    }
    .tzgg {
      > div {
        width: 200px;
      }
    }

    .divButton{
      >div{
        width:180px;
        text-align: center;
        line-height: 40px;
        height:40px;
        font-size: 16px;
        background: #f5f5f5;
        margin:0 12px;
        cursor: pointer;
      }
    }

    .lll{
      padding: 0 30px;
      >div{
        font-size: 20px;
        line-height: 2;
      }
    }
  }
</style>
