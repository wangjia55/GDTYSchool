const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,

  nickName: state => state.user.nickName,
  userId: state => state.user.userId,
  avatar: state => state.user.avatar,
  role: state => state.user.role,
  menus: state => state.user.menus,
  permissions: state => state.user.permissions,

  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,


  adList: state => state.front.adList,
  newList: state => state.front.newList,
  serviceList: state => state.front.serviceList,
  productList: state => state.front.productList,
  caseList: state => state.front.caseList,
  companyInfo: state => state.front.companyInfo,
  honorList: state => state.front.honorList,
}
export default getters
