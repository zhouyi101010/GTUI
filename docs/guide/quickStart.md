## 基础布局
::: tip
**克隆项目**        
git clone https://github.com/1011cat/shotCat_doc.git

**进入项目目录**        
cd shotCat_doc

**安装依赖**        
npm install

**建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题**       
npm install --registry=https://registry.npm.taobao.org

**启动服务**        
npm run dev

浏览器访问 http://localhost:6868
:::

## 常见页面布局

<div class="" style="width: 600px;padding-left: 40px; padding-right: px;">
    <div class="demo-color-box" style="background: rgb(64, 108, 255);">Brand Color
        <div class="value">#406CFF</div>
        <div class="bg-color-sub" style="background: rgb(236, 245, 255);">
        <div class="bg-blue-sub-item" style="background: rgb(83, 123, 255);"></div><div class="bg-blue-sub-item" style="background: rgb(96, 133, 255);"></div><div class="bg-blue-sub-item" style="background: rgb(114, 147, 255);"></div><div class="bg-blue-sub-item" style="background: rgb(135, 163, 255);"></div><div class="bg-blue-sub-item" style="background: rgb(151, 175, 255);"></div><div class="bg-blue-sub-item" style="background: rgb(173, 192, 255);"></div><div class="bg-blue-sub-item" style="background: rgb(191, 206, 255);"></div><div class="bg-blue-sub-item" style="background: rgb(217, 236, 255);"></div>
        </div>
    </div>
</div>

### step3
在上面配置好的路径里docs/components/2.0/catButton.md，创建markdown文件。接着就可以愉快地编写button组件页面！
::: tip
```html
// docs/components/2.0/catButton.md

---
title: 2.0 Button 按钮
---

<!-- baseComponent-codeBox 组件即为.vuepress/components/baseComponent/codeBox文件，vuepress会默认把它解析为`baseComponent-codeBox`组件，这里我们如下对代码进行包裹，具体功能可以查看codeBox注释和页面效果 -->
<baseComponent-codeBox title="按钮类型" description="按钮类型通过设置type为primary、success、info、warning、danger、text创建不同样式的按钮，不设置为默认样式。" onlineLink="https://codepen.io/1011cat/pen/KjEOWO">

    <!-- 同理demo-catButton-type_catButton即为我们step2编写的示例组件 -->
  <demo-catButton-type_catButton></demo-catButton-type_catButton>

    <!-- 这里highlight-code为引入的第三方代码高亮组件，里面包裹的就是上面示例组件的代码 -->
    <!-- 注意引入代码一定不能缩进！！！否则不能生效！-->
  <highlight-code slot="codeText" lang="vue">
<<< @/docs/.vuepress/components/demo/catButton/type_catButton.vue
  </highlight-code>
</baseComponent-codeBox>

<!-- 组件的参数表格,这里我没有使用自带的markdown表格，因为太丑，样式不好修改，有时参数描述较少时，不能自动撑满一行，所以自己写了一个组件；titile为表格标题，tableHead为表头，tableBody为具体参数设置，并且支持el-table的table参数 -->
<baseComponent-apiTable
  title="Table Attributes"
  :tableHead = "tableHead"
  :tableBody = "tableBody">
</baseComponent-apiTable>

<!-- Vssue为引入的评论插件 -->
<Vssue title="Vssue Demo" />

<!-- 其实在vuepress里的每个.md其实和.vue很像的，你基本可以按照vue组件模式来写 -->
<script>
    // 基本上和写vue一样
  export default {
    data() {
      return {
          //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead:`参数 | 说明 | 类型 | 可选值 | 默认值`,
            //表格为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `size | 尺寸 | String | medium / small / mini | —`,
          `type |	类型 | string |	primary / success / warning / danger / info / text | —`
        ],
      }
    },

  }
</script>

<!-- 和vue一样，也可以设置样式，并且这里style样式只对当前md有效，不需要加上scoped -->
<style>

</style>

```
::: 

