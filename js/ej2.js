let cuenta = {
  titular : "Alex",
  saldo: 0,

ingresar: function(sumar) {
cuenta.saldo = cuenta.saldo + sumar
document.write("<h3>se ingresaron " +sumar+ " pesitos a tu cuenta 🤑</h3>")
  } ,
  extraer: function(restar) {
cuenta.saldo = cuenta.saldo - restar
    document.write("<h3>se extrajeron " +restar+ " pesitos de tu cuenta 😢</h3>")
  },
informar : function() {
document.write("<h2> El titular " + this.titular+ "<br> posee en su cuenta un total de "+ this.saldo + " pesos en su cuenta</h2>")
}
} 
cuenta.informar()