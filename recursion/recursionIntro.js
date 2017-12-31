//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
var firstOne = function(n){
	while(n){
		console.log(n--);
	}
	console.log(n);
}
//2. Next, try looping just like above except using recursion
var secondOne = function(n){
	console.log(n);
	if (!n) { 
		return; 
	}
	return secondOne(--n);
}

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
var exponent = function(base, expo){
	var total = 1;
	while (expo) {
		total *= base;
		expo--;
	}
	return total;
}

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
var recursiveExponent = function(base, expo){
	if (expo === 1) { return base; }
	return base * recursiveExponent(base, --expo);
}

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
var recursiveMultiplier = function(arr, num){
	if (arr.length === 0) {
		return arr;
	}

	var elm = arr.pop();

	recursiveMultiplier(arr, num);

	arr.push(elm*num);

	return arr;
}

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
var recursiveReverse = function(arr) {
	var newArray = [];
	var addBit = function(arrOrder){
		if (arrOrder.length > 0) {
			newArray.push( arrOrder.pop() );
			addBit(arrOrder);
		}
		return;
	}

	addBit(arr);
	return newArray;
}

console.log('=== First function');
firstOne(10);

console.log('=== Second function');
secondOne(10);

console.log('=== Exponent function');
console.log( exponent(2,3) );

console.log('=== Exponent recursive function');
console.log( recursiveExponent(2,3) );

console.log('=== Recursive multiiplier function');
console.log( recursiveMultiplier([1,2,3,4,5], 2) );

console.log('=== Recursive reverse function');
console.log( recursiveReverse([1,2,3,4,5]) );