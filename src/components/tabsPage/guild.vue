<template>
  <!-- 行业协会 -->
  <div class="guild-container ">
    <el-tabs type="border-card">
      <el-tab-pane label="首页">
        <div >
          <div class="row">
            <el-carousel style="width: 600px;">
              <el-carousel-item v-for="item in 4" :key="item">
                <img style="width: 100%;" src="../../assets/images/imgs.jpg">
              </el-carousel-item>
            </el-carousel>
            <div class="col ph20">
              <p style="font-size: 18px;color: orange;">关于公开征集2020年第23届全国东西南北中羽毛球大赛团体赛广东分站赛承办影响单位的通知</p>
              <p style="color: gray;line-height: 1.4;"class="mt10">附件：1.2020年第23届全国东西南北中羽毛球大赛团体赛广东分站承办条件 2.2020年第23届全国东西南北中羽毛球大赛团体赛广东分站承办意向书</p>
              <div style="height: 1px; background: lightgray;" class="mv10"></div>
              <div>
                <div v-for="v in dataListHome" class="row curpoint">
                  <span v-html="v.title" style="flex: 1;" class="mh10"></span>
                  <span v-html="v.time" style="color: gray;"></span>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 30px;background: #f7f7f7;"></div>
          <div>
            <div style="font-size: 16px; margin: 5px 0;">入会指南</div>
            <div style="height: 5px;width: 100%;background: gray; border-left: 50px solid orange;"></div>
            <div class="row mt20" style="background: lightcyan;">
              <div class="row align" style="flex: 1;border-right: 5px solid white;height: 70px;" v-for="v in dataListHomeRuhuizhinan">
                <i :class="v.icon" class="mh10" style="font-size: 30px;"></i>
                <div class="col" style="line-height: 1.5;">
                  <span v-html="v.name"></span>
                  <span v-html="v.text"></span>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 30px;background: #f7f7f7;"></div>
          <div class="row p10">
            <div style="flex: 1">
              <div style="background: lightgray;">
                <span v-for="(v,i) in ['通知公告','法规公文','新闻发布会']":style="i==0?'color:white;background:lightskyblue;':''" style="padding: 5px 10px;">{{v}}</span>
              </div>
              <div v-for="v in dataListHome" class="row curpoint">
                <span v-html="v.title" style="flex: 1;" class="mh10"></span>
                <span v-html="v.time" style="color: gray;"></span>
              </div>
            </div>
            <div style="width: 10px;"></div>
            <div style="flex: 1">
              <div style="background: lightgray;">
                <span v-for="(v,i) in ['要闻','部门动态']":style="i==0?'color:white;background:lightskyblue;':''" style="padding: 5px 10px;">{{v}}</span>
              </div>
              <div v-for="v in dataListHome" class="row curpoint">
                <span v-html="v.title" style="flex: 1;" class="mh10"></span>
                <span v-html="v.time" style="color: gray;"></span>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="关于协会">222222222222</el-tab-pane>
      <el-tab-pane label="赛事聚焦">
        <div class="ssjj-">
          <div class="col p20" style="border-bottom: 1px solid lightgray" v-for="v in dataList1">
            <p v-html="v.title" class="mv10" style="font-size: 20px"></p>
            <div class="row">
              <img :src="v.img" style="width: 100px">
              <div class="col mh10">
                <span v-html="v.content" class="sheng2 font" style="flex: 1;font-size: 14px;line-height: 1.3"></span>
                <span v-html="v.time" class="font"></span>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="羽坛人物">222222222222</el-tab-pane>
      <el-tab-pane label="球友空间">3333333333333</el-tab-pane>
      <el-tab-pane label="会员申请">444444444444</el-tab-pane>
      <el-tab-pane label="「俱乐部注册」">555555555555</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataListHome:[
          {title:'广东省羽毛球协会关于批准xxx等32人为广东省羽毛球一级裁判',time:'2020-01-09'},
          {title:'广东省羽毛球协会关于批准xxx等32人为广东省羽毛球一级裁判',time:'2020-01-09'},
          {title:'广东省羽毛球协会关于批准xxx等32人为广东省羽毛球一级裁判',time:'2020-01-09'},
          {title:'广东省羽毛球协会关于批准xxx等32人为广东省羽毛球一级裁判',time:'2020-01-09'},
          {title:'广东省羽毛球协会关于批准xxx等32人为广东省羽毛球一级裁判',time:'2020-01-09'},
          {title:'广东省羽毛球协会关于批准xxx等32人为广东省羽毛球一级裁判',time:'2020-01-09'},
          {title:'广东省羽毛球协会关于批准xxx等32人为广东省羽毛球一级裁判',time:'2020-01-09'},
          {title:'广东省羽毛球协会关于批准xxx等32人为广东省羽毛球一级裁判',time:'2020-01-09'},
        ],
        dataListHomeRuhuizhinan:[
          {name:'协会介绍',text:'省羽协介绍',icon:'el-icon-discover'},
          {name:'协会章程',text:'省羽协章程',icon:'el-icon-tickets'},
          {name:'协会架构',text:'省羽协架构',icon:'el-icon-paperclip'},
          {name:'入会报名',text:'省羽协入会报名',icon:'el-icon-edit-outline'},
        ],
        dataList1:[
          {
            title:'2018惠州国际青少年羽毛球俱乐部邀请赛',
            img: require('../../assets/images/imgs.jpg'),
            content:'2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛',
            time:'2018-03-01',
          },
          {
            title:'2018惠州国际青少年羽毛球俱乐部邀请赛',
            img: require('../../assets/images/imgs.jpg'),
            content:'2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛',
            time:'2018-03-01',
          },
          {
            title:'2018惠州国际青少年羽毛球俱乐部邀请赛',
            img: require('../../assets/images/imgs.jpg'),
            content:'2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛',
            time:'2018-03-01',
          },
        ]
      };
    },
    computed: {},
    components: {},
    methods: {},
    mounted() {
    },
    filters: {}
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>

