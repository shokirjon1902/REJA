// const e = require("express");

// const response = require("../app");

console.log("Frontend JS ishgsa tushdi");

function itemTemplate(item) {
  return ` <li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
          <span class="items-text"><${item.reja}</span>
          <div>
            <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
              o'zgartirish
            </button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">ochirish</button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan xarakat qiling !!!");
    });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-me")) {
    if (confirm("aniq uchirmoqchimisiz?")) {
      const id = e.target.getAttribute("data-id");

      console.log("Frontend ID:", id);

      axios
        .post("/delete-item", { id: id })
        .then((response) => {
          console.log("Server javobi:", response.data);

          if (response.data.state === "success") {
            e.target.parentElement.parentElement.remove();
          }
        })
        .catch((err) => {
          console.log("Axios xatosi:", err);
        });
    }
  }
});

// edit oper
if (e.target.classList.contains("edit-me")) {
  alert("siz edit tugmasini bosdingiz");
}
