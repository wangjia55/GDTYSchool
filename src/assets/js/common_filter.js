// 全局过滤器
let forbi = val => {
	// 利率后面加%
	if(val == '' || val == undefined) {
		return '0%'
	} else if(val.indexOf('%') == -1) {
		return val + "%"
	} else {
		return val
	}
}
let isSrc = (src, imgKinds) => {
	//判断图片是否有，没有的话加一个默认图片    
	if(src) {
		return src;
	} else {
	/*	if(imgKinds) {
			switch(imgKinds){
				case 1:
//				保险默认图片
				return require("../../img/second/baoxian.jpg");break;
				case 2:
				return require("../../img/question/headLogo.png");break;
			
			}
		} else {
			return require("../../img/ic_normal_image_800_450.png")
		}*/
	}
}

let froTime = timestamp =>{
	let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        return Y+M+D+h+m+s;
}

export {
	forbi,
	isSrc,
	froTime
}