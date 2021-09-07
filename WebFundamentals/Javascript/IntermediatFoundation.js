function sigma(num){
    var sum=0;
    for(var i=0; i<=num; i++){
        sum=sum+i
    }
    return sum
}
console.log(sigma(6))
//returns the sum of all positive integers up to the given number (inclusive)

function factorial(num){
    var fact=1;
    for(var i=1; i<=num; i++){
        fact=fact*i
    }
    return fact
}
console.log(factorial(num))
//returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive)

function secToLast(arr){
    var secTo = 0;

    for(var i=0; i<arr.length; i++){
        if(arr.length<3){
            return null
        }
        secTo = arr[arr.length - 2];
    }

    return secTo;

}

console.log(secToLast([3,2,5,7,5]))

//Return the second-to-last element of an array.


function NthToLast(arr,num){
    var Nth = 0;

    for(var i=0; i<arr.length; i++){
        if(arr.length<3){
            return null
        }
        Nth = arr[arr.length - num];
    }

    return Nth;

}
console.log(NthToLast([5,2,3,6,4,9,7],3))

//Return the element that is N-from-array's-end.

function doubleTrouble(arr){
    var dblArr=[];

    for(var i=0; i<arr.length; i++){
        dblArr.push(arr[i],arr[i]);
    }
    return dblArr;
}

console.log(doubleTrouble([4, "Ulysses", 42, false]))

//Create a function that changes a given array to list each 
//existing element twice, retaining original order.

///Could not figure out fibonacci and second-largest