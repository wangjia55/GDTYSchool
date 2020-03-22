<template>
  <!-- 首页 -->
  <div class="guild-index-container nowrap">
    <div class="navs">
      <el-carousel style="height:400px;">
        <el-carousel-item :interval="3000" >

          <img style="width:100%;" src="../../assets/images/home8.png" alt />
        </el-carousel-item>
        <el-carousel-item :interval="3000" >
          <img style="width:100%;" src="../../assets/images/home9.png" alt />
        </el-carousel-item>
        <el-carousel-item :interval="3000" >
          <img style="width:100%;" src="../../assets/images/home10.png" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="flex-flow mt20 mb20 init">
      <div class="school-news">
        <div class="btw yaonew align">
          <p>协会动态</p>
          <p class="curpoint"></p>
        </div>
        <div class="btw">
          <div class="flex-base">
            <el-carousel>
              <el-carousel-item >
                <div class="flex-center curpoint col" @click="gotoDetail">
                  <img
                    style="width:450px;height:280px;margin:5px auto"
                    src="../../assets/images/xie1.jpg"
                    alt
                  />
                  <div style="width:400px;margin:10px auto">
                   <h3 style="font-weight:700;font-size:16px;">广东体育职业技术学院参加教育系统防控新</h3>
                  </div>
                </div>
              </el-carousel-item>
                    <el-carousel-item >
                <div class="flex-center curpoint col" @click="gotoDetail">
                  <img
                    style="width:450px;height:280px;margin:5px auto"
                    src="../../assets/images/xie2.jpg"
                    alt
                  />
                  <div style="width:400px;margin:10px auto">
                    <h3 style="font-weight:700;font-size:16px;">广东体育职业技术学院参加教育系统防控新</h3>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>

          <div class="flex-base">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <p style="color:orange;font-size:15px">召开“不忘初心、不忘初心、牢记使命”主题教育总结大会</p>
                <p
                  style="color:#ccc;font-size:12px"
                >召开“不忘初心、牢记使命”主题教育总结大会召开“不忘初心、牢记使命”主题教育总结大会召开“不忘初心、牢记使命”主题教育总结大会</p>
              </div>
              <div class="text item">
                <div class="btw" @click="gotoDetail">
                  <span>召开“不忘初心、牢记使命”主题教育总结大会</span>
                  <span>2020-01-21</span>
                </div>
              </div>
              <div class="text item">
                <div class="btw" @click="gotoDetail">
                  <span>关于做好2020年度“质量工程”建设项目申报的通知</span>
                  <span>2020-01-21</span>
                </div>
              </div>
              <div class="text item">
                <div class="btw">
                  <span>关于开展2020年度省高等教学改革推荐工作的通知</span>
                  <span>2020-01-21</span>
                </div>
              </div>
              <div class="text item">
                <div class="btw">
                  <span>有关校园网合作合同延期的公告</span>
                  <span>2020-01-21</span>
                </div>
              </div>

              <div class="text item">
                <div class="btw">
                  <span>有关校园网合作合同延期的公告</span>
                  <span>2020-01-21</span>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="school-news">
        <div class="btw yaonew align">
          <p>协会列表</p>
          <p class="curpoint"></p>
        </div>
        <div class="flex-wrap">
          <div
            class="col curpoint"
            @click="gotoDetails"
            style="flex:0 0 24%;margin:5px 0.5%;overflow:hidden"
          
          >
            <img
              style="180px;height:160px;margin-bottom:10px"
              src="../../assets/images/xiehui4.png"
              alt
            />
          </div>
               <div
            class="col curpoint"
            @click="gotoDetails"
            style="flex:0 0 24%;margin:5px 0.5%;overflow:hidden"
          
          >
            <img
              style="180px;height:160px;margin-bottom:10px"
              src="../../assets/images/xiehui1.png"
              alt
            />
          </div>
               <div
            class="col curpoint"
            @click="gotoDetails"
            style="flex:0 0 24%;margin:5px 0.5%;overflow:hidden"
          
          >
            <img
              style="180px;height:160px;margin-bottom:10px"
              src="../../assets/images/xiehui2.png"
              alt
            />
          </div>
               <div
            class="col curpoint"
            @click="gotoDetails"
            style="flex:0 0 24%;margin:5px 0.5%;overflow:hidden"
          
          >
            <img
              style="180px;height:160px;margin-bottom:10px"
              src="../../assets/images/xiehui3.png"
              alt
            />
          </div>
               <div
            class="col curpoint"
            @click="gotoDetails"
            style="flex:0 0 24%;margin:5px 0.5%;overflow:hidden"
          
          >
            <img
              style="180px;height:160px;margin-bottom:10px"
              src="../../assets/images/xiehui3.png"
              alt
            />
          </div>
               <div
            class="col curpoint"
            @click="gotoDetails"
            style="flex:0 0 24%;margin:5px 0.5%;overflow:hidden"
          
          >
            <img
              style="180px;height:160px;margin-bottom:10px"
              src="../../assets/images/xiehui5.png"
              alt
            />
          </div>
               <div
            class="col curpoint"
            @click="gotoDetails"
            style="flex:0 0 24%;margin:5px 0.5%;overflow:hidden"
          
          >
            <img
              style="180px;height:160px;margin-bottom:10px"
              src="../../assets/images/xiehui6.png"
              alt
            />
          </div>
               <div
            class="col curpoint"
            @click="gotoDetails"
            style="flex:0 0 24%;margin:5px 0.5%;overflow:hidden"
          
          >
            <img
              style="180px;height:160px;margin-bottom:10px"
              src="../../assets/images/xiehui2.png"
              alt
            />
          </div>
        </div>
      </div>
      <div class="school-news">
        <div class="btw yaonew align">
          <p>精彩图片</p>
          <p class="curpoint"></p>
        </div>
        <div class>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div
                class="col curpoint swiper-slide mt20"
                @click="gotoInfo"
                
              >
                <img
                  style="height:200px;margin-bottom:10px"
                  src="../../assets/images/t1.jpg"
                  alt
                />
                <p style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff">2019亚洲青年羽毛球锦标赛精彩瞬间</p>
              </div>
               <div
                class="col curpoint swiper-slide mt20"
                @click="gotoInfo"
                
              >
                <img
                  style="height:200px;margin-bottom:10px"
                  src="../../assets/images/t2.jpg"
                  alt
                />
                <p style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff">2019年亚洲羽毛球锦标赛精彩集锦</p>
              </div>
               <div
                class="col curpoint swiper-slide mt20"
                @click="gotoInfo"
                
              >
                <img
                  style="height:200px;margin-bottom:10px"
                  src="../../assets/images/t3.jpg"
                  alt
                />
                <p style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff">第16届苏迪曼杯颁奖仪式</p>
              </div>
               <div
                class="col curpoint swiper-slide mt20"
                @click="gotoInfo"
                
              >
                <img
                  style="height:200px;margin-bottom:10px"
                  src="../../assets/images/t4.jpg"
                  alt
                />
                <p style="text-align:center;padding:5px 0 ;position:absolute;bottom:0;left:0;width:100%;background:rgba(0,0,0,.5);color:#fff">第16届苏迪曼杯25日精彩集锦</p>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
      </div>
       <div class="school-news">
        <div class="btw yaonew align">
          <p>合作伙伴</p>
          <p class="curpoint"></p>
        </div>
        <div class="flex-wrap" style="width:80%;margin:20px auto">
        <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p1.jpg"
              alt
            />
          </div>
          <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p2.jpg"
              alt
            />
          </div>
          <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p3.jpg"
              alt
            />
          </div>
            <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p4.jpg"
              alt
            />
          </div>
            <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p5.jpg"
              alt
            />
          </div>
            <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p6.jpg"
              alt
            />
          </div>
            <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p7.jpg"
              alt
            />
          </div>
            <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p8.jpg"
              alt
            />
          </div>
            <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p9.jpg"
              alt
            />
          </div>
            <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p9.jpg"
              alt
            />
          </div>
           <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p3.jpg"
              alt
            />
          </div>
            <div 
            class="col curpoint"
            @click="gotoInfo"
            style="margin:5px 0.5%;overflow:hidden"
           
          >
            <img
              style="80px;height:54px;margin-bottom:10px"
              src="../../assets/images/p1.jpg"
              alt
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {
    gotoDetails(){
       this.$router.push({ name: "guild", params: {} });
    },
    gotoDetail() {
      this.$router.push({ name: "detail", params: {} });
    },
    gotoInfo() {
      this.$router.push({ name: "tiyuInfo", params: {} });
    },
    init() {
      var mySwiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    }
  },
  mounted() {
    this.init();
  },
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
.guild-index-container {
   .navs{
    .el-carousel__container{
      height:400px!important;
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
  .flex-base {
    flex: 0 0 48%;
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

