const click = document.getElementById("click");
click.addEventListener("click", function (e) {
  window.alert("You Clicked Me");
  const allH5s = document.querySelectorAll(".Pos");
  allH5s.forEach((h5) => h5.remove());
});

window.addEventListener("click", function (e) {
  if (e.target !== click) {
    const body = document.querySelector("body");
    let x = e.pageX;
    let y = e.pageY;
    let h5 = document.createElement("h5");
    h5.classList.add("Pos");
    h5.style.top = `${y - 15}px`;
    h5.style.left = `${x}px`;
    h5.style.display = "block";
    h5.innerText = "Not here!";
    body.appendChild(h5);
  }
});
