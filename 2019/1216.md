# Q1.[html] iframe框架都有哪些优缺点？
# A1：
**优点**
* 可以用iframe来进行跨域通信
* 方便插入第三方内容，不担心影响整体页面加载
* iframe与
**缺点**
* 无法使用浏览器历史记录
* 安全性风险
* iframe数量多时出现的滚动条非常影响用户体验
* 兼容性不好
* 不利于SEO

# Q2:[css] 简述你对BFC规范的理解
# A2：
**BFC规则**
BFC全称为块级格式上下文（Block Formatting Context）。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。
* 内部的盒子会在垂直方向，一个接一个的排列
* 盒子垂直方向的距离由`margin`来决定，属于同一个BFC的两个盒子，在相邻方向的外边距会发生重叠
* BFC区域不会和`float`盒子区域重叠。
* BFC就是页面上的一个隔离的独立容器， 容器内的子元素和BFC外面的元素互不影响.
* 对于从左往右的格式化来说每个盒子的`margin-left`与包含块容器的`border-left`相接触，对于从右往左的格式化刚好相反。即使存在浮动也是如此。
**如何触发BFC**
* `html`元素
* `overflow`不为`visible`
* `position`为`absolute`或`fixed`
* `float`不为`none
* `display` 的值为 `table-cell`, `table-caption`,`inline-block` 中任何一个
**BFC用处**
* 清除浮动
* 防止margin重叠(其实这里我觉得不用相邻的margin就可以了。。)
* 两栏自适应布局

# Q3.[js]统计某一字符或字符串在另一个字符串中出现的次数
# A3：
```javascript
    function count(str,char){
        return str.split(char).length - 1;
    }
```