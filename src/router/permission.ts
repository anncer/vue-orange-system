import router from "./index";
import cookie from "@/utils/cache";

router.beforeEach(async (to, from, next) => {
  const token = cookie.get("ESP-TOKEN")
  const whitePages = ['/401', '/404', '/login']

  if (token) {
    // 验证权限
    next()
  } else {
    if (whitePages.includes(to.path)) {
      next()
    } else {
      router.push({path: '/401'})
      next('/401')
    }
  }

  // start progress bar
  // NProgress.start()

  //   // set page title
  //   document.title = getPageTitle(to.meta.title)
});

// router.afterEach((to) => {
//   window.dc && window.dc.send('data-view', { view: to.name })
// })
