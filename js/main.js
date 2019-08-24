const menu = document.querySelector(".menu-icon");

menu.addEventListener("click", () => {
  const navbar = document.querySelector(".navbar");
  const isHidden =
    !navbar.style["display"] || navbar.style["display"] === "none";

  if (isHidden) {
    navbar.style["display"] = "block";
  } else {
    navbar.style["display"] = "none";
  }
});
