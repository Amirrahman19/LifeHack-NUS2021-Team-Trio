var array = [], randTask = [], num;
var input1 = document.getElementById('active');
var output1 = document.getElementById('output');
var output2 = document.getElementById('output2');
var button1 = document.getElementById('btn1');
var button2 = document.getElementById('btn2');
var button3 = document.getElementById('btn3');

button1.addEventListener('click', function () {
    if (input1.value != 0) {
        var task = document.createElement('li');
        task.innerHTML = input1.value;
        array.push(input1.value);
        output1.appendChild(task);
        input1.value = '';
    }
})




button2.addEventListener('click', function () {
    output2.textContent = "";
    while (array.length) {
        num = Math.floor(Math.random() * array.length);
        randTask.push(array[num]);
        array.splice(num, 1);
    }
    for (var i = 0; i < randTask.length; i++) {
        output2.innerHTML += "<br>" + randTask[i];
    }
})

button3.addEventListener('click', function () {
    output1.innerHTML = "";
    output2.innerHTML = "";
    array = [], randTask = []
})


