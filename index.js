var app = new Vue({
    el: '#vue-home',
    data: {
        phoneNumber:'',
        },

    computed: {
      finalUrl: function(){
          return 'https://text.bz/' + this.phoneNumber
      }
    }

})
