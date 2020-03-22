<template>
  <div class="c-message-container">
    <div>
      <div class="row align" style="font-size:16px">
        <label for style="margin:10px">年份:</label>
        <div class="row fsz">
          <span
            v-for="(item,index) in time"
            :key="item.id"
            :class="[curTime===index?'curBlue':'']"
            @click="toTime(index)"
          >{{item.name}}年</span>
        </div>
      </div>

      <div class="row align" style="font-size:16px">
        <label for style="margin:10px">地区:</label>
        <div class="row fsz">
          <span
            v-for="(item,index) in time1"
            :key="item.id"
            :class="[curTime1===index?'curBlue':'']"
            @click="toTime1(index)"
          >{{item.name}}市</span>
        </div>
      </div>
    </div>
    <div>
      <el-table :data="tableData" center style="width: 100%">
        <el-table-column prop="year" label="年份"></el-table-column>
        <el-table-column prop="kinds" label="项目类型"></el-table-column>
        <el-table-column prop="grade" label="项目等级"></el-table-column>
        <el-table-column prop="provide" label="省区"></el-table-column>
        <el-table-column prop="name" label="项目名称"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
        <el-table-column prop="status" label="状态"></el-table-column>
      </el-table>
    </div>
    <div class="block m20 end">
    
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
  </div>
</template>

<script type="text/javascript">
import vuePickers from "vue-pickers";
export default {
  data() {
    // 数据
    return {
        currentPage4: 4,
      tableData: [
        {
          year:"2020年",
          kinds:"主题培训",
          grade:"县区级",
          provide:"广东",
          name:"2020年湛江市小学及学前教育教师职务培训",
          time:"2020.3.23-4.22",
          status:"进行中",
        }
      ],
      curTime: 0,
      time: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "2020",
          id: 1
        },
        {
          name: "2019",
          id: 2
        },
        {
          name: "2018",
          id: 3
        },
        {
          name: "2017",
          id: 4
        },
        {
          name: "2016",
          id: 5
        },
        {
          name: "2015",
          id: 6
        },
        {
          name: "2014",
          id: 7
        },
        {
          name: "2013",
          id: 8
        },
        {
          name: "2012",
          id: 9
        }
      ],
      curTime1: 0,
      time1: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "肇庆",
          id: 1
        },
        {
          name: "佛山",
          id: 2
        },
        {
          name: "广州",
          id: 3
        },
        {
          name: "江门",
          id: 4
        },
        {
          name: "深圳",
          id: 5
        },
        {
          name: "惠州",
          id: 6
        },
        {
          name: "阳江",
          id: 7
        },
        {
          name: "茂名",
          id: 8
        },
        {
          name: "湛江",
          id: 9
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
     handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    toTime(index) {
      this.curTime = index;
    },
    toTime1(index) {
      this.curTime1 = index;
    }
    // 事件函数
  },
  props: ["datas"],
  created: function() {
    let arr = []
    for(let i = 0 ;i<11;i++){
      let body  = this.tableData[0];
      arr.push(body)
    }
    this.tableData = arr
    // 页面加载的时候触发的函数
  }
};
</script>
<style scoped>
.container {
  margin: 10px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
</style>
