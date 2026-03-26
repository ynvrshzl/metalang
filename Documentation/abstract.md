# Metalang: a Thesis and Abstract
In this research paper/essay, we explore the ideas and theory of metalang, someday implementing the ideas expressed in this paper, into actual functional code.

## 1.0 Introduction
*(Deep breath)*... I was looking at some of the Linux kernel source code... it's mostly written in C. It amazes me that we've managed to build virtual cathedrals using sticks and stones! Seriously, how did we get away with this soup for over 7 decades of compuation history? comeon guys! we've been building virtual cathedrals with toothipicks, and the only reason people are crazy enough to sign up for this is becuase you can code while in your pijamas!! (this might actually be true lmao.)

### 1.1 History of Programming Languages
okay so... in the early days of C we had around 30 keywords... and a few program features... and a... standard library... other than that... linux developers... and more... have basically been using const, function, and a few pointers* to build massive systems... it's like... HOW LMAO.

here's what we're thinking; fundmaentally redesign the language so we're working with both a tool and an instrument.

To design a language from scratch, would be akin to re-inventing anatomy in a blank canvas! There's not enough coffee in the world to power my tired brain for that lol. So instead, let's focus on the smallest foundational parts of modern programming, and inspect where human stress and issues arise, at these fundamental parts. Then, i think it would be neat to apply some science and some faith (lol yes...) to construct parts that are closer to our somatic human processing. That's the goal for the design of metalang.

Before the language itself, what is proto-language? The way a programmer *thinks. this is crucial and pretty much, completely neglected in today's languages, which explains the burnout and health issues in this field. It's not about chaos/complexity overload, other fields deal with far more complexity than software and they manage it properly. I think it's because those fields have mapped this core nucleus, soto speak, which is the translation between the human inner world (thought, problem-solving, idea, etc.) and the output product (solution, model, system, etc.) the actual translation is language itself. fundamentally, that's what i think language is... a cognitive translation tool

## 2.0 Mapping human cognition as literatue
What if we mapped the way a programmer *actually* thinks, in the language itself, rather than forcing mere syntax and language features?  

- Problem solving abilities
- Step-by-step instruction (which mirrors the way we solve
- Conversion of abstract ideas or problems, into practical solutions (this is the miracle of human cognition, the ability to convert abstract information (potential), into real-world solutins (kinetic actuation.)[^1])

So if we map the way a programmer thinks (which is in narrative terms of steps, more of a list, and not a graph.) then the language should follow a narrative structure. That means

- No scopes 
- No graph-relationships

So is this possible? Yes! is it practical? That's the puzzle here!

```java
Using().a().narrative().structure().like().this();
```

Okay, language design mode.

Classical programming (cprog) basic building blocks;
- Data
- Function
- Variable
- Condition
- Operator
- etc...

Let's break down some of these, conceptually atleast, to understand how to design a useable language

## 1 - Function
Probably the most used verb in all of programming. But what the actual heck, is a "function?"... the etymology is incorrect! A function is not an encapsulated sequence of code... a 'function' is a utility of a system, e.g. a mechanic, not a reuseable, composable sequence. So the first idea could be to split the etymology into two parts:
- Etymologically accurate function, which describes a mechanic of a program.
- Theoretical, classical function, which describes composable, re-useable code.

Now we have two blocks; $Function(x)$ and $Composition(x, y, z, ...)$

It's also worth nothing that the fundamental design of metalang, atleast in thsi current theoretical, prototype version, is using purely functions and object chaining, which is why defining the somatic function is our first natural instinct! It is the most used part of programming, and, it's usecases are far more complicated than merely saving a reuseable block of code. As soon as a function can call other functions (graph) or call itself (recursion) or worse, callbacks and closures (a scoped function block, inside a function... pure madness) we get this strange paradox that we see everywhere throughout code: The more we reduce verbosity of instructions, the more chaos emerges. This is actually the foundational study of chaos theory (or cybernetics?)... how tiny changes can lead to unpredictable chaos over time.

However, i think all of these blocks emerged into the final "function" by accident. they emerged out of natural human necessity, so the answer isn't to replace these things back to the stone age, i think it's to apply cybernetics + somatic approach to language, and make things **clear in orientation.** That's the main design construct!

In short, the current main building block of programming? We need to nerf him a little bit... no like... nuke the buffs lol! The function is way too powerful! So let's continue examining the various human engineer uses of the cprog function, and split the responsibility and mental model of a function into specific language blocks.

### 1.1 - Dissecting the anatomical structure of the function
A cprog-function can:
- Create things (composition)
- Return values (calculation)
- Transform values (mutation)
- Call other functions (callback graph)
- Create blocks (scope, basically a subprogram inside the main program)
- Recursively loop until condition is met (recursion is madness)
- Keep internal state/memory snapshots (closures hold memory where they shouldn't...)

That's crazy. Nothing in the human english language has that many properties lol. Let's split them into clear blocks. 

Note, we also explore a key hypothesis: what if we created a programming interface, in which keywords are verbs, adjectives, and natural human language, while remaining computational?

- **Transformer.** In classical programming, a function which accepts parameters and outputs a transformed operation, should be solely single-reponsibility with the transformation of (x) into (y)
- **Request.** a function that calls another function, should clearly define, at the titular level, what it's doing. e.g. function(x).request(b) notifies the human engineer, x is calling b
- **Feed.** In cprog, a function can recieve input and return things. This is less of a verb, and more of an action.


## [3.0] "The Programmer's Paradox"
Now, separating the roles of a function into it's single responsibility parts, makes reading and expressing code, much more natural, but also more verbose. The solution here might be a crossway between verbosity of clear intention, and collapsed complexity... so... if we want to compose these things ,they should be clearly visible, not function a which calls function b which calls function a again which calls function c recursively. that kind of data train is brain soup for our cognition!! we need clear composability. (Still researching an implementation for this...!!) Perhaps a...  Compose(x, y, z) block could be introduced to signify that this sequence of program, is specifically intended to be compressed into a single thing, while also being clear of the split-function composition.

If mathematics is the core foundation of programming, why isn't it treated as such? And where should programming diverge from mathematical constructs? Arguably, programming is much heavier in logic than it is with pure numerical computation, so language should emerge into the logical processing of our human cognitive abilities, while allowing for our messy expressive chaotic parts... that's the main struggle balance of a language!

Pair this metalang foundation, plus our codelens query language + map visualization ideas... and pretty much we see a whole new generation of human engineers, ready to work at our native level, alongside the emergent artificial intelligent systems that will undoubtedly, require extreme ethics and understanding. current levels of programming tools are like trying to understand how a car engine works, while using stone primitives lol.

but let's keep this project playful, that's the only thing that keeps the fire from dying!!

# Credits, Footer, Citations
&copy; ynvrshzl@github.com, Hazl Lzah

[^1]: Citation for this beautiful theorem, is coming soon...!!
