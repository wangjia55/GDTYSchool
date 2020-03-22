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
                  src="../../assets/images/detail4.png"
                  alt
                />
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
