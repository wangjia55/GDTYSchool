<template>
  <!-- 职业鉴定 -->
  <div class="ident-container">
    <div class="navs">
      <el-carousel style="width:100%;height:400px;">
        <el-carousel-item type="card" :interval="3000">
          <img style="width:100%;" src="../../assets/images/home14.png" alt />
        </el-carousel-item>
        <el-carousel-item type="card" :interval="3000">
          <img style="width:100%;" src="../../assets/images/home13.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="main-container init">
      <div class="flex-base mt10 navsd">
        <el-tabs type="border-card" stretch>
          <el-tab-pane>
            <span slot="label">工作动态</span>
            <div>
              <el-card class="box-card" v-for="v in 3" :key="v">
                <div slot="header" class="clearfix">
                  <span style="font-size:18px">鉴定公告</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定公告</span>
                    <span>2019-12-21</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>2019年广东省羽毛球社会体育指导员职业技能竞赛补充通知</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东省体育行业特有工种职业技能鉴定站2019年各培训服务点11月份鉴定时间安排</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>2019年广东省羽毛球社会体育指导员职业技能竞赛暨专业大会的通知</span>
                    <span>2019-11-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>关于推迟举办2019年广东省高危险性体育项目卡丁车场所从业人员培训的通知</span>
                    <span>2019-10-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东省体育行业特有工种职业技能鉴定站8月份各培训服务点鉴定时间安排</span>
                    <span>2019-09-21</span>
                  </div>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="政策服务">
            <div class="osd">
              <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="国家法规">
                  <div class="text item" v-for="v in 6" :key="v" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定申请</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="鉴定依据">
                  <div class="text item" v-for="v in 12" :key="v" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定申请</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="制度规范">
                  <div class="text item" v-for="v in 15" :key="v" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定申请</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="政策咨询">
                  <div class="text item" v-for="v in 6" :key="v" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定申请</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="培训服务">
            <div>
              <div class="row align" style="font-size:16px">
                <label for style="margin:10px">筛选:</label>
                <div class="row fsz">
                  <span
                    v-for="(item,index) in time"
                    :key="item.id"
                    :class="[curTime===index?'curBlue':'']"
                    @click="toTime(index)"
                  >{{item.name}}</span>
                </div>
              </div>
            </div>
            <div>
              <div class="flex-wrap">
                <div
                  class="col curpoint p10"
                  style="flex:0 0 32%;margin:10px 0.5%;border:1px solid #dfdfdf"
                  v-for="item in 8"
                  :key="item"
                >
                  <img
                    style="width:100%;margin:10px auto"
                    src="../../assets/images/detail2.png"
                    alt
                  />
                  <div class="btw">
                    <p style="text-align:left">第一季游泳培训</p>
                    <el-button type="primary" size="mini">报名</el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="鉴定申请">
            <el-card class="box-card" v-for="v in 3" :key="v">
              <div slot="header" class="clearfix">
                <span style="font-size:18px">鉴定申请</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定申请</span>
                  <span>2019-12-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2019年广东省羽毛球社会体育指导员职业技能竞赛补充通知</span>
                  <span>2019-12-20</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广东省体育行业特有工种职业技能鉴定站2019年各培训服务点11月份鉴定时间安排</span>
                  <span>2019-12-20</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2019年广东省羽毛球社会体育指导员职业技能竞赛暨专业大会的通知</span>
                  <span>2019-11-20</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>关于推迟举办2019年广东省高危险性体育项目卡丁车场所从业人员培训的通知</span>
                  <span>2019-10-20</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广东省体育行业特有工种职业技能鉴定站8月份各培训服务点鉴定时间安排</span>
                  <span>2019-09-21</span>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="就业招聘">
            <el-card class="box-card" v-for="v in 3" :key="v">
              <div slot="header" class="clearfix">
                <span style="font-size:18px">就业招聘</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定公告</span>
                  <span>2019-12-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2019年广东省羽毛球社会体育指导员职业技能竞赛补充通知</span>
                  <span>2019-12-20</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广东省体育行业特有工种职业技能鉴定站2019年各培训服务点11月份鉴定时间安排</span>
                  <span>2019-12-20</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2019年广东省羽毛球社会体育指导员职业技能竞赛暨专业大会的通知</span>
                  <span>2019-11-20</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>关于推迟举办2019年广东省高危险性体育项目卡丁车场所从业人员培训的通知</span>
                  <span>2019-10-20</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广东省体育行业特有工种职业技能鉴定站8月份各培训服务点鉴定时间安排</span>
                  <span>2019-09-21</span>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class>
        <div class="flex-button">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="font-size:18px">快捷入口</span>
            </div>
            <el-button class="btn-enter" type="primary" @click="gotoNewWeb(1)">国家职业资格证书查询</el-button>
            <el-button class="btn-enter" type="success" @click="gotoNewWeb(2)">成绩查询</el-button>
            <el-button class="btn-enter" type="warning">证书查询</el-button>
            <el-button class="btn-enter" type="primary">鉴定申请</el-button>
            <el-button class="btn-enter" type="success">资料下载</el-button>
            <el-button class="btn-enter" type="warning">鉴定指南</el-button>
            <el-button class="btn-enter" type="primary">培训基地</el-button>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left",
      imgList: ["../../assets/images/jianding1.jpg", ""],
      curTime: 0,
      time: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "游泳",
          id: 1
        },
        {
          name: "救生员",
          id: 2
        },
        {
          name: "潜水",
          id: 3
        },
        {
          name: "滑雪",
          id: 4
        },
        {
          name: "网球",
          id: 5
        },
        {
          name: "救生员",
          id: 2
        },
        {
          name: "潜水",
          id: 3
        },
        {
          name: "滑雪",
          id: 4
        },
        {
          name: "网球",
          id: 5
        }
      ]
    };
  },
  computed: {},
  components: {},
  methods: {
    toTime(index) {
      this.curTime = index;
    },
    gotoNewWeb(e) {
      if (e == 1) {
        window.open(
          "http://www.sportosta.org.cn/ost/infoSearchAction.do?method=toCertificateSearch",
          "_blank"
        );
      } else if (e == 2) {
        window.open("http://www.sportosta.org.cn/ost/queryScore.jsp", "_blank");
      } else {
        window.open("http://www.sportosta.org.cn/ost/queryScore.jsp", "_blank");
      }
    },
    gotoInfo() {
      this.$router.push({ path: "tiyuInfo" });
    }
  },
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.navs {
  .el-carousel__container {
    height: 400px !important;
  }
}
.curBlue {
  color: #0079bf !important;
  font-weight: bold;
}
.fsz {
  // margin:10px;
  > span {
    margin: 10px;
    color: #999;
    cursor: pointer;
  }
}

