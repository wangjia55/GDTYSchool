<template>
  <div class="index-container nowrap pxjg" style="margin: 0 auto;width: 1000px;">
    <img src="../../assets/images/shots/bg_peixunjigou_select.png">
    <div style="display: flex;flex-wrap: wrap;">
      <div style="" class="item">
        <img src="../../assets/images/shots/icon_xiehui_youyong.jpg">
        <p>中国游泳协会</p>
        <div>
          中国游泳协会是中国游泳运动的全国性群众组织，是中华全国体育总会领导下的单项运动协会之一。中国游协，分别负责竞赛、裁判、组织和技术、训练、科研等具体工作。
        </div>
      </div>
      <div style="" class="item">
        <img src="../../assets/images/shots/icon_xiehui_yumaoqiu.jpg">
        <p>羽毛球协会</p>
        <div>
          广州国际羽毛球培训中心作为第十六届亚洲运动会重点基建项目于2010年建设落成，是一个完全按照世界羽联最高级别赛事标准设计的羽毛球训练、比赛场馆，亦是世界上唯一一个专门为羽毛球项目而设计的同时满足综合性多功能的体育场馆。
        </div>
      </div>
      <div style="" class="item">
        <img src="../../assets/images/shots/icon_ppqiu.jpeg">
        <p>乒乓球协会</p>
        <div>
          乒乓球协会直属共青团中南民族大学委员会和校学生会学生团体联合会，是一个体育性质的社团。多年来得到了校团委和校学生联合会的大力支持，乒乓球协会经过几代乒协人的摸寻、探索，走出了一条艰难曲折的道路，现已成为一个具有独立完得组织和聘有高水平指导老师的学生团体。
        </div>
      </div>
      <div style="" class="item">
        <img src="../../assets/images/shots/icon_xiehui_yumaoqiu.jpg">
        <p>羽毛球协会</p>
        <div>
          这里是简介内容
        </div>
      </div>
      <div style="" class="item">
        <img src="../../assets/images/shots/icon_xiehui_youyong.jpg">
        <p>游泳协会</p>
        <div>
          这里是简介内容
        </div>
      </div>
      <div style="" class="item">
        <img src="../../assets/images/shots/icon_xiehui_yumaoqiu.jpg">
        <p>羽毛球协会</p>
        <div>
          这里是简介内容
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {},
    components: {},
    mounted() {
    },
    filters: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss">
  .pxjg{
    .item{
      width: 300px;
      height: 400px;
      margin: 20px 10px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, .2), 0 0 6px rgba(0, 0, 0, .04);
      >img{
        width: 100px;
        margin: 20px 0 0 0;
      }
      >p{
        font-size: 18px;
        margin: 10px 0;
      }
      >div{
        flex: 1;
        width: 100%;
        padding: 20px;
        background: #ecf7fa;
      }
    }
  }
  .ser-main {
    div {
      margin: 20px;
      padding: 20px;
      > h3 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  }

  .navs {
    .el-carousel__container {
      height: 400px !important;
    }
  }

  .textser {
    img {
      margin: 10px 0;
      width: 100%;

    }
  }

  .ser-body {

    p {
      line-height: 28px;
      font-size: 14px;
      display: flex;
      align-items: center;
    }
    > p:nth-of-type(1) {
      font-size: 18px;
      margin-bottom: 5px;
      font-weight: 600;
      min-height: 70px;
      line-height: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > p:nth-of-type(2) {
      color: #0079bf;
      font-size: 12px;
      line-height: 1.5;
      margin: 8px 0;
    }
    > p:nth-of-type(3) {
      color: #0079bf;
      font-size: 12px;
      line-height: 1.5;
      margin: 8px 0;
    }
    > p:nth-of-type(4) {
    }
    > p:nth-of-type(5) {
    }
    > p:nth-of-type(6) {
    }
  }

  .fsz {
    // margin:10px;
    > span {
      margin: 10px;
      color: #999;
      cursor: pointer;
    }
  }

  .imgs {
    img {
      width: 30%;
      margin-left: 3%;
      margin-bottom: 10px;
      border: 1px solid #dfdfdf;
      cursor: pointer;
    }
  }

  .curBlue {
    color: #0079bf !important;
    font-weight: bold;
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
      width: 180px;
      text-align: center;
      line-height: 40px;
      height: 40px;
      font-size: 16px;
      background: #f5f5f5;
      margin: 0 12px;
      cursor: pointer;
    }
  }
</style>

