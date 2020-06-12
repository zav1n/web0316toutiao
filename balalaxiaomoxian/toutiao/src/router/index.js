//引入库
import Vue from "vue"
import VueRouter from "vue-router"

//引入组件
import Index from "../components/Index"
// import Article from "../components/article/Article"

//使用
Vue.use(VueRouter)

//配置路由
let routes = [{
        path: "/",
        name: "index",
        component: Index
    }]
// let routes= [{
//     path:"/",
//     name:"article",
//     component: Article
// }]
    //导出路由
export default new VueRouter({
    routes
})