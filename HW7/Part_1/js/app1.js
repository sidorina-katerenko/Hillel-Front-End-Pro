const myElement1 = document.getElementById("taskOneTextArea");

function createContainer() {
  const container = document.createElement("div");

  container.style.display = "inline-block";
  container.style.color = "red";
//   container.style.position = "absolute";
//   container.style.top = "20px";
//   container.style.left = "25%";

  container.innerText = "Well, hello there!";

  return container;
}

function addEvents() {
  let container = null;

  myElement1.addEventListener("focus", function() {
    container = createContainer();
    document.getElementById('wrapper').appendChild(container);
  });

  myElement1.addEventListener("blur", function() {
    if (container !== null) {
      container.remove();
    }
  });
}

addEvents();
