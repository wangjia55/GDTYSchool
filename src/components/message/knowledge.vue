<template>
  <!-- 首页 -->
  <div class="guild-index-container nowrap">
    <div class="flex-flow mt20 mb20 init">
      <div class="school-news">
        <div class="btw yaonew align">
          <p>精彩赛事</p>
          <p class="curpoint"></p>
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
      </div>

      <div class="school-news">
        <div class="btw yaonew align">
          <p>精彩赛事</p>
          <p class="curpoint"></p>
        </div>
        <div class>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/t1.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >2019亚洲青年羽毛球锦标赛精彩瞬间{{item}}</p>
              </div>
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/t2.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >2019年亚洲羽毛球锦标赛精彩集锦{{item}}</p>
              </div>
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/t3.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >第16届苏迪曼杯颁奖仪式{{item}}</p>
              </div>
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/t4.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >第16届苏迪曼杯25日精彩集锦{{item}}</p>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>

      <div class="school-news">
        <div class="btw yaonew align">
          <p>经典体育人物</p>
          <p class="curpoint"></p>
        </div>
        <div class>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/ren1.png" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >姚明</p>
              </div>
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/ren2.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >郎平{{item}}</p>
              </div>
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/ren3.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >刘翔{{item}}</p>
              </div>
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/ren4.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >邓亚萍{{item}}</p>
              </div>
            </div>
          </div>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/ren5.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >孙杨{{item}}</p>
              </div>
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/ren6.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >刘国梁{{item}}</p>
              </div>
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/ren7.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >许海峰{{item}}</p>
              </div>
              <div class="col curpoint swiper-slide mt20" @click="gotoInfo" :key="item">
                <img style="height:200px;margin-bottom:10px" src="../../assets/images/ren8.jpg" alt />
                <p
                  style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff"
                >李宁{{item}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="school-news">
        <div class="btw yaonew align">
          <p>国际体育组织</p>
          <p class="curpoint"></p>
        </div>
        <div class="flex-wrap" style="width:90%;margin:20px auto">
          <div
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 5px;overflow:hidden"
            :key="item"
          >
            <img style="width:240px;height:154px;margin:10px" src="../../assets/images/zu1.jpg" alt />
          </div>
          <div
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
            :key="item"
          >
            <img style="width:240px;height:154px;margin:10px" src="../../assets/images/zu2.jpg" alt />
          </div>
          <div
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
            :key="item"
          >
            <img style="width:240px;height:154px;margin:10px" src="../../assets/images/zu3.jpg" alt />
          </div>
          <div
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.1%;overflow:hidden"
            :key="item"
          >
            <img style="width:240px;height:154px;margin:10px" src="../../assets/images/zu4.jpg" alt />
          </div>
          <div
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.1%;overflow:hidden"
            :key="item"
          >
            <img style="width:240px;height:154px;margin:10px" src="../../assets/images/zu5.jpg" alt />
          </div>
          <div
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.1%;overflow:hidden"
            :key="item"
          >
            <img style="width:240px;height:154px;margin:10px" src="../../assets/images/zu6.jpg" alt />
          </div>
          <div
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.1%;overflow:hidden"
            :key="item"
          >
            <img style="width:240px;height:154px;margin:10px" src="../../assets/images/zu7.jpg" alt />
          </div>
          <div
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.1%;overflow:hidden"
            :key="item"
          >
            <img style="width:240px;height:154px;margin:10px" src="../../assets/images/zu8.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {
    gotoDetails() {
      this.$router.push({ name: "guild", params: {} });
    },
    gotoDetail() {
      this.$router.push({ name: "detail", params: {} });
    },
    gotoInfo() {
      this.$router.push({ name: "tiyuInfo", params: {} });
    },
    init() {
      var mySwiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  },
  mounted() {
    this.init();
  },
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.guild-index-container {
  .navs {
    .el-carousel__container {
      height: 400px !important;
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
  .flex-base {
    flex: 0 0 48%;
    margin: 10px 1%;
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

