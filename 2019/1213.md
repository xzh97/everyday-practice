# Q1.[html] HTML5的文件离线储存怎么使用，工作原理是什么？
# A1：大致知道有indexedDB, localStorage, sessionStorage, cookie,webSQL这五个，但是原理就不知道了
* 找到的答案：https://www.cnblogs.com/humin/p/4214627.html
# Q2:[css]CSS选择器有哪些？哪些属性可以继承？
# A2：
* CSS选择器：元素，id,类，后代，相邻元素，伪类选择器，属性选择器，通配符选择器
* 哪些属性可以继承：line-height， font，
* 找到的答案：1.https://www.runoob.com/cssref/css-selectors.html 2.https://www.jb51.net/css/572045.html

# Q3.[js]写一个方法把下划线命名转成大驼峰命名
# A3：
```javascript
    function underline2Str(str){
        return str.replace(/\_(\w)/g,(all,letter) => {
            return letter.toUpperCase();
        })
    }
```