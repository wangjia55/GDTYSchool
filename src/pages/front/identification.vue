<template>
  <!-- 职业鉴定 -->
  <div class="ident-container">
    <div class="navs">
      <el-carousel style="width:100%;height:400px;">
        <el-carousel-item type="card" :interval="3000">
          <img style="width:100%;" src="../../assets/images/home14.png" alt />
        </el-carousel-item>
        <el-carousel-item type="card" :interval="3000">
          <img style="width:100%;" src="../../assets/images/home13.png" alt />
        </el-carousel-item>
        <el-carousel-item type="card" :interval="3000">
          <img style="width:100%;" src="../../assets/images/home16.png" alt />
        </el-carousel-item>
        <el-carousel-item type="card" :interval="3000">
          <img style="width:100%;" src="../../assets/images/home12.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="main-container init">
      <div class="flex-base mt10 navsd">
        <el-tabs type="border-card" stretch>
          <el-tab-pane>
            <span slot="label">工作动态</span>
            <div>
              <el-card class="box-card" v-for="v in 1" :key="v">
                <div slot="header" class="clearfix">
                  <span style="font-size:18px">工作动态</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>·2019 年广东省健身教练职业技能竞赛暨专业大会圆满胜利闭幕</span>
                    <span>2019-12-21</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>2019年广东省健身教练职业技能竞赛暨专业大会</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>2019年广东省羽毛球项目二级裁判员培训班顺利开班</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>2019年广东省健身教练职业技能竞赛暨专业大会</span>
                    <span>2019-11-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>岗位技能练兵、服务全民健身</span>
                    <span>2019-11-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>首届2019年广东省羽毛球社会体育指导员职业技能竞赛暨专业大会顺利开赛</span>
                    <span>2019-10-21</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>协同创新 智能培训——2019年广东省退役运动员职业转换过渡期培训班</span>
                    <span>2019-10-21</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东省高危险性体育项目攀岩社会体育指导员培训班顺利完成</span>
                    <span>2019-10-21</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>技展全国 勇创佳绩 广东省代表队圆满完成全国体育行业职业技能大赛比拼</span>
                    <span>2019-10-21</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>培训部党支部召开不忘初心牢记使命主题教育专项学习会</span>
                    <span>2019-10-21</span>
                  </div>
                </div>
              </el-card>

              <el-card class="box-card" v-for="v in 1" :key="v">
                <div slot="header" class="clearfix">
                  <span style="font-size:18px">新闻直达</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广州花都融创滑雪指导员社会体育指导员(滑雪)鉴定公告</span>
                    <span>2019-12-21</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院社会体育指导员(健身教练)鉴定公告</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院社会体育指导员(健身教练)鉴定公告</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>我省体育行业职业鉴定稳步推进</span>
                    <span>2019-11-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>2019年全国体育行业职业技能鉴定工作会圆满结束</span>
                    <span>2019-10-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院招聘武术教练的公告</span>
                    <span>2019-09-21</span>
                  </div>
                </div>
              </el-card>
              <el-card class="box-card" v-for="v in 1" :key="v">
                <div slot="header" class="clearfix">
                  <span style="font-size:18px">培训鉴定</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定申请</span>
                    <span>2019-12-21</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>2019年广东省羽毛球社会体育指导员职业技能竞赛补充通知</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东省体育行业特有工种职业技能鉴定站2019年各培训服务点11月份鉴定时间安排</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>2019年广东省羽毛球社会体育指导员职业技能竞赛暨专业大会的通知</span>
                    <span>2019-11-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>关于推迟举办2019年广东省高危险性体育项目卡丁车场所从业人员培训的通知</span>
                    <span>2019-10-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东省体育行业特有工种职业技能鉴定站8月份各培训服务点鉴定时间安排</span>
                    <span>2019-09-21</span>
                  </div>
                </div>
              </el-card>
              <el-card class="box-card" v-for="v in 1" :key="v">
                <div slot="header" class="clearfix">
                  <span style="font-size:18px">就业招聘</span>
                  <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院招聘篮球教练的公告</span>
                    <span>2019-12-21</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院招聘足球教练的公告</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院招聘网球教练的公告</span>
                    <span>2019-12-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院招聘羽毛球教练的公告</span>
                    <span>2019-11-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院招聘舞蹈教练的公告</span>
                    <span>2019-10-20</span>
                  </div>
                </div>
                <div class="text item" @click="gotoInfo">
                  <div class="btw">
                    <span>广东体育职业技术学院招聘武术教练的公告</span>
                    <span>2019-09-21</span>
                  </div>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="政策服务">
            <div class="osd">
              <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="国家法规">
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>关于开展体育行业职业技能鉴定工作的意见</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>全国体育人才发展规划（2010-2020年）</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>全民健身计划（2011-2015）</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>体育事业发展“十二五”规划</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>国务院办公厅关于加快发展体育产业的指导意见</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>2019年最新全民健身条例</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>国务院办公厅关于清理规范各类职业资格相关活动的通知</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                  <div class="text item" @click="gotoInfo">
                    <div class="btw">
                      <span>关于加强各类证书管理 规范实施职业技能鉴定工作的通知</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="鉴定依据">
                  <div class="text item" v-for="v in 4" :key="v" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院 社会体育指导员(健身教练)鉴定指南</span>
                      <span>2019-12-21</span>
                    </div>
                    <div class="btw">
                      <span>广东体育职业技术学院 社会体育指导员(足球教练)鉴定指南</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="制度规范">
                  <div class="text item" v-for="v in 7" :key="v" @click="gotoInfo">
                    <div class="btw">
                      <span>广东体育职业技术学院（广州-高职院-机考）社会体育指导员(健身教练)鉴定规范</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="政策咨询">
                  <div class="text item" v-for="v in 6" :key="v" @click="gotoInfo">
                    <div class="btw">
                      <span>关于广东体育职业技术学院健身教练鉴定咨询</span>
                      <span>2019-12-21</span>
                    </div>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="培训服务">
            <div>
              <div class="row align" style="font-size:16px">
                <label for style="margin:10px">筛选:</label>
                <div class="row fsz">
                  <span
                    v-for="(item,index) in time"
                    :key="item.id"
                    :class="[curTime===index?'curBlue':'']"
                    @click="toTime(index)"
                  >{{item.name}}</span>
                </div>
              </div>
            </div>
            <div>
              <div class="flex-wrap">
                <div
                  class="col curpoint p10"
                  style="flex:0 0 32%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps1.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">2020第一季游泳培训班</p>
                    <el-button type="primary" size="mini">报名</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 32%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps2.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">2020第一季羽毛球培训班</p>
                    <el-button type="primary" size="mini">报名</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 32%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps3.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">2020第一季篮球培训班</p>
                    <el-button type="primary" size="mini">报名</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 32%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps4.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">2020第一季足球培训班</p>
                    <el-button type="primary" size="mini">报名</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 32%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps5.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">2020第一季网球培训班</p>
                    <el-button type="primary" size="mini">报名</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 32%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps6.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">2020第一季武术培训班</p>
                    <el-button type="primary" size="mini">报名</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 32%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps7.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">2020第一季舞蹈培训班</p>
                    <el-button type="primary" size="mini">报名</el-button>
                  </div>
                </div>
                <div
                  class="col curpoint p10"
                  style="flex:0 0 32%;margin:10px 0.5%;border:1px solid #dfdfdf"
                >
                  <img style="width:100%;margin:10px auto" src="../../assets/images/ps8.jpg" alt />
                  <div class="btw">
                    <p style="text-align:left">2020第一季健美操培训班</p>
                    <el-button type="primary" size="mini">报名</el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="职业赛事">
            <div class="school-news">
              <div class="btw yaonew align">
                <p>赛事列表</p>
                <p class="curpoint"></p>
              </div>
              <div class>
                <div class="mt20 mb20 imgs wrap">
                  <img
                    src="../../assets/images/sai1.png"
                    style="width:250px;margin:10px 10px;  border:1px solid #eeeeee;"
                    alt
                    @click="gotoSaiDetial"
                  />
                  <img
                    src="../../assets/images/sai2.png"
                    style="width:250px;margin:10px 10px; border:1px solid #eeeeee;"
                    alt
                  />
                  <img
                    src="../../assets/images/sai3.png"
                    style="width:250px;margin:10px 10px; border:1px solid #eeeeee;"
                    alt
                  />
                </div>
              </div>
              <div class="btw yaonew align">
                <p>赛事风采</p>
                <p class="curpoint"></p>
              </div>
              <div class>
                <div class="mt20 mb20 imgs wrap">
                  <img
                    src="../../assets/images/t1.jpg"
                    style="width:250px;margin:10px 10px;  border:1px solid #eeeeee;"
                    alt
                  />
                  <img
                    src="../../assets/images/t2.jpg"
                    style="width:250px;margin:10px 10px; border:1px solid #eeeeee;"
                    alt
                  />
                  <img
                    src="../../assets/images/t3.jpg"
                    style="width:250px;margin:10px 10px; border:1px solid #eeeeee;"
                    alt
                  />
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="赛事招标">
            <el-card class="box-card" v-for="v in 1" :key="v">
              <div slot="header" class="clearfix">
                <span style="font-size:18px">招标公告</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020年“广体杯”游泳赛事活动项目采购公告</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广东体育职业技术学院服装采购项目招标公告</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广东体育职业技术学院专业器械采购项目招标公告</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020年“广体杯”羽毛球赛事活动项目采购公告</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020广州国际徒步大会赛事运营项目竞争性磋商公告</span>
                  <span>2020-03-21</span>
                </div>
              </div>
                 <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广州市第三届市民运动会联赛赛事服务招标公告</span>
                  <span>2020-03-21</span>
                </div>
              </div>
                 <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020年“广体杯”篮球赛事活动项目采购公告</span>
                  <span>2020-03-21</span>
                </div>
              </div>
            </el-card>

             <el-card class="box-card" v-for="v in 1" :key="v">
              <div slot="header" class="clearfix">
                <span style="font-size:18px">中标公示</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020年“广体杯”游泳赛事活动项目采购中标公示</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020年“广体杯”篮球赛事活动项目采购中标公示</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020年“广体杯”羽毛球赛事活动项目采购中标公示</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020广州国际徒步大会赛事运营项目竞争性磋商中标公示</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广东体育职业技术学院服装采购项目中标公示</span>
                  <span>2020-03-21</span>
                </div>
              </div>
                 <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>广州市第三届市民运动会联赛赛事服务中标公示</span>
                  <span>2020-03-21</span>
                </div>
              </div>
            </el-card>

             <el-card class="box-card" v-for="v in 1" :key="v">
              <div slot="header" class="clearfix">
                <span style="font-size:18px">赞助招商</span>
              </div>
              <div> 招商地址： 广东体育职业技术学院</div>
              <div> 黄琼  18029713716</div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="资料下载">
            <el-card class="box-card" v-for="v in 1" :key="v">
              <div slot="header" class="clearfix">
                <span style="font-size:18px">培训资料下载</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（游泳）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（潜水）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（网球）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（武术）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（攀岩）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（健美操）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（羽毛球）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（跆拳道）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（健身教练）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（体育舞蹈）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（山地户外）培训指南》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
            </el-card>
              <el-card class="box-card" v-for="v in 1" :key="v">
              <div slot="header" class="clearfix">
                <span style="font-size:18px">鉴定资料下载</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（游泳）鉴定文件》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（潜水）鉴定文件》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（网球）鉴定文件》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（武术）鉴定文件》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（攀岩）鉴定文件》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（健美操）鉴定文件》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（羽毛球）鉴定文件》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>《社会体育指导员（跆拳道）鉴定文件》</span>
                  <span>2020-03-21</span>
                </div>
              </div>
            </el-card>
             <el-card class="box-card" v-for="v in 1" :key="v">
              <div slot="header" class="clearfix">
                <span style="font-size:18px">赛事下载</span>
                <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020年“广体杯”游泳赛事报名表</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020年“广体杯”篮球赛事报名表</span>
                  <span>2020-03-21</span>
                </div>
              </div>
              <div class="text item" @click="gotoInfo">
                <div class="btw">
                  <span>2020年“广体杯”羽毛球赛事报名表</span>
                  <span>2020-03-21</span>
                </div>
              </div>
            </el-card>
          </el-tab-pane>
             <el-tab-pane label="联系我们">
            <div class="school-news">
              <div class="btw yaonew align">
                <p>工作架构</p>
                <p class="curpoint"></p>
              </div>
              <div class>
                <div class="mt20 mb20 imgs wrap">
                  <img
                    src="../../assets/images/jigou.png"
                    alt
                    @click="gotoSaiDetial"
                  />
                  
                </div>
              </div>
              <div class="btw yaonew align">
                <p>人员信息</p>
                <p class="curpoint"></p>
              </div>
              <div class>
                <div class="mt20 mb20 imgs wrap">
                <span style="font-size:15px;font-weight:bold;">马国川 广东体育职业技术学院党委委员、党委书记 </span>
