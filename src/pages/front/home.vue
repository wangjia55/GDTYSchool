<template>
  <!-- 首页 -->
  <div class="index-container">
    <div class="navs">
      <el-carousel style="height:400px;">
        <el-carousel-item :interval="3000" :key="item" style="width:100%;">
          <img style="width:100%;height:100%;" src="../../assets/images/home1.png" alt />
        </el-carousel-item>
        <el-carousel-item :interval="3000" :key="item">
          <img style="width:100%;height:100%;" src="../../assets/images/home3.png" alt />
        </el-carousel-item>
        <el-carousel-item :interval="3000" :key="item">
          <img style="width:100%;height:100%;" src="../../assets/images/home2.png" alt />
        </el-carousel-item>
        <el-carousel-item :interval="3000" :key="item">
          <img style="width:100%;height:100%;" src="../../assets/images/home4.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="flex-flow mt20 mb20 init">
      <div class="school-news">
        <div class="btw yaonew align">
          <p>学院要闻</p>
          <p class="curpoint">More></p>
        </div>
        <div class="btw">
          <div class="flex-base">
            <el-carousel>
              <el-carousel-item v-for="item in 4" :key="item">
                <div class="flex-center curpoint col"  @click="gotoDetail">
                  <img
                    style="width:400px;height:200px;margin:5px auto"
                    src="../../assets/images/detail2.png"
                    alt
                  />
                  <div style="width:400px;margin:10px auto">
                    <h3 style="font-weight:700;font-size:16px;">广东体育职业技术学院参加教育系统防控新{{item}}</h3>
                    <p>广东体育职业技术学院参加教育系统防控新广东体育职业技术学院参加教育系统防控新广东体育职业技术学院参加教育系统防控新</p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>

          <div class="flex-base">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span style="font-size:18px">学校通告</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="text item">
                <div class="btw" @click="gotoDetail">
                  <span>召开“不忘初心、牢记使命”主题教育总结大会</span>
                  <span>2020-01-21</span>
                </div>
              </div>
              <div class="text item">
                <div class="btw" @click="gotoDetail">
                  <span>关于做好2020年度“质量工程”建设项目申报的通知</span>
                  <span>2020-01-21</span>
                </div>
              </div>
              <div class="text item">
                <div class="btw">
                  <span>关于开展2020年度省高等教学改革推荐工作的通知</span>
                  <span>2020-01-21</span>
                </div>
              </div>
              <div class="text item">
                <div class="btw">
                  <span>有关校园网合作合同延期的公告</span>
                  <span>2020-01-21</span>
                </div>
              </div>
              <div class="text item">
                <div class="btw">
                  <span>关于推荐申报2019年国家级一流本科课程的公示</span>
                  <span>2020-01-21</span>
                </div>
              </div>
              <div class="text item">
                <div class="btw">
                  <span>关于⒛⒛ 年元旦和寒假放假的通知</span>
                  <span>2020-01-21</span>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="school-news">
        <div class="btw yaonew align">
          <p>最新赛事</p>
          <p class="curpoint"></p>
        </div>
        <div class="flex-wrap">
          <div class="col curpoint"  @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;" v-for="item in 3" :key="item">
            <img
              style="width:360px;height:200px;margin-bottom:10px"
              src="../../assets/images/detail2.png"
              alt
            />
            <p style="text-align:center">"百城千人 一骑战役" 2020美骑100线</p>
          </div>
        </div>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">科研资讯</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div class="text item">
            <div class="btw" @click="gotoInfo">
              <span>关于2020年度国家自然科学基金项目申请通告</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw" @click="gotoInfo">
              <span>2020年度国家社会科学基金项目申报公告</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>广州市社科规划2020年度岭南文化研究专项课题指南</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>关于申报中国高校产学研创新基金的通知</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>关于做好2019年度国家社科基金后期资助项目申报</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>关于做好我校国家社科基金高校思政专项申报工作的通知</span>
              <span>2020-01-21</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">鉴定计划</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>社会体育指导员（健身教练）鉴定计划</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>社会体育指导员（健身教练）鉴定计划</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>社会体育指导员（游泳）鉴定计划</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>社会体育指导员（跆拳道）鉴定计划</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>社会体育指导员（健美操）鉴定计划</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>社会体育指导员（网球）鉴定计划</span>
              <span>2020-01-21</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">关注我们</span>
          </div>
          <div>
            <div style="width:80%;margin:20px auto" class="arc">
              <img style="width:160px;height:160px" src="../../assets/images/barcode1.jpg" alt />
              <img style="width:160px;height:160px" src="../../assets/images/barcode1.jpg" alt />
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">常用链接</span>
          </div>
          <div>
            <div style="width:70%;margin:20px auto" class="divButton btw">
              <div>综合门户</div>
              <div>OA办公平台</div>
            </div>
            <div style="width:70%;margin:20px auto" class="divButton btw">
              <div>教学平台</div>
              <div>邮箱系统</div>
            </div>
            <div style="width:70%;margin:20px auto" class="divButton btw">
              <div>合作链接</div>
              <div>校内图书馆</div>
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
  .navs{
    .el-carousel__container{
      height:400px!important;
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

