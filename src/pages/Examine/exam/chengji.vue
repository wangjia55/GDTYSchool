<template>
  <div class="base">
    <yd-navbar title="考试成绩查询">
      <router-link :to="{path: '/examine/nav'}" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
      <div slot="right">导出</div>
    </yd-navbar>
    <div class="row c-wrap">
      <div>
        <yd-cell-item arrow>
          <span slot="left">开始:</span>
          <yd-datetime type="date" v-model="datetime1" slot="right"></yd-datetime>
        </yd-cell-item>
      </div>
      <div>
        <yd-cell-item arrow>
          <span slot="left">结束:</span>
          <yd-datetime type="date" v-model="datetime2" slot="right"></yd-datetime>
        </yd-cell-item>
      </div>
      <div class="shaixuan">筛选</div>
    </div>
    <div>
      <van-tabs v-model="active">
        <van-tab title="全部">
          <div class="c-con">
            <img src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E8%80%83%E8%AF%95%E6%8E%92%E8%A1%8C%E5%88%87%E5%9B%BE/%E8%80%83%E8%AF%95%E6%88%90%E7%BB%A9%E6%8E%92%E8%A1%8C.jpg" alt="">
            <!-- <img src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/%E8%80%83%E8%AF%95%E6%88%90%E7%BB%A9%E6%8E%92%E8%A1%8C.jpg" alt /> -->
            <div class="c-c1" @click="tocheck"></div>
            <div class="c-c2" @click="tomac"></div>
          </div>
          <div>
            <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
          </div>
        </van-tab>
        <van-tab title="进行中">
          <div class="c-con">
            <img src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E8%80%83%E8%AF%95%E6%8E%92%E8%A1%8C%E5%88%87%E5%9B%BE/%E8%80%83%E8%AF%95%E6%88%90%E7%BB%A9%E6%8E%92%E8%A1%8C.jpg" alt="">
            <!-- <img src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/%E8%80%83%E8%AF%95%E6%88%90%E7%BB%A9%E6%8E%92%E8%A1%8C.jpg" alt /> -->
            <div class="c-c1" @click="tocheck"></div>
            <div class="c-c2" @click="tomac"></div>
          </div>
          <div>
            <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
          </div>
        </van-tab>
        <van-tab title="已结束">
          <div class="c-con">
            <img src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E8%80%83%E8%AF%95%E6%8E%92%E8%A1%8C%E5%88%87%E5%9B%BE/%E8%80%83%E8%AF%95%E6%88%90%E7%BB%A9%E6%8E%92%E8%A1%8C.jpg" alt="">
            <!-- <img src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/%E8%80%83%E8%AF%95%E6%88%90%E7%BB%A9%E6%8E%92%E8%A1%8C.jpg" alt /> -->
            <div class="c-c1" @click="tocheck"></div>
            <div class="c-c2" @click="tomac"></div>
          </div>
          <div>
            <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      currentPage: 1,
      datetime1: "2019-08-01",
      datetime2: "2019-08-01"
    };
  },
  methods: {
    tocheck() {
      this.$router.push("/Examine/exam/detail");
    },
    tomac() {
      this.$router.push("/Examine/exam/mac");
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
.c-wrap {
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
  .c-c1 {
    width: 15vw;
    height: 10vw;
    position: absolute;
    left: 18vw;
    top: 8vw;
    z-index: 10;
    // background: rgba(0,0,255,.3);
  }
  .c-c2 {
    width: 15vw;
    height: 10vw;
    position: absolute;
    left: 18vw;
    top: 19vw;
    z-index: 10;
    //  background: rgba(0,0,255,.3);
  }
}
</style>
