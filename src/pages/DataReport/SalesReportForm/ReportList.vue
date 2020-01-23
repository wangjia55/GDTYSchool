<template>
	<div class="SalesReportForm" v-if="isRouterAlive">

<div class="Header">
		<el-row>
		  <el-col :span="4"><i class="el-icon-arrow-left" @click="BackPage()"></i></el-col>
		  <el-col :span="16" v-if="isListShow==false">总部</el-col>
		  <el-col :span="16" v-if="isListShow==true">
		  	
		  	<span  @click.stop="isSelectShow = true">{{CurrentDept}}<i class="el-icon-arrow-down"></i></span>
		  	
		  </el-col>
		  <el-col :span="4"><i class="el-icon-refresh-right" @click="reload()"></i></el-col>
		</el-row>
		
		
		<yd-cityselect v-model="isSelectShow" :callback="DeptResult" :items="district"></yd-cityselect>
		
		</div>
		
		<el-row v-if="isListShow==false">
		<el-col class="SelectBar" :span="24">
		<el-col :span="8">
		  <yd-cell-item arrow>
            <yd-datetime type="month" v-model="datetime0" slot="right" ></yd-datetime>
      	</yd-cell-item>
		</el-col>
		
		<el-col :span="8">
		<yd-cell-item arrow type="label">
            <select slot="right" v-model="datetimeType">
                <option value="day">日</option>
                <option value="month">月</option>
                <option value="year">年</option>
            </select>
        </yd-cell-item>
		</el-col>

		<el-col :span="8">
		<yd-cell-item arrow type="label">
            <select slot="right">
                <option value="1">全部</option>
                <option value="2">ATS-L</option>
                <option value="3">CT6</option>
                <option value="3">XT5</option>
                <option value="3">XTS</option>
                <option value="3">XT4</option>
                <option value="3">XT6</option>
            </select>
        </yd-cell-item>
		</el-col>
		</el-col>
		<div>
			
			
			<img width="100%" :src="CurrenrImg" @click="toDetail()"/>
			<div class="MonthTouch" v-if="datetimeType=='month'">
				<div class="left" @click="datetimeType='month';toDetail()"></div>
				<div class="right" @click="datetimeType='quarter';toDetail()"></div>
			</div>
		</div>
		</el-row>
		

		<el-row v-if="isListShow==true">
		  <el-col :span="24">
		  	<el-row class="SalesDataHead">
			  <el-col :span="8"><div class="ChoseMode" :class="{ 'active': isSalesDataActive==1 }" @click="isSalesDataActive=1;changeIndex(0);">全部数据</div></el-col>
			  <el-col :span="8"><div class="ChoseMode" :class="{ 'active': isSalesDataActive==2 }" @click="isSalesDataActive=2;changeIndex(0);">展厅数据</div></el-col>
			  <el-col :span="8"><div class="ChoseMode" :class="{ 'active': isSalesDataActive==3 }" @click="isSalesDataActive=3;changeIndex(0);">车展数据</div></el-col>
		  	</el-row>
		  </el-col>
		  <div class="timeHead">
			{{showDate}}
			<div class="tips" @click="isTipsMode=true">?</div>
		</div>

		<swiper :options="swiperOption" ref="mySwiper">

	      <swiper-slide  class="listPic" v-for="item in CurrentListData.Data"><img :src="item"/></swiper-slide>

	   </swiper>
		</el-row>
		
		
		
		
		<el-row class="foot">
		  <el-col :span="12"><div class="ChoseMode" @click="$router.push({path:'/DataReport/SalesReportForm/SalesData'})">
		  	<img id="dataIcon" :src='require("@/assets/images/DataReport/data_icon_n.svg")'/>

		  	数据
		  </div></el-col>
		  <el-col :span="12"><div class="ChoseMode active">
		  	<img id="listIcon" :src='require("@/assets/images/DataReport/list_icon_h.svg")'/>
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
		      	isRouterAlive:true,
		      	isListShow:false,
		      	isSelectShow: false,
		      	CurrentDept:"总部",
		      	radio1:"Q1季",
		      	district: [
				    {"v": "","n": "总部",
				     "c":  [{"v": "","n": "不限"},
				    ]},
				    {"v": "1","n": "Cadillac一区",
				     "c":  [{"v": "","n": "不限"},
				            {"v": "11","n": "陈氚"},
				            {"v": "12","n": "祝华俊"},
				            {"v": "13","n": "顾佳帅"},
				    ]},
					{"v": "2","n": "Cadillac二区",
				     "c":  [{"v": "","n": "不限"},
				            {"v": "21","n": "陈智康"},
				            {"v": "22","n": "俞游农"},
				            {"v": "23","n": "鹿存波"},
				    ]},
				    {"v": "3","n": "Cadillac三区",
				     "c":  [{"v": "","n": "不限"},
				            {"v": "31","n": "倪文彬"},
				            {"v": "32","n": "张东京"},
				            {"v": "33","n": "许达"},
				    ]},
				    {"v": "4","n": "Cadillac四区",
				     "c":  [{"v": "","n": "不限"},
				            {"v": "41","n": "吴缜"},
				            {"v": "42","n": "李鹏"},
				            {"v": "43","n": "于雷"},
				    ]},
				    {"v": "5","n": "Cadillac五区",
				     "c":  [{"v": "","n": "不限"},
				            {"v": "51","n": "吴军"},
				            {"v": "52","n": "宋杨"},
				            {"v": "53","n": "刘爽"},
				    ]},
				    {"v": "6","n": "Cadillac六区",
				     "c":  [{"v": "","n": "不限"},
				            {"v": "61","n": "李文涛"},
				            {"v": "62","n": "王朋楠"},
				            {"v": "63","n": "黄超"},
				    ]},
				            
				        ],

		      	
		      	

		      	//报表
		      	datetime0: '2019-09',
		      	showDate:"2019-09-01",
		      	datetimeType:'day',
		      	monthFormat:'<span>{value}月</span>',
		      	CurrenrImg:"http://qiniu.wqdata.net/upload/20190819/5e3cac50ec414da6a172e72647857bc7.jpg",
				datetimeTypeImg:[
				{type:"day" , url:"http://qiniu.wqdata.net/upload/20190819/5e3cac50ec414da6a172e72647857bc7.jpg"},
				{type:"month" , url:"http://qiniu.wqdata.net/upload/20190819/f2eb9d55e8f748e9bf518b3c3e92790c.jpg"},
				{type:"year" , url:"http://qiniu.wqdata.net/upload/20190819/9c91d6555d424474b85274062c888a26.jpg"},
				{type:"quarter" , url:"http://qiniu.wqdata.net/upload/20190808/b1ac75aedfc94bd9bb3e5a5e77cf9e85.png"},
				],
				
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
		      	isTipsMode:false,
		      	isSalesDataActive:1,
		      	ListData:[
		      	
		      	
		      	{	type:1,datetimeType:"day",
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
		      },{	type:2,datetimeType:"day",
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
		      },{	type:3,datetimeType:"day",
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
		      },
		      
		      
		      
		      {	type:1,datetimeType:"month",
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190813/fd1f3dd6340b48658a512a0d79591df1.png",
		      			"http://qiniu.wqdata.net/upload/20190813/5f6ffe8607a94fa892279a53cfa8a261.png",
		      			"http://qiniu.wqdata.net/upload/20190813/5b9d4f18ac7740da80c24f478015b374.png"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      },{	type:2,datetimeType:"month",
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190813/924abd8078a24793ae3aac7c8cd029d4.png",
		      			"http://qiniu.wqdata.net/upload/20190813/543a2eec66c64fd49b1367f3bd204076.png",
		      			"http://qiniu.wqdata.net/upload/20190813/ea8e6356844d4015b3d1fa9fdbd37bba.png"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      },{	type:3,datetimeType:"month",
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190813/d5ffa0d8d4b14f3dbc9ad3822f6e7bf8.png",
		      			"http://qiniu.wqdata.net/upload/20190813/a0d1e780fdf24d319d5d145d54208056.png",
		      			"http://qiniu.wqdata.net/upload/20190813/6b037d4747fd4dfabe438fcb5b854ab9.png"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      },

		      
		      {	type:1,datetimeType:"year",
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190813/6384cdb422d64bd58f61eff92cc089ac.jpg",
		      			"http://qiniu.wqdata.net/upload/20190813/a73acdc2cd5a465cba1173725864a122.jpg",
		      			"http://qiniu.wqdata.net/upload/20190813/90e2dffba17c4ebfb9ce720296d67d62.jpg"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      },{	type:2,datetimeType:"year",
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190813/7969aeafebf34aa981e50f962e03527c.jpg",
		      			"http://qiniu.wqdata.net/upload/20190813/0b61ab519b0b448f8aa16b335d4a9d5c.jpg",
		      			"http://qiniu.wqdata.net/upload/20190813/843321e0957d4905b2f14b1f8d995bdc.jpg"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      },{	type:3,datetimeType:"year",
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190813/6dbea5ea0bb84d36bc77c5c1260b066b.jpg",
		      			"http://qiniu.wqdata.net/upload/20190813/99befc376d53487eaae6f34d2cbf6af1.jpg",
		      			"http://qiniu.wqdata.net/upload/20190813/3a5365c45fc5431087231f51dab8e0d2.jpg"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      },
		      
		      {	type:1,datetimeType:"quarter",
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190815/0de421318d034a72b6c4a016ab095a36.jpg",
		      			"http://qiniu.wqdata.net/upload/20190815/e93f7d64e8754aa980d4ff382b7dbeed.jpg",
		      			"http://qiniu.wqdata.net/upload/20190815/07ebaa333dd84d5eb584ea768bc44166.jpg"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      },{	type:2,datetimeType:"quarter",
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190815/f10ee472638a45ada9810c7098386799.jpg",
		      			"http://qiniu.wqdata.net/upload/20190815/e122034f9a56472fbd2fe94605cedb5e.jpg",
		      			"http://qiniu.wqdata.net/upload/20190815/82e25352b1604e579b3487b3405d9556.jpg"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      },{	type:3,datetimeType:"quarter",
		      		Data:[
		      			"http://qiniu.wqdata.net/upload/20190815/d9fa9c49c0b74de99044ce292656e420.jpg",
		      			"http://qiniu.wqdata.net/upload/20190815/0c1e135e7d6247a2ba28df365b06c422.jpg",
		      			"http://qiniu.wqdata.net/upload/20190815/cb6c487a82334540851a59484ada95b2.jpg"
		      		],
		      		explain:[
		      		"http://qiniu.wqdata.net/upload/20190819/8df563474a674777bd6dec4207395792.png",
		      		"http://qiniu.wqdata.net/upload/20190819/2c8751601dc548aeb0934494b3def274.png",
		      		"http://qiniu.wqdata.net/upload/20190819/3f4fb14fccec457081560254155ec32c.png"
		      		]
		      },
		      
		      
		      
		      	],
		      	CurrentListData:[],
		      	CurrentExplain:"",
		      	

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
			    	if(this.ListData[i].type==this.isSalesDataActive&&this.ListData[i].datetimeType==this.datetimeType){
			    		this.CurrentListData=this.ListData[i];
			    		console.log(this.ListData[i]);
			    		break;
			    	}
			    }
			    
			},
			datetimeType(newVal,oldVal){

				if(this.datetimeType!="day"){
					if(this.datetimeType=="month"){
						this.showDate=this.datetime0;
					}else{
						this.showDate=this.datetime0.substr(0,this.datetime0.length-3)
					}
					document.querySelectorAll('.yd-datetime-item')[1].style.display="none";
					if(this.datetimeType=="quarter"){
					}
					
				}else{
					this.showDate=this.datetime0+"-01"
					document.querySelectorAll('.yd-datetime-item')[1].style.display="block";
					
				}
				for(let i=0;i<this.datetimeTypeImg.length;i++){
					if(this.datetimeType==this.datetimeTypeImg[i].type){
						this.CurrenrImg=this.datetimeTypeImg[i].url;
					}
				}
				
				for(let i=0;i<this.ListData.length;i++){
					
			    	if(this.ListData[i].type==this.isSalesDataActive&&this.ListData[i].datetimeType==this.datetimeType){
			    		this.CurrentListData=this.ListData[i];
			    		console.log(this.ListData[i]);
			    		break;
			    	}
			    }
				
				
			}
			},
		    methods: {
		    	reload(){
			      this.isRouterAlive = false;
			      this.$nextTick(function(){
			        this.isRouterAlive = true;
			      })
			    },
			  DeptResult(ret) {
                console.log(ret) ;
                if(ret.itemValue2==""){
                	this.CurrentDept=ret.itemName1
                }else{
                	this.CurrentDept=ret.itemName2
                }
            },
            toDetail(){
            	
            		this.isListShow=true;
            		this.isSalesDataActive=1;
            	
            	
            	
            },
		      changeIndex(index){
			      console.log(this.$refs.mySwiper.swiper)
			      this.$refs.mySwiper.swiper.slideTo(index, 1000, true);//切换到第一个slide，速度为1秒
			      
			    },
			  backDatetime(){
			  	this.isListShow=false;
			  },
			  BackPage(){
			  	if(this.isListShow==false){
		    		//this.$router.push({path:'/examine/nav'});
		    		if (typeof window.android != "undefined") {
				        window.android.finishActivity();
				      }
			  	}else{
			  		this.isListShow=false;
			  		this.CurrenrImg=this.datetimeTypeImg[0].url;
			  		this.datetimeType="day"
			  		this.CurrentDept="总部"
			  	}
			  }
		    },mounted() {
		    	window.vue = this;
		    	this.CurrentListData=this.ListData[0];
		    	this.CurrentExplain=this.ListData[0].explain[0];
		    }


  }
</script>

<style lang="scss" scoped>


	
	.SalesReportForm{
		
	.Header{
		text-align: center;
		font-size: 4vw;
		padding: 2vw 0;
		background: #8B1428;
		color: #fff;
		
		
	}
		
		padding-bottom: 10vw;
		.listPic{width: 100%;
				img{width: 100%;}
			}
		
		.MonthTouch{
			
		    width: 96vw;
			height: 53vw;
			position: absolute;
			opacity: 0;
			z-index: 10;
			top:10vw;
			left: 2vw;
			.left{
				background: #f00;
				width: 72vw;
				height: 53vw;
				float: left;
			}
			.right{
				background: #0f0;
				width: 23.3vw;
				height: 53vw;
				float: right;
			}
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