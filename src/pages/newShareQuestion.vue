<template>
  <div class="wrap car-wrap">
    <new-share-question v-for="item in mesLists" :key="item.id" :mes="item" @showTips="showtip"></new-share-question>
    <!-- tips -->
    <div v-if="showtipd">
      <div class="qt-meng" @click="closeTips"></div>
      <div class="qt-alert">
        <div class="qt-close" >
          <yd-icon @click.native="closeTips" name="error"></yd-icon>
        </div>
        <div>
          <ul>
            <li class="qt-li" v-for="item in spes" :key="item">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newShareQuestion from "../components/newShare_question";
export default {
  name: "HelloWorld",
  data() {
    return {
      showtipd: false,
      spes: [],
      mesLists: [
        {
          id: 0,
          question: "3×3新享计划是一种什么产品？",
          answer: [
            "3×3新享计划是一种0首付、超低月供、自主产权、3年换新的全新零售方案。"
          ],
          spe: ["产品内容"]
        },
        {
          id: 1,
          question: "0首付有些什么优势？",
          answer: [
            "选择3×3新享计划只需付20%的保证金，3年后保证金可全额返还;",
            "初期无需交付任何购车费用，即可提车，助您提前实现豪车梦。"
          ],
          spe: ["无首付，保证金返还；", "含购置税，保险，上牌费"]
        },
        {
          id: 2,
          question: "超低月供有些什么优势?",
          answer: [
            "这是目前市场上最有竞争力的新零售计划，特供车型月供甚至只有2999，折合每天只需99元。",
            "每天上下班的出租车费就可以享受到凯迪拉克这样的豪华品牌，像您这样睿智的车主一定不会错过这样的机会。"
          ],
          spe: ["最低2999月供", "99元日供"]
        },
        {
          id: 3,
          question: "自主产权有些什么优势？",
          answer: [
            "市场上很多融资租赁产品其实只是“租车”，付了钱但车的产权还是别人的。",
            "3×3新享计划让您真正成为新车车主，拥有该车的所有权，让您更放心、更自信。"
          ],
          spe: ["车主拥有产权"]
        },
        {
          id: 4,
          question: "3年换新有些什么优势?",
          answer: [
            "3年换新是行业首创、最具竞争力的购车方案，会随着您的事业升级，提供车辆升级服务，如果您感兴趣的话先坐下来，我来帮您详细介绍一下这个方案。"
          ],
          spe: ["自由选择是否回购 ", "有竞争力的回购价格"]
        },
        {
          id: 5,
          question: "一直很喜欢ATSL，但预算不足，可能会去看看朗逸？",
          answer: [
            "我帮您算比帐，您会发现三年的用车过程当中，同样的支出，为什么不选择享受豪华车呢！"
          ],
          spe: ["压力相当，提前升级享受豪车"],
          imgsrc: require("../assets/images/qt.jpg")
        },
        {
          id: 6,
          question: "这个方案里的车价要比我问到的优惠价要贵啊？",
          answer: [
            "买车并不能只看车价，得看整体的购车方案是否适合您的总体承受能力。",
            "我们是一个全生命周期的服务，包括新车、金融、上牌、二手车、置换新车等一体化的解决方案，让您用车全程无忧。",
            "因为我们这个方案是有回购有保障的，排除您旧车处置的后顾之忧。"
          ],
          spe: ["避免客户纠结于车价", " 全生命周期的服务", " 回购有保障"]
        },
        {
          id: 7,
          question: "“3×3新享计划”与金融信贷相比有啥优势？",
          answer: [
            "银行贷款首付通常不低于30%，折扣后利率为6.99%，还需要再支付购置税、首年保险、上牌费用等。",
            "“3×3新享计划”没有首付，厂家高额补贴后利率仅为4.99%，还提供旧车回购保障。"
          ],
          spe: ["零首付、月供低、利率低", "含购置税，首年送保险"]
        },
        {
          id: 8,
          question: "“3×3新享计划”与“弹个车”相比有啥优势？",
          answer: [
            "“弹个车”虽然信用担保无押金，首年月供低，但是尾款月供高、手续费高、仅提供一年期回购。综合利率在13%-15%，且产权归公司所有，而“3×3新享计划”车辆产权是您的，三年超低月供，另外可提供三年期满回购保障。"
          ],
          spe: [
            "拥有产权",
            "保证金三年可返还",
            "无手续费",
            "三年期回购",
            "利率低"
          ]
        },
        {
          id: 9,
          question: "那我租一辆凯迪拉克岂不更省时省钱？",
          answer: [
            "租车拿到手是旧车，日租/月租费用高，没有产权，更适合于短租，租车虽然方便，但是每天算下来成本可不低，像凯迪拉克的车您可以去租赁公司问问，一天租金至少400元，而“3×3新享计划”日供最低才99元。"
          ],
          spe: ["超低日供，低至99元", "有产权", "用新车"]
        }
      ]
    };
  },
  components: {
    newShareQuestion
  },
  methods: {
    showtip(item) {
      this.spes = item.item.spe;
      this.showtipd = true;
    },
    closeTips() {
      this.showtipd = false;
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.car-wrap {
  width: 100%;
  overflow: hidden;
  box-sizing: padding-box;
}
.qt-meng {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
}
.qt-alert {
  width: 80%;
  position: fixed;
  top: 10vh;
  left: 10%;
  z-index: 4;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 25px 20px;
  border-radius: 10px;
  // overflow: hidden;
}
.qt-li {
  list-style: disc;
  margin-left: 20px;
  line-height: 30px;
}
.qt-close {
  width: 24px;
  height: 24px;
  background: #fff;
   position: absolute;
    right: -10px;
    top: -10px;
    border-radius: 50%;
  i {
    width:100%;
    height:100%;
    right: 2px;
    border-radius: 50%;
    top:-1px;
    line-height: 25px;
    position: absolute;
    font-size: 30px !important;
    color: red;
  }
}
</style>
