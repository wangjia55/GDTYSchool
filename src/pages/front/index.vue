<template>
  <div style="background: #ececec;">
    <header class="shadow header-container">
      <div class="front-content-width btw p10 align" style="height: 100%;">
        <div class="row align">
          <div>
            <img
              class="curpoint"
              @click="onClickLogo"
              style="height:53px;margin-top:10px;margin-left:20px;"
              src="../../assets/images/titles.png"
              alt
            />
          </div>
        </div>
        <div class="taps row" style>
          <router-link
            v-for="(v,i) in tabList"
            :key="v.name"
            :to="{name: v.name}"
            tag="div"
            class="nav-item curpoint"
            :class="{hover:curTabsValue === v.name}"
          >
            {{v.label}}
            <div class="dropdown" v-if="curTabsValue != v.name">
              <div
                class="sheng1"
                v-for="v2 in (v.list || [])"
                :key="v2.id"
                @click.stop="onClickHeaderSubMenu(v,v2)"
              >{{v2.title}}</div>
            </div>
          </router-link>
        </div>
      </div>
    </header>
    <div class="center w100 base">
      <transition name>
        <router-view></router-view>
      </transition>
    </div>
    <footer class="footerview">
      <div class="footer-content arc">
        <div class="footer-info">
          <p style="margin:2px;font-size:18px;font-weight:bold;">友情链接</p>
          <p style="margin:2px;">国家教育部&#12288; &#12288; 国家体育总局&#12288; &#12288; 国家图书馆</p>
          <p style="margin:2px;">广东省教育厅&#12288; 广东省体育局 &#12288; &#12288; 广东图书馆</p>
          <p style="margin:2px;">国家职业资格工作网</p>
        </div>
        <div class="footer-info">
          <p style="margin:2px;">地址：广东省广州市天河区黄村奥体路52号</p>
          <p style="margin:2px;">电话：020-87128173</p>
          <p style="margin:2px;">传真：020-87128172</p>
          <p style="margin:2px;">邮编：510663</p>
        </div>
        <div style>
          <img style="width:120px; margin:auto 0;" src="../../assets/images/barcode1.jpg" />
        </div>
      </div>
      <p class="copyright">Copyright© 2020 Guangdong Guotilian Sports Platform 备案号:粤ICP备06108273号</p>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "index",
  data() {
    return {
      apiList: {
        checkCompany: "company/info" //查询企业信息
      },
      message: ""
    };
  },
  computed: {
    ...mapGetters([
      "adList",
      "newList",
      "serviceList",
      "productList",
      "caseList"
    ]),
    tabList() {
      return [
        { label: "首页", name: "home" },
    
        {
          label: "体育资讯",
          name: "message",
          list: [
            { title: "运动应知道", id: "us" },
            { title: "体育圣殿", id: "course" },
            { title: "酷体育", id: "culture" },
            { title: "学术快递", id: "honor" }
          ]
        },
        { label: "鉴定公告", name: "jdgg" },

        {
          label: "职业鉴定",
          name: "education",
          list: [
            { title: "政策服务", id: "us" },
            { title: "培训服务", id: "course" },
            { title: "鉴定管理", id: "culture" },
            { title: "工作动态", id: "honor" }
          ]
        },
        {
          label: "行业协会",
          name: "guildIndex",
          list: [
            { title: "协会动态", id: "us" },
            { title: "协会列表", id: "course" },
            { title: "商务合作", id: "culture" }
          ]
        },
          { label: "人才服务", name: "rcfw" },
        {
          label: "关于我们",
          name: "aboutus",
          list: [
            { title: "关于我站", id: "us" },
            { title: "培训机构", id: "course" },
            { title: "专家人才", id: "culture" }
          ]
        }
      ];
    },
    tabList1() {
      return [
        { label: "首页", name: "home" },
        {
          label: "体育资讯",
          name: "message",
          list: [
            { title: "运动应知道", id: "us" },
            { title: "体育圣殿", id: "course" },
            { title: "酷体育", id: "culture" },
            { title: "政策发布台", id: "honor" },
            { title: "学术快递", id: "honor" }
          ]
        },
        {
          label: "赛事服务",
          name: "service",
          list: [
            { title: "赛事公告", id: "us" },
            { title: "赛事列表", id: "course" },
            { title: "成绩查询", id: "culture" }
          ]
        },
        {
          label: "行业协会",
          name: "guildIndex",
          list: [
            { title: "协会动态", id: "us" },
            { title: "协会列表", id: "course" },
            { title: "商务合作", id: "culture" }
          ]
        },
        {
          label: "职业鉴定",
          name: "identification",
          list: [
            { title: "政策服务", id: "us" },
            { title: "培训服务", id: "course" },
            { title: "鉴定管理", id: "culture" },
            { title: "工作动态", id: "honor" },
            { title: "职业赛事", id: "culture" },
            { title: "资料下载", id: "honor" },
            { title: "联系我们", id: "honor" }
          ]
        },
        {
          label: "继续教育",
          name: "education",
          list: [
            { title: "通知公告", id: "us" },
            { title: "课程列表", id: "course" },
            { title: "在线学习", id: "course" },
            { title: "证书打印", id: "course" }
          ]
        },
        {
          label: "课程培训",
          name: "train",
          list: [
            { title: "通知公告", id: "us" },
            { title: "课程列表", id: "course" }
          ]
        }
      ];
    },
    curTabsValue() {
      return this.$route.name;
    }
  },
  methods: {
    onClickLogo() {
      location.reload();
    },
    getCompanyList() {
      let _this = this;
      let body = {
        url: this.apiList.checkCompany,
        method: "GET"
      };
      this.api(body).then(res => {
        this.message = res.data;
      });
    },
    onClickHeaderSubMenu({ name }, { id }) {
      console.log(name);
      console.log(name);
      switch (name) {
        case "solution":
        case "product":
        case "partner":
        case "us":
          this.$router.push({ name, params: { id } });
          break;
      }
    }
  },
  mounted() {
    // this.getCompanyList();
  }
};
</script>

