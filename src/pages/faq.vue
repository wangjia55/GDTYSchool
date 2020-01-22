<template>
  <div class="content">
    <!-- 每个元素的两侧间隔相等 -->
    <van-row type="flex" justify="space-around">
      <van-col span="6" >
        <img src="../assets/images/oneline.png"  @click="onlineService">
        <p style="font-size:18px;margin:5px 0px;">在线客服</p>
        <p>09:30-18:30</p>
      </van-col>
      <van-col span="6" >
        <img src="../assets/images/phone.png" @click="callPhone">
        <p style="font-size:18px;margin:5px 0px;">客服电话</p>
        <p>09:30-18:30</p>
      </van-col>
    </van-row>
    <p class="title">常见问题</p>
    <van-loading v-show="baseLoading"/>

    <van-dialog
      v-model="showDialog"
      title="是否电话咨询客服？"
      message="021-62888551"
      show-cancel-button
      @confirm="confirmDialog"
    />

    <van-pull-refresh v-model="refreshing" @refresh="onRefresh(0)">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        v-show="hasData"
      >
        <van-cell
          v-for="item in items"
          :key="item.id"
          :title="item.title"
          is-link
          @click="detailFaq(item)"
        />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    // 数据
    return {
      items: [],
      loading: false,
      finished: false,
      refreshing: false,
      baseLoading: true,
      hasData: false,
      showDialog: false,
      params:{"page":1,"size":30}
    };
  },
  computed: {},
  components: {},
  methods: {
    // 事件函数
    onLoad() {
      console.log("onload");
      this.items = [];
      this.loading = false;
      this.finished = true;
     
      this.$fetch(this.$api.api.faqlist, this.params).then(res => {
        if (res.code == 200) {
          this.baseLoading = false;
          this.hasData = true;
          this.items = res.data;
        }
      });
    },
    onRefresh(index) {
      setTimeout(() => {
        this.items = [];
        this.finished = false;
        this.refreshing = false;
      }, 1000);
    },
    detailFaq(item) {
      this.$router.push({
        name: "faqdetail",
        query: {
          title: item.title,
          answer: item.answer,
          pic: item.pic
        }
      });
    },
    callPhone() {
      this.showDialog = true;
    },
    confirmDialog() {
      window.location.href = "tel:021-62888551";
    },
    onlineService() {
      this.$toast("敬请期待");
    }
  },
  props: ["datas"],
  created: function() {
    // 页面加载的时候触发的函数
    this.onLoad();
  }
};
</script>
<style scoped>
.van-row {
  padding: 10px 10px;
  background-color: white;
}

.van-col {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.van-col img {
  width: 50px;
  height: 50px;
  margin: 5px 0px;
  align-self: center;
}

.van-col p {
  width: 100%;
  text-align: center;
  font-size: 14px;
  margin: 2px 2px;
}

.title {
  width: 100%;
  background-color: lightgray;
  font-size: 18px;
  padding: 8px 15px;
}

.van-loading {
  width: 100%;
}
.van_cell {
  width: 100%;
  height: 55px;
}

.van-cell__title {
  font-size: 15px;
}
</style>
