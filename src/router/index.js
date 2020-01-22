import Vue from 'vue'
import Router from 'vue-router'
import nation from './nation.js';
import NotFound from '@/pages/404'
import newShare from '@/pages/newShare'
import newShareQuestion from '@/pages/newShareQuestion'
import onlineRule from '@/pages/onlineRule'
import faq from '@/pages/faq'
import faqdetail from '@/pages/faqdetail'
/*心理测试页*/
import PsychologicalQRcode from '@/pages/Psychological/QRcode'
import PsychologicalTest from '@/pages/Psychological/test'
import PsychologicalResult from '@/pages/Psychological/result'
/*数据报表页*/
import SalesReportForm from '@/pages/DataReport/SalesReportForm/SalesData'
import ReportListForm from '@/pages/DataReport/SalesReportForm/ReportList'
/*板块使用数据页*/
import ModeUseDataAll from '@/pages/DataReport/ModeUseData/DataAll'
import ModeUseDataPerson from '@/pages/DataReport/ModeUseData/DataPerson'
import ModeUseTrend from '@/pages/DataReport/ModeUseData/Trend'

import {Button,DatetimePicker,Row, Col ,Popup ,List,Cell,PullRefresh ,Loading,Lazyload,Dialog,Toast,Tab, Tabs,Pagination,Picker   } from 'vant'

Vue.use(Router).use(Button).use(Row).use(Col).use(Popup).use(List).use(Cell).use(DatetimePicker)
.use(PullRefresh).use(Loading).use(Lazyload).use(Dialog).use(Toast).use(Tab).use(Tabs).use(Pagination).use(Picker)
var routes = [
    {
      path: '/',
      name: 'newShare',
      component: newShare,
	    meta: {
			 	title: '3*3智享计划 '
			 }
    },
    	{
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
      path: '/newShareQuestion',
      name: 'newShareQuestion',
      component: newShareQuestion,
	    meta: {
			 	title: '3*3新享计划 '
			 }
    },
    {
      path: '/onlineRule',
      name: 'onlineRule',
      component: onlineRule,
      meta: {
        title: '有效时长规则 '
       }
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq,
      meta: {
        title: '问与答'
       }
    },
    {
      path: '/faqdetail',
      name: 'faqdetail',
      component: faqdetail,
      meta: {
        title: '问与答详情'
       }
    },
    {
      path: '/Psychological/QRcode',
      name: 'PsychologicalQRcode',
      component: PsychologicalQRcode,
      meta: {
        title: '心理测试'
      }
      },
    {
      path: '/Psychological/test',
      name: 'PsychologicalTest',
      component: PsychologicalTest,
      meta: {
        title: '心理测试'
      }
    },
    {
      path: '/Psychological/result',
      name: 'PsychologicalResult',
      component: PsychologicalResult,
      meta: {
        title: '测试结果'
      }
    },
    {
      path: '/DataReport/SalesReportForm/SalesData',
      name: 'SalesReportForm',
      component: SalesReportForm,
      meta: {
        title: 'Sales报表数据'
      }
    },
    {
      path: '/DataReport/SalesReportForm/ReportList',
      name: 'ReportListForm',
      component: ReportListForm,
      meta: {
        title: 'Sales报表数据'
      }
    },
    {
      path: '/DataReport/ModeUseData/DataAll',
      name: 'ModeUseDataAll',
      component: ModeUseDataAll,
      meta: {
        title: '版块使用数据'
      }
    },{
      path: '/DataReport/ModeUseData/DataPerson',
      name: 'ModeUseDataPerson',
      component: ModeUseDataPerson,
      meta: {
        title: '版块使用数据'
      }
    },
    {
      path: '/DataReport/ModeUseData/Trend',
      name: 'ModeUseTrend',
      component: ModeUseTrend,
      meta: {
        title: '版块使用数据'
      }
    }

]
routes = routes.concat(nation);
export default routes
