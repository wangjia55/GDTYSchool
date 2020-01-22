<template>
    <div class="PersonalityTest">
    		<!--<div class="LogoTitle" v-if="!isNaN(this.CurrentQuestion.Num)"><img src="http://qiniu.wqdata.net/upload/20190723/b4c591e585f649d4ac81bae15919ba1e.png"/></div>-->
    		
    		<div class="CoverPage" v-if="StepMode==1">
    			
    			<div class="LogoPic">
    				<img src="http://qiniu.wqdata.net/static/img/carApp/Psychological/coverPic.png"/>
    			</div>
    			
    			<div class="LogoTitle">
    				<img src="http://qiniu.wqdata.net/static/img/carApp/Psychological/title.png"/>
    			</div>
    			<div class="text">
    				测测你最适合的座驾
    			</div>
    			<div class="NextStep" @click="toFrom">开始测试</div>
    		</div>
    		
    		<div class="InputMode" v-if="StepMode==2">
    			
    			<div class="titleTips">
    				<div class="peopleSum">已有{{PeopleSum+1000}}人完成测试</div>
    				<div class="tip">填写准确信息，让我们来帮你选车</div>
    			</div>
    			

			    <div class="inputRow">
			    	<input slot="right" class="input" v-model="UserInfo.username" type="text" placeholder="请输入您的姓名">
			    </div>
			    
			    <div class="inputRow">
			    	<input slot="right" class="input" v-model="UserInfo.phone" type="number" placeholder="请输入手机号码">
			    </div>
			    
			    <div class="inputRow">
			    	<select class="input" v-model="UserInfo.age" placeholder="请选择您的年龄">
			    		<option value="null" style="display: none;" disabled>请选择您的年龄</option>
		                <option value="1">18~30岁</option>
		                <option value="2">31~40岁</option>
		                <option value="3">41~50岁</option>
		                <option value="4">51岁以上</option>
		            </select>
			    </div>
			    
			    <div class="inputRow">
				    <div class="sexChose" :class="{ 'active': UserInfo.sex=='男' }" @click="UserInfo.sex='男'">男</div>
				    <div class="sexChose" :class="{ 'active': UserInfo.sex=='女' }" @click="UserInfo.sex='女'">女</div>
			    </div>
			    
			    
			    <div class="NextStep" @click="startTotest">下一步</div>
			    <div class="JumpStep" @click="jumpTotest">跳过</div>
			    
			    <!--<div class="JumpForm" @click="jumpTotest"><img src="http://qiniu.wqdata.net/upload/20190725/d7e33f436a9843839e1733f15b50e0ff.png"/></div>-->
			    
    		</div>
    	
    	
    		<div class="QuestionMode" v-if="StepMode==3">
	        	<div class="title">
	        		{{CurrentQuestion.content}}
	        		<!--<div class="ResMode" v-if="CurrentQuestion.type!=0">
	        			<img v-if="CurrentQuestion.type==1" :src="CurrentQuestion.url"  />
	        			<audio v-if="CurrentQuestion.type==2" :src="CurrentQuestion.url"   controls="controls"></audio>
	        			<video v-if="CurrentQuestion.type==3" :src="CurrentQuestion.url"  controls="controls"/>
	        		</div>-->
	        	</div>
	        	<div v-for="item in CurrentQuestion.option" >
	        		<div v-if="CurrentQuestion.type==0" class="option" @click="jumpNextQuestion(item,0)" >{{item.value+" "+item.content}}</div>
	        		<div v-if="CurrentQuestion.type==1" class="optionImg" @click="jumpNextQuestion(item,1)" ><img :src="item.content"  /></div>
	        	</div>
	       </div>
	       

    </div>
</template>

