/*用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值*/

function randomArr(arr){
    if(arr.length >= 5){
        console.log(arr);
        return ;
    }
    else{
        let num = randomNumber();
        arr.indexOf(num) === -1 && arr.push(num);
        randomArr(arr);
    }
}

function randomNumber(){
    return ~~(Math.random() * 30 + 2);
}

randomArr([]);
