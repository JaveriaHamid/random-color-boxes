let boxes = document.querySelector(".container").children;
let btn = document.getElementById("btn");

// First Method
// function getRandomColor() {
//     let val1 = Math.ceil(0 + Math.random() * 255);
//     let val2 = Math.ceil(0 + Math.random() * 255);
//     let val3 = Math.ceil(0 + Math.random() * 255);
//     return `rgb(${val1}, ${val2}, ${val3})`;
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor();
//     e.style.color = getRandomColor();
// })


// Second Method
for(let i= 0; i < boxes.length; i++) {
   let box = boxes[i];
  
   // Generate random color 
   let randomColor = "#" + Math.floor(Math.random() * 16777255).toString(16);

   // Generate random background color
   let randomBgColor = "#" + Math.floor(Math.random() * 16777255).toString(16);

   // Assign random color and background
   box.style.color = randomColor;
   box.style.backgroundColor = randomBgColor;

   // Set content to show color code
    box.innerHTML = randomColor; 
}

function onClick(){
    btn.addEventListener("click", ()=>{
        window.location.reload();
    })
}
onClick();
