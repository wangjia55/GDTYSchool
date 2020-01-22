<template>
  <div class="base">
    <yd-navbar title="KPI数据">
      <div slot="left" @click="$router.go(-1)">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
      <div slot="right">导出</div>
    </yd-navbar>

    <div>
      <div class="arc k-wrap">
        <div>
          <span class="sumbu">2019年7月</span>
        </div>
        <div>
          <span class="sumbu">{{hels}}</span>
        </div>
      </div>
      <div class="d-con" v-show="kinds==0">
        <p>总部 销售人员总数：1500人</p>
        <p class>
          <span>达标人数：1010人</span>
          <span>未达标人数：1010人</span>
          <span>有效客户录入人数：3000人</span>
        </p>
        <van-tabs v-model="active">
          <van-tab title="全部">
            <div class="c-con">
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_8.png"
                alt
              />
              <img  @click="$router.go(-1)"
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE-%E6%80%BB%E9%83%A8%E8%AF%A6%E6%83%851.png"
                alt
              />

            </div>
            <div>
              <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
            </div>
          </van-tab>
          <van-tab title="R未达标">
            <div class="c-con">
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_8.png"
                alt
              />
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE-%E6%80%BB%E9%83%A8%E8%AF%A6%E6%83%851.png"
                alt
              />

            </div>
            <div>
              <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
            </div>
          </van-tab>
          <van-tab title="S未达标">
            <div class="c-con">
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_8.png"
                alt
              />
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE-%E6%80%BB%E9%83%A8%E8%AF%A6%E6%83%851.png"
                alt
              />

            </div>
            <div>
              <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <div class="d-con" v-show="kinds==1">
        <p>一区 销售人员总数：100人</p>
        <p class>
          <span>达标人数：10人</span>
          <span>未达标人数：90人</span>
          <span>有效客户录入人数：30人</span>
        </p>
        <van-tabs v-model="active">
          <van-tab title="全部">
            <div class="c-con">
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_8.png"
                alt
              />
              <img  @click="$router.go(-1)"
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE-%E6%80%BB%E9%83%A8%E8%AF%A6%E6%83%852.png"
                alt
              />

            </div>
            <div>
              <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
            </div>
          </van-tab>
          <van-tab title="R未达标">
            <div class="c-con">
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_8.png"
                alt
              />
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE-%E6%80%BB%E9%83%A8%E8%AF%A6%E6%83%852.png"
                alt
              />

            </div>
            <div>
              <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
            </div>
          </van-tab>
          <van-tab title="S未达标">
            <div class="c-con">
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_8.png"
                alt
              />
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE-%E6%80%BB%E9%83%A8%E8%AF%A6%E6%83%852.png"
                alt
              />

            </div>
            <div>
              <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <div class="d-con" v-show="kinds==2">
        <p>张三 销售人员总数：1500人</p>
        <p class>
          <span>达标人数：1010人</span>
          <span>未达标人数：1010人</span>
          <span>有效客户录入人数：3000人</span>
        </p>
        <van-tabs v-model="active">
          <van-tab title="全部">
            <div class="c-con">
              <img  @click="$router.go(-1)"
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_9.png"
                alt
              />
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE-%E6%80%BB%E9%83%A8%E8%AF%A6%E6%83%854.png"
                alt
              />

            </div>
            <div>
              <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
            </div>
          </van-tab>
          <van-tab title="R未达标">
            <div class="c-con">
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_9.png"
                alt
              />
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE-%E6%80%BB%E9%83%A8%E8%AF%A6%E6%83%854.png"
                alt
              />

            </div>
            <div>
              <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
            </div>
          </van-tab>
          <van-tab title="S未达标">
            <div class="c-con">
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_9.png"
                alt
              />
              <img
                src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE-%E6%80%BB%E9%83%A8%E8%AF%A6%E6%83%854.png"
                alt
              />

            </div>
            <div>
              <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      hels: "总部",
      kinds: 0, //0总部，1区域，2名字
      isShowName: false,
      isShow: false,
      area: [
        {
          id: 0,
          name: "不限"
        },
        {
          id: 1,
          name: "Cadillac一区"
        },
        {
          id: 2,
          name: "Cadillac二区"
        },
        {
          id: 3,
          name: "Cadillac三区"
        },
        {
          id: 4,
          name: "Cadillac四区"
        },
        {
          id: 5,
          name: "Cadillac五区"
        }
      ],
      areaPeople: [
        {
          id: 0,
          name: "不限"
        },
        {
          id: 1,
          name: "顾佳帅"
        },
        {
          id: 2,
          name: "顾轩"
        },
        {
          id: 3,
          name: "祝华俊"
        },
        {
          id: 4,
          name: "邱波"
        }
      ],
      active: 0,
      currentPage: 1,
      datetime1: "2019-08",
      curName: "",
      curIndex: ""
    };
  },
  methods: {},
  mounted() {
    let _this = this;
    _this.kinds = _this.$route.params.kinds;

    if (_this.kinds == 0) {
      _this.hels = "总部";
    } else if (_this.kinds == 1) {
      _this.hels = "一区";
    } else if (_this.kinds == 2) {
      _this.hels = "张三";
    }
  }
};
</script>
<style lang="scss" >
.base {
  width: 100%;
  background: #fff;
  min-height: 100vh;
}
.d-con {
  p {
    width: 90%;
    text-align: justify;
    line-height: 25px;
    margin: 10px auto;
  }
}
.mask-wrap {
  width: 100%;
  background: #efefef;
  position: fixed;
  top: 90px;
  overflow: auto;
  max-height: 60vh;
  left: 0;
  ul {
    flex: 1;
  }
  li {
    flex: 1;
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    text-align: center;
  }
  .curColor {
    background: #910000;
    color: #fff;
  }
}
.k-wrap {
  width: 100%;
  height: 50px;
  overflow: hidden;
  align-items: center;
}
.shaixuan {
  padding: 5px 10px;
  background: skyblue;
  color: #fff;
  height: 20px;
  border-radius: 3px;
}

.c-con {
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  width: 100%;
  img {
    position: relative;
    width: 100%;
  }
  .c-c3 {
    width: 17vw;
    height: 10vw;
    position: absolute;
    left: 83vw;
    top: 15vw;
    z-index: 10;
    background: rgba(0, 0, 255, 0.3);
  }
}
.sumbu {
}
</style>
