<template>
  <!-- 体育资讯详情 -->
  <div class="guild-container ">
     <div class>
      <el-carousel>
        <el-carousel-item :interval="3000" >
          <img style="width:100%;" src="../assets/images/home9.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
    <el-tabs type="border-card">
      <el-tab-pane label="足球">
        <div class="ssjj-">
          <div class="col p20" style="border-bottom: 1px solid lightgray" v-for="v in dataListSaiShi">
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
        <el-tab-pane label="篮球">
        <div class="ssjj-">
          <div class="col p20" style="border-bottom: 1px solid lightgray" v-for="v in dataListChanYe">
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
         <el-tab-pane label="羽毛球">
        <div class="ssjj-">
          <div class="col p20" style="border-bottom: 1px solid lightgray" v-for="v in dataListChanYe">
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
         <el-tab-pane label="游泳">
        <div class="ssjj-">
          <div class="col p20" style="border-bottom: 1px solid lightgray" v-for="v in dataListSaiShi">
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
    </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dataListHome:[
          {title:'关于公开征集2020年第23届全国东西南北中羽毛球大赛团体赛',time:'2020-01-09'},
          {title:'广东省羽毛球协会关于批准蔡智明等32人为广东省羽毛球一级',time:'2020-01-09'},
          {title:'2020年全国U10-11、U12-14、U15-17羽毛球比赛 广东站选',time:'2020-01-09'},
          {title:'关于举办第十八届晋升羽毛球国家级裁判员选拔考试的通知',time:'2020-01-09'},
          {title:'2019年广东省羽毛球项目晋升一级裁判员考试圆满结束',time:'2020-01-09'},
          {title:'2019年广东省羽毛球项目二级裁判员培训班成功举办',time:'2020-01-09'}
        ],
          dataListTongzhi:[
          {title:'关于举办第十八届晋升羽毛球国家级裁判员选拔考试的通知',time:'2020-01-09'},
          {title:'关于举办2019年广东省羽毛球项目二级裁判员培训班的通知',time:'2020-01-09'},
          {title:'2020年全国U10-11、U12-14、U15-17羽毛球比赛 广东站选',time:'2020-01-09'},
          {title:'关于举办第十八届晋升羽毛球国家级裁判员选拔考试的通知',time:'2020-01-09'},
          {title:'2019年广东省羽毛球项目晋升一级裁判员考试圆满结束',time:'2020-01-09'},
          {title:'2019年广东省羽毛球项目二级裁判员培训班成功举办',time:'2020-01-09'}
        ],
          dataListYaoWen:[
          {title:'2019年广东省羽毛球项目二级裁判员培训班成功举办',time:'2020-01-09'},
          {title:'广东省羽毛球协会关于批准蔡智明等32人为广东省羽毛球一级',time:'2020-01-09'},
          {title:'2020年全国U10-11、U12-14、U15-17羽毛球比赛 广东站选',time:'2020-01-09'},
          {title:'关于举办第十八届晋升羽毛球国家级裁判员选拔考试的通知',time:'2020-01-09'},
          {title:'广东省羽毛球协会全运会群众组 全运会群众比赛羽毛球项目 广东队63岁奶奶“披挂上阵”',time:'2020-01-09'},
          {title:'广东省羽毛球协会换届大会',time:'2020-01-09'}
        ],
        dataListHomeRuhuizhinan:[
          {name:'协会介绍',text:'省羽协介绍',icon:'el-icon-discover'},
          {name:'协会章程',text:'省羽协章程',icon:'el-icon-tickets'},
          {name:'协会架构',text:'省羽协架构',icon:'el-icon-paperclip'},
          {name:'入会报名',text:'省羽协入会报名',icon:'el-icon-edit-outline'},
        ],
        dataListSaiShi:[
          {
            title:'巴黎全面推广自行车',
            img: require('../assets/images/zixun-one.jpg'),
            content:'几个世纪以来，巴黎在艺术、商业、文化和烹饪方面一直处于全球领先地位。如今，巴黎正在从灯光',
            time:'2018-03-01',
          },
          {
            title:'在新年期间俄罗斯所有地区都开展了运动与健康活动',
            img: require('../assets/images/zixun-one.jpg'),
            content:'为了促进大众养成健康的生活方式，在新年期间，俄罗斯联邦体育部与体育文化与运动地方执行政府共同举办了新...',
            time:'2018-03-01',
          },
          {
            title:'澳大利亚体育委员会发布2019—2023年体育规划',
            img: require('../assets/images/zixun-one.jpg'),
            content:'日前，澳大利亚体育委员会（简称澳体委）发布了2019—2023年体育规划，现将大众体育部分摘译如下：一、目的...',
            time:'2018-03-01',
          },
          {
            title:'2018年法国大众体育参与调查报告',
            img: require('../assets/images/zixun-one.jpg'),
            content:'2019年，法国国家青年及大众教育研究所（INJEP）与体育部联合发布首版《大众体育参与晴雨表》（2018年），...',
            time:'2018-03-01',
          },  {
            title:'澳大利亚发布2018/19年体育参与调查结果',
            img: require('../assets/images/zixun-one.jpg'),
            content:'一、AusPlay调查简介澳大利亚体育委员会从2015年开始在全国范围内正式启动“AusPlay”体育参与情况跟踪调查...',
            time:'2018-03-01',
          },
        ],
          dataListChanYe:[
          {
            title:'国际市场研究机构独家报道：2024年体育分析市场规模将达52亿美元',
            img: require('../assets/images/zixun-two.jpg'),
            content:'国际市场研究机构MarketsandMarkets?根据最新的市场研究报告预测到2024年全球体育分析市场规模将从2019...',
            time:'2018-03-01',
          },
          {
            title:'2019国内体育营销成功案例回顾与分析',
            img: require('../assets/images/zixun-two.jpg'),
            content:'回顾刚刚过去的2019年，中国体育营销市场在5G、大数据、AI、VR等技术不断提升的基础上可谓风生水起、波澜壮......',
            time:'2018-03-01',
          },
          {
            title:'中国体育旅游大数据的应用前景',
            img: require('../assets/images/zixun-two.jpg'),
            content:'在政策推动下，在资本、技术的支持下，体育和旅游两大产业，正在从供给端和需求端两个端口不断呈现融合的趋......',
            time:'2018-03-01',
          },
          {
            title:'2018年法国大众体育参与调查报告',
            img: require('../assets/images/zixun-two.jpg'),
            content:'2019年，法国国家青年及大众教育研究所（INJEP）与体育部联合发布首版《大众体育参与晴雨表》（2018年），...',
            time:'2018-03-01',
          },  {
            title:'英国著名投资人谈体育投资原则',
            img: require('../assets/images/zixun-two.jpg'),
            content:'作为英力士集团的老板、英国首富、“二战之后英国最成功的实业家”，吉姆·拉特克里夫有着足够的财富，他能......',
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

<style>

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
    color:rgb(39, 39, 39)!important
  }
  .el-tabs__nav{
    background: #b93229;
  }
}

.content{
  width:1000px;
  margin: 0 auto;
}
</style>

