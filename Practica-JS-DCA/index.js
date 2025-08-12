
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

console.log(user3.institution[1].address.street.related[4].final[2].finally) 

//funciones y condiciones
//hosting: se pueden declarar las funciones tanto arriba como abajo (el console log)

function sucesionParteUno (i, texto) { 
    if (!(typeof i == 'number')) { //si no es...

        console.log("porfavor ingrese un numero")   
        //condicional if, siempre debe retornar un valor booleano (true o false)

    }else if (i < 10) { //numeros menores que 10 
        console.log('esto es un numero menor que 10 ')
    } else 
        console.log(i)
        console.log(i + 1)
        console.log(i + 2)
        console.log(i + 3)
        {
            
}

}

sucesionParteUno(1000) //esto es un numero mayor que diez
sucesionParteUno("1000") //porfavor ingrese un numero


const nombreCompleto = "natalia ordoñez"
console.log(nombreCompleto.replace("a", "*"))  //rempplazar un elemento


const isLoggedIn =true
const isAuth= false
const isSelected = false

//personas que esten logeadas y seleccionadas, pero que no interesa que esten autenticadas
if ((isLoggedIn && isSelected) || isAuth) { //is logged y selected true , auth es opcional
    console.log('aceptado')
}else {
    console.log('no aceptado')
}


//for while, do while

const miArreglo = [1,2,3,4]

for (let i=0; i < miArreglo.length; i ++){ //empieza en 0 y termina en 3 porque es i < el arreglo osea 4 , i++ = elemento que tenia antes sumado 1 osea igual
    console.log(miArreglo[i])
} 



//for each iterar por cada uno de los elementos y jugar con el
//no retorna ningun resultado,  no genera algo que se pueda guardar (variable) para usarlo despues
const arregloModificadoForEach = miArreglo.forEach (el => el * 1000) //por cada uno de los elementos , imprimalos
console.log(arregloModificadoForEach)



//map
//recorre por cada uno de los elementos
// se usa cuando se necesita guardar el resultado en una variable en un nuevo arreglo y manipularla posteriormente 
const arregloModificado = miArreglo.map(el => el + 1) //funcion flecha: forma rapida de escribir una funcion
console.log(arregloModificado)



const miArreglo2 = [1,2,3,4] //4
miArreglo2 [4] = 5
// cambiar elementos del arreglo o agregar elementos

console.log(miArreglo2)


const duplicacion = miArreglo2 
miArreglo2 [0] = "mensaje de prueba"

console.log (miArreglo2)
console.log(duplicacion)