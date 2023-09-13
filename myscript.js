import { convertCSVtoObject } from "./convertCSV.js";
import { itemSelectionProducts } from "./itemSelectionProducts.js";
import { printItemSelection, printItemModifiers } from "./printSales.js";
import { parentMenuSelection, modifierColumnNames } from "./itemModifierProducts.js";
import { productsObjectNames, itemModifierMultiplier, itemSelectionMultiplier } from "./namesAndMultipliers.js";

const convertButton = document.getElementById('convertButton');
const itemSelectionButton = document.getElementById('itemSelectionButton');
const itemModifiersButton = document.getElementById('itemModifiersButton');
const printSalesButton = document.getElementById('printProductSales');
convertButton.addEventListener('click', convertFileFunction);
itemSelectionButton.addEventListener('click', printItemSelectionFunc);
itemModifiersButton.addEventListener('click', printItemModifiersFunc);
printSalesButton.addEventListener('click', printProductSalesFunc);


let itemObject = "";
let allProducts = {};

// Archivo Items (No mods)
// const menuItemColumn = itemSelectionProducts;
// const parentMenuSelectionColumn = parentMenuSelection;
// const modifierColumn = modifierColumnNames;
// const productsObject = productsObjectNames;


async function convertFileFunction(){

    try{
        itemObject = await convertCSVtoObject();
        console.log('File Converted');
    } catch(error) {
        console.log(error)
    }
}

function printItemSelectionFunc(){

    let selection = printItemSelection(itemObject, itemSelectionProducts, productsObjectNames, itemSelectionMultiplier);
    console.log(selection);
    allProducts['selection'] = selection;
    // allProducts = {...selection};
    console.log(allProducts);
}

function printItemModifiersFunc(){
    let modifiers = printItemModifiers(itemObject, productsObjectNames, modifierColumnNames, parentMenuSelection);
    console.log(modifiers);
    allProducts['modifiers'] = modifiers;
    // allProducts = {...modifiers};
    console.log(allProducts);

    
}

function printProductSalesFunc(){
    let allSales = {};

    allSales = {
        'PUPUSAS ORIGINAL/PORK': allProducts['modifiers']['PUPUSAS Original / Pork'] + allProducts['modifiers']['Pup. Original'],
        'PUPUSAS CHICHARRON': allProducts['modifiers']['PUPUSAS Chicharron'] + allProducts['modifiers']['Pup. Chicharron'],
        'PUPUSAS RAJAS': allProducts['modifiers']['PUPUSAS Rajas Poblanas'] + allProducts['modifiers']['Pup. Rajas'],
        'PUPUSAS RES/BEEF': allProducts['modifiers']['PUPUSAS Res / Beef'] + allProducts['modifiers']['Pup. Res'],
        'PUPUSAS BEANS & CHEESE': allProducts['modifiers']['PUPUSAS Beans & Cheese'] + allProducts['modifiers']['Pup. Frijol / Queso'],
        'PUPUSAS CHEESE': allProducts['modifiers']['PUPUSAS Cheese'] + allProducts['modifiers']['Pup. Queso'],
        'GORDITAS ORIGINAL/PORK': allProducts['modifiers']['GORDITAS Original (Pork)'] + allProducts['modifiers']['Gor. Original (pork)'],
        'GORDITAS CHICHARRON ROJO': allProducts['modifiers']['GORDITAS Chicharron ROJO'] + allProducts['modifiers']['Gor. Chicharron ROJO'],
        'GORDITAS CHICHARRON VERDE': allProducts['modifiers']['GORDITAS Chicharron VERDE'] + allProducts['modifiers']['Gor. Chicharron VERDE'],
        'GORDITAS RES/BEEF': allProducts['modifiers']['GORDITAS Res / Beef'] + allProducts['modifiers']['Gor. Res (beef)'],
        'GORDITAS BEANS/FRIJOLES': allProducts['modifiers']['GORDITAS Beans / Frijoles'],
        'GORDITAS BEANS & CHEESE': allProducts['modifiers']['GORDITAS Beans & Cheese'] + allProducts['modifiers']['Gor. Frijol / Queso'],
        'GORDITAS CHEESE': allProducts['modifiers']['Gor. Queso'] + allProducts['modifiers']['GORDITAS Cheese / Queso'],
        'LLORARAS ORIGINAL/PORK': allProducts['modifiers']['TACO LLORARAS Lloraras ORIGINAL'] + allProducts['modifiers']['TACO LLORARAS']
                                + allProducts['modifiers']['Llor. Original'],
        'LLORARAS VEGGIE': allProducts['modifiers']['TACO LLORARAS Lloraras VEGGIE'] + allProducts['modifiers']['Llor. Veggie'],
        'TACOS PLANCHA': allProducts['modifiers']['TACO PLANCHA'] + allProducts['modifiers']['Taco Plancha'],
        'FLAUTAS POLLO': allProducts['modifiers']['FLAUTAS POLLO'],
        'FLAUTAS RES': allProducts['modifiers']['FLAUTAS RES'] + allProducts['modifiers']['FLAUTAS'],
        'OVNIS': allProducts['modifiers']['OVNIS'],
        'CHICHARRON': allProducts['modifiers']['CHICHARRON'],
        'PANELA': allProducts['modifiers']['PANELA'],



    }

    console.log(allSales)

}


