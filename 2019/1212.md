# Q1.HTML全局属性(global attribute)有哪些（包含H5）？？
# A1：
* id,class,data-*,title,style,hidden,
* 找到的答案：
$$accesskey:设置快捷键
    class:为元素设置类标识
    contenteditable:指定元素内容是否可编辑
    contextmenu:自定义鼠标右键弹出上下文菜单内容（仅firefox支持）
    data-*:为元素增加自定义属性
    dir：设置元素文本方向（默认ltr；rtl）
    draggable:设置元素是否可拖拽
    dropzone:设置元素拖放类型（copy|move|link,H5新属性，主流均不支持）
    hidden:规定元素仍未或不在相关
    id:元素id，文档内唯一
    lang:元素内容的语言
    spellcheck:是否启动拼写和语法检查
    style:行内css样式
    tabindex:设置元素可以获得焦点，通过tab导航
    title:规定元素有关的额外信息
    translate:元素和子孙节点内容是否需要本地化（均不支持）$$

# Q2:在页面上隐藏元素的方法有哪些？
# A2：
* display:none, visibility:hidden, opacity:0, <div hidden></div>,
* 找到的答案：
$$占位:
    visibility: hidden;
    margin-left: -100%;
    opacity: 0;
    transform: scale(0);
不占位:
    display: none;
    width: 0; height: 0; overflow: hidden;
仅对块内文本元素:
    text-indent: -9999px;
    font-size: 0;$$

# Q3.去除字符串中最后一个指定的字符
# A3： 其实觉得最好用的应该是正则。但是动态的字符 这个正则我不会写。 所以就这样写了
```javascript
    //str,letter均为字符串
    function removeLastLetter(str, letter){
        let lastIndex = str.lastIndexOf(letter);
        let arr = [];
        if(lastIndex > -1){
            arr = str.split("");
            arr.splice(lastIndex,1);
            return arr.join('');
        }
        else{
            console.log(`未查找到字符${letter}`)
        }
    }
```
```javascript
    // 在issue里找到了。
    function delLast(str,target) {
        let reg =new RegExp(`${target}(?=([^${target}]*)$)`)
        return str.replace(reg,'')
    }
```
