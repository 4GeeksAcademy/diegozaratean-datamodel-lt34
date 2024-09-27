console.log('programación orientada a objetos')
// Programación orientada a objetos es un modelo de programación

// 1. Clases
// 2. Objetos

// 3. Herencia
// 4. Encapsulamiento
// 5. Abstracción
// 6. Poliformismo

// raza, color, nombre
// ladrar,jugar

class Perro{
    constructor(raza, color, nombre){
        this.raza = raza
        this.color = color
        this.nombre = nombre
    }
    // Metodos
    comer(){
        console.log('estou comiendo wau')
    }
    jugar(){
        console.log('estoy jugando ')
    }
}

const perro_diego = new Perro('husky', 'negro', 'luna')
const perro_jose = new Perro('mestiza', 'negro', 'mochi')
const brisa = new Perro('malinoa', 'cafe', 'brisa')


class NombreClase{// Declaramos la clase
    constructor(parametros){
        //incializar agtributis
    }
    // Metodos
}












// Libro
// numeroPaginas, titulo, autor
// contenerInfo, Entretener


class Person(Base):
    __tablename__ = 'person'
    # Here we define columns for the table person
    # Notice that each column is also a normal Python instance attribute.
    id = Column(Integer, primary_key=True)
    name = Column(String(250), nullable=False)


    
class Libro {
    constructor(numeroPaginas, titulo, autor){
        this.numeroPaginas = numeroPaginas
        this.titulo = titulo
        this.autor = autor
    }
    contenerInfo(){
        console.log('estoy conteniendo info')
    }
    Entretener(){
        console.log('estoy entreteniendote')
    }
}

const cien = new Libro(700, 'cien años de soledad', 'gabriel garcia marquez')
const codigo = new Libro(500, 'codigo davinci', 'dan brown')
const el_principito = new Libro(50, 'el principito', 'antoine de saint')
