<template>
  <!-- 赛事服务 -->
  <div class="index-container wrap">
    <div style="margin:10px 0;color:#1754c2" class="curpoint" @click="$router.go(-1)">返回上一页</div>

    <div style="background:#fff">
      <div class="headers row" style="font-size:14px">
        <div class="m20">
          <img style="width:332px;height:184px" src="../assets/images/youyong1.jpg" alt />
          <div class="row align">
            <div class="row align m10 curpoint">
              <van-icon name="star" />
              <span>收藏(11)</span>
            </div>
            <div class="row align m10 curpoint">
              <van-icon color="#298FCA" name="share" />
              <span>分享</span>
            </div>
            <div class="row align m10 curpoint">
              <van-icon color="#298FCA" name="column " />
              <span>我的邀请卡</span>
            </div>
          </div>
        </div>
        <div class="col m20 ser-body">
          <p>2020年全国大学生游泳比赛（广东站）</p>
          <p>赛事性质： 大学生运动会</p>
          <p>赛事类型： 游泳</p>
          <p>
            <van-icon color="#ccc" name="clock" />
            <span class="ml10">2020-05-15 07:00 ~ 2020-06-15 18:00</span>
          </p>
          <p>
            <van-icon color="#ccc" name="location" />
            <span class="ml10">广东省天河区奥体体育场</span>
          </p>
          <p>
            <van-icon color="#ccc" name="friends" />
            <span class="ml10">已报名 1014/1080人</span>
          </p>
          <p>
            <van-icon color="#ccc" name="stop-circle" />
            <span class="ml10">报名截止日期：2020-04-10 15:10</span>
          </p>
          <div class="btw align">
            <p>
              <span class="ml10">协办单位： 广东体育职业技术学院</span>
            </p>
            <div>
              <el-button type="primary" size="mini" @click="dialogFormVisible=true">立即报名</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt20">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-s-order"></i> 赛事详情
          </span>
          <div class="col textser">
            <img style="width:650px" src="../assets/images/said1.jpg" alt />
            <img style="width:650px" src="../assets/images/said2.jpg" alt />
            <img style="width:650px" src="../assets/images/said3.jpg" alt />
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-s-custom"></i> 组别详情
          </span>
          <div class="ser-main">
            <div class="border">
              <h3>挑战组</h3>
              <p>报名费：50.00 元</p>
              <p>距离： 1000m</p>
              <p>年龄：仅限16~68岁参加</p>
              <p>出发时间： 2020-05-03 09:00</p>
              <p>关门时间： 2020-05-03 17:00</p>
            </div>
            <div class="border">
              <h3>专家组</h3>
              <p>报名费：50.00 元</p>
              <p>距离： 2000m</p>
              <p>年龄：仅限16~68岁参加</p>
              <p>出发时间： 2020-06-03 09:00</p>
              <p>关门时间： 2020-06-03 17:00</p>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-picture"></i> 赛事图文
          </span>
          <div
            style="text-align:center;width:100%;font-size:20px;color:#999"
          >
          <img style="width:650px" src="../assets/images/said4.jpg" alt />
            <img style="width:650px" src="../assets/images/said5.jpg" alt />
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-s-data"></i> 成绩查询
          </span>
          <div
            style="height:200px;text-align:center;width:100%;line-height:200px;font-size:20px;color:#999"
          >请在登录后查询成绩</div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <i class="el-icon-s-data"></i> 资料下载
          </span>
          <div
            class="col"
            style="height:200px;width:100%;font-size:14px;line-height:30px;color:#999"
          >
            <a
              href="http://wqdata.oss-cn-shenzhen.aliyuncs.com/%E6%8A%A5%E5%90%8D%E8%A1%A8.doc"
              download
            >1、参赛规程报名表下载</a>
            <a
              href="http://wqdata.oss-cn-shenzhen.aliyuncs.com/%E6%8A%A5%E5%90%8D%E8%A1%A8.doc"
              download
            >2、参赛规程报名表下载</a>
            <a
              href="http://wqdata.oss-cn-shenzhen.aliyuncs.com/%E6%8A%A5%E5%90%8D%E8%A1%A8.doc"
              download
            >3、参赛规程报名表下载</a>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- 报名表 -->
    <el-dialog title="比赛报名" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="比赛名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" :label-width="formLabelWidth">
          <el-input v-model="form.name2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号码" :label-width="formLabelWidth">
          <el-input v-model="form.name3" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="赛事组别" :label-width="formLabelWidth">
          <el-select v-model="form.name4" placeholder="请选择赛事组别">
            <el-option label="成人组" value="shanghai"></el-option>
            <el-option label="青年组" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="过往参赛项目：" :label-width="formLabelWidth">
          <el-input type="textarea" v-model="form.name5"></el-input>
        </el-form-item>
        <el-form-item label="相关证书上传：" :label-width="formLabelWidth">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
           
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curTime: 0,
      dialogFormVisible: false,
      form: {
        name: "",
        name1: "",
        name2: "",
        name3: "",
        name4: "",
        name5: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      time: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "今天",
          id: 1
        },
        {
          name: "本周",
          id: 2
        },
        {
          name: "本月内",
          id: 3
        },
        {
          name: "三月内",
          id: 4
        },
        {
          name: "半年内",
          id: 5
        }
      ],
      curKinds: 0,
      kinds: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "自行车",
          id: 1
        },
        {
          name: "平衡车",
          id: 2
        },
        {
          name: "跑步",
          id: 3
        },
        {
          name: "铁三角",
          id: 4
        },
        {
          name: "其他",
          id: 5
        }
      ],
      curArea: 0,
      area: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "北京省",
          id: 1
        },
        {
          name: "广东省",
          id: 2
        },
        {
          name: "山东省",
          id: 3
        },
        {
          name: "湖北省",
          id: 4
        },
        {
          name: "广东省",
          id: 5
        }
      ]
    };
  },
  computed: {},
  components: {},
  methods: {
    toTime(index) {
      this.curTime = index;
    },
    toKinds(index) {
      this.curKinds = index;
    },
    toArea(index) {
      this.curArea = index;
    }
  },
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" >
.ser-main {
  div {
    margin: 20px;
    padding: 20px;
    > h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
}
.textser {
  img {
    margin: 10px 0;
    width: 100%;
  }
}
.ser-body {
  p {
    line-height: 28px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  > p:nth-of-type(1) {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 600;
    min-height: 70px;
    line-height: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > p:nth-of-type(2) {
    color: #0079bf;
    font-size: 12px;
    line-height: 1.5;
    margin: 8px 0;
  }
  > p:nth-of-type(3) {
    color: #0079bf;
    font-size: 12px;
    line-height: 1.5;
    margin: 8px 0;
  }
  > p:nth-of-type(4) {
  }
  > p:nth-of-type(5) {
  }
  > p:nth-of-type(6) {
  }
}
.fsz {
  // margin:10px;
  > span {
    margin: 10px;
    color: #999;
    cursor: pointer;
  }
}
.imgs {
  img {
    width: 30%;
    margin-left: 3%;
    margin-bottom: 10px;
    border: 1px solid #dfdfdf;
    cursor: pointer;
    // float: left;
  }
}
.curBlue {
  color: #0079bf !important;
  font-weight: bold;
}
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
  &:hover {
    color: skyblue;
  }
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
</style>

