<template>
	<div class="wrap car-wrap">
		<!--3*3新享计划-->
		<div class="car-price">
			<div class="car-sum">
				<div class="car-tips btw">
					<span>建议零售价(元)</span>
					<span class="colorRed">￥ {{otherMes.luoPrice}}</span>
				</div>
				<!-- 模式 -->
				<div class="car-tips btw" style="border-bottom:1px solid #ccc">智慧式</div>
				<!--<new-share-list @childByValue="childByValue" :datas="dataList1"></new-share-list>-->
				<div class="car-bzj">
					<ul class="btw">
						<li>
							<span>首付</span>
							<span>{{otherMes.sf}}</span>
						</li>
						<li>
							<span>尾款</span>
							<span>{{otherMes.wk}}</span>
						</li>
						<li>
							<span>贷款金额</span>
							<span>{{otherMes.dkje}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="car-bacf">
			<!-- 车型 -->
			<new-share-list @childByValue="childByValue2" :datas="dataList2"></new-share-list>
			<!-- 车款 -->
			<new-share-list @childByValue="childByValue3" :datas="dataList3"></new-share-list>

			<div class="row chooseFa">
				<h3>选择方案</h3>
				<div class="row">
					<span @click="change(1)" :class="[curIndex==1?'curFa':'']">A</span>
					<span @click="change(2)" :class="[curIndex==2?'curFa':'']">B</span>
				</div>
			</div>

			<div class="car-tips btw" v-for="item in besiteData" :key="item.name">
				<span>{{item.name}}</span>
				<span :class="[item.isRed==1?'reds':'']">{{item.val}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import vuePickers from "vue-pickers";
	import newShareList from "../components/newShare_lists";
	import carDatas from "../assets/js/carDatas.js";
	export default {
		name: "HelloWorld",
		data() {
			return {
				curIndex: 1,
				name: "",
				name2: "ATS-L",
				val2: "1",
				name3: "",
				val3: "1",
				name4: "",
				name5: "",
				otherMes: {},
				msg: "Welcome to Your Vue.js App",
				dataList1: {
					show: false,
					columns: 1,
					defaultData: [{
						text: '智慧式',
						value: 1
					}],
					pickData: {
						// 第一列的数据结构
						data1: [{
								text: '智慧式',
								value: 1
							},

						]
					}
				},
				dataList2: {
					show: false,
					columns: 1,
					defaultData: [{
						text: "ATS-L",
						value: 1
					}],
					pickData: {
						// 第一列的数据结构
						data1: [{
								text: "ATS-L",
								value: 1
							},
							{
								text: "XTS",
								value: 2
							},

						]
					}
				},
				dataList3: {
					show: false,
					columns: 1,
					defaultData: [{
						text: "28T 技术型",
						value: 1
					}],
					pickData: {
						// 第一列的数据结构
						data1: [{
							text: "28T 技术型",
							value: 1
						}]
					}
				},

				besiteData: []
			};
		},
		components: {
			vuePickers,
			newShareList
		},
		computed: {

		},
		methods: {
			change(index) {
				this.curIndex = index;
			},
			childByValue: function(childValue) {
				// childValue就是子组件传过来的值
				this.name = childValue.text;
			},
			childByValue2(childValue) {
				this.name2 = childValue.text;
				this.val2 = childValue.val;
			},
			childByValue3: function(childValue) {
				// childValue就是子组件传过来的值
				this.name3 = childValue.text;
				this.val3 = childValue.val;
			},
			childByValue4(childValue) {
				this.name4 = childValue.text;
			},
			childByValue5: function(childValue) {
				// childValue就是子组件传过来的值
				this.name5 = childValue.text;
			},

			totest() {
				this.$router.push("test");
			},
			close() {
				this.show = false;
			},
			confirmFn(val) {
				this.show = false;
				this.defaultData = [val.select1];
				console.log(val);
			},
			toShow() {
				this.show = true;
			}
		},
		mounted() {
			let _this = this;
			let valw = _this.val3;
			let card = carDatas.newCarDatas;
			for(let i in card) {
				if(_this.val3 == card[i].id) {
					this.otherMes = card[i]; //获取到当前车型的信息
				}
			}

		},
		watch: {

			name2() {
				let _this = this;
				let names = _this.name2;
				let defData = [];
				let changeData = [];
				switch(names) {
					case "ATS-L":
						_this.val3 = 1;
						defData = [{
							text: "28T 技术型",
							value: 1
						}];
						changeData = [{
							text: "28T 技术型",
							value: 1
						}];
						break;

					case "XTS":
						_this.val3 = 2;
						defData = [{
							text: "28T 技术型",
							value: 2
						}];
						changeData = [{
							text: "28T 技术型",
							value: 2
						}];
						break;

					default:
						_this.val3 = 1;
						defData = [{
							text: "28T 技术型",
							value: 1
						}];
						changeData = [{
							text: "28T 技术型",
							value: 1
						}];
						break;
				}

				let valw = _this.val3;
				let card = carDatas.newCarDatas;
				for(let i in card) {
					if(_this.val3 == card[i].id) {
						this.otherMes = card[i]; //获取到当前车型的信息
					}
				}
				_this.dataList3.defaultData = defData;
				_this.dataList3.pickData.data1 = changeData;
			},
			otherMes() {
				let _this = this.otherMes;
				if(this.curIndex == 1) {
					this.besiteData = [{
							name: "MSRP（元）",
							val: _this.msrp
						},

						{
							name: "期限（月）",
							val: _this.qxmonth
						},
						{
							name: "首付金额（元）",
							val: _this.sfmoney,
							isRed: 1
						},

						{
							name: "客户支付月供（元）",
							val: _this.userMonth,
							isRed: 1
						},

					]
				} else if(this.curIndex == 2) {
					this.besiteData = [{
							name: "MSRP（元）",
							val: _this.msrp
						},
						{
							name: "购置税",
							val: _this.gzs
						},

						{
							name: "保险",
							val: _this.instu
						},
						{
							name: "总价",
							val: _this.price
						},

						{
							name: "期限（月）",
							val: _this.qxmonth
						},
						{
							name: "首付金额（元）",
							val: _this.sfmoney,
							isRed: 1
						},

						{
							name: "客户支付月供（元）",
							val: _this.userMonth,
							isRed: 1
						},

					]
				}

			},
			val3() {
				let _this = this;
				let valw = _this.val3;
				let card;
				if(_this.curIndex == 1) {
					//				方案一
					card = carDatas.newCarDatas;
				} else if(_this.curIndex == 2) {
					//				方案二
					card = carDatas.newCarDatasB;
				}

				for(let i in card) {
					if(_this.val3 == card[i].id) {
						this.otherMes = card[i]; //获取到当前车型的信息
					}
				}
			},
			curIndex() {
				let _this = this;
				let valw = _this.val3;
				let card;
				if(_this.curIndex == 1) {
					//				方案一
					card = carDatas.newCarDatas;
				} else if(_this.curIndex == 2) {
					//				方案二
					card = carDatas.newCarDatasB;
				}

				for(let i in card) {
					if(_this.val3 == card[i].id) {
						this.otherMes = card[i]; //获取到当前车型的信息
					}
				}
			},
		}
	};
</script>

<style scoped lang='scss'>
	.car-wrap {
		width: 100%;
		box-sizing: padding-box;
	}
	
	.reds {
		color: #960719!important;
	}
	
	.car-price {
		background: #f7f7f7;
		.car-sum {
			padding: 0 12px;
			>h2 {
				text-align: left;
				@include f(16px, #878787, 40px);
			}
		}
		.car-bzj {
			padding: 10px 0;
			>ul {
				>li {
					display: flex;
					flex: 1;
					flex-direction: column;
					text-align: center;
					span {
						margin: 5px 0;
					}
					>span:nth-of-type(1) {
						@include f(16px, #333);
					}
					>span:nth-of-type(2) {
						@include f(14px, #999);
					}
				}
			}
		}
	}
	
	.car-bacf {
		padding: 0 12px;
	}
	
	.colorRed {
		color: #960719 !important;
	}
	
	.car-tips {
		@include f(16px, #878787, 40px);
	}
	
	.chooseFa {
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #ddd;
		align-items: center;
		>h3 {
			color: #960719;
			font-size: 16px;
			margin-right: 15px;
		}
		span {
			width: 80px;
			height: 36px;
			background: #ccc;
			line-height: 36px;
			text-align: center;
			font-size: 18px;
			color: #fff;
			margin-right: 10px;
		}
		.curFa {
			background: #960719;
		}
	}
</style>