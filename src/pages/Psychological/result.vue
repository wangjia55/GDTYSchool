<template>
    <div class="PersonalityResult">

        	<div class="ResultMode" v-if="isNaN(this.CurrentQuestion.Num)">
        		<div class="ResultHead">
        			<div class="title">车型匹配:</div>
        			<div class="content">适合您的专属座驾为：</div>
        			<div class="content"><span class="type">{{CurrentQuestion.CadiType}}</span>或<span class="type">{{CurrentQuestion.BenzType}}</span></div>
        			<div class="imgUrl"> <img :src="CurrentQuestion.CadiUrl"/><img :src="CurrentQuestion.BenzUrl"/> </div>
        		</div>
        		<div class="ResultContent">
        			<div class="title">性格分析:</div>
        			<div class="content">{{CurrentQuestion.disposition}}</div>
        		</div>
        		<div class="ResultContent">
        			<div class="title">运势分析:</div>
        			<div class="FatePic">
        				<img :src="this.CurrentQuestion.xgUrl"/>
        			</div>
        			
        			<div class="content">{{CurrentQuestion.fate}}</div>
        		</div>
        		<div class="ResultQRcode" id="ResultQRcode">
        			<div class="text">测测你最适合哪款车</div>
        			<div class="QRcode" id="qrcode" ref="qrcode">
				
					</div>
        			
        		</div>
        	
        		<div style="background-color:#fff;padding: 8vw 0;" id="toTest">
        	<div class="toTest"  @click="$router.push({path:'/Psychological/test?accountId='+$route.query.accountId})">重新测试</div>
    		</div>
        	
        	</div>
        	
    </div>
</template>

<script type="text/javascript">
	import QRCode from 'qrcodejs2'
