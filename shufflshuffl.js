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

var today = new Date(), array1 = [], numArray = [], dateArray = [];

var date = document.getElementById('date');
var input01 = document.getElementById('input01');
var button01 = document.getElementById('btn01');
var button02 = document.getElementById('btn02');
var button03 = document.getElementById('btn03');
var output01 = document.getElementById('output01');
var output02 = document.getElementById('output02');

button01.addEventListener('click', function () {
    if (input01.value != 0) {
        var task = document.createElement('li');
        task.innerHTML = input01.value;
        array1.push(input01.value);
        output01.appendChild(task);
        input01.value = '';
    }
})

button02.addEventListener('click', function () {
    var task2 = document.getElementById('li');
    // var deadline = new Date(2021, --month, ++day);
    var deadline = new Date(date.value);
    var difference = Math.floor((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    for (var i = 0; i < array1.length; i++) numArray.push(Math.floor(Math.random() * difference));
    numArray.sort(function (a, b) { return a - b });

    for (var i = 0; i < numArray.length; i++) {
        dateArray.push(new Date());
        dateArray[i].setYear(today.getFullYear());
        dateArray[i].setMonth(today.getMonth());
        dateArray[i].setDate(today.getDate() + numArray[i] + 1);

    }
    if (deadline.getTime() - today.getTime() > 0) {
        for (var i = 0; i < dateArray.length; i++) {
            output02.innerHTML += `<br>${array1[i]}: ${dateArray[i].toLocaleDateString()}`;
        }
    } else {
        output02.innerHTML += 'Deadline over!! Enter a date from today onwards';
    }
})

button03.addEventListener('click', function () {
    output01.innerHTML = "";
    output02.innerHTML = "";
    array1 = [], numArray = [], dateArray = [];
})

