function get_array() {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}


function sum_even_numbers() {
    var sum = 0;
    for (var i = 0; i <= 1000; i++) {
        if (i % 2 === 0) {
            sum = sum + i
        }
    }
    //your code here 
    return sum;
}

function sum_odd_5000() {
    var sum = 0;
    for (var i = 0; i <= 5000; i++) {
        if (i % 2 !== 0) {
            sum = sum + i;
        }
    }//your code here 
    return sum;
}

function iterArr(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function findMax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    //your code here 
    return max;
}

function findAvg(arr) {
    var avg = 0
    for (var i = 0; i < arr.length; i++) {
        avg = avg + arr[i]
    }//your code here 
    return avg / arr.length;;
}

function oddNumbers() {
    var arr = [];
    for (var i = 1; i < 50; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    //your code here 
    return arr;
}

function greaterY(arr, Y) {
    var count = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++
        }
    }
    //your code here 
    return count;
}

function squareVal(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    //your code here 
    return arr;
}

function noNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0
        }
    }
    //your code here 
    return arr;
}

function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];

    for (var i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }

        sum = sum + arr[i];
    }

    var avg = sum / arr.length;

    var arrnew = [max, min, avg];

    return arrnew;
}

function swap(arr) {
    var arrnew = [];
    var min = 0;
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        min = arr[0];
        max = arr[arr.length - 1];
    }//your code here
    arr[0] = max;
    arr[arr.length - 1] = min;
    arrnew = arr
    return arrnew;
}

function numToStr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    //your code here 
    return arr;
}