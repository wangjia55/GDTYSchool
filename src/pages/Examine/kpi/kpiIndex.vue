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
          <yd-cell-item arrow>
            <yd-datetime type="month" v-model="datetime1" slot="right"></yd-datetime>
          </yd-cell-item>
        </div>
        <div>
          <span class="sumbu" @click="showChoose">{{hel}}</span>
        </div>
      </div>
      <div v-show="kinds==0">
        <img
          style="width:100%;"
          src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/KPI%E5%88%87%E5%9B%BE/%E6%80%BB%E9%83%A8-1.jpg"
          alt
        />
        <div class="c-con">
          <div>
            <img
              src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/KPI%E5%88%87%E5%9B%BE/%E6%80%BB%E9%83%A8-2.jpg"
              alt
            />
          </div>
        <!--   <img
            src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE1-2.png"
            alt
          /> -->
          <!-- <div class="c-c3" @click="toDetail(0)"></div> -->
        </div>
      </div>
      <div v-show="kinds==1">
        <img
          style="width:100%;"
          src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/KPI%E5%88%87%E5%9B%BE/MAC-1.jpg"
          alt
        />
        <div class="c-con">
          <div>
            <img
              src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/KPI%E5%88%87%E5%9B%BE/MAC.jpg"
              alt
            />
          </div>
        <!--   <img
            src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE5-2.png"
            alt
          /> -->
          <!-- <div class="c-c3" @click="toDetail(1)"></div> -->
        </div>
      </div>
      <div v-show="kinds==2">
        <img
          style="width:100%;"
          src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/KPI%E5%88%87%E5%9B%BE/%E7%BB%8F%E9%94%80%E5%95%86.jpg"
          alt
        />
     <!--    <div class="c-con">
          <div>
            <img
              src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/exam_7.png"
              alt
            />
          </div>
          <img
            src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp/0814KPI%E6%95%B0%E6%8D%AE/KPI%E6%95%B0%E6%8D%AE6-2.png"
            alt
          />
          <div class="c-c3" @click="toDetail(2)"></div>
        </div> -->
      </div>
    </div>
    <div>
      <getMac
      :isShow="isShowd"
      :area = "area"
      :areaPeople="areaPeople"
       @chooseName="chooseName"
       @choosewan="choosewan"></getMac>
    </div>
  </div>
</template>
<script>
import getMac from "../../../components/chooseMac";
export default {
  data() {
    return {
      hel: "总部",
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
      currentPage: 1,
      datetime1: "2019-08",
      curName: "",
      curIndex: ""
    };
  },
  components: {
    getMac
  },
  methods: {
    choosewan(items) {
      let _this = this;
      _this.isShowd = false;
      if (items.id == 0) {
        _this.kinds = items.kind;
        _this.hel = items.text;
      }
    },
    chooseName(items) {
      let _this = this;
      _this.isShowd = false;
      _this.kinds = items.kind;
      _this.hel = items.text;
    },
    toDetail(kinds) {
      this.$router.push({
        name: "kpiDetail",
        params: {
          kinds: kinds
        }
      });
    },
    showChoose() {
      let _this = this;
      if (_this.isShowd == true) {
        _this.isShowd = false;
      } else {
        _this.isShowd = true;
      }
    },

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
.sumbu::after{
  content:">";
  margin-left: 5px;
  color: #c9c9c9;
  font-size: 18px;

}
</style>
