/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

function Queue(capacity) {
	this.capacity = capacity;
	this.queue = {};
	this.insertPoint = 0;
	this.pullPoint = 0;

	for (;capacity--;) {
		this.queue[''+capacity] = ' ';
	}

	this.printQueue = function() {
		var output = '[ ';
		for (var i=0 ; i<this.capacity ; i++) {
			output += this.queue[i]+' ';
		}
		output += ']';
		return output;
	}

	this.shiftPosition = function(){
		for(var i=0 ; i<=this.insertPoint ; i++) {
			this.queue[i] = this.queue[i+1];
		}
	}
}

Queue.prototype.enqueue = function(value) {
	console.log('queue length:', this.insertPoint);
	if (this.insertPoint === 9) { return; }
	this.queue[this.insertPoint++] = value;
	console.log( this.printQueue() );
};
// Time complexity:

Queue.prototype.dequeue = function() {
	console.log('DE QEUE:', this.insertPoint);
	if (this.insertPoint === 0) { return; }
	this.shiftPosition();
	this.insertPoint--;
	console.log( this.printQueue() );
};
// Time complexity:

Queue.prototype.peek = function() {
	return this.queue[this.insertPoint];
};

Queue.prototype.count = function() {
	return this.insertPoint;
};
// Time complexity:

var queue = new Queue(10);
queue.printQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.dequeue();
queue.dequeue();
queue.enqueue(8);
queue.dequeue();
queue.enqueue(9);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */