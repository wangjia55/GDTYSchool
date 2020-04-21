<template>
  <div class="c-message-container">
    <div class="school-news">
      <div class="btw yaonew align">
        <p>综合新闻</p>
      </div>
      <div class="btw">
        <div class="flex-base">
          <el-carousel>
            <el-carousel-item>
              <div class="flex-center curpoint col" @click="gotoDetail">
                <img
                  style="width:540px;height:285px;margin:15px 0"
                  src="../../assets/images/detail2.png"
                  alt
                />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="flex-center curpoint col" @click="gotoDetail">
                <img
                  style="width:540px;height:285px;margin:15px 0"
                  src="../../assets/images/detail5.jpg"
                  alt
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="flex-base">
          <el-card class="box-card">
            <div class="text item">
              <div class="btw" @click="gotoDetail">
                <span>新冠病毒大流行基层社区体育俱乐部举步维艰</span>
                <span>2020-04-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw" @click="gotoDetail">
                <span>ISCA讨论疫情下体育健身行业面临的威胁机遇</span>
                <span>2020-04-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>法国著名拳击运动员乌拉穆尼的居家健身建议</span>
                <span>2020-04-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>加拿大多伦多志愿者团队在老年公寓楼下带领阳台上的老人跳健身操</span>
                <span>2020-04-20</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>英国国家卫生局推荐的10分钟居家健身操</span>
                <span>2020-04-20</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>法国健身网居家锻炼建议及计划</span>
                <span>2020-04-20</span>
              </div>
            </div>
             <div class="text item">
              <div class="btw">
                <span>深圳举办线上体育赛事共克疫情时艰</span>
                <span>2020-04-20</span>
              </div>
            </div>
             <div class="text item">
              <div class="btw">
                <span>法国著名拳击运动员乌拉穆尼的居家健身建议</span>
                <span>2020-04-21</span>
              </div>
            </div>
             <div class="text item">
              <div class="btw">
                <span>ISCA讨论疫情下体育健身行业面临的威胁机遇</span>
                <span>2020-04-21</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
   
       <div class="flex-flow mt20 mb20 init">
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px;">体育政策</span>
            <el-button style="float: right; padding: 3px 0;" type="text" @click="gotoMore">更多</el-button>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>2020年全国体育政策法规规划工作要点</span>
              <span>2020-04-20</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>教育部教师工作司负责人就2020年“国培计划”组织</span>
               <span>2020-04-20</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>国家体育总局内部管理规范性文件目录</span>
               <span>2020-04-20</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>中华人民共和国体育法</span>
               <span>2020-04-20</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>国务院办公厅关于促进全民健身推动体育产业高质量发展的意见</span>
               <span>2020-04-20</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>国际奥委会、残奥会进一步明确俄罗斯兴奋剂庭审判决</span>
               <span>2020-04-20</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px;">体育产业</span>
            <el-button style="float: right; padding: 3px 0;" type="text" @click="gotoMore">更多</el-button>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>澳大利亚奥利匹克基金会净资产价值3个月内损失12%</span>
              <span>2020-04-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>新冠肺炎疫情下电竞行业遇良机</span>
              <span>2020-04-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>继东京奥运会宣布延期举办后，英特尔世界电竞公开赛也将推迟</span>
               <span>2020-04-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>美国EGYM推出新品牌的会员App</span>
               <span>2020-04-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>CrowdPlay将在比赛直播中同步其虚拟游戏</span>
               <span>2020-04-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>预计2020-2025年间足球市场复合年增长率有望达到3.57％</span>
               <span>2020-04-21</span>
            </div>
          </div>
        </el-card>
      </div>

        <div class="school-news">
        <div class="btw yaonew align">
          <p>热点专题</p>
          <p class="curpoint" style="padding-right:50px;">更多</p>
        </div>
         <div class="arc tzgg">
          <div class="c-message-container">
            <div class="flex-wrap">
              <div
                class="col curpoint p10"
                style="flex:0 0 23%;margin:10px 0.5%;"
              >
                <img style="width:100%;height:150px;margin:10px auto;border-radius:10px;" src="../../assets/images/zt1.jpg" alt />
              </div>
              <div
                class="col curpoint p10"
                style="flex:0 0 23%;margin:10px 0.5%;"
              >
               <img style="width:100%;height:150px;margin:10px auto;border-radius:10px;" src="../../assets/images/zt2.jpg" alt />
              </div>
              <div
                class="col curpoint p10"
                style="flex:0 0 23%;margin:10px 0.5%;"
              >
               <img style="width:100%;height:150px;margin:10px auto;border-radius:10px;" src="../../assets/images/zt3.jpg" alt />
              </div>
              <div
                class="col curpoint p10"
                style="flex:0 0 23%;margin:10px 0.5%;"
              >
               <img style="width:100%;height:150px;margin:10px auto;border-radius:10px;" src="../../assets/images/zt4.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div class="school-news">
        <div class="btw yaonew align">
          <p>精彩体育活动</p>
          <p class="curpoint"></p>
        </div>
        <div class="flex-wrap">
          <div class="col curpoint" @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;">
            <img
              style="width:360px;height:220px;margin-bottom:10px;border-radius:10px;"
              src="../../assets/images/sai1.jpg"
              alt
            />
            <p style="text-align:center;font-size:14px;">第十届全国大学生运动会健美操比赛</p>
          </div>
          <div class="col curpoint" @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;">
            <img
              style="width:360px;height:220px;margin-bottom:10px;border-radius:10px;"
              src="../../assets/images/sai2.jpg"
              alt
            />
            <p style="text-align:center;font-size:14px;">第十届全国大学生运动会乒乓球比赛</p>
          </div>
          <div class="col curpoint" @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;">
            <img
              style="width:360px;height:220px;margin-bottom:10px;border-radius:10px;"
              src="../../assets/images/sai3.jpg"
              alt
            />
            <p style="text-align:center;font-size:14px;">第十届全国大学生运动会羽毛球比赛</p>
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
.c-message-container {
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
}
</style>
