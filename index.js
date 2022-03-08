let names = ["Maria", "Lucia", "Valentina", "Manuel", "Santiago", "Marta"];
let listado = document.getElementById("listado");
let addName = document.getElementById("add-name");

function mostrar() {
  let data = "";
  if (names.length > 0) {
    names.forEach((name, index) => {
      data +=
        '<div class="nameRow">' +
        `<div class="name"> <h2>  ${name} </h2> </div>` +
        '<div class="buttons">' +
        `<button class="btn btn1" onClick ="eliminar(${index})">Eliminar</button>` +
        `<button class="btn btn1" onClick="editar(${index})">Editar</button>` +
        "</div>" +
        "</div>";
    });
  } else {
    data += '<div class="emptyNames"> No hay nombres &#9785</div>';
  }
  return (listado.innerHTML = data);
}

listado.innerHTML = mostrar();

function agregar() {
  let nuevoNombre = addName.value;
  if (nuevoNombre.length > 0) {
    names.push(nuevoNombre);
    mostrar();
  }
}

function eliminar(index) {
  names.splice(index, 1);
  mostrar();
}

function editar(index) {
  let editName = document.getElementById("edit-name");
  editName.value = names[index];
  document.getElementById("edit").style.display = "block";
  document.getElementById("saveEdit").onsubmit = function () {
    let name = editName.value;

    if (name) {
      names.splice(index, 1, name);
      mostrar();
      CloseInput();
    }
  };
}
function CloseInput() {
  document.getElementById("edit").style.display = "none";
}
