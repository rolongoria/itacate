import { convertCSVtoObject } from "./convertCSV.js";
import { itemSelectionProducts } from "./itemSelectionProducts.js";
import { printItemSelection, printItemModifiers } from "./printSales.js";
import { parentMenuSelection, modifierColumnNames } from "./itemModifierProducts.js";
import { productsObjectNames, itemModifierMultiplier, itemSelectionMultiplier } from "./namesAndMultipliers.js";
import { totalSalesFunc } from "./totalSales.js";
import { exportToExcel } from "./exportToExcel.js";

const convertButton = document.getElementById('convertButton');
// const itemSelectionButton = document.getElementById('itemSelectionButton');
// const itemModifiersButton = document.getElementById('itemModifiersButton');
const printSalesButton = document.getElementById('printProductSales');
const exportToExcelButton = document.getElementById('export');


// const outputElement = document.getElementById("output");
// const listContainer = document.getElementById('list-container');

convertButton.addEventListener('click', convertFileFunction);
// itemSelectionButton.addEventListener('click', printItemSelectionFunc);
// itemModifiersButton.addEventListener('click', printItemModifiersFunc);
printSalesButton.addEventListener('click', printTotalSalesFunc);
exportToExcelButton.addEventListener('click', exportFile);


let itemObject = "";
let allProducts = {};
let date1 = null;
let date2 = null;
let totalSales = {};

// Archivo Items (No mods)
// const menuItemColumn = itemSelectionProducts;
// const parentMenuSelectionColumn = parentMenuSelection;
// const modifierColumn = modifierColumnNames;
// const productsObject = productsObjectNames;


async function convertFileFunction(){

    try{
        itemObject = await convertCSVtoObject();
        console.log('File Converted');
        console.log(itemObject)
    } catch(error) {
        console.log(error)
    }

    let firstDate = itemObject['Entry 1']['Sent Date'];
    let objectLength = Object.keys(itemObject).length;
    let lastEntry = 'Entry ' + (parseInt(objectLength) - 1);
    let lastDate = itemObject[lastEntry]['Sent Date'];


    date1 = new Date(firstDate);
    date2 = new Date(lastDate);

    // Define formatting options
    var options = {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric',
    };
    
    // Format the date
    date1 = date1.toLocaleString('en-US', options);
    date2 = date2.toLocaleString('en-US', options);

    // console.log(date1);
    // console.log(date2);

    if ('Parent Menu Selection' in itemObject['Entry 1']) {
        // console.log("The 'name' key exists in the object.");
        printItemModifiersFunc();
      } else {
        // console.log("The 'name' key does not exist in the object.");
        printItemSelectionFunc();
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

function printTotalSalesFunc(){
    totalSales = totalSalesFunc(allProducts, date1, date2);
}

function exportFile(){
    exportToExcel(totalSales, date1, date2);
}
