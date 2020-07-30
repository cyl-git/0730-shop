import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import router from './js/router.js'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/dist/css/mui.css'
/* import MintUI from 'mint-ui' 
 Vue.use(MintUI) */ //这是全局导入


import { Button, Header } from 'mint-ui';
Vue.component('mt-button', Button);
Vue.component('mt-header', Header);


Vue.use(VueRouter)



new Vue({
    el: '#app',
    data: {
       
    },
    methods: {},
    render: c => c(App),
    router

});




