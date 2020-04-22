<template>
  <!-- 首页 -->
  <div class="index-container">
    <!--1111111111111111111111-->
    <div class="init">
      <div class="top_title mt20">
        <p class="news">关于我站 </p>
        <a href target="_blank">
        </a>
      </div>
      <div class="top_comment btw">
        <div class="out" style="width: 600px;">
          <el-carousel style="height:500px;">
            <el-carousel-item :interval="3000" :key="item" style="width:100%;">
              <img style="width:100%;height:100%;" src="../../assets/images/map.jpg" alt />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div  style="flex: 1;line-height:30px;height:300px;font-size:14px;background:#fff; padding:10px 10px;">

              &#12288;&#12288;广州国体联体育服务网络平台是由广东体育职业技术学院（下称“学院”）与广东世纪城集团有限公司（下称“世纪城集团”）合作项目。
              校企双方对网络平台项目团队自签订战略合作协议以来开展工作所取得的成效给予了高度肯定，并一致认为，推进校企深度合作，打造多方协同育人体系是当前国家教育部及省政府对高等职业教育发展工作提出的要求。网络平台建设项目是双方前期战略合作的重要组成项目，双方对网络平台项目建设推进工作高度重视。
              双方领导亲自挂帅，积极组建项目攻关团队，围绕项目定位、市场需求、资源整合等方面展开了多轮卓有成效的协商，达成了多项共识和成果。
        </div>
      </div>
    </div>

    <!--2222222222222222-->
    <div class="init">
      <div class="top_title mt20">
        <p class="news">机构介绍 </p>
        <a href target="_blank">
          <p class="more">more</p>
        </a>
      </div>

      <div class="btw mb20" style="background: white;">
        <div style="width:90%;margin:20px auto" class="divButton btw">
          <li>
            <img src="../../assets/images/jigou3.png" style="width:320px; border:#b6b6b6 1px solid;border-radius:15px; " />
          </li>
          <li>
            <img src="../../assets/images/jigou2.png" style="width:320px; border:#b6b6b6 1px solid;border-radius:15px; " />
          </li>
          <li>
            <img src="../../assets/images/jigou1.png" style="width:320px;border:#b6b6b6 1px solid; border-radius:15px; " />
          </li>
        </div>
      </div>
    </div>


    <!--3333333333333-->
    <div class="init">
      <div class="top_title mt20">
        <p class="news">专家团队 </p>
        <a href target="_blank">
        </a>
      </div>

      <div class="btw mb20" style="background: white;">
        <div style="width:90%;margin:20px auto" class="divButton btw">
          <li>
            <img src="../../assets/images/dao1.jpg" style="width:320px;border:#b6b6b6 1px solid; border-radius:15px; " />
          </li>
          <li>
            <img src="../../assets/images/dao2.jpg" style="width:320px;border:#b6b6b6 1px solid;  border-radius:15px; " />
          </li>
          <li>
            <img src="../../assets/images/dao3.jpg" style="width:320px; border:#b6b6b6 1px solid; border-radius:15px; " />
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {
    gotoDetail() {
      this.$router.push({ name: "detail", params: {} });
    },
    gotoInfo() {
      this.$router.push({ name: "tiyuInfo", params: {} });
    }
  },
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.index-container {
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
      width: 220px;
      text-align: center;
      line-height: 50px;
      height: 50px;
      font-size: 16px;
      background: #f5f5f5;
      margin: 10px 12px;
      cursor: pointer;
    }
  }

  //==================================
  .top_title {
    width: 100%;
    height: 40px;
    /* background: url(../images/index/top_title.png) no-repeat; */
    background-color: #fff;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
    border-bottom: 2px solid #409eff;
  }
  .news {
    color: #636060;
    font-size: 17px;
    line-height: 40px;
    padding-left: 10px;
    float: left;
    font-weight: bold;
  }
  a {
    text-decoration: none;
  }
  .more {
    font-size: 18px;
    color: #c8c0c0;
    float: right;
    padding-right: 18px;
    line-height: 40px;
  }

  .top_comment {
    width: 100%;
    overflow: hidden;
  }
  .out ul {
    list-style: none;
  }
  .out {
    width: 48%;
    height: 350px;
    position: relative;
    overflow: hidden;
    float: left;
  }

  .out .img li {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  .out .num {
    position: absolute;
    bottom: 20px;
    right: 0;
    font-size: 0px;
    width: 17%;
    z-index: 2;
  }
  .out .sentence {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
  }

  .out .num li {
    width: 5px;
    height: 5px;
    background: #ffffff;
    border-radius: 50%;
    display: inline-block;
    margin: -2px 6px;
    cursor: pointer;
  }
  .out .num li.active {
    background: #5fb0ef;
  }
  .out .sentence li {
    margin-left: 20px;
    font-size: 14px;
    color: #ffffff;
    padding-top: 13px;
    display: none;
  }
  .out .sentence {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
  }

  .out .btn {
    position: absolute;
    top: 50%;
    margin-top: -40px;
    color: #fff;
    text-align: center;
    line-height: 70px;
    font-size: 40px;
    display: none;
    cursor: pointer;
  }
  .out:hover .btn {
    display: block;
  }
  .out .left {
    left: 0;
    opacity: 0.5;
  }
  .out .right {
    right: 0;
    opacity: 0.5;
  }

  .outs ul {
    list-style: none;
  }
  .outs {
    width: 500px;
    height: 300px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }

  .outs .img li {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
  }

  .outs .num {
    position: absolute;
    bottom: 20px;
    right: 0;
    font-size: 0px;
    width: 17%;
    z-index: 2;
  }
  .outs .sentence {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
  }

  .outs .num li {
    width: 5px;
    height: 5px;
    background: #ffffff;
    border-radius: 50%;
    display: inline-block;
    margin: -2px 6px;
    cursor: pointer;
  }
  .outs .num li.active {
    background: #5fb0ef;
  }
  .outs .sentence li {
    margin-left: 20px;
    font-size: 14px;
    color: #ffffff;
    padding-top: 13px;
    display: none;
  }
  .outs .sentence {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
  }

  .outs .btn {
    position: absolute;
    top: 50%;
    margin-top: -40px;
    color: #fff;
    text-align: center;
    line-height: 70px;
    font-size: 40px;
    display: none;
    cursor: pointer;
  }
  .outs:hover .btn {
    display: block;
  }
  .outs .left {
    left: 0;
    opacity: 0.5;
  }
  .outs .right {
    right: 0;
    opacity: 0.5;
  }

  .news_right {
    float: right;
    width: 50%;
    height: 300px;
    background: #ffffff;
  }

  .news_content {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    line-height: 37px;
    background: white;
  }

  .news_content li {
    width: 100%;
    margin: 0px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .news_content li a {
    font-size: 14px;
    color: #666666;
  }
  .news_content li a:hover {
    color: #006faa;
  }

  //222222
  .project_type {
    background: white;
  }

  .type_line {
    margin-left: 25px;
    width: 100%;
    list-style: none;
    overflow: hidden;
    padding: 20px 0;
  }
  .type_line li {
    width: 74px;
    float: left;
    margin-left: 45px;
    border: none;
    text-align: center;
    padding-top: 15px;
  }
  .type_line a {
    color: #999999;
  }
  .type_line li .statu_1 {
    color: #0052b6;
  }
  .type_line li .statu_0 {
    color: #999999;
  }

  .type_line li img {
    border: none;
    width: 65px;
    height: 65px;
    border-radius: 100px;
    border: 1px solid #eeeeee;
  }
  .type_line li img.statu_0 {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);

    filter: grayscale(100%);

    filter: gray;
  }

  .type_font {
    margin-left: 31px;
    width: 582px;
    list-style: none;
    overflow: hidden;
  }

  .type_font li {
    width: 74px;
    float: left;
    margin-left: 50px;
    text-align: center;
    margin-top: 2px;
  }
  .type_font li a {
    color: #999999;
  }

  .project_lead_content {
    width: 100%;
    padding: 30px 0;
    position: relative;
    background: white;
  }
  .pic {
    width: 100%;
    list-style: none;
    overflow: hidden;
    > li {
      position: relative;
    }
    b {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      line-height: 60px;
      color: white;
      font-size: 18px;
    }
  }

  .pic li {
    float: left;
  }
  .pic li img {
    border: none;
  }
  .pic_font {
    list-style: none;
    position: absolute;
  }
  .pic_font li a:hover {
    color: #1debb8;
  }

  .pic_font li {
    font-size: 16px;
    float: left;
    width: 142px;
    text-align: center;
    position: absolute;
    bottom: 14px;
  }
  .pic_font li a {
    color: #ffffff;
  }

  .news_detail {
    width: 100%;
    height: 292px;
    margin-top: 12px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .news_detail .left {
    float: left;
    width: 49%;
    height: 40px;
    /*background: url(../images/index/left_title.png) no-repeat;*/
    background-color: white;
    /*overflow: hidden;*/
    border-radius: 15px 15px 0 0;
    border-bottom: 2px solid #409eff;
  }

  .tools_detail {
    width: 100%;
    height: 350px;
    margin-top: 12px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .tools_detail .left {
    float: left;
    width: 49%;
    height: 40px;
    /*background: url(../images/index/left_title.png) no-repeat;*/
    background-color: white;
    /*overflow: hidden;*/
    border-radius: 15px 15px 0 0;
    border-bottom: 2px solid #409eff;
  }

  .thetools {
    width: 100%;
    height: 350px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    background: white;
  }

  .thetools img {
    width: 133px;
    margin-left: 5px;
  }
  .theNews {
    width: 100%;
    height: 232px;
    margin-top: 40px;
  }

  .space {
    margin-left: 20px;
  }

  .news_detail .right {
    float: right;
    width: 312px;
    height: 254px;
  }

  .news_detail .btn_title_1 {
    margin-left: 140px;
    font-size: 20px;
    color: #ffffff;
    padding-top: 7px;
  }

  .news_detail .btn_title_2 {
    margin-left: 120px;
    font-size: 14px;
    color: #ffffff;
    padding-top: 2px;
  }
}
</style>

