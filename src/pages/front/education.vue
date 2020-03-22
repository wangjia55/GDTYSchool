
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
      <div class="flex-sum mt10 navsd">
        <el-tabs type="border-card" v-model="activeName" stretch>
          <el-tab-pane name="first" label="培训咨询">
            <div>
              <Message></Message>
            </div>
          </el-tab-pane>
          <el-tab-pane name="second" label="培训课程">
            <div>
              <Course></Course>
            </div>
          </el-tab-pane>
          <el-tab-pane name="third" label="在线学习">
            <div>
              <Study></Study>
            </div>
          </el-tab-pane>
          <el-tab-pane name="fourth" label="面授学习">
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
      <!-- el-tabs与swiper放在一起，很恶心，有bug -->
      <div class="btw yaonew align">
        <p>专家</p>
        <p class="curpoint"></p>
      </div>
      <div class="ww">
        <div class="swiper-wrapper">
          <div class="curpoint swiper-slide mt20" @click="gotoInfo" v-for="v in 7" :key="v">
            <div class="col flex-center p10" style='width:250px;background:#fff;overflow:hidden;text-align:center'>
              <img style="margin:10px auto;width:80px;height:80px;border-radius:50%;" src="../../assets/images/t1.jpg" alt />
              <p style="font-size:20px;font-weight:bold;margin:10px 0">我是罗一{{v}}</p>
              <p>柴少明，博士，副教授，硕士生导师，国际商学院副院长，中国语言教育研究会首届理事会理事。2003年7月毕业于山西师范大学外国语学院，2003年8月入职华南师范大学南海校区外语系，从事大学英语和英语专业的教学。2005年9月在华南师范大学教育信息技术学院攻读博士，师从我国著名教育技术学专家李克东教授。</p>
            </div>
          </div>

          <!-- <div class="curpoint swiper-slide mt20" @click="gotoInfo">
            <img style="margin-bottom:10px" src="../../assets/images/t2.jpg" alt />
          </div>
          <div class="curpoint swiper-slide mt20" @click="gotoInfo">
            <img style="margin-bottom:10px" src="../../assets/images/t3.jpg" alt />
          </div>
          <div class="curpoint swiper-slide mt20" @click="gotoInfo">
            <img style="margin-bottom:10px" src="../../assets/images/t4.jpg" alt />
          </div> -->
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
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
      activeName: "second",
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
  }
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
</style>

