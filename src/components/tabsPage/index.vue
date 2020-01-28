<template>
  <!-- 首页 -->
  <div class="index-container nowrap">
    <div class>
      <el-carousel>
        <el-carousel-item v-for="item in 4" :interval="3000" :key="item">
          <img style="width:100%;" src="../../assets/images/imgs.jpg" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="flex-flow mt20 mb20">
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">学校通告</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div class="text item">
            <div class="btw">
              <span>关于组织申报2020年度大学生创新创业项目的通知</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
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
      <div class="flex-base ml20">
         <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">赛事资讯</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
         <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">科研资讯</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div class="text item">
            <div class="btw">
              <span>关于2020年度国家自然科学基金项目申请通告</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>2020年度国家社会科学基金项目申报公告</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
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
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
             <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item">
            <div class="btw">
              <span>澳大利亚体育委员会发布2019—2023年体育规划</span>
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
            <div style="width:60%;margin:20px auto" class="arc">
              <img src="../../assets/images/ercode.png" alt />
              <img src="../../assets/images/ercode.png" alt />
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
  methods: {},
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
  &:hover{
    color:skyblue;
  }
}

.divButton{
  >div{
    width:180px;
    text-align: center;
    line-height: 40px;
    height:40px;
    font-size: 16px;
    background: #f5f5f5;
    margin:0 12px;
    cursor: pointer;
  }
}
</style>

