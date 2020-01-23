<template>
  <div class="nav-wrap">
    <yd-navbar title="APP使用数据">
      <div slot="left" @click="BackPage()">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
    </yd-navbar>
    <div class="nav-img" v-for="(item,index) in imgList" :key="index" @click="toroute(item.router)">
      <img :src="item.src" :key="index" alt />
      <span>{{item.con}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: [
        {
          src:
            "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E5%86%85-9%E4%B8%AAicon/%E7%89%88%E5%9D%97%E4%BD%BF%E7%94%A8%E6%95%B0%E6%8D%AE.png",
          con: "版块使用数据",
          router: "/DataReport/ModeUseData/DataAll"
        },
        {
          src:
            "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E5%86%85-9%E4%B8%AAicon/%E9%94%80%E5%94%AE%E9%A1%BE%E9%97%AE%E4%BD%BF%E7%94%A8%E6%95%B0%E6%8D%AE.png",
          con: "销售顾问使用数据",
          router: "/Examine/saleGuWen/saleIndex"
        },
        {
          src:
            "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E5%86%85-9%E4%B8%AAicon/KPI%E6%95%B0%E6%8D%AE.png",
          con: "KPI数据",
          router: "/Examine/kpi/kpiIndex"
        },
        {
          src:
            "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E5%86%85-9%E4%B8%AAicon/%E8%AE%A2%E5%8D%95%E6%8E%92%E8%A1%8C.png",
          con: "订单排行",
          router: "/Examine/order/orderIndex"
        },
        {
          src:
            "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E5%86%85-9%E4%B8%AAicon/%E5%AE%A2%E6%88%B7%E5%BD%95%E5%85%A5%E6%8E%92%E8%A1%8C.png",
          con: "客户录入排行",
          router: "/Examine/user/userIndex"
          //router: ""
        },
        {
          src:
            "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E5%86%85-9%E4%B8%AAicon/%E7%A7%AF%E5%88%86%E6%8E%92%E8%A1%8C.png",
          con: "积分排行",
          router: "/Examine/integral/intIndex"
          //router: ""
        },
        {
          src:
            "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E5%86%85-9%E4%B8%AAicon/%E8%80%83%E8%AF%95%E6%8E%92%E8%A1%8C.png",
          con: "考试排行",
          router: "/Examine/exam/chengji"
        },
        {
          src:
            "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E5%86%85-9%E4%B8%AAicon/%E5%85%A8%E5%9B%BD%E7%BB%8F%E9%94%80%E5%95%86%E6%9F%A5%E8%AF%A2.png",
          con: "全国经销商查询",
          router: "/Examine/country/countryIndex"
        },
        /*{
          src:
            "http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8%E5%86%85-9%E4%B8%AAicon/Sales%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8.png",
          con: "Sales数据排行",
          router: "/DataReport/SalesReportForm/SalesData"
        }*/
      ]
    };
  },
  methods: {
    toroute(route) {
      this.$router.push(route);
    },
    BackPage() {
    	//console.log("222")
      if (typeof window.android != "undefined") {
        window.android.finishActivity();
      }
    }
  }
};
</script>
<style lang="scss" >
.nav-wrap{
  width: 100%;
  min-height: 100vh;
  background: #fff;
  overflow: hidden;
}
.nav-img {
  float:left;
  background: #dfdfdf;
  padding:10px 0 ;
  width: 45%;
  font-size: 3vw;
  display: flex;
  align-items: center;
  margin: 10px 2.5% 0;
  cursor: pointer;
   img{
     width:10vw;
     margin:0 10px;
     height:10vw;
  }
}
</style>
