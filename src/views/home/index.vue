<template>
  <div>
    <div class="lunbo">
      <div class="block">
        <el-carousel trigger="click" height="350px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  <div class="function-wrapper">
		<div class="function-title">功能介绍</div>
		<ul class="function-list">
			<li
				class="function-item"
				v-for="(item, index) in functionList"
				:key="index"
			>
				<a
					class="function-link"
					title="查看说明文档"
					target="_blank"
				>
					<div class="img-wrapper">
						<img class="img" :src="item.icon" />
					</div>
					<div class="content">
						<h3 class="title">{{ item.title }}</h3>
						<p class="desc">{{ item.desc }}</p>
					</div>
				</a>
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
export default {
    components:{
    },
    data(){
      return {
        functionList: [
				{
					icon: require("../../assets/function/store.png"),
					title: '多种存储方式',
					desc: '支持本地磁盘、阿里云 OSS 对象存储、FastDFS 存储、MinIO 存储、七牛云 KODO 对象存储',
				},
				{
          icon: require("../../assets/function/shard.png"),
					title: '分片、断点续传及极速秒传',
					desc: '集成 vue-simple-uploader，实现文件分片上传，提高上传速度；准确识别已上传文件，达到秒传效果，以分片为维度，可实现断点续传',
				},
				{
					icon: require("../../assets/function/edit.png"),
					title: '在线编辑文档',
					desc: '提供 Word, Excel, PowerPoint 文档的在线创建、在线编辑、协同编辑功能',
				},
				{
					icon: require("../../assets/function/delete.png"),
					title: '回收站功能',
					desc: '回收站可以轻松帮助找回误删文件，对回收站进行清理后文件才将彻底删除',
				},
				{
					icon: require("../../assets/function/type.png"),
					title: '多种文件分类 & 查看模式',
					desc: '支持以图片、文档、视频、音乐、其他五种分类查看文件；提供了列表、网格、时间线模式，网格模式下支持手动调整图标大小',
				},
				{
					icon: require("../../assets/function/search.png"),
					title: '全局搜索',
					desc: '支持搜索文件名，快速定位文件并可以打开文件所处位置',
				},
				{
					icon: require("../../assets/function/share.png"),
					title: '分享',
					desc: '支持分享文件，设置过期时间，自动生成提取码；可查看个人分享过的文件列表',
				},
				{
          icon: require("../../assets/function/operation.png"),
					title: '基本操作',
					desc: '支持拖拽上传文件，支持文件移动、重命名、解压缩、下载、删除、还原',
				},
				{
          icon: require("../../assets/function/preview.png"),
					title: '在线预览',
					desc: '支持图片、视频、音频在线预览，支持 Office 文件在线预览',
				}
			],
      activeIndex: '1',
      }
    }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  text-align: center;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.function-wrapper {
  margin-bottom: 40px;
}

.function-wrapper .function-title {
  padding: 60px 0;
  text-align: center;
  font-size: 28px;
}

.function-wrapper .function-list {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
}

.function-wrapper .function-list .function-item {
  margin-bottom: 30px;
  width: 32%;
}

.function-wrapper .function-list .function-item .function-link {
  display: block;
  border-radius: 10px;
  background: #ecf5ff;
  width: 100%;
  height: 100%;
  padding: 40px;
  text-align: center;
}

.function-wrapper .function-list .function-item .function-link:hover {
  background: linear-gradient(to right bottom, #409eff, #66b1ff);
}

.function-wrapper .function-list .function-item .function-link:hover .content .title,
.function-wrapper .function-list .function-item .function-link:hover .content .desc {
  color: #fff;
}

.function-wrapper .function-list .function-item .function-link .img-wrapper {
  border-radius: 50%;
  background: #fff;
  margin: 0 auto;
  padding: 15px 0;
  width: 100px;
  height: 100px;
}

.function-wrapper .function-list .function-item .function-link .img-wrapper .img {
  width: 70px;
  height: 70px;
}

.function-wrapper .function-list .function-item .function-link .content {
  margin-top: 32px;
}

.function-wrapper .function-list .function-item .function-link .content .title {
  margin: 0 0 24px;
  color: #333;
  font-weight: normal;
  font-size: 18px;
}

.function-wrapper .function-list .function-item .function-link .content .desc {
  color: #808080;
}
</style>