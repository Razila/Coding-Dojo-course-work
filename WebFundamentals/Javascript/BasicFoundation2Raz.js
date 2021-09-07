function numToStr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }

    return arr;
}


function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];

    for (var i = 1; i < arr.length; i++) {

        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }

    }

    console.log(min)
    return max;
}

function oddSecondToLast(arr) {
    var secTo = arr[arr.length - 2];
    var frstOdd = 0;
    var odds = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odds.push(arr[i]);
        }
        frstOdd = odds[0];
    }

    console.log(secTo);
    return frstOdd;
}

function double(arr) {
    var newArr = []

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }

    return newArr
}

function countPositives(arr) {
    var pos = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++;
        }
        arr[arr.length - 1] = pos
    }
    return arr
}

function evensOdds(arr) {
    var evenCount = 1;
    var oddCount = 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i] === arr[i + 1]) {
            oddCount++;
            if (oddCount == 3) {
                console.log("That's odd!");
                oddCount = 0;
            }
        }

        if (arr[i] % 2 == 0 && arr[i] === arr[i + 1]) {
            evenCount++;
            if (evenCount == 3) {
                console.log("Even more so!");
                evenCount = 0;
            }
        }
    }
}