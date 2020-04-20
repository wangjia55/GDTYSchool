<template>
  <div class="indent-detail-container">
    <div class="btw p20 bg-1">
      <div class="init">
        <p class="mv10">初识HTML(5)+CSS(3)-2020升级版</p>
        <div class="row align mv10">
          <div class="row">
            <img
              style="width:80px;height:80px;border-radius:50%"
              src="../../../assets/images/ps8.jpg"
              alt
            />
            <div class="col align mr20">
              <p style="font-size: 14px; line-height: 22px; font-weight: 700;" class="m10">某某培训机构</p>
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
        <el-button type="danger">我的个人中心</el-button>
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
                    <span style="font-size:18px">第{{i+1}}章</span>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院篮球课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院网球课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院羽毛球课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院舞蹈课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院武术课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane name="second" label="老师介绍">
              <div>2</div>
            </el-tab-pane>
            <el-tab-pane name="third" label="资料下载">
              <div>3</div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      // 数据
      activeName: "first"
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
    gotoInfo() {}
  }
};
</script>
<style scope lang="scss">
.indent-detail-container {
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
      color: #1754c2 !important;
      background: #fff !important;
      border: 0 !important;
    }
    .el-tabs__nav {
      background: #1754c2;
    }
  }

      .item{
          padding:10px 0;
          cursor: pointer;
          font-size: 15px;
      }
  
}
</style>
