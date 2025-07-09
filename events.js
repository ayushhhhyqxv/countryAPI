const box = document.querySelector(".box1");
const container = document.querySelector(".container");

let count = 1;
box.addEventListener("mousedown", (e) => {
  // mousedown is can be used with mouse tracker by clicking it,which is not possible in normal click !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("mouseup", (e) => {
  //  triggers when mouse is released !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("mouseenter", (e) => {
  //  trigger just when we hover over the box region !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("mouseleave", (e) => {
  //  reverse of mouseenter event !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("mousemove", (e) => {
  //  triggers in given box region till we move our cursor !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("mouseover", (e) => {
  //  triggers just like mouseenter but also triggers when we enter its child element also !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("wheel", (e) => {
  //  triggers when mouse is scrolled !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

document.addEventListener("scroll", (e) => {
  //  triggers when page is scrolled,only when it is scrollable !
  const newBox = document.createElement("div");
  console.log(e);
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

// MOBILE EVENTS

box.addEventListener("touchstart", (e) => {
  //  triggers when touched on mobile device !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("touchend", (e) => {
  //  triggers when hold and left on mobile device !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("touchend", (e) => {
  //  triggers when drag and down thing is done in that region !
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("touchmove", (e) => {
  //  triggers when moved in that region
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("drag", (e) => {
  //  triggers when drag,and also add attribute of draggable!only works in laptop
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("pointermove", (e) => {
  //  triggers when moved in both phone nad laptop
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("pointerenter", (e) => {
  //  triggers when moved in that region in laptop while in mobile it triggers when clicked within it
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});

box.addEventListener("pointerleave", (e) => {
  //  triggers when moved out in lappy while works same like touchend in mobile
  const newBox = document.createElement("div");
  newBox.className = "box1";
  newBox.innerText = String(count++);
  container.appendChild(newBox);
});
