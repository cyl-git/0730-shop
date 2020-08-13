import Vue from 'vue'
import Vuex from 'vuex' //vue插件
import { parseJSON } from 'jquery'
Vue.use(Vuex)

let car = window.JSON.parse(localStorage.getItem('cart') || '[]')






const store = new Vuex.Store({
    state: {   //这里是共享数据 cart购物车数组，里面是一个一个的对象 {id,count,selected,price}
        cart: car,
    },
    mutations: {
        addToCar(state, goods) { //goods 就是指 {id,count,selected}
            //state是对象 cart是对象中的成员数组，往数组中push数据就是添加一条数据

            //1、如果购物车中曾经有这条id的商品，只增加数量，如果没有，则直接push 
            //2、解决办法，先遍历cart数组中的每一项，如果找到相同的id,就增加数量，如果遍历完也没，就直接push 
            let flag = false  //设置标识符  假设购物车没有现在正要添加的商品

            state.cart.some((item) => {
                if (item.id == goods.id) {
                    item.count += goods.count
                    flag = true
                    return true
                }
            })



            if (!flag) {
                state.cart.push(goods)
            }
            // 为了长期存储购物车中的数量，可以state中的cart数组 转成json存储在本地
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        updateGoodsCount(state, goods) {
            state.cart.some((item) => {
                if (item.id == goods.id) {
                    item.count = goods.count
                    return true
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        delCart(state, id) {
            state.cart.some((item, i) => {
                if (item.id == id) {
                    state.cart.splice(i, 1)
                    return true
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        changeSelectState(state, goods) {
            state.cart.some(item => {
                if (item.id == goods.id) {
                    item.selected = goods['selected']
                    return true
                }
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }

    },
    getters: {
        totalCount: function (state) {
            let total = 0
            state.cart.forEach(item => {
                if (item.selected) {
                    total += item.count
                }
            })
            return total

        },
        totalPrice: function (state) {
            let total = 0
            state.cart.forEach(item => {
                if (item.selected) {
                    total += item.count * item.price
                }
            })
            return total

        },
        idstring: function (state) {
            let idstring = ''
            state.cart.forEach(item => {
                idstring += item.id + ','

            })
            return idstring.slice(0, idstring.length - 1)
        },
        countObj: function (state) {
            let countObj = {}
            state.cart.forEach((item) => {
                countObj[item.id] = item.count
            })

            return countObj
            /* {
                    88:3,
                    89:2
            }    countObj[id]
            
            
            */
        },
        selectedObj: function (state) {
            let o = {}
            state.cart.forEach(item => o[item.id] = item.selected)
            return o
            /* {
                    88:true,
                    89:true
            }    selectedObj[id]
            
            
            */

        }
    }


})

export default store