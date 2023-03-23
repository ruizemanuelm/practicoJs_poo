let auto = {
    marca: "ford",
    modelo: "mustang",
    color: "rojo",

    encendido: function () { 
        console.log(this)
        document.write("el"+ this.marca + this.modelo +" se encendió")},
    apagado: () => { document.write("se apagó el auto")}
}