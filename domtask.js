// 1. Access and Modify:
//  Access an element by its ID and change its text content and background color.

let accessid=document.getElementById("name");
console.log(accessid);
accessid.textContent="Hello World!";
accessid.style.color="white";
accessid.style.backgroundColor="black";

// 2. Create and Insert:
//  Create a new <div> element with some content and insert it into the
// <body> of the document.

let newdiv=document.createElement("div");
newdiv.textContent="New division";
console.log(newdiv);
document.body.append(newdiv);

// 3. Event Handling:
//  Add an event listener to a button that changes the text of a paragraph
// when clicked.

let para=document.getElementById("mypara");
let buttons=document.getElementById("mybutton");

buttons.addEventListener("click",function(){
    para.textContent="HELLO TEAM I LOVE JAVASCRIPT CODE";
});



//5. Dynamic Updates:
//  Use JavaScript to dynamically update the content and style of multiple
// elements on the page.


let h2=document.getElementById("heading");
let paragraph=document.getElementById("para1");
let button1=document.getElementById("buttons");

button1.addEventListener("click",function(){
    h2.textContent="update heading!";
    paragraph.textContent="I Love Javascript coding";

    h2.style.fontSize="40px";
    paragraph.style.color="red";
});

// 4.
let child=document.getElementById("child2");
console.log(child);

let parent=child.parentElement;
console.log(parent);

let newrev=document.getElementById("parent");
let firstsibling=newrev.previousElementSibling;
let lastsibling=newrev.nextElementSibling;
console.log(firstsibling);
console.log(lastsibling);






