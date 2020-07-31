import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './app.vue'
import router from './js/router.js'

import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/dist/css/mui.css'
import './lib/mui/dist/css/icons-extra.css'
import './assets/css/base.css'
/* import MintUI from 'mint-ui' 
 Vue.use(MintUI) */ //这是全局导入
import { Toast,Button, Header ,Swipe, SwipeItem } from 'mint-ui';
Vue.component('mt-button', Button);
Vue.component('mt-header', Header);
Vue.component('mt-swipe', Swipe);
Vue.component('mt-swipe-item', SwipeItem);

Vue.use(VueRouter)
Vue.use(VueResource)


new Vue({
    el: '#app',
    data: {
       
    },
    methods: {},
    render: c => c(App),
    router

});




