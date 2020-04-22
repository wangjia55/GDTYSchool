<template>
  <!-- 首页 -->
  <div class="index-container">

        <div class="navs">
      <el-carousel style="height:400px;">
        <el-carousel-item :interval="3000" :key="item" style="width:100%;">
          <img style="width:100%;height:100%;" src="../../assets/images/ba1.png" alt />
        </el-carousel-item>
        <el-carousel-item :interval="3000" :key="item">
          <img style="width:100%;height:100%;" src="../../assets/images/ba2.jpg" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!--1111111111111111111111-->
    <div class="init">
      <div class="top_title mt20">
        <p class="news">综合新闻 &gt; </p>
        <a test="" target="_blank"><p class="more"> more </p></a>
      </div>
      <div class="top_comment">
        <div class="out">
          <el-carousel style="height:400px;">
            <el-carousel-item :interval="3000" :key="item" style="width:100%;">
              <img style="width:100%;height:100%;" src="../../assets/images/ser7.jpg" alt/>
            </el-carousel-item>
            <el-carousel-item :interval="3000" :key="item">
              <img style="width:100%;height:100%;" src="../../assets/images/detail2.png" alt/>
            </el-carousel-item>
            <el-carousel-item :interval="3000" :key="item">
              <img style="width:100%;height:100%;" src="../../assets/images/ser4.jpg" alt/>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="news_right">
          <ul class="news_content">
            <li><a test="" target="_blank">●&nbsp;&nbsp;国家体育总局关于调整新冠肺炎疫情期间体育行政审批事项办理工作的通知</a></li>
            <li><a test="/index.php/Index/show/id/199.html" target="_blank">●&nbsp;&nbsp;2020年度广州职业健身“金狮奖”颁奖盛典隆重举行
              八大荣誉奖项出炉</a></li>
            <li><a test="/index.php/Index/show/id/198.html" target="_blank">●&nbsp;&nbsp;2020东方职业健身交流大会年度十佳健身俱乐部、工作室线上报名、评选，火热征集中！</a>
            </li>
            <li><a test="/index.php/Index/show/id/197.html"
                   target="_blank">●&nbsp;&nbsp;广州代表队在2020年全国体育行业职业技能大赛中喜获佳绩</a>
            </li>
            <li><a test="/index.php/Index/show/id/196.html" target="_blank">●&nbsp;&nbsp;2020“MY
              COACH”广州市健身教练职业技能大赛顺利收官</a></li>
            <li><a test="/index.php/Index/show/id/195.html" target="_blank">●&nbsp;&nbsp;【平凡岗位 星耀申城】2020“MY
              COACH”广州市健身教练职业技能大赛9月开赛</a></li>
            <li><a test="/index.php/Index/show/id/188.html" target="_blank">●&nbsp;&nbsp;2020“MY
              COACH”广州市健身教练职业技能大赛暨全国体育行业职业技能大赛选拔赛 （健身运动指导）一触即发，等你来战！</a></li>
            <li><a test="/index.php/Index/show/id/201.html"
                   target="_blank">●&nbsp;&nbsp;国家体育总局关于调整新冠肺炎疫情期间体育行政审批事项办理工作的通知</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!--1.55555555555-->
    <div class="news_detail init">
      <div class="left mt20">
        <div class="title">
          <p class="news">鉴定公告 &gt; </p>
          <a test="/index.php/Index/category/id/9.html" target="_blank"><p class="more"> more </p></a>
        </div>
        <div class="theNews">
          <ul class="news_content">
            <li @click="dialogTableVisible=true"><a test="/index.php/Index/show/id/194.html" target="_blank">●&nbsp;&nbsp;2020年8月31日游泳救生鉴定公告</a>
            </li>
            <li><a test="/index.php/Index/show/id/193.html" target="_blank">●&nbsp;&nbsp;2020年8月26日游泳救生鉴定公告</a></li>
            <li><a test="/index.php/Index/show/id/192.html" target="_blank">●&nbsp;&nbsp;2020年8月11日游泳救生鉴定公告</a></li>
            <li><a test="/index.php/Index/show/id/191.html" target="_blank">●&nbsp;&nbsp;2020年8月10日游泳救生鉴定公告</a></li>
            <li><a test="/index.php/Index/show/id/186.html" target="_blank">●&nbsp;&nbsp;2020年7月7日游泳救生鉴定公告</a></li>
            <li><a test="/index.php/Index/show/id/185.html" target="_blank">●&nbsp;&nbsp;2020年6月广州市体育行业职业技能鉴定安排</a></li>
          </ul>
        </div>
      </div>

      <div class="left space mt20">
        <div class="title">
          <p class="news">培训动态 &gt; </p>
          <a test="/index.php/Index/category/id/2.html" target="_blank"><p class="more"> more </p></a>
        </div>
        <div class="theNews">
          <ul class="news_content">
            <li><a test="/index.php/Index/show/id/169.html"
                   target="_blank">●&nbsp;&nbsp;【全国羽毛球教练国职培训班（广州站）】2020年度首期报名</a></li>
            <li><a test="/index.php/Index/show/id/157.html" target="_blank">●&nbsp;&nbsp;强化新思维
              构建新体系——“体育经理人培训与测评体系”项目启动</a></li>
            <li><a test="/index.php/Index/show/id/156.html" target="_blank">●&nbsp;&nbsp;健身教练国家职业资格培训探索国际接轨新模式</a></li>
            <li><a test="/index.php/Index/show/id/142.html" target="_blank">●&nbsp;&nbsp;《2017年体育职业技能鉴定工作思路和安排》</a></li>
            <li><a test="/index.php/Index/show/id/141.html" target="_blank">●&nbsp;&nbsp;健身指导系列丛书——《我的颈肩我做主》</a></li>
            <li><a test="/index.php/Index/show/id/140.html" target="_blank">●&nbsp;&nbsp;健身指导系列丛书——《办公室也是健身房》</a></li>

          </ul>
        </div>
      </div>
    </div>

    <div class="init">
      <div class="top_title mt20">
        <p class="news">项目鉴定 &gt; </p>
        <a test="" target="_blank"><p class="more"> more </p></a>
      </div>
      <div class="project_type">
        <ul class="type_line">
          <li style="margin-left:0;" @click="dialogTableVisibleXmjd=true">
            <a target="_blank">
              <img src="../../assets/images/icon/1461678041293046.jpg" class="statu_1"/>
              <font class="statu_1">羽毛球</font>
            </a>
          </li>
          <li style="">
            <a test="" target="_blank">
              <img src="../../assets/images/icon/1461677864302771.jpg" class="statu_1">
              <font class="statu_1">网球</font></a>
          </li>

          <li style="">
            <a test="/index.php/Index/item/pid/8.html" target="_blank">
              <img src="../../assets/images/icon/1461677729101167.jpg" class="statu_1">
              <font class="statu_1">武术</font></a>
          </li>

          <li style="">
            <a test="/index.php/Index/item/pid/7.html" target="_blank">
              <img src="../../assets/images/icon/1461677553672371.jpg" class="statu_1">
              <font class="statu_1">跆拳道</font></a>
          </li>

          <li style="">
            <a test="/index.php/Index/item/pid/6.html" target="_blank">
              <img src="../../assets/images/icon/1461677494466120.jpg" class="statu_1">
              <font class="statu_1">攀岩</font></a>
          </li>

          <li style="">
            <a test="javascript:void(0)" target="_blank">
              <img src="../../assets/images/icon/1461677388672070.jpg" class="statu_1">
              <font class="statu_0">体育场地工</font></a>
          </li>

          <li style="">
            <a test="/index.php/Index/item/pid/4.html" target="_blank">
              <img src="../../assets/images/icon/1461677333134276.jpg" class="statu_1">
              <font class="statu_1">健美操</font></a>
          </li>

          <li style="">
            <a test="/index.php/Index/item/pid/3.html" target="_blank">
              <img src="../../assets/images/icon/1461677207207370.jpg" class="statu_1">
              <font class="statu_1">游泳救生员</font></a>
          </li>

          <li style="">
            <a test="/index.php/Index/item/pid/2.html" target="_blank">
              <img src="../../assets/images/icon/1461415069130670.png" class="statu_1">
              <font class="statu_1">游泳</font></a>
          </li>

          <li style="">
            <a test="/index.php/Index/item/pid/1.html" target="_blank">
              <img src="../../assets/images/icon/1461666070346577.jpg" class="statu_1">
              <font class="statu_1">健身教练</font></a>
          </li>
        </ul>
      </div>
    </div>
    <!--333333333333333333-->
    <div class="init">
      <div class="top_title mt20">
        <p class="news">体育知识 &gt;</p>
        <a href target="_blank">
          <p class="more">more</p>
        </a>
      </div>

      <div class="project_lead_content" style="background: white;padding: 20px 0">
        <ul class="pic arc">
          <li>
            <img src="../../assets/images/jn1.png" style="width:350px; border-radius:15px; "/>
          </li>
          <li>
            <img src="../../assets/images/jn2.png" style="width:350px; border-radius:15px; "/>
          </li>
          <li>
            <img src="../../assets/images/jn3.png" style="width:350px; border-radius:15px; "/>
          </li>
        </ul>
      </div>
    </div>

    <!--1.55555555555-->
    <div class="tools_detail init">
      <div class="left mt20">
        <div class="title">
          <p class="news">鉴定指南 &gt;</p>
          <a target="_blank">
            <p class="more">more</p>
          </a>
        </div>
        <div class="thetools jdzn">
          <ul class="thetools arc ">
            <li @click="dialogTableVisibleJdzn=true">
              <img src="../../assets/images/icon/pic_1.png"/>
              <b>国职证书</b>
            </li>
            <li>
              <img src="../../assets/images/icon/pic_2.png"/>
              <b>鉴定机构</b>
            </li>
            <li>
              <img src="../../assets/images/icon/pic_3.png"/>
              <b>报考须知</b>
            </li>
            <li>
              <img src="../../assets/images/icon/pic_4.png"/>
              <b>政策法规</b>
            </li>
          </ul>
        </div>
      </div>

      <div class="right space mt20">
        <div class="title">
          <p class="news">常用工具 &gt;</p>
          <a target="_blank">
            <p class="more">more</p>
          </a>
        </div>
        <div class="thetools">
          <ul class="" style="margin: 0 auto;margin-top: 10px;">
            <li>
              <img
                src="../../assets/images/bt1.jpg"
                style="width:300px;  margin-top:20px;border-radius:15px; "
              />
            </li>
            <li>
              <img
                src="../../assets/images/bt2.jpg"
                style="width:300px; border-radius:15px; "
              />
            </li>
            <li>
              <img
                src="../../assets/images/bt3.jpg"
                style="width:300px; border-radius:15px; "
              />
            </li>
          </ul>
        </div>
      </div>
    </div>


    <el-dialog title="" width="1000px" :visible.sync="dialogTableVisible">
      <img class="w100" src="../../assets/images/shots/ggxq.png">
    </el-dialog>
    <el-dialog title="项目鉴定" width="1000px" :visible.sync="dialogTableVisibleXmjd">
      <img class="w100" src="../../assets/images/shots/xmjd.png">
    </el-dialog>
    <el-dialog title="鉴定指南-国职证书" width="1000px" :visible.sync="dialogTableVisibleJdzn">
      <img class="w100" src="../../assets/images/shots/jdzn.png">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogTableVisible: false,
        dialogTableVisibleXmjd: false,
        dialogTableVisibleJdzn: false,
      };
    },
    computed: {},
    components: {},
    methods: {
      gotoDetail() {
        this.$router.push({name: "detail", params: {}});
      },
      gotoInfo() {
        this.$router.push({name: "tiyuInfo", params: {}});
      }
    },
    mounted() {
    },
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
      background: #ffffff;
    }

    .news_content {
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
      line-height: 37px;
      background: white;
    }

    //222222
    .project_type {
      background: white;
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
      border-bottom: 3px solid #409EFF;
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
      width:34%;
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
    .jdzn{
      li{
        width: 170px;
        height: 170px;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        b{
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

