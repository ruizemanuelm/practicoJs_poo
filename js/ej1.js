let auto = {
    marca: "ford",
    modelo: "mustang",
    color: "rojo",

    encendido: function () { 
        console.log(this)
        document.write(this.marca + this.modelo +" encendido")},
    apagado: () => { document.write("El auto se apagó")}
}