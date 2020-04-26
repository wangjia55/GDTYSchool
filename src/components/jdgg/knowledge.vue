<template>
  <div class="guild-index-container">
    <!-- 鉴定指南 -->
    <div>
      <div class="bg-black" style="padding:20px 0">
        <!-- 资格证书 -->
        <div class="init">
          <div class="container-divider-black">资格认证</div>
          <div style="width:900px;margin:20px auto">
            <el-carousel :interval="4000" type="card" height="350px">
              <el-carousel-item>
                <div class="col">
                  <img src="../../assets/images/zi1.png" alt />
                  <p
                    style="color:#fff;height:50px;text-align:center;font-size:18px;line-height:50px;"
                  >国家体育资格证书</p>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div>
                  <img src="../../assets/images/zi2.png" alt />
                  <p
                    style="color:#fff;height:50px;text-align:center;font-size:18px;line-height:50px;"
                  >初级教练认证</p>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div>
                  <img src="../../assets/images/zi3.png" alt />
                  <p
                    style="color:#fff;height:50px;text-align:center;font-size:18px;line-height:50px;"
                  >中级教练认证</p>
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div>
                  <img src="../../assets/images/zi4.png" alt />
                  <p
                    style="color:#fff;height:50px;text-align:center;font-size:18px;line-height:50px;"
                  >高级教练认证</p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="mt10" style="background:#409eff;padding:40px 0">
       <div class="init">
        <div class="container-divider">
          <el-divider class>
            <div>报考须知</div>
          </el-divider>
        </div>
        <div>
          <div class="jd-way">
            <h3>鉴定方式：</h3>
            <p>鉴定分为理论和实操两个部分，理论采用闭卷笔试，实操通常采用技能展示和教学指导能力相结合的方式，体育经纪人、体育场地工则采取案例分析和撰写论文等方式进行考核。理论和实操考核均采用百分制，两项考核皆达到60分以上者为合格。</p>
          </div>
            <div class="jd-way">
            <h3>鉴定流程：</h3>
            <p>制定鉴定计划  →   发布公告   →  组建考评小组   →  考前准备  →   提取鉴定试题  →   组织鉴定 -理论 →  实操 → 阅卷评分 → 呈报鉴定结果 → 核发证书 → 鉴定总结</p>
          </div>
            <div class="jd-way">
            <h3>培训师与讲师：</h3>
            <p>职业培训工作由具备职业培训资质的各项目培训基地承担；培训基地是由各单位自愿申报，经国家体育总局或市体育局审核同意后挂牌，培训基地分国家级和省（市）级。</p>
            <p>培训师须参加国家体育总局职鉴指导中心或省（市）体育职业技能鉴定站统一组织的师资培训、考试，获得资质证书后才能进行培训授课。</p>
          </div>
            <div class="jd-way">
            <h3>考评与考评员：</h3>
            <p>考评工作由鉴定站抽调考评员负责。考评员须参加国家人力资源和社会保障部职鉴中心和国家体育总局职鉴指导中心统一组织的培训、考试，获得资格后才能进行考评工作。 </p>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {
    this.init();
  },
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.guild-index-container {
  .container-divider-black {
    font-size: 25px;
    color: #fff;
    text-align: center;
    padding: 20px 0;
  }
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
  .jd-way{
    color: #fff;
    margin-bottom: 15px;
    h3{
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    p{
      font-size: 13px;
      text-align: justify;
      text-indent: 2em;
      line-height: 25px;
     
    }
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

