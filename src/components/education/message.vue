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
        <div class="flex-base" style="flex:1;margin-left:30px;margin-top:25px;">
          <div>
            <img style="width:75%" src="../../assets/images/service_nbg.jpg" alt />
            <div>
              <img style="width:75%" src="../../assets/images/logoGroup.jpg" alt />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="school-news">
      <div class="btw yaonew align">
        <p>专家团队</p>
        <p class="curpoint">More></p>
      </div>
      <div class="btw">
        <div class="btw mb20" style="background: white;">
        <div style="width:90%;margin:20px auto" class="divButton btw">
          <li>
            <img src="../../assets/images/dao1.jpg" style="width:320px;border:#b6b6b6 1px solid;margin:10px; border-radius:15px; " />
          </li>
          <li>
            <img src="../../assets/images/dao2.jpg" style="width:320px;border:#b6b6b6 1px solid;margin:10px;  border-radius:15px; " />
          </li>
          <li>
            <img src="../../assets/images/dao3.jpg" style="width:320px; border:#b6b6b6 1px solid; margin:10px;border-radius:15px; " />
          </li>
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
