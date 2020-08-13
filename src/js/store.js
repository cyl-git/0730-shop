import Vue from 'vue'
import Vuex from 'vuex' //vue插件
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {   //这里是共享数据 cart购物车数组，里面是一个一个的对象 {id,count,price}
        cart: [],
    },
    mutations: {
        addToCar(state, goods) { //goods 就是指 {id,count,price}
            state.cart.push(goods) //state是对象 cart是对象中的成员数组，往数组中push数据就是添加一条数据

            //1、如果购物车中曾经有这条id的商品，只增加数量，如果没有，则直接push 
            //2、解决办法，先遍历cart数组中的每一项，如果找到相同的id,就增加数量，如果遍历完也没，就直接push 
            let flag = false
            state.cart.some(function (item, i) {
                if (item.id === goods.id) {
                    item.count += goods.count
                    flag = true
                    return true
                }
            })

            if (!flag) {
                state.cart.push(goods)
            }
        }
    }


})

export default store