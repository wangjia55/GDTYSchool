<template>
  <div class="base">
    <yd-navbar title="考试成绩查询">
    <div slot="left" @click="$router.go(-1)">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
      <div slot="right">导出</div>
    </yd-navbar>

    <div>
       <img style="width:100%;" @click="$router.go(-1)" src="http://qiniu.wqdata.net/upload/20190823/8091390f5cb1457db9ed2d2a809b6e80.jpg" alt />
      <div class="c-con">

        <!-- <img @click="$router.go(-1)" src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/exam_5.png" alt /> -->

      </div>
      <div>
        <!-- <van-pagination v-model="currentPage" :page-count="12" mode="simple" /> -->
      </div>
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
    width: 17vw;
    height: 10vw;
    position: absolute;
    left: 22vw;
    top: 9vw;
    z-index: 10;
  }
  .c-c2 {
    width: 17vw;
    height: 10vw;
    position: absolute;
    left: 22vw;
    top: 21vw;
    z-index: 10;
  }
}
</style>
