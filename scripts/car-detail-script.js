const mustangHeader = document.querySelector(".car-header h2 span.highlight");

mustangHeader.addEventListener("mouseover", (event) => {
  event.target.style.color = "orange";
  event.target.style.fontWeight = "bold";
});

mustangHeader.addEventListener("mouseout", (event) => {
  event.target.style.color = "";
  event.target.style.fontWeight = "";
});

document.addEventListener("DOMContentLoaded", () => {
  const elementsToHighlight = document.querySelectorAll(
    ".wrapper p, .wrapper dt, .wrapper dd, .wrapper a"
  );

  elementsToHighlight.forEach((el) => {
    el.addEventListener("mouseover", (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        event.target.style.backgroundColor = "#fffae6";
        event.target.style.fontWeight = "700";
        event.target.style.cursor = "pointer";
      }
    });

    el.addEventListener("mouseout", (event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        event.target.style.backgroundColor = "";
        event.target.style.fontWeight = "";
        event.target.style.cursor = "";
      }
    });
  });
});

const dragItem = document.getElementById("drag-item");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

dragItem.addEventListener("mousedown", (e) => {
  isDragging = true;
  const rect = dragItem.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  dragItem.style.cursor = "grabbing";
  e.preventDefault();
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  dragItem.style.left = e.clientX - offsetX + "px";
  dragItem.style.top = e.clientY - offsetY + "px";
});

document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    dragItem.style.cursor = "grab";
  }
});
