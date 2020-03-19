<template>
  <!-- 行业协会 -->
  <div class="guild-container">
    <div class>
      <el-carousel>
        <el-carousel-item :interval="3000" :key="item">
          <img style="width:100%;" src="../../assets/images/home1.png" alt />
        </el-carousel-item>
        <el-carousel-item :interval="3000" :key="item">
          <img style="width:100%;" src="../../assets/images/home2.png" alt />
        </el-carousel-item>
        <el-carousel-item :interval="3000" :key="item">
          <img style="width:100%;" src="../../assets/images/home3.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="init">
      <el-tabs type="border-card " stretch>
        <el-tab-pane >
          <span slot="label">首页</span>
          <div>
            <div class="row">
              <el-carousel style="width: 600px;">
                <el-carousel-item>
                  <img style="width: 100%;" src="../../assets/images/xiehui1.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                  <img style="width: 100%;" src="../../assets/images/xiehui2.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                  <img style="width: 100%;" src="../../assets/images/xiehui3.png" />
                </el-carousel-item>
              </el-carousel>
              <div class="col ph20">
                <p
                  style="font-size: 18px;color: orange;"
                >关于2020年全国U10-11、U12-14、U15-17羽毛球比赛（广东站）选拔赛延期通知</p>
                <p
                  style="color: gray;line-height: 1.4;"
                  class="mt10"
                >附件：1.2020年第23届全国东西南北中羽毛球大赛团体赛广东分站承办条件 2.2020年第23届全国东西南北中羽毛球大赛团体赛广东分站承办意向书</p>
                <div style="height: 1px; background: lightgray;" class="mv10"></div>
                <div>
                  <div v-for="v in dataListHome" class="row curpoint" :key="v">
                    <span v-html="v.title" style="flex: 1;" class="mh10"></span>
                    <span v-html="v.time" style="color: gray;"></span>
                  </div>
                </div>
              </div>
            </div>
            <div style="height: 30px;background: #f7f7f7;"></div>
            <div>
              <div style="font-size: 16px; margin: 5px 0;">入会指南</div>
              <div
                style="height: 5px;width: 100%;background: gray; border-left: 50px solid orange;"
              ></div>
              <div class="row mt20" style="background: lightcyan;">
                <div
                  class="row align"
                  style="flex: 1;border-right: 5px solid white;height: 70px;"
                  v-for="v in dataListHomeRuhuizhinan"
                  :key="v"
                >
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
                  <span
                    v-for="(v,i) in ['通知公告','法规公文','新闻发布会']"
                    :style="i==0?'color:white;background:lightskyblue;':''"
                    style="padding: 5px 10px;"
                    :key="v"
                  >{{v}}</span>
                </div>
                <div v-for="v in dataListTongzhi" class="row curpoint" :key="v">
                  <span v-html="v.title" style="flex: 1;" class="mh10"></span>
                  <span v-html="v.time" style="color: gray;"></span>
                </div>
              </div>
              <div style="width: 10px;"></div>
              <div style="flex: 1">
                <div style="background: lightgray;">
                  <span
                    v-for="(v,i) in ['要闻','部门动态']"
                    :style="i==0?'color:white;background:lightskyblue;':''"
                    style="padding: 5px 10px;"
                    :key="v"
                  >{{v}}</span>
                </div>
                <div v-for="v in dataListYaoWen" class="row curpoint" :key="v">
                  <span v-html="v.title" style="flex: 1;" class="mh10"></span>
                  <span v-html="v.time" style="color: gray;"></span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="赛事聚焦">
          <div class="ssjj-">
            <div
              class="col p20"
              style="border-bottom: 1px solid lightgray"
              v-for="v in dataListSaiShi"
              :key="v"
            >
              <p v-html="v.title" class="mv10" style="font-size: 20px"></p>
              <div class="row">
                <img :src="v.img" style="width: 130px;height:87.2px" />
                <div class="col mh10 flex1">
                  <span
                    v-html="v.content"
                    class="sheng2 font"
                    style="flex: 1;font-size: 14px;line-height: 1.3"
                  ></span>
                  <span v-html="v.time" class="font"></span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关于协会">
          <div>
            <img style="width: 60%;" src="../../assets/images/xiehui-about.jpg" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="羽坛人物">敬请期待</el-tab-pane>
        <el-tab-pane label="球友空间">敬请期待</el-tab-pane>
        <el-tab-pane label="会员申请">敬请期待</el-tab-pane>
        <el-tab-pane label="「俱乐部注册」">敬请期待</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataListHome: [
        {
          title: "关于公开征集2020年第23届全国东西南北中羽毛球大赛团体赛",
          time: "2020-01-09"
        },
        {
          title: "广东省羽毛球协会关于批准蔡智明等32人为广东省羽毛球一级",
          time: "2020-01-09"
        },
        {
          title: "2020年全国U10-11、U12-14、U15-17羽毛球比赛 广东站选",
          time: "2020-01-09"
        },
        {
          title: "关于举办第十八届晋升羽毛球国家级裁判员选拔考试的通知",
          time: "2020-01-09"
        },
        {
          title: "2019年广东省羽毛球项目晋升一级裁判员考试圆满结束",
          time: "2020-01-09"
        },
        {
          title: "2019年广东省羽毛球项目二级裁判员培训班成功举办",
          time: "2020-01-09"
        }
      ],
      dataListTongzhi: [
        {
          title: "关于举办第十八届晋升羽毛球国家级裁判员选拔考试的通知",
          time: "2020-01-09"
        },
        {
          title: "关于举办2019年广东省羽毛球项目二级裁判员培训班的通知",
          time: "2020-01-09"
        },
        {
          title: "2020年全国U10-11、U12-14、U15-17羽毛球比赛 广东站选",
          time: "2020-01-09"
        },
        {
          title: "关于举办第十八届晋升羽毛球国家级裁判员选拔考试的通知",
          time: "2020-01-09"
        },
        {
          title: "2019年广东省羽毛球项目晋升一级裁判员考试圆满结束",
          time: "2020-01-09"
        },
        {
          title: "2019年广东省羽毛球项目二级裁判员培训班成功举办",
          time: "2020-01-09"
        }
      ],
      dataListYaoWen: [
        {
          title: "2019年广东省羽毛球项目二级裁判员培训班成功举办",
          time: "2020-01-09"
        },
        {
          title: "广东省羽毛球协会关于批准蔡智明等32人为广东省羽毛球一级",
          time: "2020-01-09"
        },
        {
          title: "2020年全国U10-11、U12-14、U15-17羽毛球比赛 广东站选",
          time: "2020-01-09"
        },
        {
          title: "关于举办第十八届晋升羽毛球国家级裁判员选拔考试的通知",
          time: "2020-01-09"
        },
        {
          title:
            "广东省羽毛球协会全运会群众组 全运会群众比赛羽毛球项目 广东队63岁奶奶“披挂上阵”",
          time: "2020-01-09"
        },
        { title: "广东省羽毛球协会换届大会", time: "2020-01-09" }
      ],
      dataListHomeRuhuizhinan: [
        { name: "协会介绍", text: "省羽协介绍", icon: "el-icon-discover" },
        { name: "协会章程", text: "省羽协章程", icon: "el-icon-tickets" },
        { name: "协会架构", text: "省羽协架构", icon: "el-icon-paperclip" },
        {
          name: "入会报名",
          text: "省羽协入会报名",
          icon: "el-icon-edit-outline"
        }
      ],
      dataListSaiShi: [
        {
          title: "2017广东省首届“元老杯”羽毛球赛",
          img: require("../../assets/images/xiehui-saishi.jpg"),
          content:
            "本次赛事由广东省羽毛球协会主办,顺德区羽毛球协会、容桂街道办事处宣传文体办公室等承办。比赛设嘉宾组双打(可以两男、两女或一男一女)及元老组男子双打、混合双打共三个项目。其中,嘉宾",
          time: "2018-03-01"
        },
        {
          title: "2018惠州国际青少年羽毛球俱乐部邀请赛",
          img: require("../../assets/images/xiehui-saishi.jpg"),
          content:
            "2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛2018惠州国际青少年羽毛球俱乐部邀请赛",
          time: "2018-03-01"
        },
        {
          title: "戴资颖背靠背出战丹麦赛法国赛 冲击10万分积分",
          img: require("../../assets/images/xiehui-saishi.jpg"),
          content:
            "超级300系列台北羽球公开赛女单决赛，台湾的世界羽坛女单一姐戴资颖夺得个人在台北赛第3座冠军，接下来小戴将前往欧洲参加丹麦和法国公开赛，这也攸关她能否达到10万积分。",
          time: "2018-03-01"
        },
        {
          title: "国羽备战丹麦法国赛主动求变 技术文化都不落下",
          img: require("../../assets/images/xiehui-saishi.jpg"),
          content:
            "谌龙 10月13日，中国羽毛球队主力队员将启程欧洲，参加世界羽联丹麦和法国两站公开赛。上个月底结束了亚洲区域的巡回赛之后，国羽队员迎来了宝贵的十几天训练、调整时间，队伍一方面认真",
          time: "2018-03-01"
        },
        {
          title: "国羽备战丹麦法国赛主动求变 技术文化都不落下",
          img: require("../../assets/images/xiehui-saishi.jpg"),
          content:
            "谌龙 谌龙 10月13日，中国羽毛球队主力队员将启程欧洲，参加世界羽联丹麦和法国两站公开赛。上个月底结束了亚洲区域的巡回赛之后，国羽队员迎来了宝贵的十几天训练、调整时间，队伍一方面认真",
          time: "2018-03-01"
        }
      ]
    };
  },
  computed: {},
  components: {},
  methods: {},
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" >
.guild-container{
  .el-tabs__item:hover{
    color:yellow!important
  }
   .el-tabs__item{
     color:#fff!important;
     height:50px;
     line-height: 50px;
   }
  .el-tabs__item.is-active{
    color:yellow!important
  }
  .el-tabs__nav{
    background: #b93229;
  }
}
</style>