1969年出生，甘肃张家川人。1993年毕业于中山医科大学，运动医学主任医师，教育学硕士，硕士研究生导师，美国乔治亚医学院访问学者及博士后，中国体育科学学会运动医学分会常委。曾任广东省体育运动技术学院科研处副处长，广东省游泳运动管理中心主任，广东省游泳协会常务副会长、秘书长，广东省二沙体育训练中心党委副书记、纪委书记。承担广东省及国家体育总局多项奥运会、亚运会及全运会科研攻关课题并取得优异成果，在国内及国际核心期刊发表SCI文章多篇。曾获得优秀共产党员、先进工作者等称号，于2016、2017年在奥运会、全运会取得优异成绩而获广东省政府记集体一等功。
                </div>
                 <div class="mt20 mb20 imgs wrap">
                <span style="font-size:15px;font-weight:bold;">徐佶 广东体育职业技术学院党委委员、党委副书记、院长</span>
1966年出生，湖北荆州人，博士，教授。历任广州体育学院体育教育系主任、教务处处长、中共广州体育学院第六、七届党委委员。兼任教育部普通高等学校本科教学工作审核评估专家，广东省本科高校教学管理指导委员会委员，广州体育科学学会副理事长，粤港澳大湾区体育教育与发展联盟常务副秘书长。广州体育学院硕士生导师、上海体育学院校外博士生导师，韶关学院、嘉应学院客座教授。参与国家级课题四项，主持省部级课题四项，出版专著一部，主编教材六部，发表学术论文七十多篇，获省部级教学成果奖八项。1993年获南粤优秀研究生称号，1998年获南粤教坛新秀称号，2011年获广东省教育系统优秀共产党员称号。
                </div>
                 <div class="mt20 mb20 imgs wrap">
                <span style="font-size:15px;font-weight:bold;">王聪 广东体育职业技术学院党委委员、党委副书记、纪委书记</span>
