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
