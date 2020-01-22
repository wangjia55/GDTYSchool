<template>

	<div class="DataReport">


	<div class="Header">
		<el-row>
		  <el-col :span="4"><i class="el-icon-arrow-left" @click="closeWindow()"></i></el-col>
		  <el-col :span="16">数据报表</el-col>
		  <el-col :span="4"></el-col>
		</el-row>
	</div>

				<!-- <a href="http://139.224.11.210:8080/appdata/appdataIndex.html"><div class="ChoseButton" >考核数据</div></a> -->
        <div class="ChoseButton" @click="$router.push({path:'/examine/nav'})">考核数据</div>
				<div class="ChoseButton" @click="$router.push({path:'/DataReport/SalesReportForm/SalesData'})">销售数据</div>
				<div class="ChoseButton" @click="$router.push({path:'/DataReport/SalesReportForm/ReportList'})">报表数据</div>


	</div>
</template>

<script>
export default {


    data() {
      return {
      }
    },
    methods: {
      closeWindow:function(){
      	if(typeof(window.android)!="undefined"){
			window.android.finishActivity();
			}
      }
    }
  }
</script>

<style lang="scss" scoped>
.DataReport{
	.Header{
		text-align: center;
		font-size: 4vw;
		padding: 2vw 0;
		background: #8B1428;
		color: #fff;
	}
	.ChoseButton{
		margin: 3vw auto;width:80vw;line-height:12vw;font-size:5vw;text-align: center;background-color:#0575F2 ;color: #fff;
	}
}

</style>
