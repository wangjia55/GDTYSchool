<template>
  <!-- 体育资讯 -->
  <div class="message-container">
    <div class="navs">
      <el-carousel>
        <el-carousel-item  :interval="3000"  style="height:400px;">
          <img style="width:100%;height:100%" src="../../assets/images/home9.png" alt />
        </el-carousel-item>
         <el-carousel-item  :interval="3000" >
          <img style="width:100%;height:100%" src="../../assets/images/home10.png" alt />
        </el-carousel-item>
         <el-carousel-item  :interval="3000" >
          <img style="width:100%;height:100%" src="../../assets/images/home13.png" alt />
        </el-carousel-item>
         <el-carousel-item  :interval="3000">
          <img style="width:100%;height:100%" src="../../assets/images/home11.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="flex-flow mt20 mb20 init">
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px;">运动应知道</span>
            <el-button style="float: right; padding: 3px 0;" type="text"  @click="gotoMore">更多</el-button>
          </div>
          <h3 style="color:#000;font-weight:bold;font-size:16px;margin-bottom:10px;">巴黎全面推广自行车</h3>
         <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>在新年期间俄罗斯所有地区都开展了运动与健康活动</span>
              <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
         <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2018年法国大众体育参与调查报告</span>
              <span>2019-12-21</span>
            </div>
          </div>
            <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>澳大利亚发布2018/19年体育参与调查结果</span>
              <span>2019-12-21</span>
            </div>
          </div>
            <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>法国体育部长提交2020财政法案</span>
              <span>2019-11-21</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base ml20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px;">体育圣殿</span>
            <el-button style="float: right; padding: 3px 0;" type="text"  @click="gotoShengdian">更多</el-button>
          </div>
          <h3 style="color:#000;font-weight:bold;font-size:16px;margin-bottom:10px;">国际市场研究机构独家报道</h3>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019国内体育营销成功案例回顾与分析</span>
              <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>中国体育旅游大数据的应用前景</span>
              <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>英国著名投资人谈体育投资原则</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>美国职业橄榄球联盟新赛季10大赞助商</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>欧洲体育零售商品牌与大品牌的市场战略</span>
              <span>2019-11-21</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px;">政策发布</span>
            <el-button style="float: right; padding: 3px 0;" type="text"  @click="gotoMore">更多</el-button>
          </div>
          <h3 style="color:#000;font-weight:bold;font-size:16px;margin-bottom:10px;">关于废止部分规章和规范性文件的决定</h3>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>教育部教师工作司负责人就2020年“国培计划”组织</span>
               <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>国家体育总局内部管理规范性文件目录</span>
              <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>中华人民共和国体育法</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>国务院办公厅关于促进全民健身推动体育产业高质量发展的意见</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>国际奥委会、残奥会进一步明确俄罗斯兴奋剂庭审判决</span>
              <span>2019-11-21</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px;">学术快递</span>
            <el-button style="float: right; padding: 3px 0;" type="text" @click="gotoMore">更多</el-button>
          </div>
          <h3 style="color:#000;font-weight:bold;font-size:16px;margin-bottom:10px;">竞赛成绩一览</h3>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>关于2020年度国家自然科学基金项目申请通告</span>
              <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2020年度国家社会科学基金项目申报公告</span>
              <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>广州市社科规划2020年度岭南文化研究专项课题指南</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>关于申报中国高校产学研创新基金的通知</span>
              <span>2019-11-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>关于做好2019年度国家社科基金后期资助项目申报</span>
              <span>2019-11-21</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="school-news">
        <div class="btw yaonew align">
          <p>经典赛事</p>
          <p class="curpoint"></p>
        </div>
        <div class="flex-wrap">
          <div class="col curpoint"  @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;" >
            <img
              style="width:360px;height:220px;margin-bottom:10px"
              src="../../assets/images/sai1.jpg"
              alt
            />
            <p style="text-align:center;font-size:14px;">第十届全国大学生运动会健美操比赛</p>
          </div>
           <div class="col curpoint"  @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;" >
            <img
              style="width:360px;height:220px;margin-bottom:10px"
              src="../../assets/images/sai2.jpg"
              alt
            />
            <p style="text-align:center;font-size:14px;">第十届全国大学生运动会乒乓球比赛</p>
          </div>
           <div class="col curpoint"  @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;" >
            <img
              style="width:360px;height:220px;margin-bottom:10px"
              src="../../assets/images/sai3.jpg"
              alt
            />
            <p style="text-align:center;font-size:14px;">第十届全国大学生运动会羽毛球比赛</p>
          </div>
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
    gotoMore(){
      this.$router.push({path:"tiyuDetail"})
    },
    gotoInfo(){
      this.$router.push({path:"tiyuInfo"})
    },
    gotoShengdian(){
        this.$router.push({path:"shengdian"})
    }
  },
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" >
.message-container {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

 .navs{
    .el-carousel__container{
      height:400px!important;
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
}
</style>

