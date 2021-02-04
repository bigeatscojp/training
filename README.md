# BigEats training project
Hi, 大家好，这块是个训练的项目。 

在接下来的几个月里面，我们会一起共事，希望接下来的时间里面，大家能够跟上进度，完成作业，然后加入项目开发中，提升自己的技能。 



###  训练科目

1. git / github / Sourcetree  的代码基本操作， 能够 修改 合并 提交， 创建自己的分支， 然后安装 Sourcetree 软件，对源码进行提交

2. Javascript 和 Vue.js 和 Uni-APP 的基础知识， 我们会补充下详细的列表（附件的资料列表中）

   1. Vue基本知识  https://www.runoob.com/vue2/vue-tutorial.html 

   2. Vue中文项目文档 https://cn.vuejs.org/v2/guide/index.html

   3. Uni-APP项目文档 https://uniapp.dcloud.io/resource

   4. Uni-APP官方视频教程 https://ke.qq.com/course/343370?taid=2788142445051210

      学习结果确认： 

      1. 大家在项目目录下建立自己的分支， 比如   branch-chentaotao  然后在自己branch下创建 chentaotao 自己的名字的文件夹
      2. 新建个Vue工程，  然后实现 打开页面 显示 一个  bigeats logo  并在下面显示一句话 “我是chentaotao ， 我来啦“  ，大家换成自己的名字
      3. Vue的学习笔记，自己建立page，在里面写上自己的学习笔记，比如 router，表单，page，components的用法，还有基本的语法。 

       确认机制： 

       大家 3号-4号，2天， 完成上面的流程。 这块有任何问题，大家在飞书群里面交流。 

      **要求，大家每天必须完成10次commit。** 

3. 项目开发实战，完成某一个页面，我们会搭建初始化的项目 Uni-APP 外卖项目，让大家能够开发其中的一个页面

   1. 02-04 我们会安排具体的页面给大家，开始进行中
   2. 02-05 我们从training项目中，选出实战的人，加入项目中。 

### 目录说明

#### api
放置和后台请求相关的信息，如请求地址和域名等

#### common
放置公用的js和less

#### components
放置组件

#### pages
放置页面

#### static
放置静态资源，这里主要是图片资源

#### store
Vuex.Store相关

#### unpackage
uniapp会把打包后的文件放到这里

#### 其余的可以参考uniapp官网的说明

https://uniapp.dcloud.io/frame


```
┌─cloudfunctions        云函数目录（阿里云为aliyun，腾讯云为tcb，详见uniCloud）
│─components            符合vue组件规范的uni-app组件目录
│  └─comp-a.vue         可复用的a组件
├─hybrid                存放本地网页的目录，详见
├─platforms             存放各平台专用页面的目录，详见
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue       index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─wxcomponents          存放小程序组件的目录，详见
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息，详见
└─pages.json            配置页面路由、导航条、选项卡等页面类信息，详见
```



### 样式说明
请使用less编写样式，里面的单位不要用px，请用rpx，参看：https://uniapp.dcloud.io/frame?id=%e5%b0%ba%e5%af%b8%e5%8d%95%e4%bd%8d

里面的pages/login/index.vue使用了非rpx的单位，这里无视它，后期项目开发使用rpx




