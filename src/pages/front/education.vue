
<template>
  <!-- 体育培训 -->
  <div class="edu-container">
     <img style="width:100%;" src="../../assets/images/peixun.png" alt />

    <div class="main-container init p20" style="background:#fff">
      <div class="flex-sum mt10 pt10">
        <el-tabs type="border-card"  v-model="activeName" stretch>
          <el-tab-pane name="first" label="培训资讯">
            <div>
              <Message></Message>
            </div>
          </el-tab-pane>
             <el-tab-pane name="third" label="在线学习">
            <div>
              <Study></Study>
            </div>
          </el-tab-pane>
          <el-tab-pane name="second" label="线下培训">
            <div>
              <Course></Course>
            </div>
          </el-tab-pane>

          <el-tab-pane name="fourth" label="培训机构">
            <div>
              <OutlineStudy></OutlineStudy>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div
      class="school-news init"
      v-show="activeName==='first'"
      style="padding:15px;margin-bottom:20px;"
    >

    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import Message from "../../components/education/message";
import Course from "../../components/education/course";
import Study from "../../components/education/study";
import OutlineStudy from "../../components/education/outlineStudy";
export default {
  data() {
    return {
      activeName: "first",
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
    },

    // 事件函数
    gotoDetail() {
      this.$router.push({ name: "detail", params: {} });
    },
    updated() {
      this.init();
    },
    init() {

      var swiper = new Swiper(".ww", {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  },
  watch: {
    activeName(val) {
      if (val === "first") {
        this.init();
      }
    }
  },
  mounted() {
    this.init();
  },
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.edu-container{



.navs {
  .el-carousel__container {
    height: 400px!important;
  }
}

  .el-tabs {
      border:0 !important;
      padding:20px;
    }

    .el-tabs__header {
      border:0 !important;
    }
    .el-tabs__item:hover {
      width: 220px !important;
      color: #417EFF !important;
      background: rgb(102, 147, 245) !important;
      border: 0 !important;
      font-size: 16px;
    }
    .el-tabs__item {
      width: 220px !important;
      height: 50px;
      line-height: 50px;
      border: 0 !important;
      color: #ffffff !important;
      background: #417EFF !important;
      border-radius: 50px;
      margin: 0 12px;
      text-align: center;
      flex: 2 !important;
      font-size: 16px;
    }
    .el-tabs__item.is-active {
      width: 220px !important;
      color: #ffffff !important;
      background: rgb(49, 97, 199) !important;
      border: 0 !important;
      border-radius: 50px;
      font-size: 16px;
    }
    .el-tabs__nav {
      width: 220px !important;
      border-radius: 50px;
      margin: 0 12px;
      font-size: 16px;
      padding:10px 0;
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

  .box-card {
    margin: 15px 5px;
  }
  .flex-base {
    flex: 0 0 49%;
  }
  .flex-sum {
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
.school-news {
  margin: 10px 0%;
  width: 100%;
  .yaonew {
    border-bottom: 1px solid #1754c2;
    > p:nth-of-type(1) {
      font-size: 18px;
      line-height: 50px;
      border-bottom: 5px solid #1754c2;
    }
    > p:nth-of-type(2) {
      font-size: 12px;
      color: #ccc;
    }
  }
}
}
</style>

