import VueRouter from 'vue-router'
import home from '../components/tabbar/home.vue'
import member from '../components/tabbar/member.vue'
import shopcar from '../components/tabbar/shopcar.vue'
import search from '../components/tabbar/search.vue'
import newslist from '../components/news/newslist.vue'
import newsxq from '../components/news/newsxq.vue'
import photolist from '../components/photo/photolist.vue'
import photoxq from '../components/photo/photoxq.vue'
import goodslist from '../components/goods/goodslist.vue'
import goodsxq from '../components/goods/goodsxq.vue'
import goodsDesc from '../components/goods/goodsDesc.vue'
import goodsComment from '../components/goods/goodsComment.vue'
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
        { path: '/home/newsxq/:id', component: newsxq, props: true },
        { path: '/home/photolist', component: photolist },
        { path: '/home/photoxq/:id', component: photoxq, props: true },
        { path: '/home/goodslist', component: goodslist },
        { path: '/home/goodsxq/:id', component: goodsxq, props: true, },
        { path: '/home/goodsdesc/:id', component: goodsDesc, props: true },
        { path: '/home/goodscomment/:id', component: goodsComment, props: true }

    ],
    linkActiveClass: 'mui-active'
});

export default router