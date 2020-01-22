<template>
	<div class="PersonalityQRcode">
		
		<div class="QRcodeContent" v-bind:class="{ PrtSc: isPrtSc}">
			<div class="name">{{name}}</div>
			<div class="job">{{job}}</div>
			<div class="QRcode" id="qrcode" ref="qrcode">
				
			</div>
		</div>
		<div class="ToTest" id="ToTest" @click="ToTest">
			<div class="text">进入测试</div>
			<img src="http://qiniu.wqdata.net/static/img/carApp/Psychological/arrow.png" />
		</div>
	</div>
</template>

<script>
	import QRCode from 'qrcodejs2'
export default {
  data() {
    // 数据
    return {
		name:"未知人员",
		job:"未知职位",
		isPrtSc:false
    }
  },
  methods: {
	qrcodeScan (rootUrl) {//生成二维码
		//alert(rootUrl+'/Psychological/test?accountId='+this.accountId);
			let NewWidth=document.body.clientWidth*0.43;
			  let qrcode = new QRCode('qrcode', {
			      width: NewWidth,  // 二维码宽度 
			      height: NewWidth, // 二维码高度
			      text: rootUrl+'/Psychological/test?accountId='+this.accountId
			  });
			  
			  //document.getElementById("qrcode").getElementsByTagName("img")[0].style.width="100%";
			  document.getElementById("qrcode").querySelector("img").style.width="100%";
			},
	ToTest(){
		this.$router.push({path:'/Psychological/test?accountId='+this.accountId})
	},
	HideToTestButton(){
				document.getElementById("ToTest").style.display="none";
				this.isPrtSc=true;
				
		},
			
	ShowToTestButton(){
		document.getElementById("ToTest").style.display="block";
		this.isPrtSc=false;
	}

    
  },
  created: function() {

  },
    mounted() {
    		window.vue = this;
  			console.log(this.$route.query);
  			this.name=this.$route.query.name;
  			this.job=this.$route.query.job;
  			this.accountId=this.$route.query.accountId;
			//console.log(window.location.href.replace(this.$route.fullPath, ''));
			this.qrcodeScan(window.location.href.replace(this.$route.fullPath, ''));
			if(typeof(window.android)!="undefined"){
				window.android.callAndroidSetState('1');
			}
			
			
			
		}
};
	
	
</script>

<style lang="scss" scoped>
	.PersonalityQRcode{
	font-family: SimHei;
	background-color: #fcfcfc;
	min-height: 100vh;
	padding-top: 5vw;
	.QRcodeContent{
		height: 110vw;
		width: 80vw;
		margin: auto;
		background-image: url(http://qiniu.wqdata.net/static/img/carApp/Psychological/qrcodeBg.png);
		background-repeat:no-repeat;
		background-size: 100% 100%;
		text-align: center;
		color:#fff;
		padding-top: 5vw;
		.name{font-size: 3vh;}
		.job{font-size: 1.5vh;margin-top: .5vh;}
		.QRcode{
			width: 45vw;
			height: 45vw;
			margin: auto;
			margin-top: 4vw;
			border: 1vw #dfd4b4 solid;
			border-radius: .5vw;
			background-color: #fff;
			img{width: 100% !important;}
		}
	}
	.QRcodeContent.PrtSc{
		height: 120vw;
		width: 75vw;
		background-image: url(http://qiniu.wqdata.net/static/img/carApp/Psychological/qrcodeBg2.png);
	}
	.ToTest{
		width: 27vw;
		margin: auto;
		margin-top: 2vh;
		.text{float:left;font-size: 5vw;font-weight:bold;color: #b6a36b;border-bottom: .2vw #b6a36b solid;}
		img{float:right;width: 5vw;}
	}
	}

</style>