class Rectangulo {
    #id; #ancho; #alto;
    constructor(idd,altoo,anchoo){
        this.#id = idd 
        this.#alto = altoo
        this.#ancho = anchoo
    };

    // metodos
    perimetro() {
    this.perimetro = 2*(this.alto+this.ancho);
        document.write('<p> el perimetro del rectangulo ('+ this.id+ ') es '+ this.perimetro+'</p>');
}
    area() {
    this.area = this.alto * this.ancho;
    document.write('<p> el area del rectangulo ('+ this.id+ ') es '+ this.area +'</p>');
}

//propiedades computadas
get id(){
    return this.#id;
}
set id(nuevoid) {
this.#id= nuevoid;
}
get alto(){
    return this.#alto;
}
set alto(nueva_altura) {
this.#id= nueva_altura;
}
get ancho(){
    return this.#ancho;
}
set ancho(nuevoancho) {
this.#ancho= nuevoancho;
}
}

const rectangulo_prueba = new Rectangulo(1,10,20)
rectangulo_prueba.area()
rectangulo_prueba.perimetro()

const rectangulo_prueba2 = new Rectangulo(2,30,40)
rectangulo_prueba2.area()
rectangulo_prueba2.perimetro()