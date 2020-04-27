<template>
  <!-- 首页 -->
  <div class="intro-index-container nowrap">
    <div class="">
      <p>健身教练培训学校精心为您提供私人教练培训课程、健身教练培训课程，助您快速领取健身教练资格证。健身教练培训学校精心为您提供私人教练培训课程、健身教练培训课程，助您快速领取健身教练资格证。</p>
      <p>健身教练培训学校精心为您提供私人教练培训课程、健身教练培训课程，助您快速领取健身教练资格证。健身教练培训学校精心为您提供私人教练培训课程、健身教练培训课程，助您快速领取健身教练资格证。</p>
      <p>健身教练培训学校精心为您提供私人教练培训课程、健身教练培训课程，助您快速领取健身教练资格证。健身教练培训学校精心为您提供私人教练培训课程、健身教练培训课程，助您快速领取健身教练资格证。</p>
      <p>健身教练培训学校精心为您提供私人教练培训课程、健身教练培训课程，助您快速领取健身教练资格证。健身教练培训学校精心为您提供私人教练培训课程、健身教练培训课程，助您快速领取健身教练资格证。</p>
    </div>
    <div class="bg-black">
      <div class="flex-flow mt20 mb20 init">
        <div class="school-news">
          <div style="text-align:center;">
            <p
              style="font-size:28px;color:white;font-weight:bold;margin:15px 0;padding-left:-10px;"
            >健身教练培训课程</p>
            <p style="font-size:16px;color:white;">健身教练培训学校精心为您提供私人教练培训课程、健身教练培训课程，助您快速领取健身教练资格证。</p>
          </div>
          <div class="arc tzgg">
            <div class="c-message-container">
              <div class="flex-wrap">
                <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;">
                  <img
                    style="width:100%;height:150px;margin:10px auto;border-radius:15px;"
                    src="../../assets/images/kec1.jpg"
                    alt
                  />
                  <div class="btw">
                    <p style="text-align:center;color:white;margin:0 auto;">健身教练国家职业资格认证</p>
                  </div>
                </div>
                <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;">
                  <img
                    style="width:100%;height:150px;margin:10px auto;border-radius:15px;"
                    src="../../assets/images/kc2.jpg"
                    alt
                  />
                  <div class="btw">
                    <p style="text-align:center;color:white;margin:0 auto;">CPT 初级私人教练认证</p>
                  </div>
                </div>
                <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;">
                  <img
                    style="width:100%;height:150px;margin:10px auto;border-radius:15px;"
                    src="../../assets/images/kc3.jpg"
                    alt
                  />
                  <div class="btw">
                    <p style="text-align:center;color:white;margin:0 auto;">CPT 精英私人教练认证</p>
                  </div>
                </div>
                <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;">
                  <img
                    style="width:100%;height:150px;margin:10px auto;border-radius:15px;"
                    src="../../assets/images/kc4.jpg"
                    alt
                  />
                  <div class="btw">
                    <p style="text-align:center;color:white;margin:0 auto;">CPT 全能精英私人教练认证</p>
                  </div>
                </div>
                <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;">
                  <img
                    style="width:100%;height:150px;margin:10px auto;border-radius:15px;"
                    src="../../assets/images/kc5.jpg"
                    alt
                  />
                  <div class="btw">
                    <p style="text-align:center;color:white;margin:0 auto;">CPT 全能精英私人教练认证</p>
                  </div>
                </div>
                <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;">
                  <img
                    style="width:100%;height:150px;margin:10px auto;border-radius:15px;"
                    src="../../assets/images/kc6.jpg"
                    alt
                  />
                  <div class="btw">
                    <p style="text-align:center;color:white;margin:0 auto;">CPT 全能精英私人教练认证</p>
                  </div>
                </div>
                <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;">
                  <img
                    style="width:100%;height:150px;margin:10px auto;border-radius:15px;"
                    src="../../assets/images/kc2.jpg"
                    alt
                  />
                  <div class="btw">
                    <p style="text-align:center;color:white;margin:0 auto;">CPT 全能精英私人教练认证</p>
                  </div>
                </div>
                <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;">
                  <img
                    style="width:100%;height:150px;margin:10px auto;border-radius:15px;"
                    src="../../assets/images/kc3.jpg"
                    alt
                  />
                  <div class="btw">
                    <p style="text-align:center;color:white;margin:0 auto;">CPT 全能精英私人教练认证</p>
                  </div>
                </div>
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
    // init() {
    //   var mySwiper = new Swiper(".swiper-container", {
    //     slidesPerView: 4,
    //     paginationClickable: true,
    //     spaceBetween: 30,
    //     loop: true,
    //     observer: true, //修改swiper自己或子元素时，自动初始化swiper
    //     observeParents: true, //修改swiper的父元素时，自动初始化swiper
    //     // 如果需要前进后退按钮
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev"
    //     }
    //   });
    // }
  },
  mounted() {
    // this.init();
  },
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.intro-index-container {
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
.jiqiao-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.corner {
  background: chocolate;
  border-radius: 10px;
}

.bg-black {
  background: url("../../assets/images/linebg.png") repeat;
}
</style>

