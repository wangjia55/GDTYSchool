// 全局指令
/**
 * Created by nation on 2018-10-26.
 */
// 自定义指令公用js
function install(Vue) {
    Vue.directive('andclick', function (el,he) {
		let oDiv = el;
		console.log(el)
	
       }
    )
    Vue.directive('demo2', function (el) {
      console.log(2)
    })
}
export default{
    install
}