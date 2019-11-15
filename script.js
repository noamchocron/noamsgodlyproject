//write first method
function sleep_in(weekday,vacation) {
    var weekDay = !weekday || vacation;
    return weekDay

}

//write second method
function monkey_trouble(param1, param2) {
    return param1;
}

//add 2-10 below here...
// 2nd problem
function monkey_trouble(a_smile,b_smile) {
    var monkey_trouble = (!a_smile || b_smile) && (a_smile || !b_smile);
    return monkey_trouble;
}

//3rd problem
function string_times(string, num) {
    var startingString = "";
    for(var i = 0; i < num; i++){
        startingString += string;
    }
    return startingString;

}

//4th problem
function front_times(string, num) {
    var startingString = "";
    var theThreeFirst = str.substr(0, 3);
    for (var i = 0; i < num; i++) {
        startingString += theThreeFirst;
    }
    return startingString;
}

//5th problem
function string_bits(word){
    var startingString = "";
    for(var i = 0; i < word.length; i++){
        if(i % 2 == 0){
            startingString += word.substring(i, i+1);
        }
    }
    return startingString;
}

//6th problem
function caughtSpeeding(num, birthday){
    if( birthday == true){
        var num = num - 5;
    }
    if(num <= 60){
        return 0;
    }
    if(80 >= num && num> 60){
        return 1;
    }
    if(num > 80){
        return 2;
    }
}

//7th problem
function fizz_buzz(num){
    if(num % 3 == 0 && num % 5 != 0){
        return "Fizz";
    }
    if(num % 3 != 0 && num % 5 != 0){
        return num + "!";
    }
    if(num % 5 == 0 && num % 3 != 0){
        return "Buzz";
    }
    if(num % 3 == 0 && num % 5 == 0 ){
        return "FizzBuzz";
    }
}
//8th problem
function teaParty(tea, candy){
    if(tea < 5 || candy < 5) {
        return 0;
    }
    if(tea >= 2 * candy || candy >= 2 * tea){
        return 2;
    }
    if(tea >= 5 && candy >= 5){
        return 1;
    }
}
//9th problem
function blackjack(cardOne, cardTwo){
    if(cardOne > 21 && cardTwo > 21){
        return 0;
    }
    if((cardOne < cardTwo || cardOne > 21) && cardTwo <= 21){
        return cardTwo;
    }
    if((cardTwo < cardOne || cardTwo > 21) && cardOne <= 21){
        return cardOne;
    }
}

//10th problem
function loneSum(x, y ,z){
    if((x == y) && (x == z)){
        return 0;
    }
    if((x == y)){
        return z;
    }
    if((x == z)){
        return y;
    }
    if((y == z)){
        return x;
    }
    var sum = x + y + z ;
    if((x!= y) && (x!= z) &&(y !=z)){
        return sum;
    }
}

//11th problem
function firstLast6(num){

}
//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
    //test third method, etc

}
