<template>
	<div class="hello">
		<h1 v-andclick>我是test</h1>
		<div class="sw1">
			<swiper :options="swiperOption" ref="mySwiper">

				<swiper-slide 
					v-for="(item,index) in arr"
					@click="alers(index)"
					>{{item.con}}{{index}}</swiper-slide>

			</swiper>
		</div>
		<div class="sw2">
			<swiper :options="swiperOption1" ref="mySwiper1">

				<swiper-slide 
					v-for="(item,index) in arr"
					@click="alers(index)"
					>{{item.con}}{{index}}</swiper-slide>

			</swiper>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	let vm = null;
	export default {
		name: 'HelloWorld',
		data() {
			return {
				
				arr: [{
					con: 'slide'
				}, {
					con: 'slide'
				}, {
					con: 'slide'
				}, {
					con: 'slide'
				}, {
					con: 'slide'
				}, ],
				msg: 'Welcome to Your Vue.js App',
				swiperOption: {
					// NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
					// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
					notNextTick: true,
					autoplay: true,
					loop: true,
					speed: 400,
					effect: "",
					grabCursor: true,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true,
					on:{
						click:function(e){
						
							  const realIndex = this.realIndex;
                 vm.handleClickSlide(realIndex);
						}
					}
				},
				swiperOption1: {
					// NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
					// notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
			
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		methods: {
			 handleClickSlide(index) {
           console.log('当前点击索引：', index);
       } ,
			alers(index){
				alert(index)
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper;
			},
			swiper1() {
				return this.$refs.mySwiper1.swiper;
			}
		},
		created(){
			let _this = this;
				_this.swiperOption1={
			 		notNextTick: true,
					autoplay: true,
					speed: 800,
					loop: true,
					effect: "",
					grabCursor: true,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true,
					on:{
						click:function(e){
						
							  const realIndex = this.realIndex;
                 vm.handleClickSlide(realIndex);
						}
					}
			 	}
		},
		mounted() {
			 vm = this;
			 
			 
			let data = {
				userId: "904539829236050138"
			}

			this.$post('http://socialbanktest.gdnybank.com/SocialBank/sys/coupon/bcf', data).then((res) => {

			})
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
	$fonts:36px;
	.hello {
		h1 {
			@include f(16px, blue, 30px);
		}
		.sw1 {
			.swiper-slide {
			
				background: #007AFF;
				height: 200px;
			}
		}
		.sw2 {
			.swiper-slide {
				background: yellow;
				height: 200px;
			}
			}
	}
</style>