export default {
  data() {
    // 数据
    return {
    	DataBaseUrl:"http://139.224.11.210:8081/",
    	resultList:[

    	{Num:"A",
    	type:["凯迪拉克 XT4","奔驰 GLA"],
    	xg:"2",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/xt4.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLA.png"
    	],
    	disposition:"您干劲十足，谋事顺利。具备相当高的智商，天赋过人，往往不用多少努力就能获得很大的成就。",
    	fate:"幸运颜色：白色系，穿衣装饰以白色为主，能催旺好运。"},
    	
    	{Num:"B",
    	type:["凯迪拉克 XT4","奔驰 GLA"],
    	xg:"3",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/xt4.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLA.png"
    	],
    	disposition:"您性格比较豪放，不拘小节，富于爱心，乐于助人。不过有时多忧虑，做事犹豫，缺乏主见。",
    	fate:"个人财运很好，主动求财必获其利"},
    	
    	{Num:"C",
    	type:["凯迪拉克 XT4","奔驰 GLA"],
    	xg:"4",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/xt4.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLA.png"
    	],
    	disposition:"您成熟稳重，循规蹈矩，并且非常在意周围人的目光，野心勃勃，却又匿于智力与能力。",
    	fate:"事业运势不俗，努力许久的工作终于得到应有的回报，但要记得一切顺利进展的前提是要保持一颗谦虚低调的心。"},
    	
    	{Num:"D",
    	type:["凯迪拉克 XT4","奔驰 GLA"],
    	xg:"1",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/xt4.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLA.png"
    	],
    	disposition:"您感情丰富，心思敏捷，浪漫单纯。心无城府的性格容易受骗上当，一旦陷入痛苦便很难自拔。",
    	fate:"爱情运势不俗，尤其是桃花极为旺盛，会有不错的异性对您主动示好，但要注意仔细观察对方是否适合自己。"},
    	
    	
    	
    	{Num:"A",
    	type:["凯迪拉克 XT5","奔驰 GLC"],
    	xg:"4",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT5.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLC.png"
    	],
    	disposition:"您性格较为内向，缺乏主见，容易对别人的意见言听计从，往往无法坚持自我主张。",
    	fate:"您事业上虽然会取得不错的进展，但是因为工作任务带来的压力，会使您对自己的工作能力产生质疑，建议要建立自信的心态，稳步向上。"},
    	
    	{Num:"B",
    	type:["凯迪拉克 XT5","奔驰 GLC"],
    	xg:"3",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT5.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLC.png"
    	],
    	disposition:"您性格较为激进，喜欢掌握主控权，不听从别人劝解，经常会一意孤行。",
    	fate:"但是整体事业运势强悍，在碰到挫折的同时，经常能化险为夷，平安度过。"},
    	
    	{Num:"C",
    	type:["凯迪拉克 XT5","奔驰 GLC"],
    	xg:"1",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT5.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLC.png"
    	],
    	disposition:"您性格较为多疑，不易亲信他人，想要与您建立关系，必须要先得到您的深度信任，否则比登天还难。",
    	fate:"事业运势并不稳定，伴随着是多变的格局，在做出任何决定的时候需要更为谨慎。"},
    	
    	{Num:"D",
    	type:["凯迪拉克 XT5","奔驰 GLC"],
    	xg:"2",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT5.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLC.png"
    	],
    	disposition:"您性格爱恨分明，喜欢根据自己的主观意见下达判断，对于感兴趣的事物，会不自觉的想控制;反之，您就会漠不关心。",
    	fate:"您健康运势是平稳的，不会发生较大的状况。不过最好在日常中加强锻炼自己的身体。"},
    	
    	
    	{Num:"A",
    	type:["凯迪拉克 CT6","奔驰 E Class"],
    	xg:"2",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/CT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰E Class.png"
    	],
    	disposition:"您性格较为随和，在人相处过程中，非常尊重他人感受，是个拥护地位平等的人，不喜欢被人约束，崇尚自由。",
    	fate:"在事业上的运势可谓是机遇与挑战并存，需要您花费更多的心力去应付工作，职场整体环境也会变得有一些暗流涌动，建议低调谨慎为好，以防遭遇到小人作祟的情况。"},
    	
    	{Num:"B",
    	type:["凯迪拉克 CT6","奔驰 E Class"],
    	xg:"2",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/CT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰E Class.png"
    	],
    	disposition:"您的性格很温和，不容易与人起冲突，厌恶与人的纷争，将纸折成两半，表示您会体贴他人，并容易信任别人，重视他人的感受。不过您也有底线与逆鳞，平时虽然很平和，但是你触及到逆鳞，可能就会爆发。",
    	fate:"工作运需多以稳为主，本月事业运势需多以勤来补不足，步步为营，不可冒进。需要多花点时间，一一处理所面临的问题。"},
    	
    	{Num:"C",
    	type:["凯迪拉克 CT6","奔驰 E Class"],
    	xg:"2",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/CT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰E Class.png"
    	],
    	disposition:"表示过往交友过程中曾经遇到挫折感，较为喜欢和比自己年长的接触。",
    	fate:"工作运上易有考验的事件出现，多做些准备，本月特别要多注意上下级间的互动为好。特别是合作方面的事情，容易出现变故。"},
    	
    	{Num:"D",
    	type:["凯迪拉克 CT6","奔驰 E Class"],
    	xg:"4",
    	imgUrl:[
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/CT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰E Class.png"
    	],
    	disposition:"您是个凡事都要对方顺从自己意思的人，标准的自我中心主义分子。",
    	fate:"工作上利于多沟通多学习，有机会得到不少长进，本月事业上多是利于开拓变动的时节，本月多有贵人，多抓住机遇。"},


    	{Num:"A",
    	type:["凯迪拉克XT6","奔驰 GLE"],
    	xg:"1",
    	imgUrl:["http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLE.png"
    	],
    	disposition:"很明显，有个大洞的伞会让您被淋湿。但显然您也认为这无所谓，您的性格属于大大咧咧，不拘小节。",
    	fate:"工作上有可能出现不利自己的局面，多沉着应对，切勿轻言放弃或者见难而退，本月事业多有考验现象，会有一些阻碍，重要的事情可以暂缓决定。"},
    	
    	{Num:"B",
    	type:["凯迪拉克XT6","奔驰 GLE"],
    	xg:"4",
    	imgUrl:["http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLE.png"
    	],
    	disposition:"有几个小洞的伞，嗯，就不至于把自己淋个湿透啦，您属于较为随性的性格，让您常常在生活过程中有意外收获。",
    	fate:"工作上还是有机会出现，但能否抓住要看各自的能力与努力了。事业上的开拓，在本月可以做些尝试，但是稍加不慎，容易错过良机，本月竞争对手也颇多。"},
    	
    	{Num:"C",
    	type:["凯迪拉克XT6","奔驰 GLE"],
    	xg:"1",
    	imgUrl:["http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLE.png"
    	],
    	disposition:"伞柄弯曲是很独特的。其实您是一个很倔强的人，不愿意听从别人的意见，往往特立独行。",
    	fate:"工作上多加小心为好，多避免口舌之争，如遇阻碍多注意事业上的防范措施。本月事业运势容易受到别人的排挤，少说多做，远离人员之间的摩擦。"},
    	
    	{Num:"D",
    	type:["凯迪拉克XT6","奔驰 GLE"],
    	xg:"4",
    	imgUrl:["http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLE.png"
    	],
    	disposition:"伞柄很短，暗示着您是那种忘性很大的人，往往小事记不住，大事也会忘的类型。",
    	fate:"工作上利于突破的状态，但需多处理好长辈或上级的关系，多寻求人助。此月事业上面压力有所缓解，可以进行长远的规划。"},

    	
    	{Num:"E",
    	type:["凯迪拉克XT6","奔驰 GLE"],
    	xg:"4",
    	imgUrl:["http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLE.png"
    	],
    	disposition:"对您来说，当生活与事业中出现挫折或者失败的时候，最好的安慰是亲情。",
    	fate:"钱财运势不算太旺，多做好容易把握的事项，此月切莫有大的计划，需多检查好准备类工作，钱财运势上面回收欠款难度比较大。"},
    	
    	{Num:"F",
    	type:["凯迪拉克XT6","奔驰 GLE"],
    	xg:"2",
    	imgUrl:["http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLE.png"
    	],
    	disposition:"您是一个乐观豁达的人，相信再大的问题都会过去。对您来说，拥有一帮能够倾吐苦水的知己好友是最重要的。",
    	fate:"财务运势多为平稳状态，不可把事情想得太好，多想不利局面，多保守利财为好。本月财运上面多有问题，避免过多的支出。"},
    	
    	{Num:"G",
    	type:["凯迪拉克XT6","奔驰 GLE"],
    	xg:"3",
    	imgUrl:["http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLE.png"
    	],
    	disposition:"您有些喜欢用幻想来排解压力和焦虑。这样的排解可以顶一时之需，但从长远来看，还是需要找到正确的解压方法，如运动，聚会或专注某项兴趣爱好。",
    	fate:"钱财运势多在动中求财，多寻求不同资源或渠道，才有提升机会，月末的时间相对有利，做好支出的管理。"},
    	
    	{Num:"H",
    	type:["凯迪拉克XT6","奔驰 GLE"],
    	xg:"1",
    	imgUrl:["http://qiniu.wqdata.net/static/img/carApp/Psychological/result/XT6.png",
    	"http://qiniu.wqdata.net/static/img/carApp/Psychological/result/奔驰GLE.png"
    	],
    	disposition:"您通常喜欢把自己的生活安排得满满的，让工作占据您大多数时间，这样的您比较容易忽视家庭，您需要更为合理的安排时间，协调生活与工作。",
    	fate:"做好份内的工作，做好专业技术出力气的事情就好，投资运欠佳。本月财运一般，各方面的进展不如意，多做好财务之间的管理。"},
    	
    	],
    	xgList:[
    	{num:1,mianXg:"感情",picUrl:"http://qiniu.wqdata.net/static/img/carApp/Psychological/感情.png"},
    	{num:2,mianXg:"健康",picUrl:"http://qiniu.wqdata.net/static/img/carApp/Psychological/健康.png"},
    	{num:3,mianXg:"财运",picUrl:"http://qiniu.wqdata.net/static/img/carApp/Psychological/财运.png"},
    	{num:4,mianXg:"工作",picUrl:"http://qiniu.wqdata.net/static/img/carApp/Psychological/工作.png"}
    	],
    	CurrentQuestion:{},
		
    }
  },
  methods: {
    // 事件函数


    ToChosenTarget:function(item){
    			for(let i=0;i<this.resultList.length;i++){
    			if(this.resultList[i].Num==item.num&&(this.resultList[i].type[0].indexOf(item.type)!=-1)){
    				this.CurrentQuestion=this.resultList[i];
    				this.CurrentQuestion.CadiType=this.resultList[i].type[0];
    				this.CurrentQuestion.BenzType=this.resultList[i].type[1];
    				this.CurrentQuestion.CadiUrl=this.resultList[i].imgUrl[0];
    				this.CurrentQuestion.BenzUrl=this.resultList[i].imgUrl[1];
					this.FoundXG();
    				break;
    			}
    		}
    		
    },
    FoundXG:function(){
    		for(let i=0;i<this.xgList.length;i++){
    			if(this.xgList[i].num==this.CurrentQuestion.xg){
    				this.CurrentQuestion.xgUrl=this.xgList[i].picUrl;
    			}
    		}
    },	
    qrcodeScan (rootUrl) {//生成二维码
				
			  let NewWidth=document.body.clientWidth*0.28;
			  let qrcode = new QRCode('qrcode', {
			      width: NewWidth,  // 二维码宽度 
			      height: NewWidth, // 二维码高度
			      text: rootUrl+'/Psychological/test?accountId='+this.accountId
			  })  
			  
			  //document.getElementById("qrcode").getElementsByTagName("img")[0].style.width="100%";
			  document.getElementById("qrcode").querySelector("img").style.width="100%";
			},


	HideResultQRcodeMode(){
		document.getElementById("ResultQRcode").style.display="none";
		//document.getElementById("toTest").style.display="block";
	},
	ShowResultQRcodeMode(){
		document.getElementById("ResultQRcode").style.display="block";
		//document.getElementById("toTest").style.display="none";
	}
  },

  created: function() {
    
  },
  mounted() {
  			window.vue = this;
			if(typeof(window.android)!="undefined"){
			//this.ShowResultQRcodeMode();	
			document.getElementById("toTest").style.display="none";
			
			}else{
			//this.HideResultQRcodeMode();
			document.getElementById("toTest").style.display="block";
			}
  			this.HideResultQRcodeMode();
  			
  			console.log(this.$route.query);
  			this.ToChosenTarget(this.$route.query);
			this.accountId=this.$route.query.accountId;
			
			this.qrcodeScan(window.location.href.replace(this.$route.fullPath, ''));
			if(typeof(window.android)!="undefined"){
			window.android.callAndroidSetState('3')
			}
		}
};
</script>
<style lang="scss" scoped>
.PersonalityResult{
	font-family: SimHei;
	background-color: #fcfcfc;
	min-height: 100vh;
	
	.ResultMode{
		
		color:#4b4b4b;
		.ResultHead{
			padding: 4vh 5vw;
			border-bottom:1vh #eeeeee solid;
			.title{font-size: 5vw;font-weight: bold;margin-bottom: 1.5vh;}
			.content{font-size: 4vw;margin: 0.5vh 0 ;
			.type{color: #b6a36b;}}
			.imgUrl{margin-top: 1.5vh;}
			.imgUrl img{width: 49%;margin: 0 .5%;}
			}
		.ResultContent{
			padding: 4vh 5vw;
			border-bottom:1vh #eeeeee solid;
			.title{font-size: 5vw;font-weight: bold;}
			.content{font-size: 3.6vw;margin: 1.5vh 0;line-height: 4.5vw;}
			.FatePic{text-align: center;
			img{width: 35vw;}
			}
		}
		.ResultQRcode{
			padding: 4vh 5vw;
			text-align: right;
			.text{
				display: inline-block;
				line-height: 30vw;
				vertical-align: bottom;
				color: #b6a36b;
				font-size: 4vw;
				margin-right: 1vw;
			}
			.QRcode{
			width: 30vw;
			height: 30vw;
			border: 1vw #dfd4b4 solid;
			border-radius: .5vw;
			display: inline-block;
			background-color: #fff;
			img{width: 100% !important;}
		}
		}
		
	}
	.toTest{
		background-color: #b6a36b;
		width:50vw;
		margin: auto;
		color: #fff;
		text-align: center;
		font-size: 3.5vw;
		line-height: 9.5vw;
		border-radius: 1vw;
	}
} 


</style>
