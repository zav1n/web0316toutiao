<!--  -->
<template>
<div class='tt-article'>
    <!-- 文章详情头部开始 -->
    <div class="article-header">
        <ArticleHeader></ArticleHeader>
    </div>    
    <!-- 文章详情头部结束 -->
    <!-- 内容区开始 -->
    <div class="article-content">
        <!-- 导航栏开始 -->
        <div class="left">
            <ArticleNav></ArticleNav>
        </div>
        <!-- 导航栏结束 -->
        <!-- 文章正文开始 -->
        <div class="middle">中</div>
        <!-- 文章正文结束 -->
        <!-- 用户信息开始 -->
        <div class="right">
            <UserName></UserName>
        </div>
        <!-- 用户信息结束 -->
    </div>
    <!-- 内容区结束 -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//引入文章头部组件
import ArticleHeader from "../article/articleHeader/ArticleHeader"
//引入导航条组件
import ArticleNav from "../article/articleNav/ArticleNav"
//引入用户组件
import UserName from "../article/user/UserNama"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    ArticleHeader,
    ArticleNav,
    UserName,
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
.article-content {
    width: 100%;
    padding: 10px 10%;
    display: flex;
    justify-content: space-between;
  .left {
      width: 110px;
  }

  .middle {
      flex:1;
  }

  .right {
      width: 340px;

  }
}
</style>