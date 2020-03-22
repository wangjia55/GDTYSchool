
<template>
  <!-- 职业鉴定 -->
  <div class="edu-container">
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
            <span slot="label">培训咨询</span>
            <div>
              <Message></Message>
            </div>
          </el-tab-pane>
          <el-tab-pane label="培训课程">
            <div>
              <Course></Course>
            </div>
          </el-tab-pane>
          <el-tab-pane label="在线学习">
            <div>
              <Study></Study>
            </div>
          </el-tab-pane>
          <el-tab-pane label="面授学习">
            <div>
              <OutlineStudy></OutlineStudy>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "../../components/education/message";
import Course from "../../components/education/course";
import Study from "../../components/education/study";
import OutlineStudy from "../../components/education/outlineStudy";
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
  components: {
    Message,
    Course,
    Study,
    OutlineStudy
  },
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
    flex: 0 0 100%;
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

