// import {default as api} from "../../utils/api";

const app = {
  state: {
    adList: [],
    newList: [],
    serviceList: [],
    productList: [],
    caseList: [],
    detailCacheList: [],//点击到带富文本的条目时会请求获取详情，并全部集中放在这里
    companyInfo: {},
    honorList: [],
  },
  mutations: {
    SET_AD_LIST: (state, list) => {
      state.adList = list
    },
    SET_NEW_LIST: (state, list) => {
      state.newList = list
    },
    SET_SERVICE_LIST: (state, list) => {
      state.serviceList = list
    },
    SET_PRODUCT_LIST: (state, list) => {
      state.productList = list
    },
    SET_CASE_LIST: (state, list) => {
      state.caseList = list
    },
    SET_COMPANY_INFO: (state, list) => {
      state.companyInfo = list
    },
    SET_HONOR_LIST: (state, list) => {
      state.honorList = list
    },
    ADD_DETAIL_ITEM: (state, detail) => {
      state.detailCacheList.push(detail)
    },
  },
  actions: {
    // FetchAd({commit}) {
    //   return new Promise((resolve) => {
    //     api({
    //       url: "/adRecommend/api/list/online",
    //       method: "get"
    //     }).then(data => {
    //       commit('SET_AD_LIST', data.data || [])
    //       resolve(data);
    //     }).catch(() => {
    //     })
    //   })
    // },
    // //内容类型：类型：1：服务 2：产品 3：案例
    // FetchProduct({commit}, type) {
    //   return new Promise((resolve) => {
    //     api({
    //       url: `/product/api/list/online/simple/${type}`,
    //       method: "get",
    //       params: {
    //         current: 1,
    //         size: 99999
    //       }
    //     }).then(data => {
    //       switch (type) {
    //         case 1:
    //           commit('SET_SERVICE_LIST', data.data.records || [])
    //           break
    //         case 2:
    //           commit('SET_PRODUCT_LIST', data.data.records || [])
    //           break
    //         case 3:
    //           commit('SET_CASE_LIST', data.data.records || [])
    //           break
    //       }
    //       resolve(data);
    //     }).catch(() => {
    //     })
    //   })
    // },
    // FetchNew({commit}) {
    //   return new Promise((resolve) => {
    //     api({
    //       url: "/news/api/list/online",
    //       method: "get",
    //       params:{
    //         current:1,
    //         size:9999999
    //       }
    //     }).then(data => {
    //       commit('SET_NEW_LIST', data.data.records || [])
    //       resolve(data);
    //     }).catch(() => {
    //     })
    //   })
    // },
    // FetchDetail({commit, state}, id) {
    //   return new Promise((resolve) => {
    //     let detail = state.detailCacheList.find(v => v.id === id)
    //     if (detail) {
    //       resolve(detail);
    //     } else {
    //       api({
    //         url: `/product/${id}`,
    //         method: "get"
    //       }).then(data => {
    //         commit('ADD_DETAIL_ITEM', data.data)
    //         resolve(data.data);
    //       }).catch(() => {
    //       })
    //     }
    //   })
    // },
    // FetchNewDetail({commit, state}, id) {
    //   return new Promise((resolve) => {
    //     let detail = state.detailCacheList.find(v => v.id === id)
    //     if (detail) {
    //       resolve(detail);
    //     } else {
    //       api({
    //         url: `/news/api/${id}`,
    //         method: "get"
    //       }).then(data => {
    //         commit('ADD_DETAIL_ITEM', data.data)
    //         resolve(data.data);
    //       }).catch(() => {
    //       })
    //     }
    //   })
    // },
    // FetchCompanyInfo({commit}) {
    //   return new Promise((resolve) => {
    //     api({
    //       url: "company/info",
    //       method: "get"
    //     }).then(data => {
    //       commit('SET_COMPANY_INFO', data.data || {})
    //       resolve(data);
    //     }).catch(() => {
    //     })
    //   })
    // },
    // FetchHonorList({commit}) {
    //   return new Promise((resolve) => {
    //     api({
    //       url: "companyHonor/list",
    //       method: "get",
    //       params: {
    //         current: 1,
    //         size: 9999
    //       }
    //     }).then(data => {
    //       commit('SET_HONOR_LIST', data.data.records || [])
    //       resolve(data);
    //     }).catch(() => {
    //     })
    //   })
    // },
  }
}

export default app
