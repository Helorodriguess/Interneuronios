function show_menu() {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("opened")) {
    menu.classList.remove("opened");
  } else {
    console.log("carai2");
    document.body.addEventListener("click", close_menu, false);
    menu.classList.add("opened");
  }
}

function close_menu(e) {
  if (e.target.id !== "show_menu") {
    console.log("carai");
    document.body.removeEventListener("click", close_menu, false);
    menu.classList.remove("opened");
  }
}

document.getElementById("btn_menu").addEventListener("click", show_menu);

function goBack() {
  History.goBack()
  //window.history.back()
}

document.getElementById("go-back").addEventListener("click", function () {
  history.back();
});
