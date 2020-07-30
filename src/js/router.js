import VueRouter from 'vue-router'
import home from '../component1/home.vue'
import goodslist from '../component1/goodslist.vue'
import login from '../component2/login.vue'

var router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: home
            /* children: [
                { path: 'login', component: login }
                
            ] */


        },
       /*  { path: '/goodslist', component: goodslist } */
    ]
});

export default  router