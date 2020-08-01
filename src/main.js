import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './app.vue'
import router from './js/router.js'
/* import mui from './lib/mui/dist/js/mui.js' */
import moment from "moment"
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './lib/mui/dist/css/mui.css'
import './lib/mui/dist/css/icons-extra.css'
import './assets/css/base.css'
/* import MintUI from 'mint-ui' 
 Vue.use(MintUI) */ //这是全局导入
import { Toast,Button, Header ,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Toast.name, Toast);

Vue.use(VueRouter)
Vue.use(VueResource)


//   必须放置在VueResouce后面才行  配置整个项目的服务器根路径
//   Vue.http.options.root='http://vue.studyit.io'


//定义一个时间过滤器
Vue.filter('dataFormat',function(data,pattern='YYYY-MM-DD HH:MM:SS'){
moment(data).format(pattern)
})















new Vue({
    el: '#app',
    data: {
       
    },
    methods: {},
    render: c => c(App),
    router

});




