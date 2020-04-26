<template>
  <div class="hyzp">
    <!--<img src="../../assets/images/shots/bg_rcfw1.png"/>-->
    <div class="btw " style="margin: 20px 0;">
      <img src="../../assets/images/shots/bg_rcfw1_left.png"/>
      <div class="img-group" style="flex: 1;">
        <!--todo-->
        <img src="../../assets/images/shots/bg_rcfw1.png"/>
        <img/>
        <img/>
        <img/>
      </div>
    </div>

    <ul class="cur">
      <li @click="dialogTableVisible=true">
        <div class="sub-li">
          <a  ka="index_rcmd_company_1" class="user-info"
             target="_blank">
            <p><img
              src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20180223/bb89828becd334e495a2dbb499fb775dcfcd208495d565ef66e7dff9f98764da.jpg"
              data-src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20180223/bb89828becd334e495a2dbb499fb775dcfcd208495d565ef66e7dff9f98764da.jpg?x-oss-process=image/resize,w_60,limit_0"
              alt="无边体育"></p>
          </a>
          <a ka="index_rcmd_job_1" class="job-info" target="_blank">
            <p class="name"><span class="name-text">游泳教练</span></p>
            <p class="job-text">广州<span class="vline"></span>不限<span class="vline"></span>本科</p>
            <p class="salary">4-5K·13薪</p>
          </a>
        </div>
      </li>
      <li>
        <div class="sub-li">
          <a ka="index_rcmd_company_2" class="user-info" target="_blank">
            <p><img
              src="https://img.bosszhipin.com/beijin/logo/e584c589eb0abb719f1b319eb52f1da6be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_60,limit_0"
              data-src="https://img.bosszhipin.com/beijin/logo/e584c589eb0abb719f1b319eb52f1da6be1bd4a3bd2a63f070bdbdada9aad826.jpg?x-oss-process=image/resize,w_60,limit_0"
              alt="尚德培训"></p>
          </a>
          <a ka="index_rcmd_job_2" class="job-info"
             target="_blank">
            <p class="name"><span class="name-text">健身教练</span></p>
            <p class="job-text">广州<span class="vline"></span>1-3年<span class="vline"></span>本科</p>
            <p class="salary">6-8K</p>
          </a>
        </div>
      </li>
      <li>
        <div class="sub-li">
          <a test="/gongsi/7c83b40f9003b8cc0nFy2du5.html" ka="index_rcmd_company_3" class="user-info" target="_blank">
            <p><img src="https://img.bosszhipin.com/beijin/upload/com/logo/20200114/892c3103f56728323960afef97439e79ed318d6a51541f92a20247c70653fe9a.jpg?x-oss-process=image/resize,w_120,limit_0" alt="轻之盈健身工作室LOGO" class="fl">
              </p>
          </a>
          <a test="/job_detail/867533d79c7a1b1b1HB50tu7E1Q~.html" ka="index_rcmd_job_3" class="job-info"
             target="_blank">
            <p class="name"><span class="name-text">救生员</span></p>
            <p class="job-text">广州<span class="vline"></span>5-10年<span class="vline"></span>本科</p>
            <p class="salary">20-30K</p>
          </a>
        </div>
      </li>
      <li>
        <div class="sub-li">
          <a test="/gongsi/1f9c13f93a2492291XRz39S1.html" ka="index_rcmd_company_4" class="user-info" target="_blank">
            <p><img src="https://img.bosszhipin.com/beijin/upload/com/logo/20200114/892c3103f56728323960afef97439e79ed318d6a51541f92a20247c70653fe9a.jpg?x-oss-process=image/resize,w_120,limit_0" alt="轻之盈健身工作室LOGO" class="fl"></p>
          </a>
          <a test="/job_detail/2c40674bc4e1ebc31XF50tm_EVc~.html" ka="index_rcmd_job_4" class="job-info"
             target="_blank">
            <p class="name"><span class="name-text">游泳裁判员</span></p>
            <p class="job-text">广州<span class="vline"></span>1-3年<span class="vline"></span>本科</p>
            <p class="salary">10-20K</p>
          </a>
        </div>
      </li>
      <li>
        <div class="sub-li">
          <a test="/gongsi/b0a3b7b12d608fef1HVz2N60.html" ka="index_rcmd_company_5" class="user-info" target="_blank">
            <p><img src="https://img.bosszhipin.com/beijin/upload/com/logo/20200324/80c180e9ee1cd8d79a994ca802d498ebe7b283ed3bd97e9dcaf2c787c0e49b7a.png?x-oss-process=image/resize,w_120,limit_0" alt="动因体育LOGO" class="fl">
              </p>
          </a>
          <a test="/job_detail/f5cc37e70ed6e3b40HZ42ti9GVs~.html" ka="index_rcmd_job_5" class="job-info"
             target="_blank">
            <p class="name"><span class="name-text">羽毛球教练</span></p>
            <p class="job-text">广州<span class="vline"></span>5-10年<span class="vline"></span>本科</p>
            <p class="salary">25-50K</p>
          </a>
        </div>
      </li>
      <li>
        <div class="sub-li">
          <a test="/gongsi/2e64a887a110ea9f1nRz.html" ka="index_rcmd_company_6" class="user-info" target="_blank">
            <p><img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20180709/1e4fc115d36aca438948b93c66adfc8d625a805a3f12376485cb00db361341bd.jpg?x-oss-process=image/resize,w_120,limit_0" alt="永成健身LOGO" class="fl"></p>
          </a>
          <a test="/job_detail/fbc7578a1605b002031_3Nm0EVY~.html" ka="index_rcmd_job_6" class="job-info"
             target="_blank">
            <p class="name"><span class="name-text">健美操教练</span></p>
            <p class="job-text">广州<span class="vline"></span>1-3年<span class="vline"></span>本科</p>
            <p class="salary">20-40K</p>
          </a>
        </div>
      </li>
      <li>
        <div class="sub-li">
          <a test="/gongsi/38bd5c757efa4ab6331z.html" ka="index_rcmd_company_7" class="user-info" target="_blank">
            <p><img src="https://img.bosszhipin.com/beijin/upload/avatar/20200114/81b2b1d0a91202e871e8126c207a7562ed318d6a51541f92a20247c70653fe9a_s.jpg?x-oss-process=image/resize,w_100,limit_0" alt="">
              </p>
          </a>
          <a test="/job_detail/ec63b2dbacc144820Hd_3ty-FVY~.html" ka="index_rcmd_job_7" class="job-info"
             target="_blank">
            <p class="name"><span class="name-text">网球教练</span></p>
            <p class="job-text">广州<span class="vline"></span>1-3年<span class="vline"></span>本科</p>
            <p class="salary">8-13K·16薪</p>
          </a>
        </div>
      </li>
      <li>
        <div class="sub-li">
          <a test="/gongsi/3cd1227f6f3530fc1nBz3tq_Ew~~.html" ka="index_rcmd_company_8" class="user-info"
             target="_blank">
            <p><img src="https://img.bosszhipin.com/beijin/mcs/chatphoto/20180709/1e4fc115d36aca438948b93c66adfc8d625a805a3f12376485cb00db361341bd.jpg?x-oss-process=image/resize,w_120,limit_0" alt="永成健身LOGO" class="fl"></p></p>
          </a>
          <a test="/job_detail/a9c6b8fba8a6e8cf03Z609m8GVs~.html" ka="index_rcmd_job_8" class="job-info"
             target="_blank">
            <p class="name"><span class="name-text">户外教练</span></p>
            <p class="job-text">广州<span class="vline"></span>1-3年<span class="vline"></span>本科</p>
            <p class="salary">15-30K</p>
          </a>
        </div>
      </li>
      <li>
        <div class="sub-li">
          <a test="/gongsi/27972d85e5d3adbc0ndz2tm0.html" ka="index_rcmd_company_9" class="user-info" target="_blank">
            <p><img src="https://img.bosszhipin.com/beijin/upload/com/logo/20200324/80c180e9ee1cd8d79a994ca802d498ebe7b283ed3bd97e9dcaf2c787c0e49b7a.png?x-oss-process=image/resize,w_120,limit_0" alt="动因体育LOGO" class="fl">
            </p>
          </a>
          <a test="/job_detail/519ccea3c1e3b8cb1HB62t21EFE~.html" ka="index_rcmd_job_9" class="job-info"
             target="_blank">
            <p class="name"><span class="name-text">新媒体运营</span></p>
            <p class="job-text">广州<span class="vline"></span>1-3年<span class="vline"></span>本科</p>
            <p class="salary">5-7K</p>
          </a>
        </div>
      </li>
    </ul>

    <img src="../../assets/images/shots/bg_rcfw2.png"/>

    <img src="../../assets/images/shots/bg_hezuodanwei1.png"/>
    <img src="../../assets/images/shots/bg_hezuodanwei2.png"/>

    <img src="../../assets/images/shots/bg_rcfw3.png"/>

    <el-dialog title="" width="900px" :visible.sync="dialogTableVisible">
      <div class="hyzp-dialog">
        <img class="w100" src="../../assets/images/shots/zwzp_detail_dialog.png">
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "hangyezhaopin",
    data() {
      return {
        dialogTableVisible:false
      }
    }
  }
