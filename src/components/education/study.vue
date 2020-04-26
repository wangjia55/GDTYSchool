<template>
  <div class="c-message-container">
    <span slot="label" style="font-size:20px">
      <i class="el-icon-date"></i> 线上课程
    </span>
    <div class="btw">
      <div class="row" style="font-size:16px">
        <label for style="margin:10px">课程:</label>
        <div class="row fsz">
          <span
            v-for="(item,index) in time"
            :key="item.id"
            :class="[curTime===index?'curBlue':'']"
            @click="toTime(index)"
          >{{item.name}}</span>
        </div>
      </div>

      <!-- <div class="row" style="font-size:16px">
                <label for style="margin:10px">类型:</label>
                <div class="row fsz">
                  <span
                    v-for="(item,index) in kinds"
                    :key="item.id"
                    :class="[curKinds===index?'curBlue':'']"
                    @click="toKinds(index)"
                  >{{item.name}}</span>
                </div>
      </div>-->
    </div>
    <div>
      <div class="row" style="font-size:16px">
        <label for style="margin:10px">地区:</label>
        <div class="row fsz">
          <span
            v-for="(item,index) in area"
            :key="item.id"
            :class="[curArea===index?'curBlue':'']"
            @click="toArea(index)"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="flex-wrap">
      <div
        class="col curpoint p10"
        v-for="item in courseLists"
        :key="item.id"
        style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf;"
      >
        <img
          style="width:100%;height:160px;margin:10px auto;border-radius:5px"
          :src="item.imgsrc"
          alt
        />
        <div class="col">
          <p style="text-align:left">{{item.text}}</p>
          <div class="row isTime" style="font-size:12px;color:#999">
            <p>
              <i class="el-icon-user"></i>
              <span>13928</span>
            </p>
            <p>
              <i class="el-icon-time"></i>
              <span>10小时</span>
            </p>
            <p>
              <i class="el-icon-chat-line-round"></i>
              <span>3662</span>
            </p>
          </div>
          <div class="btw">
            <div>
              优惠价:
              <span style="margin:0 5px;color:red">￥46.00</span>
              <span style="color:#aaa;text-decoration:line-through;">￥50</span>
            </div>
            <el-button type="primary" size="mini" @click="toIndentDetail">开始学习</el-button>
          </div>
        </div>
      </div>
      <!-- <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf">
        <img style="width:100%;margin:10px auto" src="../../assets/images/ps2.jpg" alt />
        <div class="btw">
          <p style="text-align:left">羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课</p>
          <el-button type="primary" size="mini">开始学习</el-button>
        </div>
      </div>
      <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf">
        <img style="width:100%;margin:10px auto" src="../../assets/images/ps3.jpg" alt />
        <div class="btw">
          <p style="text-align:left">篮球教学基础公开课</p>
          <el-button type="primary" size="mini">开始学习</el-button>
        </div>
      </div>
      <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf">
        <img style="width:100%;margin:10px auto" src="../../assets/images/ps4.jpg" alt />
        <div class="btw">
          <p style="text-align:left">足球教学基础公开课</p>
          <el-button type="primary" size="mini">开始学习</el-button>
        </div>
      </div>
      <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf">
        <img style="width:100%;margin:10px auto" src="../../assets/images/ps5.jpg" alt />
        <div class="btw">
          <p style="text-align:left">网球教学基础公开课网球教学基础公开课网球教学基础公开课网球教学基础公开课网球教学基础公开课</p>
          <el-button type="primary" size="mini">开始学习</el-button>
        </div>
      </div>
      <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf">
        <img style="width:100%;margin:10px auto" src="../../assets/images/ps6.jpg" alt />
        <div class="btw">
          <p style="text-align:left">武术教学基础公开课</p>
          <el-button type="primary" size="mini">开始学习</el-button>
        </div>
      </div>
      <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf">
        <img style="width:100%;margin:10px auto" src="../../assets/images/ps7.jpg" alt />
        <div class="btw">
          <p style="text-align:left">舞蹈教学基础公开课</p>
          <el-button type="primary" size="mini">开始学习</el-button>
        </div>
      </div>
      <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf">
        <img style="width:100%;margin:10px auto" src="../../assets/images/ps8.jpg" alt />
        <div class="btw">
          <p style="text-align:left">健美操教学基础公开课</p>
          <el-button type="primary" size="mini">开始学习</el-button>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script type="text/javascript">
import vuePickers from "vue-pickers";
export default {
  data() {
    // 数据
    return {
      courseLists: [
        {
          id: 0,
          imgsrc: require("../../assets/images/ps1.jpg"),
          text: "2020年游泳教学基础公开课"
        },
        {
          id: 1,
          imgsrc: require("../../assets/images/ps2.jpg"),
          text: "2020年羽毛球教学基础公开课"
        },
        {
          id: 30,
          imgsrc: require("../../assets/images/ps3.jpg"),
          text: "2020年篮球教学基础公开课"
        },
        {
          id: 20,
          imgsrc: require("../../assets/images/ps4.jpg"),
          text: "2020年足球教学基础公开课"
        },
        {
          id: 40,
          imgsrc: require("../../assets/images/ps5.jpg"),
          text: "2020年网球教学基础公开课"
        },
        {
          id: 50,
          imgsrc: require("../../assets/images/ps6.jpg"),
          text: "2020年武术教学基础公开课"
        },
        {
          id: 60,
          imgsrc: require("../../assets/images/ps7.jpg"),
          text: "2020年舞蹈教学基础公开课"
        },
        {
          id: 70,
          imgsrc: require("../../assets/images/ps8.jpg"),
          text: "2020年健美操教学基础公开课"
        }
      ],
      time: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "游泳",
          id: 1
        },
        {
          name: "搏击",
          id: 2
        },
        {
          name: "跑步",
          id: 3
        },
        {
          name: "散打",
          id: 4
        },
        {
          name: "瑜伽",
          id: 5
        }
      ],
      curKinds: 0,
      curTime: 0,
      kinds: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "羽毛球",
          id: 1
        },
        {
          name: "游泳",
          id: 2
        },
        {
          name: "篮球",
          id: 3
        },
        {
          name: "健美",
          id: 4
        },
        {
          name: "足球",
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
          name: "广东省",
          id: 1
        },
        {
          name: "北京市",
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
          name: "湖南省",
          id: 5
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
    toIndentDetail() {
      this.$router.push({
        name: "indentDetail"
      });
    },
    toTime(index) {
      this.curTime = index;
    },
    toArea(index) {
      this.curArea = index;
    },
    gotoStudy() {
      window.open(
        "http://120.79.95.187:8081/course/9fc1cbd6d31342da9bb2d053b0a8a679",
        "_blank"
      );
    }
  },
  props: ["datas"],
  created: function() {
    // 页面加载的时候触发的函数
  }
};
</script>
<style scoped lang="scss">
.container {
  margin: 10px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.isTime {
  > p {
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>
