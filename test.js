function oldEnoughToDrive(age){
	if (age >= 16) return true;
	return false;
}


function sameLength(first, second){
	console.log (first, second);
	if (first.length === second.length) return true;
	return false;
}

function isLongEnough(password, length){
	if(password.length >= length) return true;
	return false;
}

function rentalCar(name, age){
	if (age >= 18 && age < 21 &&) 
	if(age < 21 || name==="joe") return "You cannot have the keys because you are underage "+name;
	return  `Have fun driving ${name}!`;
}

function max(number1, number2){
	if(number1>number2) return `${number1} is larger than ${number2}`;
	return`${number2} is larger than ${number1}`;
}

function even(number)
{
	return (number % 2===0)?"even" : "odd";
}


function odd(number)
{
	return number % 2===1 ?"odd" : "even";
}

function positive (number){
	return number>0 ? "positive" : number < 0 ? "negative" : "zero";
}

function randInt(n){
	return Math.floor(n*Math.random());

}
function guessMyNumber(n){
	return Math.floor(6*Math.random()) ===n ? "You guessed my number!" :"Nope! That wasn't it!";
}
function scoreToGrade(n){
	let grades={
		"60":"D",
		"70":"C",
		"80":"B",
		"90":"A"
		}
	let val = (Math.floor(n / 10))*10;
	if(val<60 && val>0) return "F";
	if(val>100 || val<=0) return "INVALID SCORE";
	
	let signe = n % val;
	
	return (signe <= 2 ? grades[val] + "-" : signe >= 8 ? grades[val] + "+" : grades[val] ); 
	
}
function sum(start, end){
	if(start>end) {
	let c= end;
	end=start;
	start=c;
	}
	if (end === start){
		return start;
	}

	return end + sum(start,end-1);
}

function factoriel(n){
	if (n <= 1){
		return 1;
	}

	return n * sum(n-1);
}

function repeatString(str, n){
	if (n === 0){
		return "";
	}

	return str + repeatString(str, n-1);
}
function fibonacci(n){
	
	if (n === 0 || n === 1){
		return 1;
	}

	return fibonacci(n-1) + fibonacci(n-2)
}

function multiplyBy10(number, n){
	if (n === 0){
		return number;
	}
	return 1 * 10 * multiplyBy10(number, n-1) 
}

function product(start, end){
	if(start>end) {
	let c= end;
	end=start;
	start=c;
	}
	if (end === start){
		return start;
	}

	return end * sum(start,end-1);
}

function add(a,b){
	function inc(x) { 
	 return x + 1; 
	} 
 	function dec(x) { 
 		return x - 1; 
 	}
	if(b === 0){
		return a;
	} 
	inc(a);
	dec(b);
	return add(inc(a),dec(b));
}

function isEven(n)
{
	if(n===1){return false}
return !isEven(n-1)
}

function multiply (a,b){
if(b===0 || a===0) return 0
if(b===1) return a
	return a+multiply(a,b-1)
}

function range(a,b){
	if(a+1 === b -1) return a+1;

	return  "" + (a+1) + "," + range (a+1 , b);
}

function stringLength(str)
{
	if (str.slice(1)==="") {return 1}
		str = str.slice(1);
	return 1 + stringLength(str)
}


function modulo(n,d)
{
  	if(n-d<0)return n
  		return modulo(n-d,d)
}

function countChars(str,char)
{
	if(str[0] ===undefined) return 0;
	if(str[0]===char) return countChars(str.slice(1),char)+1
	return countChars(str.slice(1),char)
}
function indexOf (str,char){
	if (str[0] === undefined) return undefined ;

	if(str[0]===char) return 0 
	
	return  indexOf(str.slice(1), char)+1


}

function power (n,e){
if(e===1)return n

	return n*power(n,e-1)
}

function reverse(str)
{
	if(str[0]===undefined) return ""
		return str[str.lentgth-1] + reverse(str.slice(str.length-2,str.length-1)) 
}
