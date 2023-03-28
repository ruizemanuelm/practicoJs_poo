/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre 
y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos 
instanciados.
*/
class Producto {
    #codigo; #nombre; #precio;
    constructor(codigoo,altoo,anchoo){
        this.#codigo = codigoo; 
        this.#nombre = altoo;
        this.#precio = anchoo;
    };
    // metodos
    datos(){
        document.write("<h3>producto</h3>")
        document.write("<ul>")
        document.write("<li> codigo: "+this.codigoo + "</li>")
        document.write("<li> nombre: "+this.nombree + "</li>")
        document.write("<li> precio: "+this.precioo + "</li>")

        document.write("</ul>")
    };
    
    get codigoo() {
        return this.#codigo
    } 
    set codigoo(nuevoCodigo) {
        this.#codigo = nuevoCodigo
    }
    get nombree() {
        return this.#nombre
    } 
    set nombree(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    get precioo() {
        return this.#precio
    } 
    set precioo(nuevoPrecio) {
        this.#precio = nuevoPrecio
    }
}

const prod1=new Producto(1,"producto 1",1000)
const prod2=new Producto(2,"producto 2",2000)
const prod3=new Producto(3,"producto 3",3000)

const listaProductos = [prod1,prod2,prod3]

let mostrar = listaProductos.map(prod => prod.datos())