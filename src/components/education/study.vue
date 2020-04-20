<template>
  <div class="c-message-container">
    <div class="flex-wrap">
      <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf;">
        <img
          style="width:100%;margin:10px auto;border-radius:5px"
          src="../../assets/images/ps1.jpg"
          alt
        />
        <div class="col">
          <p style="text-align:left">羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课</p>
          <div class="row isTime" style="font-size:12px;color:#999">
            <p>
              <i class="el-icon-user"></i>
              <span>13928</span>
            </p>
            <p>
              <i class="el-icon-time"></i>
              <span>197小时</span>
            </p>
            <p>
              <i class="el-icon-chat-line-round"></i>
              <span>3662</span>
            </p>
          </div>
          <div class="btw">
            <div>
              优惠价:
              <span style="margin:0 5px;color:red">
                ￥46.00
              </span>
              <span style="color:#aaa;text-decoration:line-through;">
                ￥50
              </span>
            </div>
            <el-button type="primary" size="mini">开始学习</el-button>
          </div>
        </div>
      </div>
      <div class="col curpoint p10" style="flex:0 0 23%;margin:10px 0.5%;border:1px solid #dfdfdf">
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
          <p style="text-align:left">网球教学基础公开课</p>
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
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import vuePickers from "vue-pickers";
export default {
  data() {
    // 数据
    return {
      courseLists:[
        {
          id:0,
          imgsrc:"require(../../assets/images/ps1.jpg)",
          text:"羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课"
        },
        {
          id:0,
          imgsrc:"require(../../assets/images/ps1.jpg)",
          text:"羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课"
        },
        {
          id:0,
          imgsrc:"require(../../assets/images/ps1.jpg)",
          text:"羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课"
        },
        {
          id:0,
          imgsrc:"require(../../assets/images/ps1.jpg)",
          text:"羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课"
        },
        {
          id:0,
          imgsrc:"require(../../assets/images/ps1.jpg)",
          text:"羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课"
        },
        {
          id:0,
          imgsrc:"require(../../assets/images/ps1.jpg)",
          text:"羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课"
        },
        {
          id:0,
          imgsrc:"require(../../assets/images/ps1.jpg)",
          text:"羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课"
        },
        {
          id:0,
          imgsrc:"require(../../assets/images/ps1.jpg)",
          text:"羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课羽毛球教学基础公开课"
        },
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
    gotoStudy(){
       window.open('http://120.79.95.187:8081/course/9fc1cbd6d31342da9bb2d053b0a8a679','_blank') 
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
.isTime{
    >p{
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
</style>
