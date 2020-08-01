import VueRouter from 'vue-router'
import home from '../components/tabbar/home.vue'
import member from '../components/tabbar/member.vue'
import shopcar from '../components/tabbar/shopcar.vue'
import search from '../components/tabbar/search.vue'
import newslist from '../components/news/newslist.vue'
import newsxq from '../components/news/newsxq.vue'

var router = new VueRouter({
/*     mode: 'history', */
    routes: [
        { path: '/', redirect: '/home' },
        {
            path: '/home',
            component: home
        /*     children: [
                { path: 'newslist', component: newslist }
                
            ] */
        },
        { path: '/member', component: member },
        { path: '/shopcar', component: shopcar },
        { path: '/search', component: search },
        { path: '/home/newslist', component: newslist },
        { path: '/home/newslist/newsxq/:id', component: newsxq }

    ],
    linkActiveClass: 'mui-active'
});

export default router