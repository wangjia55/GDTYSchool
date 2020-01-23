<template>
  <div>
    <!-- 分区大部队 -->
    <div class="mask-wrap" v-show="isShow">
      <ul>
        <li v-for="item in area" :key="item.id" @click="choosewan(item)">{{item.name}}</li>
      </ul>
    </div>
    <div class="mask-wrap btw" v-show="isShowName">
      <ul>
        <li
          v-for="item in area"
          :key="item.id"
          :class="[curIndex==item.id?'curColor':'']"
        >{{item.name}}</li>
      </ul>
      <ul>
        <li v-for="item in areaPeople" :key="item.id" @click="chooseName(item)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
import vuePickers from "vue-pickers";
export default {
  data() {
    // 数据
    return {
      hel: "总部",
      kinds: 0, //0总部，1区域，2名字
      isShowName: false,
      active: 0,

      curName: "",
      curIndex: ""
    };
  },
  computed: {},
  components: {
    // 组件名称
  },
  methods: {
    choosewan(item) {
      let _this = this;
      // _this.isShow = false;
      if (item.id > 0) {
        _this.isShowName = true;
        _this.curName = item.name;
        _this.curIndex = item.id;
      } else {
        _this.kinds = 0;
        _this.hel = "总部";
        _this.$emit("choosewan", {
          kind: 0,
          text: "总部",
          id: item.id
        });
      }
    },
    chooseName(item) {
      let _this = this;
      if (item.id > 0) {
        _this.kinds = 2;
        _this.hel = item.name;
        _this.$emit("chooseName", {
          kind: 2,
          text: item.name,
          id: item.id
        });
      } else {
        _this.hel = _this.curName;
        _this.kinds = 1;
        _this.$emit("chooseName", {
          kind: 1,
          text: _this.curName,
          id: item.id
        });
      }
      _this.isShowName = false;
    },
    showChoose() {
      if (this.isShow || this.isShowName) {
        this.isShowName = false;
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    }
  },
  props: ["isShow",'area','areaPeople'],
  created: function() {
    // 页面加载的时候触发的函数
  }
};
</script>
<style lang="scss">
.mask-wrap {
  width: 100%;
  background: #efefef;
  position: fixed;
  top: 90px;
  overflow: auto;
  max-height: 60vh;
  left: 0;
  ul {
    flex: 1;
  }
  li {
    flex: 1;
    height: 50px;
    border-bottom: 1px solid #ccc;
    line-height: 50px;
    text-align: center;
  }
  .curColor {
    background: #910000;
    color: #fff;
  }
}
</style>
