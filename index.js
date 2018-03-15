var app = new Vue({
    el: '#vue-home',
    data: {
        phoneNumber:'',
		itsApp:false,
		isChrome:false,
        },
	created(){
		var path = window.location.search;
		if (path.indexOf("launcher") !== -1){
			this.itsApp = true
		}
		this.isChrome = !!window.chrome && !!window.chrome.webstore;
		console.log(isChrome)
	},

    computed: {
      finalUrl: function(){
          return 'https://text.bz/' + this.phoneNumber
      }
    }

})
