<template>
	<div class="SalesReportForm" v-if="isRouterAlive">

		<div class="Header">
		<el-row>
		  <el-col :span="4"><i class="el-icon-arrow-left" @click="BackPage()"></i></el-col>
		  <el-col :span="16">总部</el-col>
		  <el-col :span="4"><i class="el-icon-refresh-right" @click="reload()"></i></el-col>
		</el-row>
		</div>
		
		<el-row>
		  <el-col :span="24">
		  	<el-row class="SalesDataHead">
			  <el-col :span="8"><div class="ChoseMode" :class="{ 'active': isSalesDataActive==1 }" @click="isSalesDataActive=1;changeIndex(0);">全部数据</div></el-col>
			  <el-col :span="8"><div class="ChoseMode" :class="{ 'active': isSalesDataActive==2 }" @click="isSalesDataActive=2;changeIndex(0);">展厅数据</div></el-col>
			  <el-col :span="8"><div class="ChoseMode" :class="{ 'active': isSalesDataActive==3 }" @click="isSalesDataActive=3;changeIndex(0);">车展数据</div></el-col>
		  	</el-row>
		  </el-col>
		  <div class="timeHead">
			2019-06-01
			<div class="tips" @click="isTipsMode=true">?</div>
		</div>

		<swiper :options="swiperOption" ref="mySwiper">

	      <swiper-slide  class="listPic" v-for="item in CurrentListData.Data"><img :src="item"/></swiper-slide>

	    </swiper>



		</el-row>

		

		
		
		<el-row class="foot">
		  <el-col :span="12"><div class="ChoseMode active">
		  	<img id="dataIcon" :src='require("@/assets/images/DataReport/data_icon_h.svg")'/>

		  	数据
		  </div></el-col>
		  <el-col :span="12"><div class="ChoseMode" @click="$router.push({path:'/DataReport/SalesReportForm/ReportList'})">
		  	<img id="listIcon" :src='require("@/assets/images/DataReport/list_icon_n.svg")'/>
		  	报表
		  </div></el-col>
		</el-row>
		
		<div class="tipsMode" v-if="isTipsMode">
			<div class="blackBg"></div>
			<div class="tipsContent">
				<img :src="CurrentExplain" />
				<div class="ctrlButton" @click="isTipsMode=false"></div>
			</div>
			
		</div>
		
		
	</div>
</template>

<script>

	  export default {

	  	    data() {
	  	    	const that=this;
		      return {
		      	//数据
		      	swiperOption: {//swiper3
			      speed: 100,
			      on: {
				          slideChangeTransitionEnd: function () {
				          console.log(that.CurrentListData);
				          that.CurrentExplain=that.CurrentListData.explain[this.activeIndex];
				          }
				        }
			      },
			    isRouterAlive:true,
		      	isTipsMode:false,
		      	isSalesDataActive:1,
		      	ListData:[
		      	{
		      		type:1,
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190819/491ca8b4163b4dbaa8f2a576a2fd7f7a.jpg",
		      			"http://qiniu.wqdata.net/upload/20190819/c2978d614c2a4f1893f8726441248998.jpg",
		      			"http://qiniu.wqdata.net/upload/20190819/5d7685ff4d984d4f90abe2a78938cab9.jpg"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      	},{
		      		type:2,
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190819/d48d255f9de84395863ad7e720d1d8f7.jpg",
		      			"http://qiniu.wqdata.net/upload/20190819/3749bc505d4341ea9fdeb488dff8e5a7.jpg",
		      			"http://qiniu.wqdata.net/upload/20190819/5f3e4f9152834d4592a5876154fbbd96.jpg"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      	},{
		      		type:3,
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190819/702bf5476b404bf3ba98166a884cb5de.jpg",
		      			"http://qiniu.wqdata.net/upload/20190819/baf04cdd97a242dbaac51c199ff808c7.jpg",
		      			"http://qiniu.wqdata.net/upload/20190819/8a1227cf97004eecb75666a01df37d6c.jpg"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      	}
		      	],
		      	CurrentListData:[],
		      	CurrentExplain:"",
		      	
		      	//报表
		      	datetime0: '2019-09',
		      	datetimeType:'month',
		      	monthFormat:'<span>{value}月</span>',
		      }
		    },
		    provide(){
				    return{
				      reload:this.reload
				    }
				  },
		    watch:{
			isSalesDataActive(newVal,oldVal){
			    for(let i=0;i<this.ListData.length;i++){
			    	if(this.ListData[i].type==this.isSalesDataActive){
			    		this.CurrentListData=this.ListData[i];
			    		this.CurrentExplain=this.ListData[i].explain[0];
			    		break;
			    	}
			    }
			   // console.log(this.CurrentExplain);
			},
			datetimeType(newVal,oldVal){
				if(newVal!="day"){
					document.querySelectorAll('.yd-datetime-item')[1].style.display="none";
				}else{
					document.querySelectorAll('.yd-datetime-item')[1].style.display="block";
				}
				console.log(this.monthFormat);
			}
			},
		    methods: {
		    	reload(){
			      this.isRouterAlive = false;
			      this.$nextTick(function(){
			        this.isRouterAlive = true;
			      })
			    },
			    BackPage(){
		    		//this.$router.push({path:'/examine/nav'});
		    		if (typeof window.android != "undefined") {
				        window.android.finishActivity();
				      }
			  },
		      changeIndex(index){
			      console.log(this.$refs.mySwiper.swiper)
			      this.$refs.mySwiper.swiper.slideTo(index, 1000, true);//切换到第一个slide，速度为1秒
			      
			    }
		    },mounted() {
		    	this.CurrentListData=this.ListData[0];
		    	this.CurrentExplain=this.ListData[0].explain[0];
		    }


  }
</script>

<style lang="scss" scoped>
	.SalesReportForm{
		padding-bottom: 10vw;
		
		.Header{
		text-align: center;
		font-size: 4vw;
		padding: 2vw 0;
		background: #8B1428;
		color: #fff;
	}
		
		.listPic{width: 100%;
				img{width: 100%;}
			}
		.SalesDataHead{
			border-bottom:.5vh #ddd solid;
			.ChoseMode{text-align: center;font-size: 3vw;line-height: 9vw;background: #fff;}
			.ChoseMode.active{color: #8B1428;}
		}
		.timeHead{text-align: center;font-size:3vw;line-height:5vh;background: #fff;
			.tips{border: 1px #aaa solid;width:3.5vw;height: 3.5vw;line-height:2.6vh;border-radius: 50%;position: absolute;right: 1vw; margin-top: -4vh;}
			}

		.foot{
			position: fixed;bottom:0;width: 100%;z-index: 10;
			.ChoseMode{text-align: center;font-size: 3.5vw;line-height: 10vw;background: #fff;}
			.ChoseMode.active{background: #8B1428;color: #fff;
			img{color:#fff;}
			}
			
		}
		.tipsMode{
			
			.blackBg{width: 100vw;height: 100vh;position: fixed;top:0;background: #000;opacity: .4;z-index: 1000;}
			.tipsContent{width: 60vw;position: fixed;left: 20vw;top:10vh;z-index: 10005;
			img{width:100%;}
			.ctrlButton{
			background: #ff0;
			width: 56vw;
			height: 8vw;
			position: absolute;
			opacity: 0;
			z-index: 10;
			top:70vw;
			left: 2vw;
			
			}
			}
		}
		
		
		.SelectBar{
			.yd-cell-item{
				.yd-datetime-input,select{font-size:2.5vw;color:#666}}
		}
		
	}
</style>