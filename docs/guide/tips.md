
## 列表

<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `size | 尺寸 | String | medium / small / mini | —`,
          `type |	类型 | string |	primary / success / warning / danger / info / text | —`
        ],
      }
    },
  }
</script>
```
::: 

## 选择器
由于为了演示，这里就加上了版本1.0和2.0。如果不需要，可以删掉这两个文件夹，将里面的文件放在外面。依然是在`docs/.vuepress/components/config.js`里进行修改即可。

## 菜单&弹窗
vssue这个是一个利用github issue的评论插件 具体配置见https://vssue.js.org/zh/ 所以是需要你自己进行`docs/.vuepress/components/config.js`配置。这里演示页面的评论是会加到我自己的项目issue里。

## 卡片
因为自带的markdown表格，样式比较单调，主要是不能自适应，调整表格宽度，当说明较少时，表格是撑不满一整行的。所以就用el-table改进了下。当然为了保证书写的简便性，写法也是基本和markdown的写法一样。
::: tip
```js
//表头为字符串，写法和md一样，中间以`|`间隔就行
tableHead:`参数 | 说明 | 类型 | 可选值 | 默认值`,
//表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
tableBody: [
  `size | 尺寸 | String | medium / small / mini | —`,
  `type |	类型 | string |	primary / success / warning / danger / info / text | —`
],
```
:::

## 标签
那个看起来很炫的star组件，是由`https://codepen.io/sanzang/pen/LKvNPd` 代码修改而来。这里表示感谢！~