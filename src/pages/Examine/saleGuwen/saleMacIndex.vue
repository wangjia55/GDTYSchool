<template>
  <div class="base">
    <div class="btw sale-header">
      <span class="pointleft" @click="$router.go(-1)"></span>
      <span class="ptitle pain">
        <span @click="showChoose">{{hel}}</span>
      </span>
      <span class="zoushi" @click="toData">
        <img
          src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/%E8%B5%B0%E5%8A%BF1.png"
          alt
        />
        使用趋势
      </span>
    </div>
    <!--   <div class="sale-con btw">
      <span>张三板块使用总次数：765451次</span>
      <span>平均时长：88888分钟</span>
    </div>-->
    <div class="c-c7">
      <div class="c-c7-0" @click="toData"></div>
      <div class="c-c7-1" @click="toData"></div>
      <div class="c-c7-2" @click="toData"></div>
      <div class="c-c7-3" @click="toData"></div>
      <div class="c-c7-4" @click="toData"></div>
      <div class="c-c7-5" @click="toData"></div>
      <div class="c-c7-6" @click="toData"></div>
      <div class="c-c7-7" @click="toData"></div>
      <div class="c-c7-8" @click="toData"></div>
      <div class="c-c7-9" @click="toData"></div>
      <div class="c-c7-10" @click="toData"></div>
      <img
        class="imgbase"
        src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E9%94%80%E5%94%AE%E9%A1%BE%E9%97%AE%E5%88%87%E5%9B%BE/%E7%BB%8F%E9%94%80%E5%95%86%E7%89%88%E5%9D%97%E4%BD%BF%E7%94%A8%E6%95%B0%E6%8D%AE.jpg"
        alt
      />
    </div>
    <div>
      <getMac
        :isShow="isShowd"
        :area="area"
        :areaPeople="areaPeople"
        @chooseName="chooseName"
        @choosewan="choosewan"
      ></getMac>
    </div>
  </div>
</template>
<script>
import getMac from "../../../components/chooseMac";
export default {
  data() {
    return {
      hel: "祝华俊",
      kinds: 0, //0总部，1区域，2名字
      isShowName: false,
      isShowd: false,
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
      curName: "",
      curIndex: ""
    };
  },
  components: {
    getMac
  },
  methods: {
    toData() {
      this.$router.push({
        name: "saleData1",
        params: {
          kind: 2
        }
      });
    },
    choosewan(items) {
      let _this = this;
      _this.isShowd = false;
      if (items.id == 0) {
        // _this.kinds = items.kind;
        // _this.hel = items.text;
      }
    },
    chooseName(items) {
      let _this = this;
      if (items.id > 0) {
        _this.isShowd = false;
        _this.kinds = items.kind;
        _this.hel = items.text;
      }
    },
    showChoose() {
      let _this = this;
      if (_this.isShowd == true) {
        _this.isShowd = false;
      } else {
        _this.isShowd = true;
      }
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
    z-index: 2;
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
.c-c7 > div {
  position: absolute;
  width: 31vw;
  height: 7vw;
  opacity:0;
  background: yellow;
}
.c-c7-0 {
    right: 10vw;
    top: 39vw;
}
.c-c7-1 {
  right: 10vw;
  top: 54vw;
}
.c-c7-2 {
    right: 8vw;
    top: 46vw;
}
.c-c7-3 {
      right: 13vw;
    top: 61vw;
}
.c-c7-4 {
  right: 15vw;
  top: 68vw;
}
.c-c7-5 {
  left: 25vw;
  top: 37vw;
}
.c-c7-6 {
     left: 22vw;
    top: 45vw;
}
.c-c7-7 {
     left: 19vw;
    top: 52vw;
}
.c-c7-8 {
      left: 22vw;
    top: 59vw;
}
.c-c7-9 {
     left: 19vw;
    top: 66vw;
}
.c-c7-10 {
left: 23vw;
    top: 74vw;
}

</style>
