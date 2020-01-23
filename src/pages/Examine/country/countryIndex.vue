<template>
  <div class="base">
    <yd-navbar title="全国经销商查询">
      <div slot="left" @click="$router.go(-1)">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </div>
      <div slot="right">导出</div>
    </yd-navbar>
    <div class="arc country-header">
      <span>全国经销商查询</span>
      <span>
        <select class="selectClass" name id>
          <option v-for="item in address" :key="item.id" :value="item.id" >{{item.name}}</option>
        </select>
      </span>
       <span>
        <select class="selectClass" name id>
          <option v-for="item in jingxiao" :key="item.id" :value="item.id" >{{item.name}}</option>
        </select>
      </span>
    </div>
    <div>
          <yd-search v-model="value1" placeholder="输入经销商代码/名称" :on-submit="submitHandler"></yd-search>
    </div>
    <div>
      <img style="width:100%;" src="http://dantong.oss-cn-shenzhen.aliyuncs.com/weiqian/carApp2/%E5%85%A8%E5%9B%BD%E7%BB%8F%E9%94%80%E5%95%86%E6%9F%A5%E8%AF%A2.jpg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1:'',
      address:[
        {
          id:0,
          name:'上海'
        },
          {
          id:1,
          name:'北京'
        },
          {
          id:2,
          name:'广州'
        },
      ],
       jingxiao:[
        {
          id:0,
          name:'上海1'
        },
          {
          id:1,
          name:'北京1'
        },
          {
          id:2,
          name:'广州1'
        },
      ]
    };
  },
  methods: {
     submitHandler(value) {
                this.$dialog.toast({mes: `搜索：${value}`});
            }
  }
};
</script>
<style lang="scss" >
.base {
  width: 100%;
  background: #fff;
  min-height: 100vh;
}
.country-header{
  height:50px;
  align-items: center;
}
.selectClass{
  width:100px;
  display: block;
  line-height: 30px;
  text-align: center;
  height:30px;
}
.yd-search-input>.cancel-text{
  color: #1989fa;
}
</style>
