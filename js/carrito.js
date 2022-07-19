let productos = [];

let formulario;

let inputNombre;
let inputPrecio;
let inputCantidad;
let tabla;
let errores;

class Producto {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

function inicializarElementos(){
    formulario = document.getElementById("formulario");
    inputNombre = document.getElementById("nombre");
    inputPrecio = document.getElementById("precio");
    inputCantidad = document.getElementById("cantidad")
    tabla = document.getElementById("tablaProductos");
    errores = document.querySelector(".errores")
    errores.style.display = "none";
}
inicializarElementos()

// let formulario = document.getElementById("formulario");
formulario.onsubmit = (event) => {
    event.preventDefault();

    let nuevoProducto = new Producto(inputNombre.value, inputPrecio.value, inputCantidad.value)
    if(inputNombre.value != "" && inputPrecio.value != "" && inputCantidad.value != ""){
        productos.push(nuevoProducto)

        productos.reverse()
        limpiarTabla();
        agregarProductosTabla()
        errores.style.display = "none"
        formulario.reset()
    }else{
        errores.style.display = "block"
    }
    
    
}

function limpiarTabla(){
    while(tabla.rows.length > 1){
        tabla.deleteRow(1)
    }
}

function agregarProductosTabla(){
    productos.forEach(producto => {
        let tabla = document.querySelector(".tabla")
        let filaTabla = document.createElement("tr")

        filaTabla.innerHTML = `
        <td>${producto.nombre} </td>
        <td>${producto.precio} </td>
        <td>${producto.cantidad} </td>
        `

    tabla.append(filaTabla)

    });
}