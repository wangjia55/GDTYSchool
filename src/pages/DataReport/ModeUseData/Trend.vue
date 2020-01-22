<template>
	<div class="ModeUseTrend">

		<div class="Header">
		<el-row>
		  <el-col :span="4"><i class="el-icon-arrow-left" @click="BackPage()"></i></el-col>
		  <el-col :span="16">版块使用趋势</el-col>
		  <el-col :span="4"><div style="font-size: 3vw;padding-top: .5vw;width: 15vw;">导出</div></el-col>
		</el-row>
		</div>
		
		<el-col class="SelectBar" :span="24">
			
		<el-col :span="4">
		<yd-cell-item arrow type="label">
            <select slot="right" v-model="datetimeType">
                <option value="date">日</option>
                <option value="month">月</option>
                <option value="quarter">季</option>
                <option value="year">年</option>
            </select>
        </yd-cell-item>
		</el-col>
		
		<el-col :span="5">
		  <yd-cell-item arrow @click.native="openDatetime">
		  	<yd-datetime ref="datetime" type="date" v-model="datetime0" slot="right" style="display:none" :callback="DateResult"	></yd-datetime>
		  	<div slot="left" style="width: 15vw;" >{{showDate}}</div>
      		</yd-cell-item>
		</el-col>
		
		
		<el-col :span="5">
		  <yd-cell-item arrow>
		  	<div slot="left" style="width: 15vw;"  @click.stop="isSelectShow = true">{{CurrentDept}}</div>
      		</yd-cell-item>
		</el-col>
		<yd-cityselect v-model="isSelectShow" :callback="DeptResult" :items="district"></yd-cityselect>
		
		<el-col :span="5">
		<yd-cell-item arrow type="label">
            <select slot="right">
                <option value="1">集团总</option>
            </select>
        </yd-cell-item>
      </el-col>

		<el-col :span="5">
		<yd-cell-item arrow type="label">
            <select slot="right">
                <option value="1">全部板块</option>
                <option value="2">培训视频</option>
                <option value="3">考试</option>
                <option value="3">客户录入</option>
                <option value="3">积分商城</option>
                <option value="3">两点配置</option>
            </select>
        </yd-cell-item>
        </el-col>
        </el-col>
		<el-col class="Content" :span="24">
			<div class="IsQuarterShow" v-if="IsQuarterShow">
				<el-radio-group v-model="radio1">
			      <el-radio-button label="Q1季"></el-radio-button>
			      <el-radio-button label="Q2季"></el-radio-button>
			      <el-radio-button label="Q3季"></el-radio-button>
			      <el-radio-button label="Q4季"></el-radio-button>
			    </el-radio-group>
			</div>
			<img src="http://qiniu.wqdata.net/upload/20190819/8326f8ddc36a4aa490863b73c5e96a36.jpg" />
			<img src="http://qiniu.wqdata.net/upload/20190819/efbcdf46522348bba84f23d35bdcca9d.jpg" />
		</el-col>
        
        
		
		

		

		
		
		<el-row class="foot">
		  <el-col :span="12"><div class="ChoseMode" @click="$router.push({path:'/DataReport/ModeUseData/DataAll'})">
		  	版块使用数据
		  </div></el-col>
		  <el-col :span="12"><div class="ChoseMode active">
		  	版块使用趋势
		  </div></el-col>
		</el-row>
		

		
		
	</div>
</template>

<script>

	  export default {

	  	    data() {
		      return {
				datetime0: '2019-09-01',
		      	showDate:"2019-09-01",
		      	datetimeType:'date',
		      	IsQuarterShow:false,
		      	radio1:"Q1季",
		      	isSelectShow: false,
		      	CurrentDept:"总部",
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
		      }
		    },
		    watch:{
				datetimeType(newVal,oldVal){
					document.querySelectorAll('.yd-datetime-item')[1].style.display="block";
					document.querySelectorAll('.yd-datetime-item')[2].style.display="block";
					
				if(this.datetimeType=="year"||this.datetimeType=="quarter"){
					document.querySelectorAll('.yd-datetime-item')[1].style.display="none";
					document.querySelectorAll('.yd-datetime-item')[2].style.display="none";
					this.showDate=this.datetime0.substr(0,this.datetime0.length-6);
					if(this.datetimeType=="quarter"){
						this.IsQuarterShow=true;
					}else{
						this.IsQuarterShow=false;
					}
				}else if(this.datetimeType=="month"){
					document.querySelectorAll('.yd-datetime-item')[2].style.display="none";
					this.showDate=this.datetime0.substr(0,this.datetime0.length-3);
				}else{
					this.showDate=this.datetime0;
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
                if(ret.itemValue2==""){
                	this.CurrentDept=ret.itemName1
                }else{
                	this.CurrentDept=ret.itemName2
                }
            },DateResult(){
            	if(this.datetimeType=="year"){
					this.showDate=this.datetime0.substr(0,this.datetime0.length-6);
				}else if(this.datetimeType=="month"){
					this.showDate=this.datetime0.substr(0,this.datetime0.length-3);
				}else{
					this.showDate=this.datetime0;
				}
            },openDatetime() {
            	console.log(this.$refs.datetime);
                this.$refs.datetime.open();
            }
		   },
		   
		   mounted() {
		    	
		    }


  }
</script>

<style lang="scss" scoped>
	.ModeUseTrend{
		padding-bottom: 10vw;
		
		.Header{
		text-align: center;
		font-size: 4vw;
		padding: 2vw 0;
		background: #8B1428;
		color: #fff;
	}
		.Content{
			.IsQuarterShow{text-align: center;padding: 1vh;background: #fff;}
			img{width: 100%;}
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