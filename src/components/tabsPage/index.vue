<template>
  <!-- 首页 -->
  <div class="index-container nowrap">
    <div class>
      <el-carousel>
        <el-carousel-item v-for="item in 4" :interval="3000" :key="item">
          <img style="width:100%;" src="../../assets/images/imgs.jpg" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="flex-flow mt20 mb20">
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">网站通告</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div v-for="o in 6" :key="o" class="text item">
            <div class="btw">
              <span>宜家祭扫即使你囧事及搜集</span>
              <span>2020-01-20</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base ml20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">赛事服务</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div v-for="o in 6" :key="o" class="text item">
            <div class="btw">
              <span>宜家祭扫即使你囧事及搜集</span>
              <span>2020-01-20</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">热点资讯</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div v-for="o in 6" :key="o" class="text item">
            <div class="btw">
              <span>宜家祭扫即使你囧事及搜集</span>
              <span>2020-01-20</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">鉴定计划</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div v-for="o in 6" :key="o" class="text item">
            <div class="btw">
              <span>宜家祭扫即使你囧事及搜集</span>
              <span>2020-01-20</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">关注我们</span>
          </div>
          <div>
            <div style="width:60%;margin:20px auto" class="arc">
              <img src="../../assets/images/ercode.png" alt />
              <img src="../../assets/images/ercode.png" alt />
            </div>
          </div>
        </el-card>
      </div>
      <div class="flex-base">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-size:18px">联系我们</span>
          </div>
          <div>
            <div style="width:60%;margin:20px auto" class="divButton btw">
              <div>公司地址</div>
              <div>公司电话</div>
            </div>
            <div style="width:60%;margin:20px auto" class="divButton btw">
              <div>合作链接</div>
              <div>隐私协议</div>
            </div>
          </div>
        </el-card>
      </div>
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
  methods: {},
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
  &:hover{
    color:skyblue;
  }
}

.divButton{
  >div{
    width:180px;
    text-align: center;
    line-height: 40px;
    height:40px;
    font-size: 16px;
    background: #f5f5f5;
    margin:0 12px;
    cursor: pointer;
  }
}
</style>

