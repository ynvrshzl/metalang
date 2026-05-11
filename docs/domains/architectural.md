# Architecture blocks in Meta

When system architecture emerges in software, we must provide the human engineer a reliable set of design language patterns and blocks to construct systems, safely and securely (and hopefully, find joy in the process.)

Becuase software is inherently invisible structures, we must work with the code to make those structures visible.

Basically, these are way s of thinking about common system architecture patterns, from the meta perspective. Why does it matter to define them? [citation-needed](#)

## Appliaction
This is not only a collection of "patterns" but also, our research at connecting function with execution. Enconding the purpose of each block, in it's definition, or ideally, the name itself. E.g. App() describes an application, as function and use-case. This matters becuase code is often about what exists, but not how or when to use it. Those come from definitions of function.

## Concepts

| (B) Block | (F) Function or (R) Role | (E) Example |
| ---   | -------- | --- |
| Git() | Provides utilities for interacting with Git systems and services, from within the executable code itself. | Git().auth(encrypt) |
| App() _or_ Program() | The beginning of an application. | |
| Models.Web()  | A structure of code in which parts resemble nodes on a network. Highly advanced. |  |
| Todo() _or_ Notebook()        | Arguably, the most imoprtant block in an engineers toolkit.                                                       | Todo("New set here...") _or_ Chain().todo("Fix this sequence guys! comeon!) |
| Abstract() _or_ Abstraction() | Describes a definition for an abstract part                                                                       | __new Abstract(x).Type(float64).Poisson(true)__ |
| Prototype()                   | Describes a fully functional series of code, before further abstraction models implode it's complexity.           | __new Prototype(Memset).Passing(1)__ |
| Configuration()               | A configuration model is used as a registry of data for user-specific settings.                                   | |
| Memset.Router() _or_ Memrt()  | A memory router/Multi-plexer is responsible for passing data safely between objects.                              | |
| Models.Tree()                 | Describes a binary tree structure, with parent-children relationships. Specifically useful for sturcuting binary abstraction layers of code
