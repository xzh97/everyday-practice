# Q1.[html] label都有哪些作用？并举相应的例子说明
# A1：label可以和表单控件进行关联。
例子：
* `<input id= 'male'type='radio' value='male'>`
* `<label for='female'>美女<input id= 'female'type='radio' value='female'><label for='female'>`

# Q2:[css] 用css创建一个三角形，并简述原理
# A2：
```css
div {
    width: 0;
    height: 0;
    border-top: 50px solid black;
    border-right: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 50px solid transparent;
}
```


# Q3.[js] 写一个去除制表符和换行符的方法
# A3：
```javascript
    function remove(str){
        return str.replace(/\t|\n/g,'');
    }
```