// Your code goes here
let headerImg = document.querySelector(".intro > img")
let body = document.querySelector("body")
let heading = document.querySelector(".logo-heading")
let home = document.querySelector("body > header > div > nav > a:nth-child(1)")

// `mouseover` header image and change to a different image
headerImg.addEventListener("mouseover", () => {
  let src = headerImg.getAttribute("src")
  if(src === "/fun-bus.927a34f2.jpg") {
   headerImg.setAttribute("src", "https://i.ytimg.com/vi/0t_qRc8356Y/maxresdefault.jpg") 
  }
})
// `mouseleave` header image back to original state
headerImg.addEventListener("mouseleave", () => {
   headerImg.setAttribute("src", "/fun-bus.927a34f2.jpg") 
})

// `keydown` create an alert on the screen that says "you pressed a key!"
document.addEventListener("keydown", (e) => {
  console.log(`You just pressed the ${e.key} key!`)
})

let i = 0 
// `wheel` change background color
document.addEventListener("wheel", () => {
  body.style.backgroundColor = `#00${i}` 
  i++
})

// `load` animates the fun bus logo
window.addEventListener("load", () => {
  console.log('heading: ', heading)
  heading.classList.add("animate")
})

// `focus`
home.addEventListener("focus", (e) => {
  e.target.style.fontSize = "3rem"
})

// `resize` when browser resizes add text to the body 
window.addEventListener("resize", () => {
  let text = document.createElement("p")
  text.innerHTML = "You are resizing the window!"
  text.style.backgroundColor = "green"
  text.style.color = "black"
  body.prepend(text)
})

// `scroll` when the user scrolls then 
document.addEventListener("scroll", () => {
  console.log("Try using the scroll bar instead of the mouse wheel")
  console.log("Using the scroll bar or mouse wheel should change the size of all images to 50%, but using the scroll bar only should not affect the background color of the page")
  let images = document.getElementsByTagName("img")
  Array.from(images).forEach( x => x.style.height = "50%")
})

// `select` the heading paragraph and display in console what was selected  
let sign = document.querySelector("body > div > header > p")
let trash = document.createElement("textarea")
sign.textContent = ""
trash.value = "Traveling expedition modern, clean webdesign blogger clean website theme website modern. Design pretty design, travelblogger adventure WordPress wanderlust theme blogger website expedition theme travelblogger. Adventure fun traveler pretty design website expedition."
trash.style.border = "none"
trash.style.width = "100%"
trash.style.minHeight = "80px"
sign.prepend(trash)
trash.addEventListener("select", (e) => {
  console.log("You selected the \"" + e.target.value.substring(e.target.selectionStart, e.target.selectionEnd) + "\" text");
})

// `dblclick` the last image on page will create a message
let lastImg = document.querySelector("body > div > section.content-destination > img")
let text = document.createElement("h1") 
text.textContent = "YOU WON A MILLION PESOS!"
lastImg.addEventListener("dblclick", (e) => {
  lastImg.after(text)
})

// `drag / drop`
 /* events fired on the draggable target */
var dragged

// create dropzones
let drop1 = document.querySelector("body > div > section:nth-child(2) > div.img-content")
let drop2 = document.querySelector("body > div > section.content-section.inverse-content > div.img-content")

drop1.classList.add("dropzone")
drop2.classList.add("dropzone")
document.addEventListener("drag", function( ) {

}, false);

document.addEventListener("dragstart", function( event ) {
    // store a ref. on the dragged elem
    dragged = event.target;
    // make it half transparent
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function( event ) {
    // prevent default to allow drop
    event.preventDefault();
}, false);


document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "purple";
    }

}, false);

document.addEventListener("dragleave", function( event ) {
    // reset background of potential drop target when the draggable element leaves it
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function( event ) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if ( event.target.className == "dropzone" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }
  
}, false);


// - Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
let doc = document.querySelector("body")
doc.addEventListener("click", () => {
console.log("You clicked the document body")
})

let intro = document.querySelector("body > div > header > h2")
intro.addEventListener("click", (e) => {
e.stopPropagation()
console.log("You clicked the intro, but we prevent this event from bubbling up to the doc")
})

// - Stop the navigation items from refreshing the page by using `preventDefault()`
let nav = document.querySelectorAll("body > header > div > nav > a")
let navArr = Array.from(nav)
navArr.forEach((e) => {
e.preventDefault
})