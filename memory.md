what if memory, one of the foundational models of programming, came in the form of structures. this is essentially what data structures are in computer science. but in programming, we basically have the power to construct any data structure, any data model, which fundamentally changes the structure of the program. 

it's just too much power and not enough constraint. that's a key idea we explore with meta. 

## programming design paradox 
as we move further away from manual memory management such as C and assembly, we increase programming productivity, and cognitive ergonomics. we fundamentally remove a huge domain of time consumption and cognitive overload, when we introduce automatic memory management and garbage collection. this is because it reveals something crucial about human beings and the structure of programming design languages; when we remove unnecessary computational layers, we start focusing on building code that produces output, rather than building code that build systems produce output. there is a fundamental difference.

we should probably move the above to a centralized research file but it's okay for now! 

the Paradox of design in modern programming languages, is, as we move away from manual memory management, we introduce more power and less understanding and less explanation on how to use the systems. that's fundamentally volatile. 

programming languages removed the domain of manual memory management, but they did not introduce memory structures, reusable models for how we store our code. this is the primary concept behind the reason of creating meta lang, with a prepackaged memory domain. a framework which takes a radical approach to programming. and the domain of memory is one of the fundamental parts of the computer program. it is also one of the most under explored areas. 

memory itself can be modeled, structured and patterns. that's also a huge part of cognitive overload. we don't know how to choose the correct structure the correct data model for our current problem to solve in the code. the purpose of this domain in metaling, is to provide templates, structures, patterns, and more importantly, fundamental constraints for how restore memory in our computer programs. however, we also have the ability to create more complex structures, as required by the necessity of our program. fundamentally, but default prepackaged structures that come with the standard version of metalang, have been determined to be the most generally cognitively ergonomic.

## Default meta-memory structure, the binary tree

The motivation behind this structure, is to make storing and retrieving memory from our computer program, *feel* closer to the human thinking layer.

this is where we include research on how we human beings store information, how we remember things essentially, but also how we think. it's important to represent the code as close to the human as possible, because code is written for humans fundamentally. we read code. and if we can think in terms of the code, we can create better, safer code. 

fundamentally, the framework of meta, comes prepackaged with models of memory structure. providing constraint, templates, without reducing performance or creating more problems than solving. 

fundamentally, objects are a form of tree model memory. this is most likely the default structure of memory for all meta programs. 

for example with the tree model structure, we fundamentally change the way we store and think of our program. it's similar to website URLs or folder paths, which is essentially a binary file tree structure. 

```js
// there are two aspects to the memory domain in matalang.
// 1) how we actually store information. 
// 2) are we retrieve information. 
new Data("My fancy integer").value(3);
```

where is this data being stored? and how do we access it? those are the two primary parts of this memory model domain. 

```js
// when we create a new data piece in meta, internally it is calling the system core components, to store data, into a program register. this is essentially how computers also work, and how they make memory management, a problem to solve computationally, not manually. 

// in this case, the program stores the data, to the default block:
Program.memory.data['My fancy integer']
```

the way we think about data, shapes how we construct our computer programs. Peter is not only used for storing information, but it is fundamentally about remembering state. means we and store program snapshots, restore points, and more design problems, by simply making the most of memory as a fundamental unit of expression. rather than a static variable to store data.

```js
// in this example, we store an abstract kind of data, we describe how data will be stored. this is essentially the ability to create types, as inspired by the Ada programming language, as well as lisp.
new Abstract("x").type("integer")
```

the actual binary tree data models, are still being worked on, but in the most classical programming terms, we can access the object chain, because essentially objects are like binary trees:

```js
// in meta, closer to the human neuron ability to construct paths in binary space, we store units of information, inspired by hop field networks, or more practically speaking, folder paths and urls. this is how we actually construct parts of the real world.
Memory.elems.buttons.graph;

// we also explore the ability to store different kinds of data, not limited to graphical components. this means we unlock a new processing ability, which allows us to introspect the system later. so the memory domain is a core aspect in meta, as it is a core aspect in life, and computers!
Program.branches.core;
```

here is a work in progress model for retrieving data. this helps us to think in terms of url paths, categories, and folders, which is more familiar than static variables.

```js
//
Retrieve("Program/branches/core").unit("My fancy integer")
```

## nonlinear, database representations of memory structure in code.

rather than storing variables, we think of data as points. like little neurons. they can each process data... (okay this became too abstract, but the idea of points, and an interconnected graph, is fundamental to our understanding of how complexity emerges in programming! it comes from the relationships of those points, the edges of the graph. as explored deeper in graph theory.)

we could also explore a three-dimensional graph memory structure, but that would require a database matrix just to store memory for our program, which would become problematic. however, we could assign tags, categories, descriptions, and more properties for storing parts of our program. this might be fundamentally closer to how we think of our computer program, and this is how Wikipedia and other database non-linear models are structured. we cannot interact with the non-linear structure directly, that's a fundamental human limitation. however, we can model the data as a database. this is essentially explored in other complex Fields like chemistry, and data science 

