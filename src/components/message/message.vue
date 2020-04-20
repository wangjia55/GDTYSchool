<template>
  <div class="c-message-container">
    <div class="school-news">
      <div class="btw yaonew align">
        <p>通知公告</p>
        <p class="curpoint">More></p>
      </div>
      <div class="btw">
        <div class="flex-base">
          <el-carousel>
            <el-carousel-item>
              <div class="flex-center curpoint col" @click="gotoDetail">
                <img
                  style="width:580px;height:285px;margin:15px 0"
                  src="../../assets/images/detail2.png"
                  alt
                />
              </div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="flex-center curpoint col" @click="gotoDetail">
                <img
                  style="width:580px;height:285px;margin:15px 0"
                  src="../../assets/images/detail5.jpg"
                  alt
                />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="flex-base">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="font-size:18px">培训通告</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div class="text item">
              <div class="btw" @click="gotoDetail">
                <span>广东体育职业技术学院关于做好疫情防控工作的相关通知</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw" @click="gotoDetail">
                <span>关于调整2019年第二期扩招学生报到时间的通知</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>于在防控新型肺炎疫情中发挥基层党组织先锋模范作用的通知</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>广东体育职业技术学院关于加强疫情防控期间学院进出管理的通知</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>广东体育职业技术学院高等职业教育质量年度报告</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>关于2020年元旦节放假的通知</span>
                <span>2020-01-21</span>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <div class="school-news">
      <div class="btw yaonew align">
        <p>培训动态</p>
        <p class="curpoint">More></p>
      </div>
      <div class="btw">
        <div class="flex-base" style="flex:2">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="font-size:18px">培训动态</span>
              <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
            </div>
            <div class="text item">
              <div class="btw" @click="gotoDetail">
                <span>开拓视野，提升办学品质</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw" @click="gotoDetail">
                <span>观念决定方向 观念决定一切——核心素养的特征与培养</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>融合信息技术，提升课堂教学</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>提升教育信息化，助力课堂智慧化</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>《校园健康读本六》——新型冠状病毒肺炎病防控常识</span>
                <span>2020-03-21</span>
              </div>
            </div>
            <div class="text item">
              <div class="btw">
                <span>广东体育职业技术学院顺利开展“开学第一课”线上学习活动</span>
                <span>2020-03-21</span>
              </div>
            </div>
          </el-card>
        </div>
        
      </div>
       <div class="flex-flow mt20 mb20 init">
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px;">政策发布</span>
            <el-button style="float: right; padding: 3px 0;" type="text" @click="gotoMore">更多</el-button>
          </div>
          <h3
            style="color:#000;font-weight:bold;font-size:16px;margin-bottom:10px;"
          >关于废止部分规章和规范性文件的决定</h3>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>教育部教师工作司负责人就2020年“国培计划”组织</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>国家体育总局内部管理规范性文件目录</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>中华人民共和国体育法</span>
              <span>2019-12-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>国务院办公厅关于促进全民健身推动体育产业高质量发展的意见</span>
              <span>2019-12-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
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
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>关于2020年度国家自然科学基金项目申请通告</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>2020年度国家社会科学基金项目申报公告</span>
              <span>2020-01-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>广州市社科规划2020年度岭南文化研究专项课题指南</span>
              <span>2019-12-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>关于申报中国高校产学研创新基金的通知</span>
              <span>2019-11-21</span>
            </div>
          </div>
          <div class="text item" @click="gotoInfo">
            <div class="btw">
              <span>关于做好2019年度国家社科基金后期资助项目申报</span>
              <span>2019-11-21</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="school-news">
        <div class="btw yaonew align">
          <p>酷体育</p>
          <p class="curpoint"></p>
        </div>
        <div class="flex-wrap">
          <div class="col curpoint" @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;">
            <img
              style="width:360px;height:220px;margin-bottom:10px"
              src="../../assets/images/sai1.jpg"
              alt
            />
            <p style="text-align:center;font-size:14px;">第十届全国大学生运动会健美操比赛</p>
          </div>
          <div class="col curpoint" @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;">
            <img
              style="width:360px;height:220px;margin-bottom:10px"
              src="../../assets/images/sai2.jpg"
              alt
            />
            <p style="text-align:center;font-size:14px;">第十届全国大学生运动会乒乓球比赛</p>
          </div>
          <div class="col curpoint" @click="gotoInfo" style="flex:0 0 32%;margin:20px 0.5%;">
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
    flex: 0 0 49%;
    margin: 10px 0;
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
