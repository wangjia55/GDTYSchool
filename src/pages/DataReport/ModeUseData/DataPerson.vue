<template>
	<div class="ModeUseData">

		<div class="Header">
		<el-row>
		  <el-col :span="4"><i class="el-icon-arrow-left" @click="BackPage()"></i></el-col>
		  <el-col :span="16">
		  	
		  	<select class="title" v-model="title">
                <option value="all">全部版块使用数据</option>
                <option value="person" >个人版块使用数据</option>
            </select><i class="el-icon-arrow-down"></i>
		  	
		  </el-col>
		  <el-col :span="4"><div style="font-size: 3vw;padding-top: .5vw;">导出</div></el-col>
		</el-row>
		</div>
		
	<div>
	<el-col class="SelectBar" :span="24">
		<el-col :span="6">
		  <yd-cell-item arrow>
		  	<div slot="left" style="width: 10vw;" @click.stop="isSelectShow = true">{{CurrentDept}}</div>
      		</yd-cell-item>
		</el-col>
		<yd-cityselect v-model="isSelectShow" :callback="DeptResult" :items="district"></yd-cityselect>

		<el-col :span="14">
		<input style="margin-top: .5vw;background: #fff;width: 100%;line-height: 4vw;border: 1px solid #bbb;padding:.4vw;font-size:1.8vw;border-radius:.5vw ;" placeholder="输入经销商代码/店名/销售姓名查询"></input>
		</el-col>
		
		<el-col :span="4" class="search">
			<el-button type="primary" icon="el-icon-search" @click.native="activeImg=ListData[3];Index3=true;">搜索</el-button>
		</el-col>
       </el-col>
	<el-col class="Content" :span="24">
	   <img :src="activeImg"/>
	   <div class="touchToDetail" v-bind:class="{'Index3':Index3}" @click="$router.push({path:'/DataReport/ModeUseData/DataAll'})">
	   	
	   </div>
	</el-col>
	</div>
		
		<el-row class="foot">
		  <el-col :span="12"><div class="ChoseMode active" >
		  	版块使用数据
		  </div></el-col>
		  <el-col :span="12"><div class="ChoseMode" @click="$router.push({path:'/DataReport/ModeUseData/Trend'})">
		  	版块使用趋势
		  </div></el-col>
		</el-row>
		

		
		
	</div>
</template>

<script>

	  export default {

	  	    data() {
	  	    	const that=this;
		      return {
				title:"person",
				CurrentDept:"总部",
				isSelectShow: false,
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
				    Index3:false,
				    ListData:[
				    	"http://qiniu.wqdata.net/upload/20190819/66bb4b60f68a472dba14a0508d53e8b6.jpg",
				    	"http://qiniu.wqdata.net/upload/20190819/0ea8f59b84cf4ca7ac92d6d511cc0806.jpg",
				    	"http://qiniu.wqdata.net/upload/20190819/7d4aeae997bd4b6887bfd26676af2c23.jpg",
				    	"http://qiniu.wqdata.net/upload/20190819/c0c7b44c5daa4fe6be5766a202d5d8d9.jpg",
				    ],
				    activeImg:"http://qiniu.wqdata.net/upload/20190819/66bb4b60f68a472dba14a0508d53e8b6.jpg",
		      }
		    },
		    watch:{
				title(newVal,oldVal){
					if(newVal=="all"){
						this.$router.push({path:'/DataReport/ModeUseData/DataAll'})
					}
				}
			},
		    methods: {
		    	BackPage(){
		    		this.$router.push({path:'/examine/nav'});
//			  		if(typeof(window.android)!="undefined"){
//					window.android.finishActivity();
//					}
			  },
				DeptResult(ret) {
                console.log(ret) ;
                if(ret.itemValue1==""){
                	this.activeImg=this.ListData[0];
                }else if(ret.itemValue2==""){
                	this.activeImg=this.ListData[1];
                	this.CurrentDept=ret.itemName1
                }else{
                	this.activeImg=this.ListData[2];
                	this.CurrentDept=ret.itemName2
                }
                }
		    },mounted() {
		    	
		    }


  }
</script>

<style lang="scss" scoped>
	.ModeUseData{
		
		
		.Header{
		
		text-align: center;
		font-size: 4vw;
		padding: 2vw 0;
		background: #8B1428;
		color: #fff;
		.title{color:#fff;border:none;
		option{color: #8B1428;}
		option:hover{
                color: #8B1428;
            }
		}
	}

	
	.Content{
		padding-bottom: 10vw;

		img{width: 100%;}

		.touchToDetail{
			width: 10vw;
			height: 113vw;
			background: #ff0;
			position: absolute;
			opacity: 0;
			z-index: 10;
			top:24vw;
			right: 6vw;
			
		}
		.touchToDetail.Index3{right: 3vw;}
	}
	
	
		.SelectBar{
			height: 7vw;
			.search{
				text-align: center;
				.el-button.el-button--primary{padding: 1vw;margin-top: .8vw;}
			}
		}
		.foot{
			position: fixed;bottom:0;width: 100%;z-index: 10;
			.ChoseMode{text-align: center;font-size: 3.5vw;line-height: 10vw;background: #fff;}
			.ChoseMode.active{background: #8B1428;color: #fff;
			img{color:#fff;}
			}
			
		}

	}
</style>