var testArr = [6,3,5,1,2,4]
for(i=0;i < testArr.length; i++){
    var sum = 0
    sum+=testArr[i]
    console.log("Num",i,"Sum",sum)
}


//output:
//Num 6, Sum 6
//Num 3, Sum 9
//Num 5, Sum 14
//Num 1, Sum 15
//Num 2, Sum 17
//Num 4, Sum 21


var testArr = [6,3,5,1,2,4]
for(i=0;i < testArr.length; i++){
    testArr[i] = testArr[i]*i
}
console.log(testArr)

// output: [0,3,10,3,8,20]