.ident-container {
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
      color: blue !important;
      background: #fff !important;
      border: 0 !important;
    }
    .el-tabs__nav {
      background: blue;
    }
    .osd {
      .el-tabs__item:hover {
        color: #fff !important;
        background: skyblue !important;
        border: 0 !important;
      }
      .el-tabs__item {
        color: skyblue !important;
        height: 50px;
        line-height: 50px;
        border: 0 !important;
      }
      .el-tabs__item.is-active {
        color: #fff !important;
        background: skyblue !important;
        border: 0 !important;
      }
      .el-tabs__nav {
        background: none;
      }
    }
  }
  .box-card {
    margin: 15px 5px;
  }
  .flex-base {
    flex: 0 0 74%;
  }

  .btn-enter {
    width: 90%;
    height: 60px;
    margin: 10px 10px;
  }

  .flex-button {
    flex: 0 0 25%;
  }

  .item {
    font-size: 14px;
    margin-bottom: 5px;
    color: #666;
    cursor: pointer;
    &:hover {
      color: skyblue;
    }
  }

  .main-container {
    display: flex;
    flex-direction: row;
    // margin: 0 10px;
  }

  .divButton {
    > div {
      width: 180px;
      text-align: center;
      line-height: 40px;
      height: 40px;
      font-size: 16px;
      background: #f5f5f5;
      margin: 0 12px;
      cursor: pointer;
    }
  }
}
</style>

