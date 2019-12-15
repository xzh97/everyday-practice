# Q1.页面导入样式时，使用link和@import有什么区别？
# A1：
* link是html标签无兼容问题，@import是css语法
* link可以在dom中获取到节点并**动态修改其内容**，@import不可以
* link和html并行加载，@import是**等页面加载完再**加载
* link无兼容问题，@import 不兼容`IE5`

# Q2.圣杯布局和双飞翼布局

# Q3.用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
```javascript
    function randomArr(arr = []){
        if(arr.length >= 5){
            console.log(arr);
            return ;
        }
        else{
            let num = ~~(Math.random() * 30 + 2);
            arr.indexOf(num) === -1 && arr.push(num);
            randomArr(arr);
        }
    }
```