1963年出生，广东廉江人。1985年毕业于武汉体育学院，获学士学位，2002年广东省社会科学院研究生毕业。历任广东省体育运动学校教务科副科长、科长，学生科科长，副校长，广东体育职业技术学院党委委员、院长助理，现任广东体育职业技术学院党委副书记兼纪委书记。兼任广东省职业技术教育学会体育工作指导委员会副主任。多年来主要从事教学、学生管理以及招生就业指导工作。编著了《体育游戏教材》等著作；主持参与了广东省体育产业区域协调等科研课题的研究。
                </div>
              </div>
              <div class="btw yaonew align">
                <p>部门信息</p>
                <p class="curpoint"></p>
              </div>
              <div class>
                <div class="mt20 mb20 imgs wrap">
                 培训部前身为广东体育职业技术学院成人教育中心（临时机构），成立于2004年11月。2005年，成人教育部作为学院的内设机构正式成立，并于2010年更名为培训部。作为我院的社会服务部门，培训部目前主要承担体育行业职业技能培训、专业技术人员继续教育、体育行业特有工种职业技能鉴定、函授学历教育、退役运动员职业辅导及转换培训、体育行业职业技能鉴定研究等工作任务。广东体育行业特有工种职业技能鉴定站挂靠培训部。现设有培训综合办公室和职业技能鉴定科两个内设机构，工作人员9人。
