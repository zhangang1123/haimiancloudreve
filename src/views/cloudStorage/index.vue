<template>
<el-container style=" border: 1px solid #eee">
  <el-aside width="209px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>我的文件</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-menu"></i>全部
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-picture-outline"></i>图片
          </el-menu-item>
          <el-menu-item index="1-3">
            <i class="el-icon-document"></i>文档
          </el-menu-item>
          <el-menu-item index="1-4">
            <i class="el-icon-video-camera"></i>视频
          </el-menu-item>
          <el-menu-item index="1-4">
            <i class="el-icon-service"></i>音乐
          </el-menu-item>
          <el-menu-item index="1-4">
            <i class="el-icon-toilet-paper"></i>其他
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    <el-menu-item index="2">
        <i class="el-icon-delete"></i>回收站
    </el-menu-item>
    <el-menu-item index="3">
        <i class="el-icon-share"></i>我的分享
    </el-menu-item>
    </el-menu>
  </el-aside>
  
  <el-container>
    
  </el-container>
</el-container>
</template>
<script>
export default {
    data() {
        return {

        }
    }
};
</script>
<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>
