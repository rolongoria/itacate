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
    }

    console.log(allSales)

}


