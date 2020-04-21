<template>
  <div class="person-container">
    <div class="btw p20 bg-1">
      <div class="init">
        <p class="mv10">好好学习 天天向上的好学生</p>
        <div class="btw align mv10">
          <div class="row">
            <img
              style="width:120px;height:120px;border-radius:50%"
              src="../../../assets/images/ps8.jpg"
              alt
            />
            <div class="col mh20">
              <p
                style="font-size: 18px; line-height: 22px; font-weight: 700;text-align:left"
                class="mv10"
              >张三 男</p>
              <p
                style="font-size: 14px; line-height: 22px;width:300px;height:80px;border:1px solid #999"
                class="mt10 p10"
              >暂无自我介绍</p>
            </div>
          </div>
          <div class="row align static-item">
            <div class="col">
              <span>经验：</span>
              <span>210</span>
            </div>
            <div class="col">
              <span>学习时长： 9小时18分</span>
            </div>
            <div class="col">
              <span>积分： 1250</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mr20 mt20">
        <el-button type="primary" icon="el-icon-setting" @click="fun">设置</el-button>
      </div>
    </div>
    <div>
      <div class="main-container init">
        <div class="flex-sum mt10 navsd">
          <el-tabs type="border-card middle" tab-position="left" v-model="activeName" stretch>
            <el-tab-pane name="first" label="我的课程">
              <div>
                <el-card class="box-card mb20 newTabs" :key="v">
                  <el-tabs v-model="activeNames" @tab-click="handleClick">
                    <el-tab-pane label="全部" name="first">
                      <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                        <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                        <div class="col m20" style="flex:1;">
                          <div class="row mb10">
                            <span style>免费课程</span>
                            <h2
                              style="margin-left:10px;font-size:18px;font-weight:bold"
                            >PHP实现微信公众平台开发—基</h2>
                          </div>
                          <div class="row mb10">
                            <span class="mr10" style="color:red">已学54%</span>
                            <span>用时45分</span>
                          </div>
                          <div>
                            <i class="el-icon-star-off"></i>
                            收藏
                          </div>
                          <div class="end">
                            <el-button type="primary">继续学习</el-button>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                        <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                        <div class="col m20" style="flex:1;">
                          <div class="row mb10">
                            <span style>免费课程</span>
                            <h2
                              style="margin-left:10px;font-size:18px;font-weight:bold"
                            >PHP实现微信公众平台开发—基</h2>
                          </div>
                          <div class="row mb10">
                            <span class="mr10" style="color:red">已学54%</span>
                            <span>用时45分</span>
                          </div>
                          <div>
                            <i class="el-icon-star-off"></i>
                            收藏
                          </div>
                          <div class="end">
                            <el-button type="danger" @click="toExam">线上考试</el-button>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                        <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                        <div class="col m20" style="flex:1;">
                          <div class="row mb10">
                            <span style>免费课程</span>
                            <h2
                              style="margin-left:10px;font-size:18px;font-weight:bold"
                            >PHP实现微信公众平台开发—基</h2>
                          </div>
                          <div class="row mb10">
                            <span class="mr10" style="color:red">已学54%</span>
                            <span>用时45分</span>
                          </div>
                          <div>
                            <i class="el-icon-star-off"></i>
                            收藏
                          </div>
                          <div class="end">
                            <el-button type="warning" @click.native="lineDown = true">线下预约</el-button>
                          </div>
                        </div>
                      </div>
                      <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                        <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                        <div class="col m20" style="flex:1;">
                          <div class="row mb10">
                            <span style>免费课程</span>
                            <h2
                              style="margin-left:10px;font-size:18px;font-weight:bold"
                            >PHP实现微信公众平台开发—基</h2>
                          </div>
                          <div class="row mb10">
                            <span class="mr10" style="color:red">已学54%</span>
                            <span>用时45分</span>
                          </div>
                          <div>
                            <i class="el-icon-star-off"></i>
                            收藏
                          </div>
                          <div class="end">
                            <el-button type="success" @click.native="apply=true">申请鉴定</el-button>
                          </div>
                        </div>
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane name="second" label="我的订单">
              <div class="p20 mh20 newTabs" style="background:#fff;color:#333;">
                <el-tabs v-model="activeNames1">
                  <el-tab-pane label="全部" name="first">
                    <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                      <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                      <div class="col m20" style="flex:1;">
                        <div class="row mb10">
                          <h2
                            style="margin-left:10px;font-size:18px;font-weight:bold;line-height:30px"
                          >PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基</h2>
                        </div>
                        <div class="row mb10">
                          <span class="mr10" style="color:red;font-size:24px;">￥50</span>
                          <span style="font-size:20px;text-decoration:line-through;color:#ccc">￥55</span>
                        </div>
                        <div class="end">
                          <el-button type="success">马上支付</el-button>
                        </div>
                      </div>
                    </div>
                    <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                      <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                      <div class="col m20" style="flex:1;">
                        <div class="row mb10">
                          <h2
                            style="margin-left:10px;font-size:18px;font-weight:bold;line-height:30px"
                          >PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基</h2>
                        </div>
                        <div class="row mb10">
                          <span class="mr10" style="color:red;font-size:24px;">￥50</span>
                          <span style="font-size:20px;text-decoration:line-through;color:#ccc">￥55</span>
                        </div>
                        <div class="end">
                          <el-button type="primary">查看订单</el-button>
                        </div>
                      </div>
                    </div>
                    <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                      <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                      <div class="col m20" style="flex:1;">
                        <div class="row mb10">
                          <h2
                            style="margin-left:10px;font-size:18px;font-weight:bold;line-height:30px"
                          >PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基</h2>
                        </div>
                        <div class="row mb10">
                          <span class="mr10" style="color:red;font-size:24px;">￥50</span>
                          <span style="font-size:20px;text-decoration:line-through;color:#ccc">￥55</span>
                        </div>
                        <div class="end">
                          <el-button type="info">已过期</el-button>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="未支付" name="second">
                    <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                      <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                      <div class="col m20" style="flex:1;">
                        <div class="row mb10">
                          <h2
                            style="margin-left:10px;font-size:18px;font-weight:bold;line-height:30px"
                          >PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基</h2>
                        </div>
                        <div class="row mb10">
                          <span class="mr10" style="color:red;font-size:24px;">￥50</span>
                          <span style="font-size:20px;text-decoration:line-through;color:#ccc">￥55</span>
                        </div>
                        <div class="end">
                          <el-button type="success">马上支付</el-button>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="已完成" name="third">
                    <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                      <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                      <div class="col m20" style="flex:1;">
                        <div class="row mb10">
                          <h2
                            style="margin-left:10px;font-size:18px;font-weight:bold;line-height:30px"
                          >PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基</h2>
                        </div>
                        <div class="row mb10">
                          <span class="mr10" style="color:red;font-size:24px;">￥50</span>
                          <span style="font-size:20px;text-decoration:line-through;color:#ccc">￥55</span>
                        </div>
                        <div class="end">
                          <el-button type="primary">查看订单</el-button>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="已过期" name="fourth">
                    <div class="row" style="font-size:14px;border-bottom:1px solid #dfdfdf">
                      <img class="m20" src="../../../assets/images/ps8.jpg" alt />
                      <div class="col m20" style="flex:1;">
                        <div class="row mb10">
                          <h2
                            style="margin-left:10px;font-size:18px;font-weight:bold;line-height:30px"
                          >PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基PHP实现微信公众平台开发—基</h2>
                        </div>
                        <div class="row mb10">
                          <span class="mr10" style="color:red;font-size:24px;">￥50</span>
                          <span style="font-size:20px;text-decoration:line-through;color:#ccc">￥55</span>
                        </div>
                        <div class="end">
                          <el-button type="info">已过期</el-button>
                        </div>
                      </div>
                    </div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </el-tab-pane>
            <el-tab-pane name="third" label="我的预约">
              <div
                class="mh20 download"
                style="color:#333;font-size:15px;background:#fff;padding:10px 0"
              >
                <div
                  class="col m20"
                  style="flex:1;border-bottom:1px solid #dfdfdf;padding-bottom:20px"
                >
                  <div class="row mb10">
                    <span style>免费课程</span>
                    <h2 style="margin-left:10px;font-size:18px;font-weight:bold">PHP实现微信公众平台开发—基</h2>
                  </div>
                  <div class="row mb10">
                    <span class="mr10" style="color:red">已学0%</span>
                    <span>用时45分</span>
                  </div>
                  <div>
                    <i class="el-icon-star-off"></i>
                    收藏
                  </div>
                  <div class="end">
                    <el-button type="primary">已预约</el-button>
                  </div>
                </div>
                <div
                  class="col m20"
                  style="flex:1;border-bottom:1px solid #dfdfdf;padding-bottom:20px"
                >
                  <div class="row mb10">
                    <span style>免费课程</span>
                    <h2 style="margin-left:10px;font-size:18px;font-weight:bold">PHP实现微信公众平台开发—基</h2>
                  </div>
                  <div class="row mb10">
                    <span class="mr10" style="color:red">已学0%</span>
                    <span>用时45分</span>
                  </div>
                  <div>
                    <i class="el-icon-star-off"></i>
                    收藏
                  </div>
                  <div class="end">
                    <el-button type="info">已过期</el-button>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div>
      <el-dialog title="线下预约" :visible.sync="lineDown">
        <el-form :model="form">
          <el-form-item label="选择区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择预约区域">
              <el-option label="广州" value="guangzhou"></el-option>
              <el-option label="上海" value="shanghai"></el-option>
              <el-option label="北京" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间" :label-width="formLabelWidth">
            <el-date-picker v-model="value1" type="date" placeholder="选择时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="选择课程" :label-width="formLabelWidth">
            <div class="arc wss">
              <div
                v-for="(v,i) in 3"
                :key="i"
                @click="toCur(i)"
                :class="[i===curIndex?'curblue':'asblue']"
              >
                <img src="../../../assets/images/ps8.jpg" alt />
              </div>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="lineDown = false">取 消</el-button>
          <el-button type="primary" @click="tosure">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog title="申请鉴定" :visible.sync="apply">
        <el-form :model="form">
          <el-form-item label="选择项目" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择项目">
              <el-option label="项目1" value="guangzhou"></el-option>
              <el-option label="项目2" value="shanghai"></el-option>
              <el-option label="项目3" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择批次" :label-width="formLabelWidth">
            <div class="arc wss">
              <div
                v-for="(v,i) in 3"
                :key="i"
                @click="toCur(i)"
                :class="[i===curIndex?'curblue':'asblue']"
              >
                <img src="../../../assets/images/ps8.jpg" alt />
                <p style="text-align:center">{{(i+1)*3}}月</p>
              </div>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="apply = false">取 消</el-button>
          <el-button type="primary" @click="tosure1">提交申请</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      // 数据
      curIndex: 0,
      activeName: "first",
      activeNames: "first",
      activeNames1: "first",
      lineDown: false,
      apply: false,
      form: {
        region: ""
      },
      formLabelWidth: "120px",
      value1: ""
    };
  },
  components: {
    // 组件注册
  },

  mounted() {
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
  },

  destroyed() {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
  },
  computed: {
    // 计算属性
  },
  watch: {
    // 数据监听
  },
  methods: {
    // 方法定义
    gotoInfo() {},
    toCur(i) {
      this.curIndex = i;
    },
    fun() {
      this.$alert("", "功能开发中", {
        confirmButtonText: "确定",
        center: true,
        callback: action => {}
      });
    },
    tosure() {
      this.lineDown = false;
      this.$message.success("恭喜你，预约成功");
    },
    tosure1() {
      this.apply = false;
      this.$message.success("申请鉴定提交成功,请耐心等待结果");
    },
    toExam() {
      this.$router.push({
        name: "exam"
      });
    }
  }
};
</script>
<style scope lang="scss">
.person-container {
  .wss {
    width: 100%;
    margin: 20px auto;
    > div {
      padding: 5px;
      flex: 0 0 30%;
      img {
        border-radius: 5px;
        width: 100%;
        cursor: pointer;
      }
    }
    .asblue {
      border: 1px solid #dfdfdf;
    }
    .curblue {
      border: 2px solid #409eff;
    }
  }
  .download .item {
    border-bottom: 1px solid #dfdfdf;
  }
  .bg-1 {
    background: -webkit-radial-gradient(
        0% 100%,
        ellipse cover,
        rgba(104, 128, 138, 0.4) 10%,
        rgba(138, 114, 76, 0) 40%
      ),
      linear-gradient(
        to bottom,
        rgba(57, 173, 219, 0.25) 0%,
        rgba(42, 60, 87, 0.4) 100%
      ),
      linear-gradient(135deg, #670d10 0%, #092756 100%);
  }
  > div {
    > div:nth-of-type(1) {
      color: #fff;
      > p {
        position: relative;
        z-index: 1;
        margin-bottom: 8px;
        line-height: 48px;
        font-size: 32px;
        color: #fff;
      }
    }
    .static-item {
      > div {
        display: inline-block;
        position: relative;
        margin-right: 50px;
        font-size: 18px;
      }
    }
  }
  .navsd {
    .el-tabs__item:hover {
      color: blue !important;
      background: #fff !important;
      border: 0 !important;
    }
    .el-tabs__item {
      color: #fff !important;
      height: 60px;
      width: 200px;
      text-align: center;
      line-height: 60px;
      border: 0 !important;
    }
    .el-tabs__item.is-active {
      color: #1754c2 !important;
      background: #fff !important;
      border: 0 !important;
    }
    .el-tabs__nav {
      background: #1754c2;
    }
    .newTabs {
      .el-tabs__item:hover {
        color: #409eff !important;
        background: #fff !important;
        border: 0 !important;
      }
      .el-tabs__item {
        color: #999 !important;
        height: 40px;
        width: 180px;
        text-align: center;
        line-height: 40px;
        border: 0 !important;
      }
      .el-tabs__item.is-active {
        color: #409eff !important;
        background: #fff !important;
        border-bottom: 2px solid #409eff !important;
      }
      .el-tabs__nav {
        background: #fff;
      }
    }
  }

  .item {
    padding: 10px 0;
    cursor: pointer;
    font-size: 15px;
  }
}
</style>
