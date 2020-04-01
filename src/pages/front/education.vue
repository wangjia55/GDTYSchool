
<template>
  <!-- 继续教育 -->
  <div class="edu-container">
    <div class="navs">
      <el-carousel style="width:100%;height:400px;">
        <el-carousel-item type="card" :interval="3000">
          <img style="width:100%;" src="../../assets/images/home12.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="main-container init">
      <div class="flex-sum mt10 navsd">
        <el-tabs type="border-card" v-model="activeName" stretch>
          <el-tab-pane name="first" label="培训资讯">
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
          <div class="curpoint swiper-slide mt20">
            <div
              class="col flex-center p10"
              style="width:250px;background:#fff;overflow:hidden;text-align:center"
            >
              <p style="font-size:20px;font-weight:bold;margin:10px 0">马国川</p>
              <p>
                马国川 广东体育职业技术学院党委委员、党委书记
                1969年出生，甘肃张家川人。1993年毕业于中山医科大学，运动医学主任医师，教育学硕士，硕士研究生导师，美国乔治亚医学院访问学者及博士后，中国体育科学学会运动医学分会常委。曾任广东省体育运动技术学院科研处副处长，广东省游泳运动管理中心主任，广东省游泳协会常务副会长、秘书长，广东省二沙体育训练中心党委副书记、纪委书记。承担广东省及国家体育总局多项奥运会、亚运会及全运会科研攻关课题并取得优异成果，在国内及国际核心期刊发表SCI文章多篇。曾获得优秀共产党员、先进工作者等称号，于2016、2017年在奥运会、全运会取得优异成绩而获广东省政府记集体一等功。
              </p>
            </div>
            <div class="curpoint swiper-slide mt20">
              <div
                class="col flex-center p10"
                style="width:250px;background:#fff;overflow:hidden;text-align:center"
              >
                <p style="font-size:20px;font-weight:bold;margin:10px 0">徐佶</p>
                <p>
                  徐佶 广东体育职业技术学院党委委员、党委副书记、院长
                  1966年出生，湖北荆州人，博士，教授。历任广州体育学院体育教育系主任、教务处处长、中共广州体育学院第六、七届党委委员。兼任教育部普通高等学校本科教学工作审核评估专家，广东省本科高校教学管理指导委员会委员，广州体育科学学会副理事长，粤港澳大湾区体育教育与发展联盟常务副秘书长。广州体育学院硕士生导师、上海体育学院校外博士生导师，韶关学院、嘉应学院客座教授。参与国家级课题四项，主持省部级课题四项，出版专著一部，主编教材六部，发表学术论文七十多篇，获省部级教学成果奖八项。1993年获南粤优秀研究生称号，1998年获南粤教坛新秀称号，2011年获广东省教育系统优秀共产党员称号。
                </p>
              </div>
            </div>
            <div class="curpoint swiper-slide mt20">
              <div
                class="col flex-center p10"
                style="width:250px;background:#fff;overflow:hidden;text-align:center"
              >
                <p style="font-size:20px;font-weight:bold;margin:10px 0">王聪</p>
                <p>
                  王聪 广东体育职业技术学院党委委员、党委副书记、纪委书记
                  1963年出生，广东廉江人。1985年毕业于武汉体育学院，获学士学位，2002年广东省社会科学院研究生毕业。历任广东省体育运动学校教务科副科长、科长，学生科科长，副校长，广东体育职业技术学院党委委员、院长助理，现任广东体育职业技术学院党委副书记兼纪委书记。兼任广东省职业技术教育学会体育工作指导委员会副主任。多年来主要从事教学、学生管理以及招生就业指导工作。编著了《体育游戏教材》等著作；主持参与了广东省体育产业区域协调等科研课题的研究。
                </p>
              </div>
            </div>
            <div class="curpoint swiper-slide mt20">
              <div
                class="col flex-center p10"
                style="width:250px;background:#fff;overflow:hidden;text-align:center"
              >
                <p style="font-size:20px;font-weight:bold;margin:10px 0">鲁毅</p>
                <p>
                  鲁毅 广东体育职业技术学院党委委员、副院长
                  1966年出生，河南驻马店人，1996年于广州体育学院研究生部田径教学与训练专业研究生毕业，获硕士学位，1998年被聘为广州体院硕士生导师，2015年被湖南、湖北体职院聘为客座教授。1989年7月－1993年8月在河南轻工职工专科学校任助教并兼职人事处相关工作；1996年7月-2011年10月历任广东省体育局群体处副主任科员、广东省体育局竞技体育处主任科员、广东省体育局办公室主任科员、广东体育局竞技体育处副处长。现任广东体育职业技术学院党委委员、副院长，全国体育职业教育教学指导委员会委员兼运动技术委员会主任委员、国家体育总局青少司专家、广东高职教育管理委员会委员、广东体育科学学会理事、广东省青少年体育联合会副会长、广东省体育运动健康协会副会长。
                </p>
              </div>
            </div>
          </div>
        </div>
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