　　培训部集“五大培训基地”、“两站”、“两室”、“一个审批机构”等十项职能于一身。包括：“体育行业特有职业国家级培训试点单位”、“广东省退役运动员职业转换培训基地”、“广东省中、初级教练员岗位培训基地”、“广东省体育传统项目学校体育师资培训基地”、“广东省专业技术人员继续教育基地”、“体育行业特有工种职业技能鉴定站”、“武汉体育学院广东体育职业技术学院函授站”、“运动员职业指导工作室”、“职业技能鉴定研究室”、“广东省二级裁判员培训及审批机构”。
　　目前，体育行业特有职业培训项目有：社会体育指导员（游泳、健美操、跆拳道、武术、健身教练、网球）、体育场地工、游泳救生员、体育经纪人、国家三级、二级裁判员培训（篮球、足球、乒乓球、羽毛球、田径、排球、网球、跆拳道、自行车）等。职业技能鉴定站开展的体育行业特有工种职业技能鉴定项目包括：社会体育指导员（游泳、健美操、跆拳道、武术、健身教练、网球）、体育场地工、游泳救生员、体育经纪人等。
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>

      <div class>
        <div class="flex-button">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span style="font-size:18px">快捷入口</span>
            </div>
            <el-button class="btn-enter" type="primary" @click="gotoNewWeb(1)">国家职业资格证书查询</el-button>
            <el-button class="btn-enter" type="success" @click="gotoNewWeb(2)">成绩查询</el-button>
            <el-button class="btn-enter" type="warning">证书查询</el-button>
            <el-button class="btn-enter" type="primary">鉴定申请</el-button>
            <el-button class="btn-enter" type="success">资料下载</el-button>
            <el-button class="btn-enter" type="warning">鉴定指南</el-button>
            <el-button class="btn-enter" type="primary">培训基地</el-button>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left",
      imgList: ["../../assets/images/jianding1.jpg", ""],
      curTime: 0,
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
          name: "救生员",
          id: 2
        },
        {
          name: "潜水",
          id: 3
        },
        {
          name: "滑雪",
          id: 4
        },
        {
          name: "网球",
          id: 5
        },
        {
          name: "救生员",
          id: 2
        },
        {
          name: "潜水",
          id: 3
        },
        {
          name: "滑雪",
          id: 4
        },
        {
          name: "网球",
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
    gotoNewWeb(e) {
      if (e == 1) {
        window.open(
          "http://www.sportosta.org.cn/ost/infoSearchAction.do?method=toCertificateSearch",
          "_blank"
        );
      } else if (e == 2) {
        window.open("http://www.sportosta.org.cn/ost/queryScore.jsp", "_blank");
      } else {
        window.open("http://www.sportosta.org.cn/ost/queryScore.jsp", "_blank");
      }
    },
    gotoInfo() {
      this.$router.push({ path: "tiyuInfo" });
    },
    gotoSaiDetial() {
      this.$router.push("tiyuSerDetail");
    }
  },
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.navs {
  .el-carousel__container {
    height: 400px !important;
  }
}
.curBlue {
  color: #0079bf !important;
  font-weight: bold;
}
.fsz {
  // margin:10px;
  > span {
    margin: 10px;
    color: #999;
    cursor: pointer;
  }
}

.ident-container {
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
    .osd {
      .el-tabs__item:hover {
        color: #fff !important;
        background: skyblue !important;
        border: 0 !important;
      }
      .el-tabs__item {
        color: skyblue !important;
        height: 50px;
        line-height: 50px;
        border: 0 !important;
      }
      .el-tabs__item.is-active {
        color: #fff !important;
        background: skyblue !important;
        border: 0 !important;
      }
      .el-tabs__nav {
        background: none;
      }
    }
  }

  .box-card {
    margin: 15px 5px;
  }
  .flex-base {
    flex: 0 0 74%;
  }

  .btn-enter {
    width: 90%;
    height: 60px;
    margin: 10px 10px;
  }

  .flex-button {
    flex: 0 0 25%;
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

  .main-container {
    display: flex;
    flex-direction: row;
    // margin: 0 10px;
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
}
</style>

