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
