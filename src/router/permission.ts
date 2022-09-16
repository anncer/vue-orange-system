import router from "./index";

router.beforeEach(async (to, from, next) => {
  next();
  // start progress bar
  // NProgress.start()

  //   // set page title
  //   document.title = getPageTitle(to.meta.title)
});

// router.afterEach((to) => {
//   window.dc && window.dc.send('data-view', { view: to.name })
// })
