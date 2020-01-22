<template>
  <div class="base">
   <div class="btw sale-header">
      <span class="pointleft" @click="$router.go(-1)"></span>
      <span class="ptitle">{{hel}}使用数据</span>
      <span class="zoushi" @click="tomap">
       <yd-icon style="font-size:20px" name="location"></yd-icon>
                 数据地图
      </span>
    </div>

    <div>
      <div class="arc k-wrap">
        <div>
          <span >{{dateKinds}}</span>
        </div>
        <div>
          <span class>{{curTime}}</span>
        </div>
        <div>
          <span >{{hel}}</span>
        </div>
        <div>
          <span class>集团总部</span>
        </div>
      </div>
      <div>

        <div class="c-con" >
          <div>
            <img :src="srcCon[0].titleSrc" alt />
          </div>
          <img :src="srcCon[0].conSrc" alt />
          <van-pagination v-model="currentPage" :page-count="12" mode="simple" />
          <!-- <div class="c-c4" @click="toDetail(0)"></div> -->
        </div>

      </div>
    </div>
    <div>
      <div>
        <div class="mask-wrap" v-show="isShowdate">
          <ul>
            <li
              v-for="item in date"
              :key="item.id"
              :class="[curDate==item.id?'curColor':'']"
              @click="chooseDate(item)"
            >{{item.name}}</li>
          </ul>
        </div>
      </div>
      <getMac
        :isShow="isShowd"
        @chooseName="chooseName"
        @choosewan="choosewan"
        :area="area"
        :areaPeople="areaPeople"
      ></getMac>
      <div>
        <yd-cell-group style="display:none">
          <!-- 选择月份 -->
          <yd-cell-item>
            <yd-datetime type="month" ref="datetimemonth" v-model="datetime1" slot="right"></yd-datetime>
          </yd-cell-item>
        </yd-cell-group>
      </div>
      <div>
        <!-- 选择季度 -->
        <van-popup v-model="showYear1" position="bottom">
          <van-picker
            :columns="columns1"
            show-toolbar
            title="选择季度"
            @cancel="onCancel1"
            @confirm="onChange1"
          />
        </van-popup>
      </div>
      <div>
        <van-popup v-model="showYear" position="bottom">
          <van-picker
            :columns="year"
            show-toolbar
            title="选择年份"
            @cancel="onCancel"
            @confirm="onChange"
          />
        </van-popup>
        <!-- 选择年份 -->
      </div>
    </div>
  </div>
</template>
<script>
import getMac from "../../../components/chooseMac";
const setion = {
  "2015年": ["Q1", "Q2", "Q3", "Q4"],
  "2016年": ["Q1", "Q2", "Q3", "Q4"],
  "2017年": ["Q1", "Q2", "Q3", "Q4"],
  "2018年": ["Q1", "Q2", "Q3", "Q4"],
  "2019年": ["Q1", "Q2", "Q3", "Q4"],
  "2020年": ["Q1", "Q2", "Q3", "Q4"],
  "2021年": ["Q1", "Q2", "Q3", "Q4"]
};
export default {
  data() {
    return {
      srcCon: [
        {
          titleSrc: "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E9%94%80%E5%94%AE%E9%A1%BE%E9%97%AE%E5%88%87%E5%9B%BE/%E8%B6%8B%E5%8A%BF-%E9%94%80%E5%94%AE%E9%A1%BE%E9%97%AE-1.jpg",
          conSrc: "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E9%94%80%E5%94%AE%E9%A1%BE%E9%97%AE%E5%88%87%E5%9B%BE/%E8%B6%8B%E5%8A%BF-%E9%94%80%E5%94%AE%E9%A1%BE%E9%97%AE-2.jpg"
        }
      ],

      columns1: [
        {
          values: Object.keys(setion),
          className: "column1"
        },
        {
          values: setion["2015年"],
          className: "column2",
          defaultIndex: 0
        }
      ],

      showYear: false,
      showYear1: false,
      curTime: "2019-08月",
      dateKinds: "月",
      curDate: 0,
      hel: "祝华俊",
      kinds: 0, //0总部，1区域，2名字
      isShowName: false,
      isShowdate: false,
      isShowd: false,
      year: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
      date: [
        {
          id: 0,
          name: "月"
        },
        {
          id: 1,
          name: "季"
        },
        {
          id: 2,
          name: "年"
        }
      ],
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
  mounted(){
    /* this.kinds = this.$route.params.kind;
    if( this.kinds==0){
      this.hel = "总部"
    }else if(this.kinds==1){
       this.hel = "一区"
    }else if(this.kinds==2){
       this.hel = "张三"
    } */
  },
  methods: {
    tops(){
     /*  this.$router.replace({
        name:"saleData",
        params:{
          kind:2
        }
      }) */
    },
    tomap(){
      let kinds = this.kinds;
       this.$router.push('saleMacIndex')

    },
    onCancel1() {
      this.showYear1 = false;
    },
    onChange1(value, index) {
      console.log(value);
      this.curTime = value[0] + value[1];
      this.showYear1 = false;
    },
    onCancel() {
      this.showYear = false;
    },
    onChange(value, index) {
      this.curTime = value + "年";
      this.showYear = false;
    },
    showDate() {
      let _this = this;
      if (_this.isShowdate == true) {
        _this.isShowdate = false;
      } else {
        _this.isShowdate = true;
      }
    },
    chooseDate(item) {
      this.curDate = item.id;
      this.isShowdate = false;
      this.dateKinds = item.name;
      if (item.id == 0) {
        this.$refs.datetimemonth.open();
      } else if (item.id == 1) {
        this.showYear1 = true;
      } else if (item.id == 2) {
        this.showYear = true;
      }
    },
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
    toDetail() {
      this.$router.push({
        name: "intDetail",
        params: {}
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
  },
  watch: {
    datetime1(val) {
      this.curTime = this.datetime1 + "月";
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
  .ptitle{
    position: absolute;
    left: 0;
    top:0;
    width:100%;
    text-align: center;
  }
  .zoushi {
    position: relative;
    font-size: 15px;
    right: 10px;
    img {
    position: relative;
    top:5px;
      width: 20px;
      height: auto;
    }
  }
}
.yd-datetime-head > a:last-child {
  color: #1989fa;
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
  .c-c10 {
    width: 18vw;
    height: 10vw;
    position: absolute;
    right: 0;
    top: 82vw;
    z-index: 10;

  }
}
.sumbu::after {
  content: ">";
  margin-left: 5px;
  color: #c9c9c9;
  font-size: 18px;
}
</style>
