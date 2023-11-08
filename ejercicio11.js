// Objeto Persona
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
}

Persona.prototype.obtDetalles = function() {
    return "Nombre: " + this.nombre + ", Edad: " + this.edad + ", Género: " + this.genero;
}

// Objeto Estudiante
function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.registrar = function() {
    return "Estudiante registrado: " + this.nombre + ", Curso: " + this.curso + ", Grupo: " + this.grupo;
}

// Objeto Profesor
function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.asignar = function() {
    return "Profesor asignado: " + this.nombre + ", Asignatura: " + this.asignatura + ", Nivel: " + this.nivel;
}

// Crear objetos y casos de prueba
var estudiante = new Estudiante("Roberto", 20, "Masculino", "Arquitectura", "A");
console.log(estudiante.obtDetalles());
console.log(estudiante.registrar());

var profesor = new Profesor("Exequiel", 22, "Masculino", "Sicología", "Avanzado");
console.log(profesor.obtDetalles());
console.log(profesor.asignar());
