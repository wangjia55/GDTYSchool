//公共方法
/**
 *
 * Created by xieqia on 2017/7/6.
 */
//计算时间戳差值转化为字符串。例：n分钟前
function computeTime(timestamp) {
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;

    var now = new Date().getTime();
    var diffValue = now - timestamp;
    if (diffValue < 0) {
        console.error('结束日期不能小于开始日期');
    }
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    var result;
    if (monthC >= 1) {
        result = "发表于" + parseInt(monthC) + "个月前";
    }
    else if (weekC >= 1) {
        result = "发表于" + parseInt(weekC) + "周前";
    }
    else if (dayC >= 1) {
        result = "发表于" + parseInt(dayC) + "天前";
    }
    else if (hourC >= 1) {
        result = "发表于" + parseInt(hourC) + "个小时前";
    }
    else if (minC >= 1) {
        result = "发表于" + parseInt(minC) + "分钟前";
    } else
        result = "刚刚发表";
    return result;
}

Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


function daysBetween(startTime, endTime) {
// 计算日期
    let DateOne = new Date(startTime).toLocaleDateString();
    let DateTwo = new Date(endTime).toLocaleDateString();
    let datelist = {
        today: '',
        todaykind2: '',
        startTime: '',
        endTime: '',
        hasday: '',//活动已进行了几天
        daoday: '',//活动倒计时
        actstatus: ''//活动状态，1未开始，2进行中，3已过期
    }
    let dd = new Date();
    let today, todaykind2;
    var year = dd.getFullYear();
    var month = dd.getMonth() + 1;//获取当前月份的日期
    var day = dd.getDate();
    today = year + "/" + month + "/" + day;
    todaykind2 = year + "-" + month + "-" + day;
    var todayMonth = today.substring(5, today.lastIndexOf('/'));
    var todayDay = today.substring(today.length, today.lastIndexOf('/') + 1);
    var todayYear = today.substring(0, today.indexOf('/'));

    var OneMonth = DateOne.substring(5, DateOne.lastIndexOf('/'));
    var OneDay = DateOne.substring(DateOne.length, DateOne.lastIndexOf('/') + 1);
    var OneYear = DateOne.substring(0, DateOne.indexOf('/'));

    var TwoMonth = DateTwo.substring(5, DateTwo.lastIndexOf('/'));
    var TwoDay = DateTwo.substring(DateTwo.length, DateTwo.lastIndexOf('/') + 1);
    var TwoYear = DateTwo.substring(0, DateTwo.indexOf('/'));


    var cha = (Date.parse(TwoMonth + '/' + TwoDay + '/' + TwoYear) - (Date.parse(OneMonth + '/' + OneDay + '/' + OneYear)) / 86400000);

    var hasday = ((Date.parse(todayMonth + '/' + todayDay + '/' + todayYear) - Date.parse(OneMonth + '/' + OneDay + '/' + OneYear)) / 86400000);
    var daoday = ((Date.parse(TwoMonth + '/' + TwoDay + '/' + TwoYear) - Date.parse(todayMonth + '/' + todayDay + '/' + todayYear)) / 86400000);
    var actstatus;
    if (hasday > cha) {
        hasday = cha;
    }

    if (hasday < 0) {
//                    活动未开始
        actstatus = 1;
        daoday = 0;
    }
    else if (hasday >= 0 && daoday >= 0) {
//                    活动已开始
        actstatus = 2;
    } else if (daoday < 0) {
//                    活动已过期
        actstatus = 3;
        daoday = 0;
    }
    /* console.log(1111111111111111111)
     console.log('今天'+today +' '+'开始时间'+DateOne +' '+'结束时间' +DateTwo+'已进行'+hasday +' '+'倒计时'+daoday +' '+'活动状态'+actstatus )
     console.log(1111111111111111111);*/
    datelist = {
        today: today,
        todaykind2: todaykind2,
        startTime: DateOne,
        endTime: DateTwo,
        hasday: hasday,//活动已进行了几天
        daoday: daoday,//活动倒计时
        actstatus: actstatus//活动状态，1未开始，2进行中，3已过期
    }
    return datelist;
}
function tomap(place) {
    // 查看某个地点的位置
    window.location.href = 'https://map.baidu.com/mobile/webapp/search/search/qt=s&wd=' + place + '/vt=map'
}
function compareTime(startTime){
    // 两个时间做对比
    let status = {
        isBegin:false
    }
    let today = new Date();
    let startTim = startTime.replace(/-/g,"/");
    let startT = new Date(startTim).getTime();
    let todayT = today.getTime();
    if(startT>todayT){
        // 未开始
        status.isBegin=false
    }else{
        // 开始了
        status.isBegin=true
    }
    return status;

}
export default {
    computeTime,
    daysBetween,
    tomap,
    compareTime
}