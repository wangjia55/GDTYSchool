// app使用数据
import Nav from '@/pages/Examine/nav'
// 考试排行
import Chengji from '@/pages/Examine/exam/chengji'
import Detail from '@/pages/Examine/exam/detail'
import Mac from '@/pages/Examine/exam/mac'
//kpi排行
import kpiIndex from '@/pages/Examine/kpi/kpiIndex'
import kpiDetail from '@/pages/Examine/kpi/kpiDetail'
//积分排行
import intIndex from '@/pages/Examine/integral/intIndex'
import intDetail from '@/pages/Examine/integral/intDetail'
// 订单排行
import orderIndex from '@/pages/Examine/order/orderIndex'
import orderIndexDetail from '@/pages/Examine/order/orderIndexDetail'
//用户录入排行
import userIndex from '@/pages/Examine/user/userIndex'
import userIndexDetail from '@/pages/Examine/user/userIndexDetail'
//全国经销商查询
import countryIndex from '@/pages/Examine/country/countryIndex'
//销售顾问使用数据
import saleIndex from '@/pages/Examine/saleGuWen/saleIndex'
import saleAreaIndex from '@/pages/Examine/saleGuWen/saleAreaIndex'
import saleMacIndex from '@/pages/Examine/saleGuWen/saleMacIndex'
import saleData from '@/pages/Examine/saleGuWen/saleData'
import saleData1 from '@/pages/Examine/saleGuWen/saleData1'
var nation = [
  {

    path: '/Examine/saleGuWen/saleData1',
    name: 'saleData1',
    component: saleData1,
    meta: {
      title: '销售顾问使用数据'
     }
  },
  {
    path: '/Examine/saleGuWen/saleData',
    name: 'saleData',
    component: saleData,
    meta: {
      title: '销售顾问使用数据'
     }
  },
  {
    path: '/Examine/saleGuWen/saleAreaIndex',
    name: 'saleAreaIndex',
    component: saleAreaIndex,
    meta: {
      title: '销售顾问使用数据'
     }
  },
  {
    path: '/Examine/saleGuWen/saleMacIndex',
    name: 'saleMacIndex',
    component: saleMacIndex,
    meta: {
      title: '销售顾问使用数据'
     }
  },
  {
    path: '/Examine/saleGuWen/saleIndex',
    name: 'saleIndex',
    component: saleIndex,
    meta: {
      title: '销售顾问使用数据'
     }
  },
  {
    path: '/Examine/country/countryIndex',
    name: 'countryIndex',
    component: countryIndex,
    meta: {
      title: '全国经销商查询'
     }
  },
  {
    path: '/Examine/user/userIndex',
    name: 'userIndex',
    component: userIndex,
    meta: {
      title: '客户录入排行'
     }
  },
  {
    path: '/Examine/user/userIndexDetail',
    name: 'userIndexDetail',
    component: userIndexDetail,
    meta: {
      title: '客户经销商录入排行'
     }
  },
  {
    path: '/Examine/order/orderIndex',
    name: 'orderIndex',
    component: orderIndex,
    meta: {
      title: '订单排行'
     }
  },
  {
    path: '/Examine/order/orderIndexDetail',
    name: 'orderIndexDetail',
    component: orderIndexDetail,
    meta: {
      title: '订单经销商排行'
     }
  },
  {
    path: '/Examine/integral/intDetail',
    name: 'intDetail',
    component: intDetail,
    meta: {
      title: '积分排行详情'
     }
  },
  {
    path: '/Examine/integral/intIndex',
    name: 'intIndex',
    component: intIndex,
    meta: {
      title: '积分排行'
     }
  },
  {
    path: '/Examine/kpi/kpiDetail',
    name: 'kpiDetail',
    component: kpiDetail,
    meta: {
      title: 'KPI数据详情'
     }
  },
   {
    path: '/Examine/kpi/kpiIndex',
    name: 'kpiIndex',
    component: kpiIndex,
    meta: {
      title: 'KPI数据'
     }
  },
  {
    path: '/Examine/exam/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '考试成绩'
     }
  },
  {
    path: '/Examine/exam/chengji',
    name: 'Chengji',
    component: Chengji,
    meta: {
      title: '考试成绩查询'
     }
  },
  {
    path: '/Examine/exam/mac',
    name: 'Mac',
    component: Mac,
    meta: {
      title: '考试成绩'
     }
  },
  {
    path: '/Examine/Nav',
    name: 'Nav',
    component: Nav,
    meta: {
      title: 'App使用数据'
    }
  },
]
export default nation;
