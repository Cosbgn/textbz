var app = new Vue({
    el: '#vue-home',
    data: {
        phoneNumber:'',
        },

    // created(){
    //     var phoneNumber = window.location.pathname.substr(1) // The /
    //     this.redirectNow(phoneNumber)
    // },

    // methods:{
    //     redirectNow: function(phoneNumber){
    //
    //         //var cleanPhoneNumber = phoneNumber.replace("-", "") // Remove all -
    //         this.phoneNumber = phoneNumber
    //         if (phoneNumber.length > 6 && phoneNumber != 'brand') {
    //             var phoneNumber = phoneNumber.replace("-", "") // Remove all -
    //             // Number could be valid:
    //             console.log('Number Valid')
    //             if(phoneNumber.startsWith('+')){
    //                 var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber.substr(1)
    //                 window.location.replace(url)
    //             }
    //             else if(phoneNumber.startsWith(00)){
    //                 var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber.substr(2)
    //                 window.location.replace(url)
    //             } else {
    //                 var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber
    //                 window.location.replace(url)
    //             }
    //         }
    //     }
    // },

    computed: {
      finalUrl: function(){
          return 'https://text.bz/' + this.phoneNumber
      }
    }

})
