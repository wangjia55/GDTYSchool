<template>
  <div class="guild-index-container nowrap">
    <div class="mv20" style="background: white;">
      <p style="text-align: center;font-size: 22px;margin-top: 20px;">明星考察员</p>
      <div style="width:75%;margin:20px auto" class="divButton btw">
        <li>
          <img src="../../assets/images/dao1.jpg" style="width:320px;border:#b6b6b6 1px solid;margin:10px; border-radius:15px; " />
        </li>
        <li>
          <img src="../../assets/images/dao2.jpg" style="width:320px;border:#b6b6b6 1px solid;margin:10px;  border-radius:15px; " />
        </li>
        <li>
          <img src="../../assets/images/dao3.jpg" style="width:320px; border:#b6b6b6 1px solid; margin:10px;border-radius:15px; " />
        </li>
      </div>
    </div>

    <div class="mv20" style="background: white;">
      <p style="text-align: center;font-size: 22px;margin-top: 20px;">明星培训师</p>
      <div style="width:75%;margin:20px auto" class="divButton btw">
        <li>
          <img src="../../assets/images/dao1.jpg" style="width:320px;border:#b6b6b6 1px solid;margin:10px; border-radius:15px; " />
        </li>
        <li>
          <img src="../../assets/images/dao2.jpg" style="width:320px;border:#b6b6b6 1px solid;margin:10px;  border-radius:15px; " />
        </li>
        <li>
          <img src="../../assets/images/dao3.jpg" style="width:320px; border:#b6b6b6 1px solid; margin:10px;border-radius:15px; " />
        </li>
      </div>
    </div>

    <div class="mv20" style="background: white;">
      <p style="text-align: center;font-size: 22px;margin-top: 20px;">考务员</p>
      <div style="width:75%;margin:20px auto" class="divButton btw">
        <li>
          <img src="../../assets/images/dao1.jpg" style="width:320px;border:#b6b6b6 1px solid;margin:10px; border-radius:15px; " />
        </li>
        <li>
          <img src="../../assets/images/dao2.jpg" style="width:320px;border:#b6b6b6 1px solid;margin:10px;  border-radius:15px; " />
        </li>
        <li>
          <img src="../../assets/images/dao3.jpg" style="width:320px; border:#b6b6b6 1px solid; margin:10px;border-radius:15px; " />
        </li>
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

