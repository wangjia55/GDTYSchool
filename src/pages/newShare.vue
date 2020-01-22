<template>
  <div class="wrap car-wrap">
    <!--3*3新享计划-->
    <div class="car-price">
      <div class="car-sum">
        <div class="car-tips btw">
          <span>建议零售价(元)</span>
          <span class="colorRed">￥{{curCar.carprice}}</span>
        </div>
        <!-- 模式 -->
        <div class="car-tips btw" style="border-bottom:1px solid #ccc">{{curCar.carp}}</div>
        <div class="car-tips btw" @click="toshow">
          <span>选择车型</span>
          <span class="colorRed">{{carKindDist}}</span>
        </div>
        <div class="car-bzj">
          <ul class="btw">
            <li>
              <span>首付</span>
              <span>{{curCar.bzjsf}}%</span>
            </li>
            <li>
              <span>尾款</span>
              <span>{{curCar.wkje}}</span>
            </li>
            <li>
              <span>贷款金额</span>
              <span>{{curCar.dkje}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="car-bacf">
      <van-popup v-model="showPicker" position="bottom" :style="{ height: '30%' }">
        <van-picker show-toolbar :columns="columns" value-key="name" @change="onChange" @cancel="showPicker = false"
          @confirm="onConfirm" />
      </van-popup>
      <div class="car-tips btw">
        <span>MSRP</span>
        <span>{{curCar.msrp}}</span>
      </div>
      <div class="car-tips btw">
        <span>购置税</span>
        <span>{{curCar.gzs}}</span>
      </div>
      <div class="car-tips btw">
        <span>保险</span>
        <span>{{curCar.bx}}</span>
      </div>
      <div class="car-tips btw">
        <span>总价</span>
        <span>{{curCar.zj}}</span>
      </div>
      <div class="car-tips btw">
        <span>期限(月)</span>
        <span>{{curCar.endmonth}}</span>
      </div>
      <div class="car-tips btw">
        <span>首付金额(元)</span>
        <span class="reds">{{curCar.bzjje}}</span>
      </div>
      <div class="car-tips btw">
        <span>客户月供(元)</span>
        <span class="reds">{{curCar.khyg}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import vuePickers from "vue-pickers";
  import newShareList from "../components/newShare_lists";
  import {
    car,
    carCon
  } from "../assets/js/carDatas.js";
  export default {
    name: "HelloWorld",
    data() {
      return {
        carKindDist: " 28T 技术型",
        curCar: "",
        value: '',
        showPicker: false,
        columns: [{
            values: car,
            className: 'column1'
          },
          {
            values: carCon['XT4首付可退'],
            className: 'column2',
            defaultIndex: 1
          }
        ]
      };
    },
    components: {
      vuePickers,
      newShareList,
    },
    computed: {

    },
    methods: {
      onChange(picker, values) {
        //在change 第一列的时候，动态更改第二列的数据
        //setColumnValues是vant自带的实例方法
        //第一个参数是列数，从0开始；第二个参数是第二列应该显示的数据
        picker.setColumnValues(1, carCon[values[0].name]);
      },
      onConfirm(value) {
        //将选中的文字和对应的id拿出来使用
        let _this = this;
        _this.village_name = value[0].name + ' ' + value[1].name;
        _this.village_id = value[0].id;
        _this.garage_id = value[1].id;
        _this.showPicker = false;
        _this.carKindDist = value[1].name;
        _this.curCar = value[1];
        _this.curCar.carp = value[0].name;

      },
      toshow() {
        this.showPicker = true;
      },

    },
    mounted() {
      let _this = this;
      _this.curCar = carCon['XT4首付可退'][0];
      _this.curCar.carp = "XT4首付可退";

    },
    watch: {


    }
  };
</script>

<style scoped lang='scss'>
  .car-wrap {
    width: 100%;
    box-sizing: padding-box;
  }

  .van-popup--bottom::-webkit-scrollbar {
    display: none
  }

  .reds {
    color: #960719 !important;
  }

  .car-price {
    background: #f7f7f7;

    .car-sum {
      padding: 0 12px;

      >h2 {
        text-align: left;
        @include f(16px, #878787, 40px);
      }
    }

    .car-bzj {
      padding: 10px 0;

      >ul {
        >li {
          display: flex;
          flex: 1;
          flex-direction: column;
          text-align: center;

          span {
            margin: 5px 0;
          }

          >span:nth-of-type(1) {
            @include f(16px, #333);
          }

          >span:nth-of-type(2) {
            @include f(14px, #999);
          }
        }
      }
    }
  }

  .car-bacf {
    padding: 0 12px;
  }

  .colorRed {
    color: #960719 !important;
  }

  .car-tips {
    @include f(16px, #878787, 40px);
  }

  .chooseFa {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    align-items: center;

    >h3 {
      color: #960719;
      font-size: 16px;
      margin-right: 15px;
    }

    span {
      width: 80px;
      height: 36px;
      background: #ccc;
      line-height: 36px;
      text-align: center;
      font-size: 18px;
      color: #fff;
      margin-right: 10px;
    }

    .curFa {
      background: #960719;
    }
  }
</style>
