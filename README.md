# DOM (Document Object Model)
Hey, It's been a rough and exciting week. I got my convocation on 9th february. That's why i couldn't push anything to git. (also I was being lazy) Throughout this week I tried to learn DOM, how to interact with events, how to change elements and attributes in js. So this is like a summary of DOM and what i learned in this week. Maybe I will practice another day and then I will do a small project based on DOM. Hopefully I will update this repo or maybe not. But the project will have his own repository. 

I will try to make notes more efficiently and I will add note in every repo. Tata.

------
## What DOM Defines?
* The events for all html documents
* The methods to access all html elements
* The properties of all html documents
* All html elements as objects

## Finding HTML elements in 4 ways:
* getElementById()
* getElementsByClassName()
* getElementsByTagName()
* querySelector() & querySelectorAll()

## Some JS events:
* onclick
* onmouseover
* onmouseout
* onblur
* onchange

## Event Handler
An event handler is a routine that deals with the event, allowing a programmer to write code that is executed when the event occurs with the help of event attributes. Event attributes are:
* onclick
* ondblclick
* onchange
* onblur

## Event Bubbling 
Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.
![bubble](https://user-images.githubusercontent.com/66853064/218594323-4c3f8de8-a9d8-4114-9eef-5be9c5c24826.PNG)

## Event Capturing
Event capturing is the event that starts from the top element to the target element.

## stopPropagating()
This method of the event interface prevents further propagation in the capturing and bubbling phase.

## How to use JS in HTML Document?
We can use JS like internal CSS, or we can use external file for JS. Internal JS can be written inside script tag.
![js](https://user-images.githubusercontent.com/66853064/218595343-a997310f-9492-4c9a-b951-9300d84bd1f5.PNG)

* DOM Creates a tree from HTML Document.
![node](https://user-images.githubusercontent.com/66853064/218596267-a11d3836-95cd-40d8-9fc1-b4766507b5e0.PNG)

## What can JS do with DOM?
* JS can change all the HTML elements in the page.
* JS can change all the HTML attributes in the page.
* JS can change all the CSS styles in the page.
* JS can remove existing HTML elements and attributes.
* JS can add new HTML elements and attributes.
* JS can react to all existing HTML events in the page.

## NodeList VS HTML Collection
An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

## Some random thing about DOM
* DOM is like a programming interface for HTML document.
* When a web page is loaded in browser, HTML document converts as DOM tree.
* Why we need DOM?
    * We can use DOM to manipulate html and css elements, also we can react to events.

&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
# Common DOM Related Questions and Answers

## What is DOM?
DOM is an programming interface for HTML document. When a web page loads on browser, that html document get converted into a DOM tree. DOM defines the events for all html documents, method to access all html elements, the properties of all html documents and all html elements as an object.

## What are the different ways to get an element from DOM?
From the DOM, users can access HTML elements in five different ways in JavaScript.

* Get HTML element by Id
* Get HTML element by className
* Get HTML element by Name
* Get HTML element by tagName
* Get HTML element by CSS Selector

## What's the difference between an Event Handler and an Event Listner?
These are two ways of handling events.  

When a code runs after an event takes place, this is known as registering an event handler. On the other hand, the event listener listens to the event and then triggers the code for handling the event.

## What does event bubbling mean in JavaScript?
Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.
![bubble](https://user-images.githubusercontent.com/66853064/218594323-4c3f8de8-a9d8-4114-9eef-5be9c5c24826.PNG)
Event bubbling is a method of event propagation in the HTML DOM API when an event is in an element inside another element, and both elements have registered a handle to that event. It is a process that starts with the element that triggered the event and then bubbles up to the containing elements in the hierarchy. In event bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements.
## Can you explain the different types of events available in JavaScript?
* onchange	An HTML element has been changed
* onclick	The user clicks an HTML element
* onmouseover	The user moves the mouse over an HTML element
* onmouseout	The user moves the mouse away from an HTML element
* onkeydown	The user pushes a keyboard key
* onload	The browser has finished loading the page

## What's the difference between event.preventDefault() and event.stopPropagation()?
stopPropagation prevents further propagation of the current event in the capturing and bubbling phases.

preventDefault prevents the default action the browser makes on that event.

event.preventDefault()
Prevents the browsers default behaviour (such as opening a link), but does not stop the event from bubbling up the DOM.

event.stopPropagation()
Prevents the event from bubbling up the DOM, but does not stop the browsers default behaviour.