<template>
  <div class="edu-container">
    <div class="navs">
      <el-carousel style="width:100%;height:400px;">
        <el-carousel-item type="card" :interval="3000">
          <img style="width:100%;" src="../../assets/images/home15.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="TrainingCourse init">
      <div class="row" style="background: #1754c2;">
        <div v-for="v in ['首页','管理机构','课程介绍','联系我们']" class="curpoint header-item">{{v}}</div>
        <div
          class="header-item"
          style="flex: 1;text-align: right;margin-right: 50px;"
        >2020年3月13日 星期五</div>
      </div>

      <div class="btw mt10">
        <el-card class="box-card flex-base">
          <div slot="header" class="clearfix">
            <span style="font-size: 18px;">通知公告</span>
          </div>
          <div class="flex-base g" >
            <el-carousel>
              <el-carousel-item>
                <div class="flex-center curpoint col"  @click="gotoDetail">
                  <img
                    style="width:580px;height:260px;"
                    src="../../assets/images/detail2.png"
                    alt
                  />
                  <div style="width:400px;height:20px;margin:10px auto;text-align:center;">
                    <p style="font-size:16px;">广东体育职业技术学院参加教育系统防控会议</p>
                  </div>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="flex-center curpoint col"  @click="gotoDetail">
                  <img
                    style="width:580px;height:260px;"
                    src="../../assets/images/detail4.png"
                    alt
                  />
                  <div style="width:400px;height:20px;margin:10px auto;text-align:center;">
                    <p style="font-size:16px;">广东体育职业技术学院与广州融创文旅城签署校企合作</p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>

        </el-card>
        <el-card class="box-card flex-base" style>
          <div
            class="w100 col"
            style="height: 220px;align-items: center;justify-content: center; padding: 80px;"
          >
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

      <div
        class="row mt20"
        style="border: 3px solid lightskyblue; border-radius: 10px; padding: 10px 20px;"
      >
        <div class="my-card" style="width: 140px;">
          课程学习
          <br />步骤说明
        </div>

        <div
          class="step"
          style="flex: 1;display: flex; justify-content: center;align-items: center;"
        >
          <div class="my-card">步骤1：在线注册用户</div>
          <i class="el-icon-right"></i>
          <div class="my-card">步骤2:登录课程培训系统</div>
          <i class="el-icon-right"></i>
          <div class="my-card">步骤3:选择课程进修学习</div>
          <i class="el-icon-right"></i>
          <div class="my-card">步骤4:在线考核</div>
          <i class="el-icon-right"></i>
          <div class="my-card">步骤5：获得证书</div>
        </div>
      </div>

      <el-card class="box-card mt20">
        <div slot="header" class="clearfix">
          <span style="font-size: 18px;">课程介绍</span>
          <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </div>
        <div class="arc tzgg">
            <div class="c-message-container">
     <div class="flex-wrap">
                <div
                  class="col curpoint p10"
                  style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps1.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">游泳教学基础公开课</p>
                    <el-button type="primary" size="mini">开始学习</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps2.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">羽毛球教学基础公开课</p>
                    <el-button type="primary" size="mini">开始学习</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps3.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">篮球教学基础公开课</p>
                    <el-button type="primary" size="mini">开始学习</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps4.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">足球教学基础公开课</p>
                    <el-button type="primary" size="mini">开始学习</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps5.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">网球教学基础公开课</p>
                    <el-button type="primary" size="mini">开始学习</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps6.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">武术教学基础公开课</p>
                    <el-button type="primary" size="mini">开始学习</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps7.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">舞蹈教学基础公开课</p>
                    <el-button type="primary" size="mini">开始学习</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps8.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">健美操教学基础公开课</p>
                    <el-button type="primary" size="mini">开始学习</el-button>
                  </div>
                </div>
              </div>

  </div>
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
  </div>
</template>

<script>
export default {
  name: "TrainingCourse",
  data() {
    return {
      yhm: "",
      mm: "",
      jzmm: false
    };
  }
};
</script>

<style scoped lang="scss">
.TrainingCourse {
  .flex-base {
    flex: 0 0 49%;
  }
  .header-item {
    width: 180px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: white;
    background: #1754c2;
  }

  .my-card {
    background: #1754c2;
    padding: 10px;
    color: white;
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
  }

  .step {
    > div {
    }
    > i {
      margin: 0 10px;
      font-size: 40px;
      color: 1754c2;
    }
  }
  // .tzgg {
  //   > div {
  //     width: 200px;
  //   }
  // }

  // .divButton {
  //   > div {
  //     width: 180px;
  //     text-align: center;
  //     line-height: 40px;
  //     height: 40px;
  //     font-size: 16px;
  //     background: #f5f5f5;
  //     margin: 0 12px;
  //     cursor: pointer;
  //   }
  // }

  .lll {
    padding: 0 30px;
    > div {
      font-size: 20px;
      line-height: 2;
    }
  }
}
.edu-container {
  .navsd {
    .el-tabs__item:hover {
      color: blue !important;
      background: #fff !important;
      border: 0 !important;
    }
    .el-tabs__item {
      color: #fff !important;
      height: 50px;
      line-height: 50px;
      border: 0 !important;
    }
    .el-tabs__item.is-active {
      color: #1754c2 !important;
      background: #fff !important;
      border: 0 !important;
    }
    .el-tabs__nav {
      background: #1754c2;
    }
  }
}
.container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
</style>
