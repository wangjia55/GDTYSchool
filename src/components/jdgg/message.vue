<template>
  <div class="c-plan-container">
    <!-- 公告和计划 -->
    <div>
      <div style="background:#409eff;padding-bottom:40px">
        <div class="init">
          <div class="container-divider">
            <el-divider class>
              <div>鉴定公告</div>
            </el-divider>
          </div>
          <div class="top_comment">
            <div class="out">
              <el-carousel style="height:400px;">
                <el-carousel-item :interval="3000" style="width:100%;">
                  <img style="width:100%;height:100%;" src="../../assets/images/ser7.jpg" alt />
                </el-carousel-item>
                <el-carousel-item :interval="3000">
                  <img style="width:100%;height:100%;" src="../../assets/images/detail2.png" alt />
                </el-carousel-item>
                <el-carousel-item :interval="3000">
                  <img style="width:100%;height:100%;" src="../../assets/images/ser4.jpg" alt />
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="news_right">
              <div class="end curpoint" style="font-size:18px">more</div>
              <ul class="news_content color-white">
                <li>
                  <a test target="_blank">●&nbsp;&nbsp;国家体育总局关于调整新冠肺炎疫情期间体育行政审批事项办理工作的通知</a>
                </li>
                <li>
                  <a test="/index.php/Index/show/id/199.html" target="_blank">
                    ●&nbsp;&nbsp;2020年度广州职业健身“金狮奖”颁奖盛典隆重举行
                    八大荣誉奖项出炉
                  </a>
                </li>
                <li>
                  <a
                    test="/index.php/Index/show/id/198.html"
                    target="_blank"
                  >●&nbsp;&nbsp;2020东方职业健身交流大会年度十佳健身俱乐部、工作室线上报名、评选，火热征集中！</a>
                </li>
                <li>
                  <a
                    test="/index.php/Index/show/id/197.html"
                    target="_blank"
                  >●&nbsp;&nbsp;广州代表队在2020年全国体育行业职业技能大赛中喜获佳绩</a>
                </li>
                <li>
                  <a test="/index.php/Index/show/id/196.html" target="_blank">
                    ●&nbsp;&nbsp;2020“MY
                    COACH”广州市健身教练职业技能大赛顺利收官
                  </a>
                </li>
                <!-- <li>
                <a test="/index.php/Index/show/id/195.html" target="_blank">
                  ●&nbsp;&nbsp;【平凡岗位 星耀申城】2020“MY
                  COACH”广州市健身教练职业技能大赛9月开赛
                </a>
                </li>-->
                <li>
                  <a test="/index.php/Index/show/id/188.html" target="_blank">
                    ●&nbsp;&nbsp;2020“MY
                    COACH”广州市健身教练职业技能大赛暨全国体育行业职业技能大赛选拔赛 （健身运动指导）一触即发，等你来战！
                  </a>
                </li>
                <li>
                  <a
                    test="/index.php/Index/show/id/201.html"
                    target="_blank"
                  >●&nbsp;&nbsp;国家体育总局关于调整新冠肺炎疫情期间体育行政审批事项办理工作的通知</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
       <div class="bg-black mt10" style="padding:20px 0">
      <div class="news_detail init pv20" style="margin:0 auto!important;">
        <div class="left" style="border-right:1px solid #ccc">
          <div class="title">
            <p class="news">鉴定计划 &gt;</p>
            <a test="/index.php/Index/category/id/9.html" target="_blank">
              <p class="more curpoint">more</p>
            </a>
          </div>
          <div class="theNews">
            <ul class="news_content color-white">
              <li @click="dialogTableVisible=true">
                <a
                  test="/index.php/Index/show/id/194.html"
                  target="_blank"
                >●&nbsp;&nbsp;2020年8月31日游泳救生鉴定公告</a>
              </li>
              <li>
                <a
                  test="/index.php/Index/show/id/193.html"
                  target="_blank"
                >●&nbsp;&nbsp;2020年8月26日游泳救生鉴定公告</a>
              </li>
              <li>
                <a
                  test="/index.php/Index/show/id/192.html"
                  target="_blank"
                >●&nbsp;&nbsp;2020年8月11日游泳救生鉴定公告</a>
              </li>
              <li>
                <a
                  test="/index.php/Index/show/id/191.html"
                  target="_blank"
                >●&nbsp;&nbsp;2020年8月10日游泳救生鉴定公告</a>
              </li>
              <li>
                <a
                  test="/index.php/Index/show/id/186.html"
                  target="_blank"
                >●&nbsp;&nbsp;2020年7月7日游泳救生鉴定公告</a>
              </li>
              <li>
                <a
                  test="/index.php/Index/show/id/185.html"
                  target="_blank"
                >●&nbsp;&nbsp;2020年6月广州市体育行业职业技能鉴定安排</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="left space">
          <div class="title">
            <p class="news">培训计划 &gt;</p>
            <a test="/index.php/Index/category/id/2.html" target="_blank">
              <p class="more curpoint">more</p>
            </a>
          </div>
          <div class="theNews">
            <ul class="news_content color-white">
              <li>
                <a
                  test="/index.php/Index/show/id/169.html"
                  target="_blank"
                >●&nbsp;&nbsp;【全国羽毛球教练国职培训班（广州站）】2020年度首期报名</a>
              </li>
              <li>
                <a test="/index.php/Index/show/id/157.html" target="_blank">
                  ●&nbsp;&nbsp;强化新思维
                  构建新体系——“体育经理人培训与测评体系”项目启动
                </a>
              </li>
              <li>
                <a
                  test="/index.php/Index/show/id/156.html"
                  target="_blank"
                >●&nbsp;&nbsp;健身教练国家职业资格培训探索国际接轨新模式</a>
              </li>
              <li>
                <a
                  test="/index.php/Index/show/id/142.html"
                  target="_blank"
                >●&nbsp;&nbsp;《2017年体育职业技能鉴定工作思路和安排》</a>
              </li>
              <li>
                <a
                  test="/index.php/Index/show/id/141.html"
                  target="_blank"
                >●&nbsp;&nbsp;健身指导系列丛书——《我的颈肩我做主》</a>
              </li>
              <li>
                <a
                  test="/index.php/Index/show/id/140.html"
                  target="_blank"
                >●&nbsp;&nbsp;健身指导系列丛书——《办公室也是健身房》</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 数据
    return {};
  },
  computed: {},
  components: {
    // 组件名称
  },

  methods: {
    gotoInfo() {
      this.$router.push({ name: "tiyuInfo", params: {} });
    },
    // 事件函数
    gotoDetail() {
      this.$router.push({ name: "detail", params: {} });
    }
  },
  props: [],
  created: function() {
    // 页面加载的时候触发的函数
  },
  mounted() {
    //
  }
};
</script>
<style  rel="stylesheet/scss" lang="scss">
.c-plan-container {
   .bg-black {
    background: url("../../assets/images/linebg.png") repeat;
  }
   .news {
    color: #fff;
    font-size: 17px;
    line-height: 40px;
    padding-left: 10px;
    float: left;
    font-weight: bold;
  }
  .container-divider {
    .el-divider--horizontal {
      width: 50%;
      margin: 54px auto;
    }
    .el-divider__text {
      background: #409eff;
      font-size: 25px;
      color: #fff;
    }
  }
  
  .top_comment {
    width: 100%;
    overflow: hidden;
  }
   .out ul {
    list-style: none;
  }
  .out {
    width: 49%;
    height: 300px;
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
  .more {
    font-size: 18px;
    color: #fff;
    float: right;
    padding-right: 18px;
    line-height: 40px;
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
  .color-white a {
    color: #fff !important;
    font-size: 14px;
  }
  .color-white a:hover {
    text-decoration: underline;
  }
  .news_content li {
    width: 100%;
    margin: 0px;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }
  .news_right {
    float: right;
    width: 49%;
    height: 300px;
    // background: #ffffff;
    color: #fff;
  }

  .news_content {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    line-height: 37px;
    // background: white;
    color: #fff;
  }

  //222222
  .project_type {
    // background: white;
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
      color: #fff;
    }
    .news_content li a:hover {
      color: #006faa;
    }

    //222222
    .project_type {
      // background: white;
      position: relative;
      overflow: hidden;
    }

    .type_line {
      margin-left: 25px;
      width: 100%;
      list-style: none;
      overflow: hidden;
      padding: 20px 0;
    }
    .type_line li {
      width: 220px;
      float: left;
      height: 220px;

      border: none;

      padding-top: 15px;
    }
    .type_line a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      color: #fff;
      cursor: pointer;
    }
    .type_line li .statu_1 {
      color: #fff;
    }
    .type_line li .statu_0 {
      color: #fff;
    }

    .type_line li img {
      border: none;
      width: 120px;

      height: 120px;
      margin: 10px auto;
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
  }

  .news_detail {
    width: 100%;
    // height: 292px;
    // margin-top: 12px;
    overflow: hidden;
    // margin-bottom: 12px;
  }

  .news_detail .left {
    float: left;
    width: 49%;
    // height: 40px;

    /*background: url(../images/index/left_title.png) no-repeat;*/
    background-color: none;
    /*overflow: hidden;*/
    // border-radius: 15px 15px 0 0;
    // border-bottom: 3px solid #409eff;
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
    // height: 254px;
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
    // height: 292px;
    position: relative;
    margin-top: 12px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .news_detail .left {
    float: left;
    width: 49%;
    // height: 40px;
    /*background: url(../images/index/left_title.png) no-repeat;*/
    background-color: none;
    /*overflow: hidden;*/
    color: #fff;
    // border-radius: 15px 15px 0 0;
    // border-bottom: 2px solid #409eff;
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
    width: 64%;
    height: 40px;
    /*background: url(../images/index/left_title.png) no-repeat;*/
    background-color: white;
    /*overflow: hidden;*/
    border-radius: 15px 15px 0 0;
    border-bottom: 2px solid #409eff;
  }
  .tools_detail .right {
    float: left;
    width: 34%;
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
  .jdzn {
    li {
      width: 170px;
      height: 170px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      b {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        color: white;
      }
    }
  }

  .theNews {
    width: 100%;
    // height: 232px;
    margin-top: 40px;
  }

  .space {
    margin-left: 20px;
  }

  .news_detail .right {
    float: right;
    width: 312px;
    // height: 254px;
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
