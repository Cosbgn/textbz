var Home = { template: '<div>Home</div>' }
var Foo = { template: '<div>Foo</div>' }


var router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/:number', component: Home },
    { path: '/foo', component: Foo }
  ]
})


var app = new Vue({
  el: '#vue-home',
  // delimiters: ["{","}"],

  data: {
    code:'',
    phoneNumber:'',
  },

  methods:{

  },

  computed: {
      finalUrl: function(){
          return 'https://text.bz/' + this.phoneNumber
      }
  }

})
