<template>
  <div class="jdgg">
    <img style="width:100%;" src="../../assets/images/jianding.png" alt />
     <div class="flex-sum mt10 navsd">
        <el-tabs type="border-card" v-model="activeName">
          <el-tab-pane name="first" label="公告和计划">
            <span slot="label">
              <i class="el-icon-date"></i> 公告和计划
            </span>
            <div>
              <Message></Message>
            </div>
          </el-tab-pane>
          <el-tab-pane name="second" label="鉴定指南">
            <span slot="label">
              <i class="el-icon-trophy"></i> 鉴定指南
            </span>
            <div>
              <Knowledge></Knowledge>
            </div>
          </el-tab-pane>
          <el-tab-pane name="third" label="专家阵容">
            <span slot="label">
              <i class="el-icon-medal"></i> 专家阵容
            </span>
            <div>
              <ShengDian></ShengDian>
            </div>
          </el-tab-pane>
          <el-tab-pane name="fourth" label="培训机构">
            <span slot="label">
              <i class="el-icon-bangzhu"></i> 培训机构
            </span>
            <div>
              <Kutiyu></Kutiyu>
            </div>
          </el-tab-pane>
            <el-tab-pane name="fiveth" label="培训基地">
            <span slot="label">
              <i class="el-icon-bangzhu"></i> 培训基地
            </span>
            <div>
              <Jidi></Jidi>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
  </div>
  
</template>

<script>
import Message from "../../components/jdgg/message";
import ShengDian from "../../components/jdgg/shengdian";
import Knowledge from "../../components/jdgg/knowledge";
import Kutiyu from "../../components/jdgg/kutiyu";
import Jidi from "../../components/jdgg/jidi";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  computed: {},
  components: {
    Message,
    ShengDian,
    Knowledge,
    Kutiyu,
    Jidi
  },
  methods: {
    gotoMore() {
      this.$router.push({ path: "tiyuDetail" });
    },
    gotoInfo() {
      this.$router.push({ path: "tiyuInfo" });
    }
  },
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" >
.jdgg{
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .navs {
    .el-carousel__container {
      height: 400px !important;
    }
  }
  .flex-base {
    flex: 0 0 50%;
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

  .main-container {
    display: flex;
    flex-direction: row;
    // margin: 0 10px;
  }

  .flex-sum {
    flex: 0 0 100%;
  }

  .navsd {
    .el-tabs {
      border: 0 !important;
      padding:20px;
    }

    .el-tabs__header {
      padding-left: 130px;
      border: 0 !important;
    }
    .el-tabs__item:hover {
      width: 220px !important;
      color: !important !important;
      background: rgb(102, 147, 245) !important;
      border: 0 !important;
      font-size: 16px;
    }
    .el-tabs__item {
      width: 220px !important;
      height: 50px;
      line-height: 50px;
      border: 0 !important;
      color: #ffffff !important;
      background: #417eff !important;
      border-radius: 50px;
      margin: 0 20px;
      text-align: center;
      flex: 2 !important;
      font-size: 16px;
    }
    .el-tabs__item.is-active {
      width: 220px !important;
      color: #ffffff !important;
      background: rgb(49, 97, 199) !important;
      border: 0 !important;
      border-radius: 50px;
      font-size: 16px;
    }
    .el-tabs__nav {
      width: 220px !important;
      border-radius: 50px;
      margin: 0 20px;
      font-size: 16px;
       padding:10px 0;
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
}
</style>

