<template>
  <!-- 赛事服务 -->
  <div class="index-container nowrap">
    <div>
      <div class="mt20 init">
        <el-tabs>
          <el-tab-pane>
            <span slot="label" style="font-size:20px">
              <i class="el-icon-date"></i> 线上课程
            </span>
            <div class="btw">
              <div class="row" style="font-size:16px">
                <label for style="margin:10px">课程:</label>
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
          <div>
                <div>
                  <Study></Study>
                </div>
              </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import Study from "../../components/education/study";
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
          name: "游泳",
          id: 1
        },
        {
          name: "搏击",
          id: 2
        },
        {
          name: "跑步",
          id: 3
        },
        {
          name: "散打",
          id: 4
        },
        {
          name: "瑜伽",
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
          name: "羽毛球",
          id: 1
        },
        {
          name: "游泳",
          id: 2
        },
        {
          name: "篮球",
          id: 3
        },
        {
          name: "健美",
          id: 4
        },
        {
          name: "足球",
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
          name: "广东省",
          id: 1
        },
        {
          name: "北京市",
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
          name: "湖南省",
          id: 5
        }
      ]
    };
  },
  computed: {},
  components: {
      Study,
  },
  methods: {
    toDetail() {
      this.$router.push("tiyuSerDetail");
    },
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

<style rel="stylesheet/scss" lang="scss" >
.ser-main {
  div {
    margin: 20px;
    padding: 20px;
    > h3 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
}
.navs {
  .el-carousel__container {
    height: 400px !important;
  }
}
.textser {
  img {
    margin: 10px 0;
    width: 100%;
  }
}
.ser-body {
  p {
    line-height: 28px;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  > p:nth-of-type(1) {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 600;
    min-height: 70px;
    line-height: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > p:nth-of-type(2) {
    color: #0079bf;
    font-size: 12px;
    line-height: 1.5;
    margin: 8px 0;
  }
  > p:nth-of-type(3) {
    color: #0079bf;
    font-size: 12px;
    line-height: 1.5;
    margin: 8px 0;
  }
  > p:nth-of-type(4) {
  }
  > p:nth-of-type(5) {
  }
  > p:nth-of-type(6) {
  }
}
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
  }
}
.curBlue {
  color: #0079bf !important;
  font-weight: bold;
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

