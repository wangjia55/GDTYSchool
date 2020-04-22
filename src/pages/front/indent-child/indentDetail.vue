<template>
  <div class="indent-detail-container">
    <div class="btw p20 bg-1">
      <div class="init">
        <p class="mv10">2020年度高级游泳公开课</p>
        <div class="row align mv10">
          <div class="row">
            <img
              style="width:80px;height:80px;border-radius:50%"
              src="../../../assets/images/ps1.jpg"
              alt
            />
            <div class="col align mr20">
              <p style="font-size: 14px; line-height: 22px; font-weight: 700;" class="m10">广州迅捷游泳俱乐部</p>
              <p style="font-size: 12px; line-height: 22px; font-weight: 700;">高级培训师</p>
            </div>
          </div>
          <div class="row align static-item">
            <div>难度： 入门</div>
            <div>时长： 9小时18分</div>
            <div>学习人数： 115352</div>
            <div>综合评分： 9.5</div>
          </div>
        </div>
      </div>
      <div class="align">
        <el-button type="danger" @click="toCenter">我的个人中心</el-button>
      </div>
    </div>
    <div>
      <div class="main-container init">
        <div class="flex-sum mt10 navsd">
          <el-tabs type="border-card middle" v-model="activeName" stretch>
            <el-tab-pane name="first" label="课程章节">
              <div>
                <el-card class="box-card mb20" v-for="(v,i) in 3" :key="v">
                  <div slot="header" class="clearfix">
                    <span style="font-size:18px">课程培训教程 第{{i+1}}章</span>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>游泳教练高级（公开课）课程第{{i+1}}节</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                       <span>游泳教练高级（公开课）课程第{{i+2}}节</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>游泳教练高级（公开课）课程第{{i+3}}节</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>游泳教练高级（公开课）课程第{{i+4}}节</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>游泳教练高级（公开课）课程第{{i+5}}节</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane name="second" label="老师介绍">
              <div class="p20" style="background:#fff;">
                <div class="container" style="color:#333;font-size:14px;">
                  <h1 style="text-align:center;font-size:18px;font-weight:bold;margin:20px auto">李文华</h1>
                  <h2 style="text-align:center" class="mv10">中国一级游泳教练导师</h2>
                  <div style="text-align:center">
                    <img src="../../../assets/images/per7.jpg" />
                    <div style="text-align:center;font-size:14px;">
                      <ul>
                        <li>上海体育学院本科毕业，游泳运动训练专业，学士学位</li>
                        <li>2009年深圳“体彩杯”儿童游泳比赛获得“深圳市优秀教练员”称号</li>
                        <li>国家高级游泳指导员</li>
                        <li>国家二级游泳裁判</li>
                        <li>国家一级健身指导教练</li>
                        <li>中国康比特高级营养师</li>
                      </ul>
                    </div>
                  
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane name="third" label="资料下载">
              <div class="p20 download" style="color:#333;font-size:15px;">
                <el-card class="box-card mb20">
                  <div slot="header" class="clearfix">
                    <span style="font-size:18px">资源下载</span>
                  </div>
                  <div class="text item" @click="gotoInfo1">
                    <div class="btw">
                      <el-link
                        :underline="false"
                        type="primary"
                      >2020年度高级游泳公开课课件1.zip</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo1">
                    <div class="btw">
                      <el-link
                        :underline="false"
                        type="primary"
                      >2020年度高级游泳公开课课件2.zip</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo1">
                    <div class="btw">
                      <el-link
                        :underline="false"
                        type="primary"
                      >2020年度高级游泳公开课课件3.zip</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo1">
                    <div class="btw">
                      <el-link
                        :underline="false"
                        type="primary"
                      >2020年度高级游泳公开课课件4.zip</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo1">
                    <div class="btw">
                      <el-link
                        :underline="false"
                        type="primary"
                      >2020年度高级游泳公开课课件5.zip</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <el-dialog title="学习视频" :visible.sync="dialogTableVisible">
      <video width="100%" controls="controls" loop v-if="dialogTableVisible" autoplay src="https://vdept.bdstatic.com/655331494c6c4e7a4e47416138646d31/674245495743664b/b78e9ab6943613a2b33801a1559629e825ad1c82fe87712cc7276a7b9f1b1c03809d328e3aa8dbf1d4e268945f836418.mp4?auth_key=1587464510-0-0-91baab74bf7d0b56c6fce02f1a31b81c"></video>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      // 数据
      activeName: "first",
      dialogTableVisible: false
    };
  },
  components: {
    // 组件注册
  },

  mounted() {
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },

  destroyed() {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
  },
  computed: {
    // 计算属性
  },
  watch: {
    // 数据监听
  },
  methods: {
    // 方法定义
    gotoInfo() {
      this.dialogTableVisible = true
    },
    gotoInfo1() {
      window.open('http://wqdata.oss-cn-shenzhen.aliyuncs.com/%E6%8A%A5%E5%90%8D%E8%A1%A8.doc')
    },
    toCenter() {
      this.$router.push({
        name: "personCenter"
      });
    }
  }
};
</script>
<style scope lang="scss">
.indent-detail-container {
  .download .item {
    border-bottom: 1px solid #dfdfdf;
  }
  .bg-1 {
    background: -webkit-radial-gradient(
        0% 100%,
        ellipse cover,
        rgba(104, 128, 138, 0.4) 10%,
        rgba(138, 114, 76, 0) 40%
      ),
      linear-gradient(
        to bottom,
        rgba(57, 173, 219, 0.25) 0%,
        rgba(42, 60, 87, 0.4) 100%
      ),
      linear-gradient(135deg, #670d10 0%, #092756 100%);
  }
  > div {
    > div:nth-of-type(1) {
      color: #fff;
      > p {
        position: relative;
        z-index: 1;
        margin-bottom: 8px;
        line-height: 48px;
        font-size: 32px;
        color: #fff;
      }
    }
    .static-item {
      > div {
        display: inline-block;
        position: relative;
        margin-right: 50px;
        font-size: 12px;
      }
    }
  }
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
      color: #ffffff !important;
      background: #0e3174 !important;
      border: 0 !important;
    }
    .el-tabs__nav {
    }
  }

  .item {
    padding: 10px 0;
    cursor: pointer;
    font-size: 15px;
  }
}
</style>
