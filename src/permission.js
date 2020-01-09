import router from '@/router'

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  let oldepath = from.path
  window.scrollTo(0, 0)
  if (to.path === '/informationBind') {

  } else {
    localStorage.setItem('oldepath', oldepath)
  }

  if (to.meta.title) {
    document.title = to.meta.title
    localStorage.setItem('title', to.meta.title)
  }
  if (to.meta.code) {
    // let url = to.fullPath
    // console.log(parseQueryString(url))
    // if (JSON.stringify(parseQueryString(url)) == '{}') {
    //   next()
    // } else {
    //   localStorage.setItem('user', JSON.stringify(parseQueryString(url)))
    //   let uid = sessionStorage.getItem('uid')
    //   let isBind = parseQueryString(url).isBind
    //   /* 路由发生变化修改页面title */
    //   let token = isBind == 'y'
    //   if (token || uid) {
    //     next()
    //   } else {
    //     if (to.path === '/informationBind') {
    //       next()
    //     } else {
    //       next('/informationBind')
    //     }
    //   }
    // }
  } else {
    next()
  }
})