<script type="text/javascript">
export default {
  data() {
    // 数据
    return {
    	DataBaseUrl:"http://139.224.11.210:8081/",
    	PeopleSum:"",
    	StepMode:1,
    	Editable:true,
    	UserInfo:{"accountId":this.$route.query.accountId,
    	"username":"",
    	"phone":"",
    	"answer":"1",
    	"series":"",
    	"xg":"",
    	"sex":"",
    	"age":"null",
    	},
    	questionList:[//type:0 文本 1图片 2音频 3视频
    	{Num:"1",type:"0",
    	content:"您记忆中最熟悉的一组明星是？",
    	option:[
    	{value:"A",content:"周润发/赵雅芝",target:"4"},
    	{value:"B",content:"陈小春/应采儿",target:"2"},
    	{value:"C",content:"张国荣/叶倩文",target:"4"},
    	{value:"D",content:"刘德华/张曼玉",target:"2"},
    	{value:"E",content:"冯绍峰/赵丽颖",target:"2"},
    	{value:"F",content:"鹿晗/关晓彤",target:"2"},
    	]},
    	{Num:"2",type:"0",
    	content:"您记忆中最熟悉的电视人物/动漫形象是？",
    	option:[
    	{value:"A",content:"少年包青天",target:"4"},
    	{value:"B",content:"樱木花道",target:"4"},
    	{value:"C",content:"路飞/鸣人",target:"3"},
    	{value:"D",content:"埼玉/杰诺斯",target:"3"},
    	{value:"E",content:"情深深雨濛濛",target:"4"},
    	{value:"F",content:"延禧攻略",target:"3"},
    	]},
    	{Num:"3",type:"1",
    	content:"与朋友聚会时，你会选择？",
    	option:[
    	{value:"A",content:require("@/assets/images/Psychological/test/3_A1.png"),target:"8"},
    	{value:"B",content:require("@/assets/images/Psychological/test/3_B1.png"),target:"8"},
    	{value:"C",content:require("@/assets/images/Psychological/test/3_C1.png"),target:"8"},
    	{value:"D",content:require("@/assets/images/Psychological/test/3_D1.png"),target:"4"},
    	{value:"E",content:require("@/assets/images/Psychological/test/3_E1.png"),target:"4"},
    	{value:"F",content:require("@/assets/images/Psychological/test/3_F1.png"),target:"4"},
    	]},
    	{Num:"4",type:"0",
    	content:"日常生活中，你的交际应酬哪一类型较多？",
    	option:[
    	{value:"A",content:"商务生意",target:"5"},
    	{value:"B",content:"亲戚朋友",target:"7"}
    	]},
    	{Num:"5",type:"1",
    	content:"关于自驾旅行，更符合您的说法是？",
    	option:[
    	{value:"A",content:require("@/assets/images/Psychological/test/5_A1.png"),target:"15"},
    	{value:"B",content:require("@/assets/images/Psychological/test/5_B1.png"),target:"18"}
    	]},
    	{Num:"7",type:"0",url:"",content:"与家人出游时，通常是几个人？",
    	option:[
    	{value:"A",content:"2",target:"12"},
    	{value:"B",content:"3",target:"12"},
    	{value:"C",content:"4",target:"21"},
    	{value:"D",content:"4个以上",target:"21"},
    	]},
    	{Num:"8",type:"0",url:"",content:"与家人出游时，通常是几个人？",
    	option:[
    	{value:"A",content:"2",target:"9"},
    	{value:"B",content:"3",target:"9"},

    	]},
    	{Num:"9",type:"1",
    	content:"您更喜欢吃哪种水果？",
    	option:[
    	{value:"A",content:require("@/assets/images/Psychological/test/9_A1.png"),target:"10"},
    	{value:"B",content:require("@/assets/images/Psychological/test/9_B1.png"),target:"10"},
    	{value:"C",content:require("@/assets/images/Psychological/test/9_C1.png"),target:"10"},
    	]},
    	{Num:"10",type:"1",url:"",content:"如果您可以成为一种动物，您希望自己是哪种？",
    	option:[
    	{value:"A",content:require("@/assets/images/Psychological/test/10_A1.png"),target:"11"},
    	{value:"B",content:require("@/assets/images/Psychological/test/10_B1.png"),target:"11"},
    	{value:"C",content:require("@/assets/images/Psychological/test/10_C1.png"),target:"11"},
    	]},
    	{Num:"11",type:"0",url:"",content:"您是怎样吃薯条的？",
    	option:[
    	{value:"A",content:"不沾酱，直接吃薯条",target:"A",type:"XT4",xg:"2"},
    	{value:"B",content:"将蕃茄酱挤在干净的容器上，然后用薯条沾着品尝",target:"B",type:"XT4",xg:"3"},
    	{value:"C",content:"将番茄酱包装沿线撕开，把薯条放入其中沾酱，然后品尝",target:"C",type:"XT4",xg:"4"},
    	{value:"D",content:"将番茄酱包装开一个小口，把酱一点点的挤到薯条上，然后品尝",target:"D",type:"XT4",xg:"1"},
    	]},
    	{Num:"12",type:"1",url:"",content:"如果必须与一个您讨厌的动物或昆虫在一起生活，您能容忍哪一个？",
    	option:[
    	{value:"A",content:require("@/assets/images/Psychological/test/12_A1.png"),target:"13"},
    	{value:"B",content:require("@/assets/images/Psychological/test/12_B1.png"),target:"13"},
    	{value:"C",content:require("@/assets/images/Psychological/test/12_C1.png"),target:"13"},
    	]},
    	{Num:"13",type:"1",url:"",content:"您更喜欢以下哪种天气现象？",
    	option:[
    	{value:"A",content:require("@/assets/images/Psychological/test/13_A1.png"),target:"14"},
    	{value:"B",content:require("@/assets/images/Psychological/test/13_B1.png"),target:"14"},
    	{value:"C",content:require("@/assets/images/Psychological/test/13_C1.png"),target:"14"},
    	]},
    	{Num:"14",type:"0",url:"",content:"理发店理发，您会如何与发型师沟通？",
    	option:[
    	{value:"A",content:"丢一堆杂志要他决定",target:"A",type:"XT5",xg:"4"},
    	{value:"B",content:"拿照片请他照着修剪",target:"B",type:"XT5",xg:"4"},
    	{value:"C",content:"任由理发师帮您设计",target:"C",type:"XT5",xg:"1"},
    	{value:"D",content:"口头说明大概要修剪的发型",target:"D",type:"XT5",xg:"2"},
    	]},
    	{Num:"15",type:"1",url:"",content:"您认为自己更喜欢在以下哪个城市中生活？",
    	option:[
    	{value:"A",content:require("@/assets/images/Psychological/test/15_A1.png"),target:"16"},
    	{value:"B",content:require("@/assets/images/Psychological/test/15_B1.png"),target:"16"},
    	{value:"C",content:require("@/assets/images/Psychological/test/15_C1.png"),target:"16"},
    	]},
    	{Num:"16",type:"0",url:"",content:"在临睡前发微信，您比较习惯哪种方式？",
    	option:[
    	{value:"A",content:"发完短信再上床睡觉",target:"17"},
    	{value:"B",content:"躺在床上发短信",target:"17"}
    	]},
    	{Num:"17",type:"0",url:"",content:"当您的手上有十张纸要您丢掉时,您会以什么样的方式丢掉呢？",
    	option:[
    	{value:"A",content:"就这样丢掉",target:"A",type:"CT6",xg:"2"},
    	{value:"B",content:"对折后丢掉",target:"B",type:"CT6",xg:"2"},
    	{value:"C",content:"拧弯了之后丢掉",target:"C",type:"CT6",xg:"2"},
    	{value:"D",content:"揉成一团后丢掉",target:"D",type:"CT6",xg:"4"},
    	]},
    	{Num:"18",type:"0",url:"",content:"您的衣服一般是挂在衣橱里的还是叠着的？",
    	option:[
    	{value:"A",content:"挂着",target:"19"},
    	{value:"B",content:"叠着",target:"19"}
    	]},
    	{Num:"19",type:"0",url:"",content:"如果给您一杯水您会一口气喝完还是慢慢地啜一小口一小口地喝？？",
    	option:[
    	{value:"A",content:"全部喝完",target:"20"},
    	{value:"B",content:"慢慢喝",target:"20"}
    	]},
    	{Num:"20",type:"0",url:"",content:"突然下起雨来，家中的伞竟然都是坏的，雨越来越大，您实在别无选择，那会选择哪一把？",
    	option:[
    	{value:"A",content:"有一个大洞的伞",target:"A",type:"XT6",xg:"1"},
    	{value:"B",content:"有一个小洞的伞",target:"B",type:"XT6",xg:"4"},
    	{value:"C",content:"伞柄弯曲了的伞",target:"C",type:"XT6",xg:"1"},
    	{value:"D",content:"伞柄不弯曲但是很短的伞",target:"D",type:"XT6",xg:"4"},
    	]},
    	{Num:"21",type:"0",url:"",content:"一个人在餐厅吃饭的时候，您更愿意坐哪里？",
    	option:[
    	{value:"A",content:"靠窗的座位",target:"22"},
    	{value:"B",content:"餐厅中央",target:"22"},
    	{value:"C",content:"靠近出口",target:"22"},
    	]},
    	{Num:"22",type:"0",url:"",content:"您希望自己的窗口在一座30层大楼的第几层？",
    	option:[
    	{value:"A",content:"七层",target:"23"},
    	{value:"B",content:"一层",target:"23"},
    	{value:"C",content:"二十三层",target:"23"},
    	{value:"C",content:"三十层",target:"23"},
    	]},
    	{Num:"23",type:"1",url:"",content:"如果本世纪最壮观的流星雨将会来临，您会选择在哪里看这场流星呢？",
    	option:[
    	{value:"A",content:require("@/assets/images/Psychological/test/23_A1.png"),target:"E",type:"XT6",xg:"4"},
    	{value:"B",content:require("@/assets/images/Psychological/test/23_B1.png"),target:"F",type:"XT6",xg:"2"},
    	{value:"C",content:require("@/assets/images/Psychological/test/23_C1.png"),target:"G",type:"XT6",xg:"3"},
    	{value:"D",content:require("@/assets/images/Psychological/test/23_D1.png"),target:"H",type:"XT6",xg:"1"},
    	]},
    	
    	
    	],
    	CurrentQuestion:{},
		Jumping:false
    }
  },
  computed: {

  },
  components: {
    // 组件名称
  },
  methods: {
    // 事件函数
    toFrom:function(){
    	this.StepMode=2;
    },
    startTotest:function(){
    	if(this.UserInfo.username==""){
    		this.$dialog.alert({mes: '请输入姓名'});
    	}else if(this.UserInfo.phone==""||!(/^1[3456789]\d{9}$/.test(this.UserInfo.phone))){
    		this.$dialog.alert({mes: '请输入正确的手机号'});
    	}else{
    		this.StepMode=3;
    	}
    },
    jumpTotest:function(){
    	this.StepMode=3;
    },
    jumpNextQuestion:function(item,type){
    	var that=this;
    	var t;
		
		
		if(!this.Jumping){
			this.Jumping=true;
			
			if(type==1){
			this.changeImg(item.content);
		}
			//console.log(item.content)
			t = setTimeout(function (){
			that.Jumping=false;
		    that.ToChosenTarget(item);
		}, 200);
		}
   },
   changeImg:function(url){
   		let a=url.split("_");
   		//console.log(a);
   		let num=a[0].substr(a[0].length-2,2);
   		if(isNaN(num)){
   			num=a[0].substr(a[0].length-1,1)
   		}
   		let value=a[1].substr(0,1);
   		for(let i=0;i<this.questionList.length;i++){
    			if(this.questionList[i].Num==num){
    				console.log(this.questionList[i]);
    				for(let j=0;j<this.questionList[i].option.length;j++){
    					if(this.questionList[i].option[j].value==value){
    						this.questionList[i].option[j].content=require("@/assets/images/Psychological/test/"+num+"_"+value+"2.png");
    					}
    				}
    			}
    			
    		}
   		
   },
   ToChosenTarget:function(item){
    		//console.log(item);
    		if(this.Editable){
    			if(!isNaN(item.target)){
    			for(let i=0;i<this.questionList.length;i++){
    			if(this.questionList[i].Num==item.target){
    				this.CurrentQuestion=this.questionList[i];
    				this.UserInfo.answer=this.UserInfo.answer+item.value+","+item.target;
    				break;
    			}
    			
    		}
    		} else{
    				this.Editable=false;
    				this.UserInfo.answer=this.UserInfo.answer+item.value
    				this.UserInfo.series=item.type;
    				this.UserInfo.xg=item.xg;
    				console.log(this.UserInfo);
    				
    				this.axios.post(this.DataBaseUrl+"xg/addResult",this.UserInfo)
					.then(res=>{
				    console.log('res=>',res);            
					})
    				
    				this.$router.push({path:'/Psychological/result?accountId='+this.$route.query.accountId+"&num="+item.target+"&type="+item.type})
    		}
    		}
    		
    		
    },
    initQuestion:function(){
    	this.StepMode=1;
    	this.CurrentQuestion=this.questionList[0];
    	this.UserInfo={"accountId":this.$route.query.accountId,
    	"username":"",
    	"phone":"",
    	"answer":"1",
    	"series":"",
    	"xg":"",
    	"sex":"男"
    	}

    }
  },

  created: function() {
    
  },
  mounted() {
  			console.log(this.$route.query);
  			this.initQuestion();
  			
  			this.axios.get(this.DataBaseUrl+"xg/getSum").then((response) => {
			  this.PeopleSum=response.data;
			})
  			if(typeof(window.android)!="undefined"){
  			window.android.callAndroidSetState('2')
  			}
			
		}
};
</script>
<style lang="scss" scoped>
.PersonalityTest{
	font-family: SimHei;
	padding-top: 4vh;
	background-color: #f9f9f9;
	min-height: 100vh;
	
::-webkit-input-placeholder { /* WebKit browsers */
  color: #c7c7c7;
}

	.CoverPage{
	text-align: center;
	.LogoPic{margin:auto;
	margin-top: 6vh;
	width:50vw;
	img{width: 100%;}}
	.LogoTitle{margin:4vh 4vw;
	img{width: 100%;}}
	.text{color:#777777;margin-top:5vh;font-size: 3.6vw;}
	.NextStep{margin:auto;margin-top:10vh;width: 35vw;line-height:9.5vw;font-size:3.5vw;text-align: center;background: #b6a36b;color: #fff;border:3px #b6a36b solid;border-radius: 2vw;}
	.NextStep:active{transform:scale(1.05,1.05);}
	}
	
	.InputMode{
		padding: 0 5vw;
		margin-top: 8vh;
		.titleTips{
			text-align: center;
			color: #b6a36b;
			.peopleSum{font-size: 5vw;margin-bottom: 1vh;}
			.tip{font-size: 3vw;margin-bottom: 8vh;}
		}
		.inputRow{
			margin:auto;
			width: 50vw;
			margin-bottom: 4vh;
			background-color: #f9f9f9;
			
			.input{width: 50vw;font-size: 4vw;border:none;border-radius:1vw;font-family: SimHei;background: #f0f0f0;padding: 1vw 3vw;
			}
			.sexChose{text-align: center;border: 1px #b6a36b solid;color:#999;line-height: 8vw;font-size: 3.6vw;display: inline-block;width: 50%;margin: -3px;}
			.sexChose.active{background: #b6a36b;color:#fff;}
		}
		.NextStep{margin:auto;margin-top:15vh;width: 35vw;line-height:9.5vw;font-size:3.5vw;text-align: center;background: #b6a36b;color: #fff;border:3px #b6a36b solid;border-radius: 2vw;}
		.JumpStep{margin:auto;margin-top:2vh;width: 35vw;line-height:9.5vw;font-size:3.5vw;text-align: center;background: #fff;color: #b6a36b;border:3px #b6a36b solid;border-radius: 2vw;}
		.JumpForm{position:  absolute;top:2vh;right: 2vw;width: 10vw;
			img{width: 100%;}
		}
		.JumpStep:active,.NextStep:active{transform:scale(1.05,1.05);}
		
		
	}
	.QuestionMode{
		padding: 0 5vw;
		.title{line-height:5.6vw;width:90vw;margin:auto;color: #b6a36b;border-radius:2vw;padding-top:2vw;padding-bottom:7vw;font-size: 5vw;text-align:left;

		}
		.ResMode{margin-top: 2vw;border: 1px #ddd solid;}
		.ResMode img,.ResMode audio,.ResMode video{width: 100%;}
		.option{background-color: #ffffff;color: #b6a36b;border:2px solid #b6a36b;border-radius:2vw;padding:4vw 2vw;font-size: 3.6vw;margin:2vw 0;transition: transform .2s;box-shadow: 1px 1px 4px #aaa;}
		.option:active{background-color: #b6a36b;color: #ffffff;transform:scale(1.05,1.05);}
		.optionImg{
			    width: 49%;margin: .5%;   float: left;transition: transform .2s;
			img{width:100%;}
		}
		.optionImg:active{transform:scale(1.05,1.05);}
	}

	

	
} 


</style>
