var Home = { template: '<div>Home</div>' }
var Foo = { template: '<div>Foo</div>' }

var app = new Vue({
    el: '#vue-home',
    data: {
        code:'',
        phoneNumber:'',
        },

    created(){
            var phoneNumber = window.location.pathname.substr(1) // The /
            //var cleanPhoneNumber = phoneNumber.str.replace("-", "") // Remove all -
            this.phoneNumber = phoneNumber
            if (phoneNumber.length > 6 && phoneNumber != 'brand') {
                var phoneNumber = phoneNumber.str.replace("-", "") // Remove all -
                // Number could be valid:
                console.log('Number Valid')
                if(phoneNumber.startsWith('+')){
                    var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber.substr(1)
                    window.location.replace(url)
                }
                else if(phoneNumber.startsWith(00)){
                    var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber.substr(2)
                    window.location.replace(url)
                } else {
                    var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber
                    window.location.replace(url)
                }
            }
    },

    methods:{

    },

    computed: {
      finalUrl: function(){
          return 'https://text.bz/' + this.phoneNumber
      }
    }

})
