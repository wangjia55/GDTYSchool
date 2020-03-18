// import {getInfo, login, logout} from '@/api/login'
// import {getToken, removeToken, setToken} from '@/utils/auth'
// import {default as api} from '../../utils/api'
import store from '../../store'
import router from '../../router'

const user = {
  state: {
    nickName: "",
    userId: "",
    avatar: '',
    role: '',
    menus: [],
    permissions: [],
  },
  mutations: {
    SET_USER: (state, userInfo) => {
      console.log(userInfo)
      state.nickName = userInfo.nickName;
      state.userId = userInfo.id;
      state.role = userInfo.loginName ;
      state.menus = userInfo.menuList;
      state.permissions = userInfo.permissionList;
    },
    RESET_USER: (state) => {
      state.nickName = "";
      state.userId = "";
      state.role = '';
      state.menus = [];
      state.permissions = [];
    }
  },
  actions: {
    // 登录
   
    // 获取用户信息
    GetInfo({commit, state}, loginForm) {
      let loginMes = loginForm;
      if(!loginMes){
        let storage = window.sessionStorage.getItem("loginMes");
        loginMes = JSON.parse(storage)
      }
      return new Promise((resolve, reject) => {
        api({
          url: '/login/auth',
          method: 'post',
          data: {
            loginName: loginMes.loginName ,
            password: loginMes.password
          }
        }).then(data => {
          //储存用户信息
          let storage = window.sessionStorage;
          storage.setItem('loginMes', JSON.stringify(loginMes));
          commit('SET_USER', data.data);
          //cookie保存登录状态,仅靠vuex保存的话,页面刷新就会丢失登录状态
          setToken();
          //生成路由
          let userPermission = data.data ;
          store.dispatch('GenerateRoutes', userPermission).then(() => {
            //生成该用户的新路由json操作完毕之后,调用vue-router的动态新增路由方法,将新路由添加
            router.addRoutes(store.getters.addRouters)
          })
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({commit}) {
      return new Promise((resolve) => {
        api({
          url: "/login/logout",
          method: "post"
        }).then(data => {
          commit('RESET_USER')
          removeToken()
          resolve(data);
        }).catch(() => {
          commit('RESET_USER')
          removeToken()
        })
      })
    },
    // 前端 登出
    FedLogOut({commit}) {
      return new Promise(resolve => {
        commit('RESET_USER')
        removeToken()
        resolve()
      })
    }
  }
}
export default user
