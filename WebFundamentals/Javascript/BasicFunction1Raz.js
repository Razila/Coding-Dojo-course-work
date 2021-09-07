function a(){
    return 35;
}
console.log(a())

//prints "35" in the console

function a(){
    return 4;
}
console.log(a()+a());

//prints "8" in the console

function a(b){
    return b;
}
console.log(a(2)+a(4));

//prints "6" in the console

function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
    
//prints 3 and 9 in the console

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
 
//prints 40i in the console 

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

//prints 4 in the console

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

//prints "10 3", then prints 30 in the console

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//prints 3 then prints 4 in the console

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

//prints 2, 5, 8, 11 in the console

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

//prints 0, 1, 2 ,3, 4, 5, 6, 7, 8 ,9, then 0, 1, 2 ,3, 4, 5, 6, 7, 8 ,9 , and 0

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

//nothing happens, the function was not called

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

//nothing happens, the function was not called

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

//prints 10 in the console

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//prints 15 then prints 10 in the console

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//prints 15 15 in the console