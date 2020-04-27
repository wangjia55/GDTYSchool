<template>
  <div class="jdd-container col">
    <div
      style="font-size:30px;color:#409EFF;text-align:center;margin:50px auto 0;font-weight:bold"
    >鉴定计划</div>
    <div class="m20 p20">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="project" label="鉴定项目"></el-table-column>
        <el-table-column prop="time" label="鉴定时间"></el-table-column>
        <el-table-column prop="jd" label="培训基地"></el-table-column>
        <el-table-column prop="rs" label="人数"></el-table-column>
        <el-table-column prop="address" label="理论考试地点"></el-table-column>
        <el-table-column prop="killadress" label="技能考试地点"></el-table-column>
        <el-table-column prop="person" label="联系人"></el-table-column>
        <el-table-column prop="phone" label="电话" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="{row}">
            <el-button type="primary" v-if="row.status===0" @click="toSign(row)">报 名</el-button>
            <el-button type="success" v-if="row.status===1">已报名</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block" style="margin:10px auto">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[6, 10, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      ></el-pagination>
    </div>
  </div>
</template>

<script type="text/javascript">
import vuePickers from "vue-pickers";
export default {
  data() {
    // 数据
    return {
      currentPage4: 1,
      tableData: [
        {
          project: "健身教练",
          time: "6月10日",
          jd: "广州市精英健身发展有限公司",
          rs: "41",
          address: "广州-精英健身",
          killadress: "广州-精英健身",
          person: "梁静",
          phone: "13727837822",
          status: 0
        },
        {
          project: "救生员",
          time: "12月7日",
          jd: "广东海洋大学",
          rs: "30",
          address: "广东海洋大学",
          killadress: "广东海洋大学",
          person: "苏水军",
          phone: "15625096216",
          status: 0
        },
        {
          project: "攀岩",
          time: "12月13日",
          jd: "深圳市登山户外运动协会",
          rs: "36",
          address: "太古城攀岩馆",
          killadress: "太古城攀岩馆",
          person: "林升",
          phone: "13725837822",
          status: 0
        },
        {
          project: "跆拳道",
          time: "6月10日",
          jd: "中山大学",
          rs: "50",
          address: "中山大学",
          killadress: "中山大学",
          person: "郭忠敏",
          phone: "13727867822",
          status: 0
        },
        {
          project: "体育舞蹈",
          time: "8月10日",
          jd: "广州亚之冠艺术化传播有限公司",
          rs: "60",
          address: "广州市区",
          killadress: "广州市区",
          person: "邓红妮",
          phone: "18688465523",
          status: 0
        },
        {
          project: "武术",
          time: "12月1日",
          jd: "广东省武术协会",
          rs: "60",
          address: "广州市越秀区艺门武术培训中心",
          killadress: "广州市越秀区艺门武术培训中心",
          person: "郭燕",
          phone: "13560022435",
          status: 0
        }
      ]
    };
  },
  computed: {},
  components: {
    // 组件名称
    vuePickers
  },
  methods: {
    // 事件函数
    toSign(row) {
      row.status = 1;
      this.$message.success("报名成功");
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  props: [],
  created: function() {
    // 页面加载的时候触发的函数
  }
};
</script>
<style>
.jdd-container {
}
</style>
