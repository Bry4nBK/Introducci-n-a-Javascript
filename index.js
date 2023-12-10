precio = 400000
producto = 0 

precioTotal = document.querySelector(".valor-total");
mostrarPrecio = document.querySelector(".precio-inicial")
precioTotal.innerHTML = 0;
mostrarPrecio.innerHTML = precio;
function cantidadProducto(){
    cantidaProducto = document.querySelector(".cantidad")
    precioTotal = document.querySelector(".valor-total");
    mostrarPrecio = document.querySelector(".precio-inicial")

    cantidaProducto.innerHTML = producto;
    mostrarPrecio.innerHTML = precio;
    precioTotal.innerHTML = calculoValorTotal(producto,precio)
}
function calculoValorTotal(producto,precio){
    return producto * precio;
}
function suma(){
    producto ++;
    cantidadProducto();

 }
 function resta(){
    if(producto>0){
        producto --;
        cantidadProducto();
    
    }
 }
