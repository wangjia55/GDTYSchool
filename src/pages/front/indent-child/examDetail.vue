<template>
  <div class="exam-detail-container init p20 mv20" style="background:#fff;">
    <h2 style="text-align:center;font-size:18px;">2019年初级会计职称考试《实务考试真题》</h2>
    <div class="m20 p20">
      <div class="test-con1 mb20" style="font-size:15px;" v-for="(item,index) in 6" :key="item">
        <div class="e-title2 row">
          <div class="nub">
            <i>{{index+1}}、</i>
          </div>
          <div>某企业采用计划成本法分配辅助生产费用时,应将生产车间实际发生的费用与按计划单位成本分配转出的费用之间的差额计入的会计科目是()。</div>
        </div>
        <div class="test-bg1">
          <div class="test-xx">
            <ul>
              <li id="_xx1_14038514_1_0">A.制造费用</li>
              <li id="_xx1_14038514_1_1">B.管理费用</li>
              <li id="_xx1_14038514_1_2">C.生产成本</li>
              <li id="_xx1_14038514_1_3">D.销售费用</li>
            </ul>
          </div>
          <div class="test-xxk1">
            <ul class="left-width row mt20">
              <li>
                <el-radio-group v-model="grouyp[index].radio">
                  <el-radio :label="3">A</el-radio>
                  <el-radio :label="6">B</el-radio>
                  <el-radio :label="9">C</el-radio>
                  <el-radio :label="12">D</el-radio>
                </el-radio-group>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align:center">
      <el-button type="primary" @click="submitExam">提交试卷</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grouyp: [
        {
          radio: 0
        },
        {
          radio: 0
        },
        {
          radio: 0
        },
        {
          radio: 0
        },
        {
          radio: 0
        },
        {
          radio: 0
        }
      ]
    };
  },
  computed: {},
  components: {},
  methods: {
    submitExam() {
      this.$confirm("答对6题，本轮考试通过", "恭喜你", {
        confirmButtonText: "确定",
        type: "success",
        center: true
      })
        .then(() => {})
        .catch(() => {});
    }
  },
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.exam-detail-container {
  .test-xx{
    li{    line-height: 30px;}
  }
}
</style>