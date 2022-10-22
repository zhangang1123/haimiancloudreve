<template>
    <div>
        <div class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
        <el-menu-item index="1" :route="{name:'home'}">首页</el-menu-item>
        <el-menu-item index="2" :route="{name:'network'}">网盘</el-menu-item>
        <el-menu-item index="3">注册</el-menu-item>
        <el-menu-item index="4">登录</el-menu-item>
        </el-menu>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.header{
    padding:0 20px;
}


</style>