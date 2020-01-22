<template>
    <div class="content">
      <p class="title">问：{{title}}</p>
      <p class="answer">答：{{answer}}</p>
       <div class="img"
        v-for="(img,index) in imageList"
        :key='index'
        v-lazy:background-image="img"
      />
    </div>

</template>

<script type="text/javascript">
export default {
  data() {
    // 数据
    return {
      title:'',
      answer:'',
      imageList:['']
    }
  },
  computed: {
    
  },
  components: {
  },
  methods: {
   
    // 事件函数
    onLoad() {
      this.title = this.$route.query.title;
      this.answer = this.$route.query.answer;
      this.imageList = [this.$route.query.pic];
    },
    
  },
  props: ["datas"],
  created: function() {
    
    // 页面加载的时候触发的函数
    this.onLoad();
  }
};
</script>
<style scoped>
  .content{
    margin: 0px 15px;
    padding-top: 15px;
  }

  .title{
    font-size: 17px;
    text-align: justify;
    padding: 8px 8px;
    background-color: lightgray;
    border-radius: 30px;
    line-height: 24px;
  }
  .answer{
    font-size: 16px;
    text-align: left;
    padding: 5px 5px;
    margin-top: 15px;
    line-height: 24px;
  }

  .img{
    padding: 5px;
    width: 100%;
    height: 500px;
    background-size: 100% ;
    margin: 10px 0 0;
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

</style>