</script>

<style scoped lang="scss">
  .hyzp {
    .img-group{
      padding-left: 10px;

      justify-content: space-between;

      >img{
        width: 47.5%;
        height: 49%;
        margin-right: 5px;
        background: lightskyblue;
      }
    }
    .city-site .common-tab-box ul.cur {
      display: block;
    }
    .city-site .common-tab-box ul {
      font-weight: 400;
      display: none;
      width: 110%;
      overflow: hidden;
    }

    ul {
      overflow: hidden;
    }
    ul li {
      height: 130px;
      width: 380px;
      float: left;
      margin: 0 16px 16px 0;
      background: #fff;
      box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.1);
      transition: 200ms;
      &:hover{
        transform: scale(1.05);
      }
    }
    li, ol, ul {
      list-style: none;
    }

    li .sub-li {
      display: block;
      height: 130px;
      width: 384px;
      font-size: 0;
    }
    a.user-info {
      vertical-align: middle;
      margin-right: 20px;
      margin-left: 30px;
    }
    li a {
      display: inline-block;
    }
    a {
      text-decoration: none;
      color: #414a60;
    }
    .user-info p {
      font-size: 14px;
      width: auto;
      padding-right: 0;
      border: 1px solid #f3f5fb;
      border-radius: 4px;
    }
    li p {
      line-height: 35px;
      font-size: 16px;
      color: #61687c;
      position: relative;
    }
    .user-info img {
      width: 58px;
      height: 58px;
      vertical-align: middle;
    }
    img {
      border: none;
    }
    .user-info p {
      font-size: 14px;
      width: auto;
      padding-right: 0;
      border: 1px solid #f3f5fb;
      border-radius: 4px;
    }
    li p {
      line-height: 35px;
      font-size: 16px;
      color: #61687c;
      position: relative;
    }
    li a.job-info {
      padding-top: 17px;
      vertical-align: middle;
    }
    li a.job-info p.job-text {
      font-size: 14px;
      color: #61687c;
      padding-right: 0;
      line-height: 28px;
      max-width: 240px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    li .salary {
      color: #fc6c38;
      max-width: 240px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .vline {
      display: inline-block;
      width: 1px;
      height: 12px;
      vertical-align: middle;
      background: #e0e0e0;
      margin: 0 10px;
    }
  }
</style>
