<template>
  <!-- 体育资讯 -->
  <div class="message-container">
    <div class>
      <el-carousel>
        <el-carousel-item  :interval="3000"  style="height:400px;">
          <img style="width:100%;" src="../../assets/images/home9.png" alt />
        </el-carousel-item>
         <el-carousel-item  :interval="3000" >
          <img style="width:100%;" src="../../assets/images/home10.png" alt />
        </el-carousel-item>
         <el-carousel-item  :interval="3000" >
          <img style="width:100%;" src="../../assets/images/home13.png" alt />
        </el-carousel-item>
         <el-carousel-item  :interval="3000">
          <img style="width:100%;" src="../../assets/images/home11.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="flex-flow mt20 mb20 init">
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px;">群众体育</span>
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
            <span style="font-size:18px;">体育产业</span>
            <el-button style="float: right; padding: 3px 0;" type="text"  @click="gotoMore">更多</el-button>
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
            <span style="font-size:18px;">竞技体育</span>
            <el-button style="float: right; padding: 3px 0;" type="text"  @click="gotoMore">更多</el-button>
          </div>
          <h3 style="color:#000;font-weight:bold;font-size:16px;margin-bottom:10px;">日本公开水域游泳选手选手平井康翔退役</h3>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>改变运动医疗室卫生习惯可以有效控制感染发生</span>
               <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>足球U23亚洲杯赛后桥岡大树坦言实力不足</span>
              <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>机构研究发现使用类固醇的年轻男性正在增加</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>俄罗斯体育部支持非营利组织举办竞赛</span>
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
            <span style="font-size:18px;">竞赛成绩</span>
            <el-button style="float: right; padding: 3px 0;" type="text" @click="gotoMore">更多</el-button>
          </div>
          <h3 style="color:#000;font-weight:bold;font-size:16px;margin-bottom:10px;">竞赛成绩一览</h3>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019-2020赛季跳台滑雪世界杯赛第13站（德国）</span>
              <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019-2020赛季雪车世界杯赛第4站（奥地利）</span>
              <span>2020-01-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019-2020赛季跳台滑雪世界杯赛第12站（日本）</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019-2020赛季高山滑雪世界杯赛第20站（瑞士）</span>
              <span>2019-11-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019-2020赛季冬季两项世界杯赛第5站（德国）</span>
              <span>2019-11-21</span>
            </div>
          </div>
        </el-card>
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

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
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
}
</style>

