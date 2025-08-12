
// formas de crear variables
var miVariable = 1 
//variables globales

const esUnaConstante = true //las que tenemos que usar
//solo se pueden usar una vez

let variableY= "texto largo" //las que tenemos que usar
//varias veces las puedes utilizar


//si no nombramos o le asignamos un nombre a la variable , el codigo tomara eso como un var, que es lo que no queremos
x = 1 //asignacion, se asigna el valor de 1 a x
console.log(x) 


var y = 
console.log(y) //undifined 

//hosting: antes de que se ejecute el codigo, un programa de javascript 
// recorre el codigo y crea variables que se vayan a utilizar

const variableA = "esto es un string" + "una nueva palabra"//cadenas de texto , se pueden juntar
const variableB = true 
const variableC = 1 //numeros

console.log(typeof variableA) //string
console.log(typeof variableB) //boolean
console.log(typeof variableC) //number

//objetos 
//se guardan en llaves

const user1 = {
    name: "Juan Pablo",
    age: 18,
    id: 12334,
}

console.log(`El nombre es:  ${user1.name} y tiene  ${user1.age} años`) //forma "elegante" de imprimir las diferentes variables
//utilizar $ con { para indicar que se quiere imprimir 



//arreglos/arrays
const listaDeNumeros = [1,2,"3",true] //se guardan en corchetes
//"3" lo pasa a texto con las comillas

console.log(listaDeNumeros[0]) //imprime el primer elemento del array 

console.log(user1["name"]) //otra forma de imprimir objetos (seleccionar)


//JSON
//se pueden crear multiples elementos dentro de un objeto

const user2= {
    "name": "Isabella",
    "age": 20,
    "id": 123456789,
    "institution": [
        {
            "name": "Universidad Icesi",
            "id": 1,
            "address": {
                "id": 1
            }
        },
        {
            "name": "Universidad del Valle",
            "id": 2,
            "address": {
                "id": 3 //encontrar este en console log
            }
        }
    ]
}

console.log (user2.institution[1].address.id)


const user3={
    "name": "Isabella",
    "age": 20,
    "id": 123456789,
    "institution": [
        {
            "name": "Universidad Icesi",
            "id": 1,
            "address": {
                "id": 1
            }
        },
        {
            "name": "Universidad del Valle",
            "id": 2,
            "address": {
                "id": 2,
                "street": {
                    "id": 1,
                    "related" : [
                        {"id": "1"},
                        {"id": "2"},
                        {"id": "3"},
                        {"id": "4"},
                        {"id": "5", "final": [{}, {}, { "finally": "He llegado!!"}]}
                    ]
                }
            }
        }
    ]
}

console.log(user3.institution[1].address.street.related[4].final[2].finally) // 