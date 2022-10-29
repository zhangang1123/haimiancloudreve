<template>
<el-container style=" border: 1px solid #eee">
  <el-aside width="209px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']" 
    default-active="1-1">
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
      <el-header>
          <el-button-group>
            <el-dropdown>
              <el-button type="primary" size="small">
                <i class="el-icon-upload2"></i>
                上传
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>上传文件</el-dropdown-item>
                <el-dropdown-item>上传文件夹</el-dropdown-item>
                <el-dropdown-item>拖拽上传</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
              <el-button type="primary" size="small">
                <i class="el-icon-plus"></i>
                新建
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>新建文件夹</el-dropdown-item>
                <el-dropdown-item>新建markdown文件</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-button-group>
      
        <el-input class="select-file-input" style="float:right" placeholder="搜索您的文件" size="mini" maxlength="255">
          <i slot="prefix" class="el-input__icon el-icon-search " title="点击搜索"></i>
        </el-input>
        <div>
          <el-button type="text"><i class="el-icon-refresh iconButton"></i></el-button>
          <el-button type="text"><i class="el-icon-s-fold iconButton"></i></el-button>
          <el-button type="text"><i class="el-icon-s-grid iconButton"></i></el-button>
          <el-button type="text"><i class="el-icon-setting iconButton"></i></el-button>
          
        </div>
      </el-header>
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
<style scoped>
.el-header {
    line-height: 60px;
    display: flex;
}

.select-file-input {
  margin-right: 8px;
  width: 250px;
}

.select-file-input .el-icon-search {
  cursor: pointer;
  font-size: 16px;
}

.select-file-input .el-icon-search:hover {
  color: #409eff;
}
.iconButton{
  font-size: 20px;
}
.iconButton:hover{
  color: #409eff;
}
</style>
