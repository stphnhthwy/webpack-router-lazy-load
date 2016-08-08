export function navRouter (router) {

  //routes for navRouter && component imports
  router.map({
    '/bar': {
      component: function (resolve) {
        require(['../Bar.vue'], resolve)
      }
    },

    '/foo': {
      component: function (resolve) {
        require(['../Foo.vue'], resolve)
      }
    }

  })

}
