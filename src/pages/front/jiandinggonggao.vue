<template>
  <div class="jdgg">
          <el-carousel>
        <el-carousel-item type="card" :interval="3000">
          <img style="width:100%;" src="../../assets/images/zixun27.png" alt />
        </el-carousel-item>
      </el-carousel>
    <div class="inner" style="padding-top:30px;">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane name="first" label="鉴定通知">
          <span slot="label">
            <i class="el-icon-date"></i> 鉴定通知
          </span>
          <div class="inner" style="padding-top:30px;">
            <a target="_blank" v-if="activeName=='first'">
              <div class="download_line">
                <div class="download_font">关于转发《关于举办广东省高危险性体育项目从业人员“攀岩安全管理员”培训班的通知》的通知</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">广东省体育局 广东省总工会 关于举办 2020 年广东省羽毛球社会体育指导员职业技能竞赛暨专业大会的通知</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">广东省体育局 广东省总工会 关于举办 2020 年广东省健身教练职业技能竞赛暨专业大会的通知</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">关于转发《关于举办高危险性体育项目从业人员（攀岩社会体育指导员）培训班的通知》的通知</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">关于举办2020年全国第一期游泳救生员 国家职业资格考评员培训班的函</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">关于举办广东省高危险性体育项目（漂流救生员）培训班的通知</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">关于举办广东省高危险性体育项目（卡丁车安全管理员及卡丁车社会体育指导员）培训班的通知</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">关于举办2020年第二期广东省初级跆拳道社会体育指导员国家职业资格培训班的通知</div>
                <div class="upload_time">2020-04-21</div>
              </div>
            </a>
          </div>
        </el-tab-pane>
        <el-tab-pane name="second" label="鉴定计划">
          <span slot="label">
            <i class="el-icon-trophy"></i> 鉴定计划
          </span>
          <div class="inner" style="padding-top:30px;">
            <a target="_blank">
              <div class="download_line" @click="dialogTableVisiblejdjh=!dialogTableVisiblejdjh">
                <div class="download_font">2020广东省体育行业特有工种职业技能鉴定站6月份各培训基地鉴定时间安排</div>
                <div class="upload_time">2020-04-21</div>
              </div>
               <div class="download_line" @click="dialogTableVisiblejdjh=!dialogTableVisiblejdjh">
                <div class="download_font">2020广东省体育行业特有工种职业技能鉴定站5月份各培训基地鉴定时间安排</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">2020广东省体育行业特有工种职业技能鉴定站4月份各培训基地鉴定时间安排</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">2020广东省体育行业特有工种职业技能鉴定站3月份各培训基地鉴定时间安排</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">2020广东省体育行业特有工种职业技能鉴定站2月份各培训基地鉴定时间安排</div>
                <div class="upload_time">2020-04-21</div>
              </div>
              <div class="download_line">
                <div class="download_font">2020广东省体育行业特有工种职业技能鉴定站1月份各培训基地鉴定时间安排</div>
                <div class="upload_time">2020-04-21</div>
              </div>
            </a>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

       <el-dialog title="鉴定计划" width="1000px" :visible.sync="dialogTableVisiblejdjh">
      <img class="w100" src="../../assets/images/jdjh.jpg">
    </el-dialog>
  </div>
  
</template>

<script>
export default {
  name: "jiandinggonggao",
  data() {
    return {
      activeName: "first",
      dialogTableVisiblejdjh:false
    };
  }
};
</script>

<style scoped lang="scss">
.jdgg {
  background: white;
  .inner {
    width: 980px;
    height: auto;
    margin: 0 auto;
    overflow: hidden;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  .download_line {
    line-height: 35px;
    width: 100%;
    overflow: hidden;
    border-bottom: 1px solid rgba(153, 153, 153, 0.6);
  }
  .download_line:hover {
    background: rgba(0, 160, 232, 0.1);
  }
  .download_font {
    line-height: 40px;
    font-size: 14px;
    color: #333333;
    float: left;
    margin-left: 20px;
  }
  .download_font:hover {
    color: #1b71b3;
  }
  .download_icon {
    margin-left: 15px;
    padding-top: 6px;
    width: 15px;
    height: 15px;
    float: left;
  }
  .download_icon img {
    height: 100%;
    border: none;
  }
  .upload_time {
    font-size: 12px;
    color: #333333;
    float: right;
    line-height: 40px;
    margin-right: 20px;
  }
  .inner a:last-child .download_line {
    border: 0;
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
}
}


</style>
