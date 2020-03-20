<template>
  <div style="background: ghostwhite;">
    <header
      class="shadow"
      style="height: 70px;background: white;background-color:#1754C2;padding:5px 20px"
    >
      <div class="front-content-width btw p10 align" style="height: 100%;">
        <div class="row align">
          <div>
            <img
              class="curpoint"
              @click="onClickLogo"
              style="height:55px;"
              src="../../assets/images/logo-title.png"
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
        <div style="color:#fff" class="curpoint">校内网登录</div>
      </div>
    </header>
    <div class="center w100 base">
      <transition name>
        <router-view></router-view>
      </transition>
    </div>
    <footer class="footer">
      <div class="footer-content arc">
        <div class="footer-info">
          <p>学校地址：广东省广州市天河区黄村奥体路52号</p>
          <p>学校电话：020-87128173</p>
          <p>邮编：510663  </p>
        </div>
        <div style>
          <img style="width:80%; margin:auto 0;" src="../../assets/images/school-title.jpg" />
        </div>
      </div>
      <p
        style="text-align:center;margin:10px auto;font-size:13px;"
      >Copyright© 2019 Guangdong Voctional Institute of Sport 备案号:粤ICP备06108273号</p>
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
            { title: "培训计划", id: "course" },
            { title: "培训机构", id: "culture" },
            { title: "在线学习", id: "honor" }
          ]
        },
        {
          label: "继续教育",
          name: "education",
          list: [
            { title: "通知公告", id: "us" },
            { title: "课程列表", id: "course" }
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
.nav-item {
  width: 80px;
  text-align: center;
  margin-left: 35px;
  font-size: 17px;
  margin-right: 20px;
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
  background: white;
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
  background: #585858;
  color: white;
  align-content: center;
  line-height: 50px;
  font-size: 15px;
  margin: auto auto;
  text-align: center;
}
</style>
