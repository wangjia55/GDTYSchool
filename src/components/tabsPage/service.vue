<template>
  <!-- 赛事服务 -->
  <div class="index-container nowrap">
    <div v-if="0">
      <div class>
        <el-carousel>
          <el-carousel-item v-for="item in 4" :interval="3000" :key="item">
            <img style="width:100%;" src="../../assets/images/imgs.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="mt20">
        <el-tabs>
          <el-tab-pane>
            <span slot="label" style="font-size:20px">
              <i class="el-icon-date"></i> 赛事筛选
            </span>
            <div class="btw">
              <div class="row" style="font-size:16px">
                <label for style="margin:10px">时间:</label>
                <div class="row fsz">
                  <span
                    v-for="(item,index) in time"
                    :key="item.id"
                    :class="[curTime===index?'curBlue':'']"
                    @click="toTime(index)"
                  >{{item.name}}</span>
                </div>
              </div>

              <div class="row" style="font-size:16px">
                <label for style="margin:10px">类型:</label>
                <div class="row fsz">
                  <span
                    v-for="(item,index) in kinds"
                    :key="item.id"
                    :class="[curKinds===index?'curBlue':'']"
                    @click="toKinds(index)"
                  >{{item.name}}</span>
                </div>
              </div>
            </div>
            <div>
              <div class="row" style="font-size:16px">
                <label for style="margin:10px">地区:</label>
                <div class="row fsz">
                  <span
                    v-for="(item,index) in area"
                    :key="item.id"
                    :class="[curArea===index?'curBlue':'']"
                    @click="toArea(index)"
                  >{{item.name}}</span>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="mt20 mb20 imgs wrap">
        <img src="../../assets/images/item1.png" alt />
        <img src="../../assets/images/item2.png" alt />
        <img src="../../assets/images/item3.png" alt />
        <img src="../../assets/images/item4.png" alt />
      </div>
    </div>
    <div style="background:#fff;mt20">
      <div class="headers row" style="font-size:14px">
        <div class="m20">
          <img style="width:332px;height:184px" src="../../assets/images/imgs.jpg" alt />
          <div class="row align">
            <div class="row align m10">
              <van-icon name="star" />
              <span>收藏(11)</span>
            </div>
            <div class="row align m10">
              <van-icon name="share" />
              <span>分享</span>
            </div>
            <div class="row align m10">
              <van-icon name="column " />
              <span>分享</span>
            </div> 
          </div>
        </div>
        <div class="col m20">
          <p>2018美骑100挑战者营地·脉动炽能量沈阳站</p>
          <p>赛事性质： 其他活动</p>
          <p>赛事类型： 其他</p>
          <p>2018-07-15 07:00 ~ 2018-07-15 18:00</p>
          <p>辽宁省沈阳市 全健基地体育场（浑南区东陵路三十三号）</p>
          <p>已报名 1014/1080人</p>
          <p>报名截止日期：2018-07-10 15:10</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curTime: 0,
      time: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "今天",
          id: 1
        },
        {
          name: "本周",
          id: 2
        },
        {
          name: "本月内",
          id: 3
        },
        {
          name: "三月内",
          id: 4
        },
        {
          name: "半年内",
          id: 5
        }
      ],
      curKinds: 0,
      kinds: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "自行车",
          id: 1
        },
        {
          name: "平衡车",
          id: 2
        },
        {
          name: "跑步",
          id: 3
        },
        {
          name: "铁三角",
          id: 4
        },
        {
          name: "其他",
          id: 5
        }
      ],
      curArea: 0,
      area: [
        {
          name: "全部",
          id: 0
        },
        {
          name: "北京省",
          id: 1
        },
        {
          name: "广东省",
          id: 2
        },
        {
          name: "山东省",
          id: 3
        },
        {
          name: "湖北省",
          id: 4
        },
        {
          name: "广东省",
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
    toKinds(index) {
      this.curKinds = index;
    },
    toArea(index) {
      this.curArea = index;
    }
  },
  mounted() {},
  filters: {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.fsz {
  // margin:10px;
  > span {
    margin: 10px;
    color: #999;
    cursor: pointer;
  }
}
.imgs {
  img {
    width: 30%;
    margin-left: 3%;
    margin-bottom: 10px;
    border: 1px solid #dfdfdf;
    cursor: pointer;
    // float: left;
  }
}
.curBlue {
  color: #0079bf !important;
  font-weight: bold;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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
</style>

