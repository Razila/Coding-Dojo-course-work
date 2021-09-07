function greeting(){
        return "Hello";
        console.log("World");
    }
    var word = greeting();
console.log(word);

// output: prints "World" in the console 
//and returns the value "Hello" within the code


function add(num1, num2){
        console.log("Summing Numbers!");
        console.log("num1 is: " + num1);
        console.log("num2 is: " + num2);
        var sum = num1 + num2;
        return sum;
    }
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

// output: result1 - "Summing Numbers! num1 is: 3  num2 is: 5 "  
//returns the value of 8 within the code
//// output: result2 "Summing Numbers! num1 is: 4  num2 is: 7 "
//returns the value of 11 within the code



function highFive(num){
        for(var i=0; i<num; i++){
            if(i == 5){
                console.log("High Five!");
            }
            else{
                console.log(i);
            }
        }
    }
        
highFive(6);

// output: console prints - "0,1,2,3,4,'High Five!' "