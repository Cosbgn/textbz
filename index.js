var app = new Vue({
    el: '#vue-home',
    data: {
        phoneNumber:'',
		itsBrowser:true,
        },
	created(){
		var path = window.location.pathname;
		if (path.indexOf("app") !== -1){
			this.itsBrowser = false
		}
	},

    computed: {
      finalUrl: function(){
          return 'https://text.bz/' + this.phoneNumber
      }
    }

})
