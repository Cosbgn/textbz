var app = new Vue({
    el: '#vue-home',
    data: {
        phoneNumber:'',
		itsApp:false,
        },
	created(){
		var path = window.location.pathname;
		if (path.indexOf("launcher") !== -1){
			this.itsApp = true
			console.log("this runs")
		}
		console.log(path)
		console.log(this.itsApp)
	},

    computed: {
      finalUrl: function(){
          return 'https://text.bz/' + this.phoneNumber
      }
    }

})
