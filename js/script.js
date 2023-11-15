
// const listaIngredienti = [
//     'uova',
//     'zucchero',
//     'scorza di limone',
// ];

// for (let i = 0; i < listaIngredienti.length ; i++){
//     console.log(i, listaIngredienti[i]);
// }


// const listaMoto = [
//     'Briumph Tonneville',
//     'Lamaha Y1',
//     'Luzuki S1000',
//     'RMW RR1500',
//     'Fugati Angel',
//     'Bawasaki Secca 10',
//     "L'onda Hanomala",
// ];

// for (let i = 0 ; i < listaMoto.length ; i++){
//     const elemento = listaMoto[i];
//     console.log(elemento, i);
// }



// % Ciclare per i primi 100 numeri e inserire in un array esclusivamente i numeri divisibili per 7 o per 8.

// % ciclare per i primi 100 numeri
// % inseriamo ogni numero in un array
// % inseriamo solo i numeri che vogliamo in un array



const newArray = [];
for (let i = 1; i <= 100; i++){
    if ( i % 7 == 0 || i % 8 == 0){
        newArray.push(i);
    }
}
console.log(newArray);