<style  lang="scss">
$baseColor: #fff;

.header-container {
  height: 100px;
  margin-top: -2px;
  padding: 5px 20px;
  background: url("../../assets/images/top_background.png");
}
.nav-item {
  width: 80px;
  text-align: center;
  margin-left: 15px;
  font-size: 18px;
  margin-right: 10px;
  line-height: 60px;
  color: #fff;
  border-bottom: 3px solid transparent;
  &.hover {
    color: $baseColor;
    border-bottom: 3px solid $baseColor;
  }
  .dropdown {
    display: none;
  }
  &:hover {
    color: #fff;
    border-bottom: 3px solid #fff;
    position: relative;
    > .dropdown {
      display: block;
      z-index: 1000;
      position: absolute;
      top: 60px;
      margin-left: -60px;
      background: white;
      width: 200px;
      > div {
        width: 100%;
        height: 45px;
        line-height: 50px;
        font-size: 15px;
        text-align: center;
        color: #585858;
        border-bottom: 1px solid $baseColor;
        &:hover {
          background: lightgray;
          color: #585858;
        }
      }
    }
  }
}

.footerview {
  height: 210px;
  background: rgb(70, 70, 70);
}

.contact-us {
  font-size: 14px;
  line-height: 20px;
  color: #2b2b2b;
  .MsoNormal {
    line-height: 25px !important;
    font-size: 14px;
    margin: 0 !important;
  }
}

.copyright {
  width: 100%;
  height: 40px;
  color: #d6d6d6;
  align-content: center;
  line-height: 50px;
  font-size: 15px;
  margin: auto auto;
  text-align: center;
  border-top: rgb(61, 61, 61) 1px solid;
}
</style>
