# Q1.[html] 简述超链接target属性的取值和作用
# A1：主要用来确定如何打开文档页面。
* _self: 当前页面打开
* _blank: 新建一个页面打开

* 找到的答案：
_blank
浏览器总在一个新打开、未命名的窗口中载入目标文档。

_self
这个目标的值对所有没有指定目标的 <a> 标签是默认目标，它使得目标文档载入并显示在相同的框架或者窗口中作为源文档。这个目标是多余且不必要的，除非和文档标题 <base> 标签中的 target 属性一起使用。

_parent
这个目标使得文档载入父窗口或者包含来超链接引用的框架的框架集。如果这个引用是在窗口或者在顶级框架中，那么它与目标 _self 等效。

_top
这个目标使得文档载入包含这个超链接的窗口，用 _top 目标将会清除所有被包含的框架并将文档载入整个浏览器窗口。

# Q2:[css] CSS3新增伪类有哪些并简要描述
# A2：
* nth-of-type
* first-child 当前元素下的第一个子元素
* last-child 当前元素下的最后一个子元素
* nth-of-child
* 找到的答案：https://blog.csdn.net/index2/article/details/79453529

# Q3.[js] 写一个把字符串大小写切换的方法
# A3：
```javascript
    //应该还有更简单的方法
    function toggleCase(str){
        let arr = str.split('');
        arr = arr.map(item => {
            let charCode = item.charCodeAt(0);
            if( charCode >=65 && charCode <= 90){
                return item.toLowerCase();
            }
            else if( charCode >= 97 && charCode <= 122){
                return item.toUpperCase();
            }
            else {
                return item;
            }
        })
        return arr.join('');
    }
```
