/****************************/
/* Find elements in the DOM */
/* **************************/

// by id
const mainTitle = document.getElementById("main-title")
mainTitle.innerText = "Welcome to 'Crack It' e-commerce"


// by class name
const infoCollection = document.getElementsByClassName("info")
const infoElementsArr = [...infoCollection] // convert html collection to an array

infoElementsArr.forEach(function (element, i, arr) {
    element.innerText = "This is the new text"
    element.style.color = "blue"
})

// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p")



// by css selectors....
//
// querySelector()
// querySelectorAll()
// 

const first = document.querySelector("header h2")
const all = document.querySelectorAll("header h2")

all.forEach(function (elm) {
    elm.innerText = "this is the new subtitle"
    elm.style.color = "purple"
})


/*

Practice: selecting elements from the DOM

- Instructions: https://stackblitz.com/edit/web-platform-ydtmzw?file=script.js
- Time: 10-15min.
- Solution: https://stackblitz.com/edit/web-platform-doucbe?file=script.js

*/

//
// @Luis: 👉 keep the exercise as a comment in the code ;)
//



//
// context: document vs. element
//

const productsElm = document.getElementById("products")
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p")

const allParagraphsInProductsElm_Alternative = document.querySelectorAll("#products p")



/**************/
/* Properties */
/**************/


// Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link")
linkElm.innerText = "About Crack It squad"

// Read/Modify html contents --> elm.innerHTML
const pikachuElm = document.getElementById("pikachu")
pikachuElm.innerHTML = `
    <div>
        <p>one</p>
        <p>two</p>
        <p>
            <a href="#">click here for more info</a>
        <p>
    </div>
`

// Read/Modify CSS --> elm.style
mainTitle.style.color = "green"
mainTitle.style.background = "orange"
mainTitle.style.padding = "20px"
mainTitle.style.borderRadius = "20px"

// Read/Modify the id --> elm.id
// mainTitle.id = "the-new-id"


// Read/Modify class --> elm.className
// mainTitle.className = "box"


//
// elm.classList (provides methods to access class names)
//
// - elm.classList.remove("box");
// - elm.classList.add("new-class")
// - elm.classList.toggle("active")

mainTitle.classList.add("box")
mainTitle.classList.add("rounded")
mainTitle.classList.remove("primary-title")
mainTitle.classList.toggle("active")



/**************/
/* Attributes */
/**************/

// get: elm.getAttribute(attributeName);
const result = linkElm.getAttribute("href")
console.log(result)

// modify or create: elm.setAttribute(name, value);
linkElm.setAttribute("href", "https://ironhack.com")
linkElm.setAttribute("target", "_blank")




/*********************/
/* Create a DOM node */
/*********************/


// step1: create the element with document.createElement()
const newImg = document.createElement("img")

// step2: add content or modify (ex. innerText, innerHTML, src...)
newImg.setAttribute("src", "./images/pikachu.jpg")
newImg.setAttribute("alt", "pikachu smiling")

//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu")
parentElm.appendChild(newImg)




/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

examples of events
  - mouse events (e.g. click, mouseover...)
  - keyboard events (e.g. keydown, keypress, keyup)
  - Document (DOMContentLoaded, ...)
  - Full list: https://www.w3schools.com/jsref/dom_obj_event.asp

*/



//
// elm.addEventListener(typeOfEvent, code)
//

const btn1 = document.getElementById("button-1")

btn1.addEventListener("click", () => {
    console.log("hurray, user clicked on button 1!")
})


//
// Append a paragraph every time the user clicks on a button
//


const btn3 = document.getElementById("add-paragraph")

btn3.addEventListener("click", () => {

    // step1: create the element with document.createElement()
    const newP = document.createElement("p")

    // step2: add content or modify (ex. innerText, innerHTML, src...)
    newP.innerText = "This paragraph was created dynamically..."

    //step3: append to the dom: `parentElm.appendChild()`
    const container = document.getElementById("box-3")
    container.appendChild(newP)
})



/*

Practice & Research: detect keyboard events

Initial Code: https://stackblitz.com/edit/web-platform-oz1yyy?file=script.js

Goal:
- Add functionality to detect if the user presses "spacebar"
e.g. if user presses spacebar, console.log("you've pressed the spacebar")

(bonus 1): detect also arrow keys (down, up, left, right)
(bonus 2): if user presses spacebar, add a div to the dom.
(bonus 3): if user presses the arrow keys, move all the div's (hint: `position: relative`)

Time: 15min.

Solution: https://stackblitz.com/edit/web-platform-6bfg8u?file=script.js
Solution bonus 1: https://stackblitz.com/edit/web-platform-jbaohu?file=script.js
Solution bonus 2: https://stackblitz.com/edit/web-platform-w2w9r7?file=script.js
Solution bonus 3: https://stackblitz.com/edit/web-platform-mxx7fn?file=script.js

*/

//
// @Luis: 👉 keep the exercise as a comment in the code ;)
//



//
// Detect spacebar + "event" object
//

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        console.log("user pressed the spacebar...");
    } else {
        console.log("user pressed some other key...");
    }
})




/*****************************************/
/* Attach an event to multiple elements */
/****************************************/

const allBtn = document.querySelectorAll(".btn")

allBtn.forEach((element) => {
    element.addEventListener("click", () => {
        console.log("* click on a generic button *")
    })
})


