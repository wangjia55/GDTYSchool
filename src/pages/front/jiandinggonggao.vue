<template>
  <div class="jdgg">
    <div class="inner" style="padding-top:30px;">
      <a  target="_blank" v-for="v in 10">
        <div class="download_line">
          <div class="download_font">2017年5月举办“高级健身教练国家职业资格培训班“</div>
          <div class="upload_time">2018-{{11-v}}-26</div>
        </div>
      </a>
      <a  target="_blank">
        <div class="download_line">
          <div class="download_font">2016.10.14攀岩运动中心（攀岩教练）鉴定公告</div>
          <div class="upload_time">2018-11-26</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "jiandinggonggao"
  }
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
      list-style: none
    }
    .download_line{

      line-height: 35px;
      width:100%;
      overflow: hidden;
      border-bottom: 1px solid rgba(153,153,153,0.6);
    }
    .download_line:hover{
      background:rgba(0,160,232,0.1);

    }
    .download_font{
      line-height:40px;
      font-size: 14px;
      color: #333333;
      float: left;
      margin-left:20px;
    }
    .download_font:hover{
      color:#1b71b3;
    }
    .download_icon{
      margin-left:15px;
      padding-top:6px;
      width:15px;
      height:15px;
      float: left;
    }
    .download_icon img{
      height:100%;
      border: none;
    }
    .upload_time{
      font-size: 12px;
      color: #333333;
      float: right;
      line-height:40px;
      margin-right:20px;
    }
    .inner a:last-child .download_line{
      border:0;
    }
  }
</style>
