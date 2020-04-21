<template>
  <div class="indent-detail-container">
    <div class="btw p20 bg-1">
      <div class="init">
        <p class="mv10">初识HTML(5)+CSS(3)-2020升级版</p>
        <div class="row align mv10">
          <div class="row">
            <img
              style="width:80px;height:80px;border-radius:50%"
              src="../../../assets/images/ps8.jpg"
              alt
            />
            <div class="col align mr20">
              <p style="font-size: 14px; line-height: 22px; font-weight: 700;" class="m10">某某培训机构</p>
              <p style="font-size: 12px; line-height: 22px; font-weight: 700;">高级培训师</p>
            </div>
          </div>
          <div class="row align static-item">
            <div>难度： 入门</div>
            <div>时长： 9小时18分</div>
            <div>学习人数： 115352</div>
            <div>综合评分： 9.5</div>
          </div>
        </div>
      </div>
      <div class="align">
        <el-button type="danger" @click="toCenter">我的个人中心</el-button>
      </div>
    </div>
    <div>
      <div class="main-container init">
        <div class="flex-sum mt10 navsd">
          <el-tabs type="border-card middle" v-model="activeName" stretch>
            <el-tab-pane name="first" label="课程章节">
              <div>
                <el-card class="box-card mb20 " v-for="(v,i) in 3" :key="v">
                  <div slot="header" class="clearfix">
                    <span style="font-size:18px">课程培训教程 第{{i+1}}章</span>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训广东体育职业技术学院篮球课程培训</span>
                      <el-button type="primary">开始学习</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-tab-pane>
            <el-tab-pane name="second" label="老师介绍">
              <div class="p20" style="background:#fff;">
                <div class="container" style="color:#333;font-size:14px;">
                  <h1 style="text-align:center;font-size:18px;font-weight:bold;margin:20px auto">袁隆平</h1>
                  <h2 style="text-align:center" class="mv10">杂交水稻之父</h2>
                  <div style="text-align:center">
                    <img src="http://newpic.jxnews.com.cn/0/11/23/94/11239455_430939.jpg" />
                    <div style="text-indent:2em;color:#333;text-align:justify">
                      <p>袁隆平（1930年9月7日－），生于北京，祖籍江西九江德安县，现居湖南长沙。中国杂交水稻育种专家，中国工程院院士。现任中国国家杂交水稻工作技术中心主任暨湖南杂交水稻研究中心主任、湖南农业大学教授、中国农业大学客座教授、联合国粮农组织首席顾问、湖南省科协副主席。2006年4月当选美国科学院外籍院士。1988年1月至2016年1月，长期担任湖南省政协副主席职务。根据他育种的杂交水稻品种及研究，水稻单位产量由亩产300公斤上升到900公斤以上。他也被广泛誉为“杂交水稻之父”。</p>
                      <p>先后在湖北汉口的扶轮小学、湖南澧县的弘毅小学、重庆市立第十一小学校（龙门浩中心小学）读小学。重庆复兴初级中学、重庆赣江中学、重庆博学中学读书。抗战胜利后，袁隆平离开重庆。先后就读于博学中学（现武汉第四中学）、中央大学附中（现南师附中）。1949年，他又回到了重庆读高中。1949年8月，考入了重庆相辉学院农学系，主修遗传育种学，院系调整，并入重庆新建的西南农学院农学系，1953年毕业于西南农学院（现西南大学）。</p>
                    </div>
                    <div style="text-align:justify;font-size:14px;">

                      <ul>
                        <li>1953年夏，结束了大学学习生活，到湖南省怀化地区的安江农校任教。1960年，中国发生了全国性的大饥荒。有次他远远地看到马路边围了一堆人，走近一看，路边横躺着两具骨瘦如柴的尸体，此事深深刺激了袁隆平，他决意在农业科研上搞出点名堂来</li>
                        <li>1960年7月，他在农校试验田中意外发现一株特殊性状的水稻。惊喜之际，他利用该株水稻试种，发现其子代有不同性质。因为水稻是自花授粉的，不会出现性状分离，所以他推论该为天然杂交水稻。随后他把雌雄同蕊的水稻雄花人工去除，授以另一个品种的花粉，尝试产生杂交品种。1964年7月5日，他在试验稻田中找到一株“天然雄性不育株”，经人工授粉，结出了数百粒第一代雄性不育株种子。1965年7月，他又在14000多个稻穗中逐穗检查到6株不育株，并在此后两年播种中，共有4株成功繁殖了1～2代。其研究彻底推翻由传统经典理论米丘林、李森科的“无性杂交”学说，并推论水稻亦有杂交优势。通过培育雄性不育系、雄性不育保持系和雄性不育恢复系的三系法途径来培育杂交水稻，可以大幅度提高水稻产量。</li>
                        <li>1966年，三系杂交水稻的发现以《水稻的雄性不孕性》发表在中国科学院的《科学通报》上，是他的第一篇重要论文，而这一刊《科学通报》却是文革前的最后一刊。文化大革命冲击了袁隆平的研究，其实验稻田育种甚至被人恶意破坏拔除，但其仍坚持试验。为了增加试验效果，每年冬天，其与助手还去海南三亚进行水稻育种，甚至在路上把种子绑在身上，利用体温育种催芽。然而研究遇到瓶颈，逾三千次试验都未成功。1971年11月23日，其助手李必湖、冯克珊在海南试验田发现一株难得的野生稻雄性不育株。 此后湖南省农业科学院成立杂交稻研究协作组，由袁隆平挂帅。1972年，杂交稻被列为中国重点科研项目，全国性的协作攻关开始：三十余科研单位参与、上千个品种与该株野生水稻进行了上万次测交和回交转育试验。在此基础上，袁隆平选育不育系二九南1号成功，此为中国第一个应用于生产的不育系水稻。</li>
                        <li>1973年，在“不育系”、“保持系”的基础上，利用长江流域、华南、东南亚、非洲、美洲、欧洲等地的千多个品种，进行测交筛选，找到了百余具有恢复能力的水稻。至此，袁隆平及其团队首次育成三系杂交水稻，水稻产量也从亩产300公斤提高到亩产500公斤以上。当年10月，袁隆平发表《利用“野稗”选育三系的进展》论文，正式宣告中国籼型杂交水稻“三系”配套成功。1974年，他成功选育了第一个在生产上大面积应用的强优高产杂交水稻组合——南优2号，比普通水稻增产20%以上[4]。</li>
                        <li>1974年，袁隆平团队配制种子成功，并组织了优势鉴定。1975年，又获大面积制种成功，为次年大面积推广作好了种子准备，使该项研究成果进入大面积推广阶段。1975年冬，中国国务院作出了迅速扩大试种和大量推广杂交水稻的决定，投入大量人力、物力、财力，一年三代地进行繁殖制种，以最快的速度推广。1976年，定点示范208万亩，在全国范围开始应用于生产，到1988年全国杂交稻面积1.94亿亩，占水稻面积的39.6%[11]。1979年，作为中国首个科研技术，三系杂交水稻技术被介绍到美国[12]。1981年，袁隆平因成功育种中国籼型杂交三系水稻，获得中华人民共和国第一个“国家特等发明奖”。1982年，袁隆平被湖南农学院聘为兼职教授；1985年，又被西南农业大学聘为兼职教授。</li>
                        <li>袁隆平并不满足这个成绩。1987年，他提出“杂交水稻的发展战略”，即三系法为主的器种间杂种优势利用；两系法为主的籼粳亚种杂种优势利用；一系法为主的远缘杂种优势利用。1987年7月16日，袁隆平学生李必湖、邓华风，在安江农校籼稻三系育种材料中，找到一株光敏不育水稻。历经两年三代异地繁殖和观察，该材料农艺性状整齐一致，不育株率和不育度都达到了100%，并且育性转换明显和同步。这一新成果，为杂交水稻从“三系法”过渡到“两系法”开拓了新局面。1995年，两系法杂交水稻研究成功，普遍比同熟期的三系杂交稻每亩增产5%-10%[9]。</li>
                        <li>1997年，袁隆平再次发起研究超级杂交稻。2000年，超级杂交稻实现百亩示范片亩产700公斤的第一期目标。2004年，超级杂交稻实现百亩示范片亩产800公斤的第二期目标。除了增产外，袁隆平表示新型的超级杂交稻将更重视水稻营养，其研究团队已经致力于试验新品种中增加维生素A、蛋白质、淀粉及其他营养含量，以期减少贫血和视觉疾患。</li>
                        <li>2003年，中国大陆一半以上的水稻都为袁隆平的杂交品种；在世界范围，20%的水稻采用袁隆平的杂交技术。2007年，中国大陆的水稻产量为5亿吨。其杂交水稻技术已经在中亚、东南亚、北美、南美[13]试验试种，杂交稻已引起世界范围的运用，继续为解决世界粮食安全及短缺做出卓绝贡献。</li>
                        <li>2011年9月19日，中国农业部验收组刚刚公布，袁隆平指导的“Y两优2号”百亩超级杂交稻试验田平均亩产926.6公斤，创中国大面积水稻亩产最高纪录。</li>
                        <li>2013年9月29日国家杂交水稻工程技术研究中心证实，经农业部测产验收，由“杂交水稻之父”袁隆平院士科研团队攻关的国家第四期超级稻百亩示范片“Y两优900”中稻平均亩产达988.1公斤，创世界纪录。</li>
                        <li>2016年10月10日，袁隆平指导的超级杂交稻“百千万”工程百亩片攻关基地收割。该基地的水稻实验品种为湖南杂交水稻研究中心选育的“超优1000”，经以谢华安为组长的专家组验收，实测亩产达到1013.8公斤，创造了新的杂交水稻高纬度亩产世界纪录。</li>
                        <li>2018年，中国工程院院士袁隆平带领的青岛海水稻研发中心团队对在迪拜热带沙漠实验种植的杂交水稻进行测产，最高亩产超过500公斤。</li>
                      </ul>
                    </div>
                 
                    <div style="text-indent:2em;text-align:justify">
                      <p>
                        在中国大陆流行这样的一句话：“吃饭­靠两平，一靠邓小平，二靠袁隆平。”，但是遭到了袁隆平的谢绝。此外，有部分民众、学者和官员建议中国政府推荐袁隆平为诺贝尔和平奖候选人。他们认为：“消除贫穷与饥饿才是最好的和平，以袁隆平为中国乃至于世界粮食事业做出的巨大贡献，完全有资格获得诺贝尔和平奖。”媒体评价亦评价其身价上千亿人民币，袁隆平回应道：“用财富衡量科学家价值太低级、太庸俗。”
                        国际水稻研究所所长、印度前农业部长斯瓦米纳森博士高度评价说：“我们把袁隆平先生称为‘杂交水稻之父’，因为他的成就不仅是中国的骄傲，也是世界的骄傲，他的成就给人类带来了福音。”袁隆平的事迹被记载在《永远执着的美丽》一文内，登载在上海市七年级九年义务教育课本中。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane name="third" label="资料下载">
              <div class="p20 download" style="color:#333;font-size:15px;">
                 <el-card class="box-card mb20" v-for="(v,i) in 3" :key="v">
                  <div slot="header" class="clearfix">
                    <span style="font-size:18px">资源下载</span>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <el-link :underline="false" type="primary">广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                     <el-link :underline="false" type="primary">广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <el-link :underline="false" type="primary">广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <el-link :underline="false" type="primary">广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <el-link :underline="false" type="primary">广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件广东体育职业技术学院篮球课程培训课件</el-link>
                      <el-button type="danger">开始下载</el-button>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      // 数据
      activeName: "first"
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
    gotoInfo() {
      
    },
    toCenter(){
      this.$router.push({
        name:"personCenter"
      })
    }
  }
};
</script>
<style scope lang="scss">
.indent-detail-container {
  .download .item{
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
        font-size: 12px;
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
      height: 50px;
      line-height: 50px;
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
  }

  .item {
    padding: 10px 0;
    cursor: pointer;
    font-size: 15px;
  }
}
</style>
