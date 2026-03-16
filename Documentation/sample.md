# Pseudo-code example
This is an example of what the future of programming could look like. A purely block-based world, with natural language, without stripping away the engineering dimension of programming. A sweet-spot between ai-generated bloat, and classical programming.

Metalang (2026)

```javascript
new Program("fibonacci sequence")
	.note("the Program defines the abstract flow of the program. But the actual values are set when the program is executed, later.")
	.thread("input").accepts("number").store("program stack")
	.thread("enumlogic").type("i-based loop").input("thread: input")
    	.define.loop("enumlogic").iterator("i").apply("math: fibonacci")
    .thread("output").returns("console").data("enumlogic: output")
Program("fibonacci sequence").input(2).execute()
```

Javascript (1999)

```javascript
/** Fibonacci sequence prints the sum of the previous 2 numbers. Starting from 0 and 1 */
function fib(num){
  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log("Fibonacci(5): " + fib(5)); // Output: 3
console.log("Fibonacci(8): " + fib(8)); // Output: 13
```
