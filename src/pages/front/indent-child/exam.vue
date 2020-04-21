<template>
  <div class="exam-container">
    <div class="init gai_test_information m20 p20">
      <div class="title">
        <h1>2018年健身教练国职考试题库试卷(3)</h1>
      </div>
      <div class="h10"></div>
      <div class="content btw">
        <div class="s_lefter fl">
          <div class="s_message fl mb20">
            <ul class="wrap">
              <li>卷面总分：100分</li>
              <li>试卷类型：模拟试题</li>
              <li>
                测试费用：
                <span class="orange">免费</span>
              </li>
              <li>试卷答案：有</li>
              <li>练习次数：12732次</li>
              <li>作答时间：120分钟</li>
            </ul>
          </div>
          <div class="h15" style="margin:30px auto;text-align:center;">
            <el-button class="mt20" @click="toExamDetail" type="success">进入考试</el-button>
          </div>

          <div class="h10"></div>
        </div>

        <div class="s_righter">
          <div class="gai_introduction">
            <div class="gai_introduction_sider fl"></div>
            <div class="gai_introduction_sider2 fr">
              <div class="gai_introduction_sider2_c">
                <h3>试卷简介</h3>
                <p>2018年健身教练国职考试题库试卷(3)，本试卷是为考健身教练国职考试的考生准备的试题及答案练习。</p>
                <div class="h30"></div>
                <h4>题型：</h4>
                <ul>
                  <li>单项选择题</li>
                  <li>多项选择题</li>
                  <li>判断题</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h20"></div>
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
    toExamDetail() {
      this.$router.push({
        name: "examDetail"
      });
    }
  },
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.exam-container {
  .gai_test_information {
    width: 998px;
    min-height: 600px;
    margin: 20 auto;
    border: 1px solid #e0e0e0;
    background: #fff;
  }
  .gai_test_information .title {
    padding: 25px 30px 0 30px;
  }
  .gai_test_information .title h1 {
    width: 100%;
    font-size: 20px;
    color: #333;
    font-weight: normal;
  }
  .gai_test_information .content {
    padding: 5px 30px 0 30px;
  }
  .gai_test_information .content .s_lefter {
    width: 616px;
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid #e9e9e9;
  }
  .fl {
    display: inline;
    float: left;
  }
  .fr {
    display: inline;
    float: right;
  }
  .gai_test_information .content .s_message {
    width: 100%;
    padding-top: 10px;
  }
  .gai_test_information .content .s_message li {
    overflow: hidden;
    float: left;
    width: 308px;
    height: 46px;
    line-height: 46px;
    font-size: 15px;
    color: #666;
  }
  .gai_introduction_sider2 {
    width: 256px;
    height: auto;
  }
  .gai_introduction_sider2_c {
    padding-left: 18px;
  }
  .gai_introduction_sider2_c h3 {
    font-size: 18px;
    font-weight: normal;
    color: #666;
  }
  .gai_introduction_sider2_c p {
    width: 100%;
    line-height: 22px;
    padding-top: 12px;
    color: #666;
  }
  .h30 {
    width: 100%;
    height: 30px;
    overflow: hidden;
    clear: both;
  }
  .gai_introduction_sider2_c h4 {
    font-size: 16px;
    font-weight: normal;
    color: #666;
  }
  .gai_introduction_sider2_c li {
    float: left;
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    margin: 10px 10px 0 0;
    text-align: center;
    background: #f8f8f8;
    border: 1px solid #e8e8e8;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>