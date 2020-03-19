<template>
  <!-- 职业鉴定 -->
  <div class="ident-container">
    <div class>
      <el-carousel style="width:100%;height:400px;">
        <el-carousel-item type="card" :interval="3000"  >
          <img style="width:100%;" src="../../assets/images/home14.png" alt />
        </el-carousel-item>
        <el-carousel-item type="card" :interval="3000" >
          <img style="width:100%;" src="../../assets/images/home13.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="main-container init">
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">鉴定公告</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定公告</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019年广东省羽毛球社会体育指导员职业技能竞赛补充通知</span>
              <span>2019-12-20</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>广东省体育行业特有工种职业技能鉴定站2019年各培训服务点11月份鉴定时间安排</span>
              <span>2019-12-20</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019年广东省羽毛球社会体育指导员职业技能竞赛暨专业大会的通知</span>
              <span>2019-11-20</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>关于推迟举办2019年广东省高危险性体育项目卡丁车场所从业人员培训的通知</span>
              <span>2019-10-20</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>广东省体育行业特有工种职业技能鉴定站8月份各培训服务点鉴定时间安排</span>
              <span>2019-09-21</span>
            </div>
          </div>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">鉴定计划</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019年广东省健身教练职业技能竞赛补充说明</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019年广东省羽毛球社会体育指导员职业技能竞赛补充通知</span>
              <span>2019-11-20</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>广东省体育行业特有工种职业技能鉴定站2019年各培训服务点11月份鉴定时间安排</span>
              <span>2019-10-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>2019年广东省羽毛球社会体育指导员职业技能竞赛暨专业大会的通知</span>
              <span>2019-09-11</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>关于推迟举办2019年广东省高危险性体育项目卡丁车场所从业人员培训的通知</span>
              <span>2019-08-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>广东省体育行业特有工种职业技能鉴定站8月份各培训服务点鉴定时间安排</span>
              <span>2019-08-21</span>
            </div>
          </div>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">政策法规</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>关于开展体育行业职业技能鉴定工作的意见</span>
              <span>2019-12-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>关于加强体育行业特有工种职业技能鉴定工作</span>
              <span>2019-11-20</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>关于加强各类证书管理 规范实施职业技能鉴定工作的通知</span>
              <span>2019-10-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>国务院办公厅关于清理规范各类职业资格相关活动的通知</span>
              <span>2019-09-11</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>国务院办公厅关于加快发展体育产业的指导意见</span>
              <span>2019-08-21</span>
            </div>
          </div>
           <div class="text item"  @click="gotoInfo">
            <div class="btw">
              <span>全国体育人才发展规划（2010-2020年）</span>
              <span>2019-08-21</span>
            </div>
          </div>
        </el-card>
      </div>

      <div class>
        <div class="flex-button">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="font-size:18px">快捷入口</span>
            </div>
            <el-button class="btn-enter" type="primary" @click="gotoNewWeb(1)">
             国家职业资格证书查询
              </el-button>
            <el-button class="btn-enter" type="success" @click="gotoNewWeb(2)">成绩查询</el-button>
            <el-button class="btn-enter" type="warning">证书查询</el-button>
            <el-button class="btn-enter" type="primary">鉴定申请</el-button>
            <el-button class="btn-enter" type="success">资料下载</el-button>
            <el-button class="btn-enter" type="warning">鉴定指南</el-button>
            <el-button class="btn-enter" type="primary">培训基地</el-button>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: ["../../assets/images/jianding1.jpg", ""]
    };
  },
  computed: {},
  components: {},
  methods: {
    gotoNewWeb(e){
      if(e==1){
        window.open("http://www.sportosta.org.cn/ost/infoSearchAction.do?method=toCertificateSearch", '_blank');
      }else if(e==2){
         window.open("http://www.sportosta.org.cn/ost/queryScore.jsp", '_blank');
      }else{
          window.open("http://www.sportosta.org.cn/ost/queryScore.jsp", '_blank');
      }
    },
     gotoInfo(){
      this.$router.push({path:"tiyuInfo"})
    }
  },
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
// .el-carousel__item h3 {
//   color: #475669;
//   font-size: 18px;
//   opacity: 0.75;
//   line-height: 300px;
//   margin: 0;
// }

// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
.ident-container{
.box-card {
  margin: 15px 5px;
}
.flex-base {
  flex: 0 0 74%;
}

.btn-enter {
  width: 90%;
  height: 60px;
  margin: 10px 10px;
}

.flex-button {
  flex: 0 0 25%;
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

.main-container {
  display: flex;
  flex-direction: row;
  margin: 0 10px;
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

