const Pizza = class {
    constructor(id, nombre, ingredientes, precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
};

const margarita = new Pizza(0, 'Margarita', ['Albahaca', 'Aceite de oliva', 'Mozarella'], 500);
const pepperoni = new Pizza(1, 'Pepperoni', ['Pepperoni', 'Champiñones ', 'Mozarella'], 200);
const hawaiana = new Pizza(2, 'Hawaiana', ['Piña', 'Jamón cocido', 'Mozarella'], 560);
const cuatroQuesos = new Pizza(3, 'Cuatro Quesos', ['Fontina', 'Gorgonzola', 'Mozarella'], 620);
const napolitana = new Pizza(4, 'Napolitana', ['Albahaca', 'Cherry', 'Mozarella'], 570);
const calabacin = new Pizza(5, 'Calabacin', ['Calabacines', 'Cebolla', 'Queso rallado'], 630);

let menu = [margarita, pepperoni, hawaiana, cuatroQuesos, napolitana, calabacin];

console.log( `Las pizzas con id impares son: ${obtenerImpares(menu)}` );
console.log( `Con ese presupuesto puedes comprar las pizzas: ${menorQue(menu, 600)}` );
console.log(`En el menú de hoy tenemos: ' ${darMenu(menu)}`)
console.log(`Los precios son: ' ${darPrecios(menu)}`)
console.log(`La carta de hoy es: ' ${darNombrePrecio(menu)}`)


function obtenerImpares(arrayDePizzas){
    let pizzasImpares = [];

    for(let i = 0; i <= (arrayDePizzas.length - 1); i++){
        if(menu[i].id % 2 != 0){
            pizzasImpares.push(menu[i].nombre); 
        }
    }
    return pizzasImpares;
}
function menorQue(arrayDePizzas, presupuesto){
    let pizzasPorPrecio = [];

    for(let i = 0; i <= (arrayDePizzas.length - 1); i++){
        if(menu[i].precio <= presupuesto){
            pizzasPorPrecio.push(menu[i].nombre); 
        }
    }
    return pizzasPorPrecio;
}
function darMenu(arrayDePizzas){
    let menuDeHoy = [];

    for(let i = 0; i <= (arrayDePizzas.length - 1); i++){
        menuDeHoy.push(menu[i].nombre); 
    }
    return menuDeHoy;
}
function darPrecios(arrayDePizzas){
    let menuDeHoy = [];

    for(let i = 0; i <= (arrayDePizzas.length - 1); i++){
        menuDeHoy.push(menu[i].precio); 
    }
    return menuDeHoy;
}
function darNombrePrecio(arrayDePizzas){
    let carta = [];
    for(let i = 0; i <= (arrayDePizzas.length - 1); i++){
        carta.push( `${menu[i].nombre}: $ ${menu[i].precio}`); 
    }
    return carta;

}