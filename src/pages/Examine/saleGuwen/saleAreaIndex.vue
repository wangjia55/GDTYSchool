<template>
  <div class="base">
    <div class="btw sale-header">
      <span class="pointleft" @click="$router.go(-1)"></span>
      <span class="ptitle">一区销售顾问使用数据</span>
      <span class="zoushi" @click="tomap">
        <img
          src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/%E8%B5%B0%E5%8A%BF1.png"
          alt
        />
        使用趋势
      </span>
    </div>
    <!--  <div class="sale-con btw">
      <span>一区工具使用总次数：765451次</span>
      <span>平均时长：88888分钟</span>
    </div>-->
    <div class="c-c6">
      <div class="c-c6-0" @click="toroute"></div>
      <div class="c-c6-1" @click="toroute"></div>
      <div class="c-c6-2" @click="toroute"></div>
      <div class="c-c6-3" @click="toroute"></div>
      <img
        class="imgbase"
        src="http://qiniu.wqdata.net/upload/20190823/f7a500a2d9ae4c9781ded352827599b2.jpg"
        alt
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    tomap() {
      this.$router.push({
        name: "saleData",
        params: {
          kind: 1
        }
      });
    },
    toroute() {
      this.$router.push("saleMacIndex");
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
.sale-header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  align-items: center;
  background: #910000;
  color: #fff;
  font-size: 18px;
  .pointleft {
    width: 10px;
    height: 10px;
    border-left: 2px solid #fff;
    border-top: 2px solid #fff;
    position: relative;
    left: 15px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  .ptitle {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    text-align: center;
  }
  .zoushi {
    position: relative;
    font-size: 15px;
    right: 10px;
    img {
      position: relative;
      top: 5px;
      width: 20px;
      height: auto;
    }
  }
}
.sale-con {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #404040;
  color: #fff;
  padding: 0 10px;
  font-size: 12px;
}
.c-c6 > div {
  position: absolute;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  opacity: 0;
  background: yellow;
}
.c-c6-0 {
  left: 40.5vw;
  top: 22vw;
}
.c-c6-1 {
  left: 63.5vw;
  top: 41vw;
}
.c-c6-2 {
  left: 3.5vw;
  top: 55vw;
}
.c-c6-3 {
  left: 37.5vw;
  top: 60vw;
}
</style>
