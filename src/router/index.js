import Vue from 'vue'
import Router from 'vue-router'
import nation from './nation.js';
import index from '@/pages/front/index'
import home from '@/pages/front/home'
import guild from '@/pages/front/guild'
import guildIndex from '@/pages/front/guildIndex'
import identification from '@/pages/front/identification'
import job from '@/pages/front/job'
import message from '@/pages/front/message'
import service from '@/pages/front/service'
import education from '@/pages/front/education'
import jdgg from '@/pages/front/jiandinggonggao'
import zlxz from '@/pages/front/ziliaoxiazai'
// import train from '@/pages/front/train'
import train from '@/pages/front/TrainingCourse'
import NotFound from '@/pages/404'
import newShare from '@/pages/newShare'
import newShareQuestion from '@/pages/newShareQuestion'
import detail from '@/pages/detail'
import tiyuDetail from '@/pages/tiyuDetail'
import tiyuInfo from '@/pages/tiyuInfo'
import tiyuSerDetail from '@/pages/tiyuSerDetail'
import indentDetail from '@/pages/front/indent-child/indentDetail'


import {Button,DatetimePicker,Icon,Row, Col ,Popup ,List,Cell,PullRefresh ,Loading,Lazyload,Dialog,Toast,Tab, Tabs,Pagination,Picker   } from 'vant'

Vue.use(Router).use(Icon).use(Button).use(Row).use(Col).use(Popup).use(List).use(Cell).use(DatetimePicker)
.use(PullRefresh).use(Loading).use(Lazyload).use(Dialog).use(Toast).use(Tab).use(Tabs).use(Pagination).use(Picker)
var routes = [
    {
      path: '/',
      name: 'newShare',
      component: index,
      redirect: '/home',
	    meta: {
			 	title: '广东体育职业技术学院 '
       },
       children: [
        {
          path: 'home',
          name: 'home',
          component: home,
          meta: {
            title: '首页'
          },
        },
         {
           path: 'jdgg',
           name: 'jdgg',
           component: jdgg,
           meta: {
             title: '鉴定公告'
           },
         },
        {
          path: 'zlxz',
          name: 'zlxz',
          component: zlxz,
          meta: {
            title: '资料下载'
          },
        },
         {
           path: 'guild',
           name: 'guild',
           component: guild,
           meta: {
             title: '行业协会'
           },
         },
        {
          path: 'guildIndex',
          name: 'guildIndex',
          component: guildIndex,
          meta: {
            title: '行业协会'
          },
        },
        {
          path: 'identification',
          name: 'identification',
          component: identification,
          meta: {
            title: '职业鉴定'
          },
        },
        {
          path: 'job',
          name: 'job',
          component: job,
          meta: {
            title: '职业培训'
          },
        },
        {
          path: 'message',
          name: 'message',
          component: message,
          meta: {
            title: '体育资讯'
          },
        },
        {
          path: 'service',
          name: 'service',
          component: service,
          meta: {
            title: '赛事服务'
          },
        },
        {
          path: 'education',
          name: 'education',
          component: education,
          meta: {
            title: '继续教育'
          },
        },
        {
          path: 'train',
          name: 'train',
          component: train,
          meta: {
            title: '课程培训'
          },
        },
        {
          path: '/indentDetail',
          name: 'indentDetail',
          component: indentDetail,
          meta: {
             title: '课程教程'
           }
        },
      ]
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
			 	title: '广东体育职业技术学院 '
			 }
    },

    {
      path: '/detail',
      name: 'detail',
      component: detail,
      meta: {
        title: '详情页'
      }
    }
    ,
    {
      path: '/tiyuDetail',
      name: 'tiyuDetail',
      component: tiyuDetail,
      meta: {
        title: '详情页'
      }
    }
    ,
    {
      path: '/tiyuInfo',
      name: 'tiyuInfo',
      component: tiyuInfo,
      meta: {
        title: '详情页'
      }
    },

    {
      path: '/tiyuSerDetail',
      name: 'tiyuSerDetail',
      component: tiyuSerDetail,
      meta: {
        title: '赛事服务详情页'
      }
    }
]
routes = routes.concat(nation);
export default routes
