import { convertCSVtoObject } from "./convertCSV.js";
import { itemSelectionProducts } from "./itemSelectionProducts.js";
import { printItemSelection, printItemModifiers } from "./printSales.js";
import { parentMenuSelection, modifierColumnNames } from "./itemModifierProducts.js";
import { productsObjectNames, itemModifierMultiplier, itemSelectionMultiplier } from "./namesAndMultipliers.js";

const convertButton = document.getElementById('convertButton');
const itemSelectionButton = document.getElementById('itemSelectionButton');
const itemModifiersButton = document.getElementById('itemModifiersButton');
convertButton.addEventListener('click', convertFileFunction);
itemSelectionButton.addEventListener('click', printItemSelectionFunc);
itemModifiersButton.addEventListener('click', printItemModifiersFunc);


let itemObject = "";

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
    console.log(selection)
}

function printItemModifiersFunc(){
    let modifiers = printItemModifiers(itemObject, productsObjectNames, modifierColumnNames, parentMenuSelection);
    console.log(modifiers)
    
}


