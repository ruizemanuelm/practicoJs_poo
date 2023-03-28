class Libro {
    #ISBN;
    #Titulo;
    #Autor;
    #numPag;
    constructor(ISBN, titulo, autor, numPag) {
      this.#ISBN = ISBN;
      this.#Titulo = titulo;
      this.#Autor = autor;
      this.#numPag = numPag;
    }
    get isbn() {
      return this.#ISBN;
    }
    set isbn(nuevo) {
      this.#ISBN = nuevo;
    }
    get titulo() {
      return this.#Titulo;
    }
    set titulo(nuevoTit) {
      this.#Titulo = nuevoTit;
    }
    get autor() {
      return this.#Autor;
    }
    set autor(nuevoAutor) {
      this.#Autor = nuevoAutor;
    }
    get numPag() {
      return this.#numPag;
    }
    set numPag(nuevoNum) {
      this.#numPag = nuevoNum;
    }
    //metodos
    mostrarLibro() {
      document.write(
        '<p>El libro "' +
          this.titulo +
          '" con ISBN ' +
          this.isbn +
          ' creado por el autor <b>' +
          this.autor +
          '</b> tiene ' +
          this.numPag +
          ' páginas </p>'
      );
    }
  }
  
  const libro1=new Libro(9789878000978, 'El Principito', 'Antoine de Saint-Exupéry', 120)
  const libro2=new Libro(9788416775644, 'La Divina Comedia', 'Dante Alighieri', 544)
  
  libro1.mostrarLibro()
  libro2.mostrarLibro()