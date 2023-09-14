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
        'PUPUSAS ORIGINAL/PORK': allProducts['modifiers']['PUPUSAS Original / Pork'] + allProducts['modifiers']['Pup. Original']
                                + allProducts['selection']['PUPUSA ORIGINAL'],

        'PUPUSAS CHICHARRON': allProducts['modifiers']['PUPUSAS Chicharron'] + allProducts['modifiers']['Pup. Chicharron']
                            + allProducts['selection']['PUPUSA CHICHARRON'],

        'PUPUSAS RAJAS': allProducts['modifiers']['PUPUSAS Rajas Poblanas'] + allProducts['modifiers']['Pup. Rajas']
                        + allProducts['selection']['PUPUSA RAJAS POBLANAS'],

        'PUPUSAS RES/BEEF': allProducts['modifiers']['PUPUSAS Res / Beef'] + allProducts['modifiers']['Pup. Res']
                            + allProducts['selection']['PUPUSA BEEF'],

        'PUPUSAS BEANS & CHEESE': allProducts['modifiers']['PUPUSAS Beans & Cheese'] + allProducts['modifiers']['Pup. Frijol / Queso']
                            + allProducts['selection']['PUPUSA BEANS & CHEESE'],

        'PUPUSAS CHEESE': allProducts['modifiers']['PUPUSAS Cheese'] + allProducts['modifiers']['Pup. Queso']
                        + allProducts['selection']['PUPUSA CHEESE/QUESO'],

        'GORDITAS ORIGINAL/PORK': allProducts['modifiers']['GORDITAS Original (Pork)'] + allProducts['modifiers']['Gor. Original (pork)']
                                + allProducts['selection']['GORDITA ORIGINAL (PORK)'],

        'GORDITAS CHICHARRON ROJO': allProducts['modifiers']['GORDITAS Chicharron ROJO'] + allProducts['modifiers']['Gor. Chicharron ROJO']
                                + allProducts['selection']['GORDITA CHICHARRON SALSA ROJA'],

        'GORDITAS CHICHARRON VERDE': allProducts['modifiers']['GORDITAS Chicharron VERDE'] + allProducts['modifiers']['Gor. Chicharron VERDE']
                                    + allProducts['selection']['GORDITA CHICHARRON SALSA VERDE'],

        'GORDITAS RES/BEEF': allProducts['modifiers']['GORDITAS Res / Beef'] + allProducts['modifiers']['Gor. Res (beef)']
                            + allProducts['selection']['GORDITA BEEF'],

        'GORDITAS BEANS/FRIJOLES': allProducts['modifiers']['GORDITAS Beans / Frijoles'] + allProducts['selection']['GORDITA BEANS'],

        'GORDITAS BEANS & CHEESE': allProducts['modifiers']['GORDITAS Beans & Cheese'] + allProducts['modifiers']['Gor. Frijol / Queso']
                                    + allProducts['selection']['GORDITA BEANS & CHEESE'],

        'GORDITAS CHEESE': allProducts['modifiers']['Gor. Queso'] + allProducts['modifiers']['GORDITAS Cheese / Queso']
                            + allProducts['selection']['GORDITA CHEESE'],

        'LLORARAS ORIGINAL/PORK': allProducts['modifiers']['TACO LLORARAS Lloraras ORIGINAL'] + allProducts['modifiers']['TACO LLORARAS']
                                + allProducts['modifiers']['Llor. Original'] + allProducts['selection']['TACO LLORARAS'],

        'LLORARAS VEGGIE': allProducts['modifiers']['TACO LLORARAS Lloraras VEGGIE'] + allProducts['modifiers']['Llor. Veggie']
                         + allProducts['selection']['TACO LLORARAS VEGGIE'],

        'TACOS PLANCHA': allProducts['modifiers']['TACO PLANCHA'] + allProducts['modifiers']['Taco Plancha']
                        + allProducts['selection']['TACO PLANCHA'] + allProducts['selection']['PLATE 2 - 4 TACOS PLANCHA']
                        + allProducts['selection']['1/2 DOZEN TACOS PLANCHA'] + allProducts['selection']['DOZEN TACOS PLANCHA']
                        + allProducts['selection']['KIDS - TACOS PLANCHA (2)'],

        'TACO DE CHICHARRON': allProducts['selection']['TACO CHICHARRON EN SALSA VERDE'] + allProducts['selection']['TACO CHICHARRON EN SALSA ROJA']
        + allProducts['selection']['ORDEN TACOS CHICHARRON EN SALSA (3)'],

        'TORTAS': allProducts['selection']['PLATE 5 - TORTA CON PAPAS'],

        'FLAUTAS POLLO': allProducts['modifiers']['FLAUTAS POLLO'],

        'FLAUTAS RES': allProducts['modifiers']['FLAUTAS RES'] + allProducts['modifiers']['FLAUTAS']
                        + allProducts['modifiers']['1/2 ORDER FLAUTAS & PAPAS']+ allProducts['modifiers']['KIDS - FLAUTAS & PAPAS (3)'],

        'ENCHILADAS': + allProducts['selection']['PLATE 6 - ENCHILADAS'],

        'OVNIS': allProducts['modifiers']['OVNIS'] + allProducts['selection']['PLATE 7 - 2 OVNIS']
                    + allProducts['selection']['OVNI'],

        'CALDO TLALPENO': allProducts['selection']['CALDO TLALPENO'],

        'CARNE EN SU JUGO': allProducts['selection']['CARNE EN SU JUGO'] + allProducts['selection']['CARNE EN SU JUGO (SMALL/SIDE)'],

        'CHILAQUILES': allProducts['selection']['PL CHILAQUILES'] + allProducts['selection']['SALSA VERDE CHILAQUILES']
                    + allProducts['selection']['SALSA ROJA CHILAQUILES'],

        'CHICHARRON': allProducts['modifiers']['CHICHARRON'] + allProducts['selection']['CAZUELA DE CHICHARRON EN SALSA VERDE']
                    + allProducts['selection']['CAZUELA DE CHICHARRON EN SALSA ROJA'],

        'QUESADILLAS': allProducts['selection']['PL QUESADILLAS FRITAS'] + allProducts['selection']['KIDS - QUESADILLAS (2)']
                    + allProducts['selection']['QUESADILLA HARINA'] + allProducts['selection']['QUESADILLA MAIZ'], 

        'PANELA': allProducts['modifiers']['PANELA'] + allProducts['selection']['GRILLED PANELA CAZUELA'],

        'QUESO FRESCO': allProducts['selection']['QUESO FRESCO'],

        'PLATE HUEVOS': allProducts['selection']['PL HUEVOS RANCHEROS'] + allProducts['selection']['PL HUEVOS AL GUSTO']
                    + allProducts['selection']['PL HUEVOS A LA MEXICANA'] + allProducts['selection']['PL HUEVOS DIVORCIADOS'],

        'HOUSE OMELLETE': allProducts['selection']['PL HOUSE OMELLETE'],

        'LIGHT OMELLETE': allProducts['selection']['PL LIGHT OMELLETE'],

        'HAM & CHEESE OMELLETE': allProducts['selection']['PL HAM & CHEESE OMELLETE'],
     
        'MOLLETES': allProducts['selection']['PL MOLLETES'],
        
        'REKETES': allProducts['selection']['REKETES'],
        
        'REKETES VEGGIE': allProducts['selection']['REKETES VEGGIE'],
        
        'MINI REKETES': allProducts['selection']['MINI REKETES'],
        
        'GALLITO': allProducts['selection']['GALLITO'],
        
        'MINI REKETES VEGGIE': allProducts['selection']['MINI REKETES VEGGIE'],
        
        'FRIJOLES CON VENENO': allProducts['selection']['CAZUELA DE FRIJOLES CON VENENO'],
        
        'ARROZ/RICE': allProducts['selection']['ARROZ / RICE'],
        
        'PAN DE ELOTE': allProducts['selection']['PAN DE ELOTE'],
        
        'GORDITAS DE AZUCAR': allProducts['selection']['GORDITAS DE AZUCAR W/ICE CREAM'],
        
        'PLATE PANCAKES (3)': allProducts['selection']['PL PANCAKES (3)'],

        'GALLETAS/EMPANADAS': allProducts['selection']['DON DELI GALLETAS/EMPANADAS'],

        'COFFEE': allProducts['selection']['COFFEE'],



    }

    // console.log(Object.keys(allSales));
    // console.log(allSales);


    for (const key in allSales) {
        if (allSales.hasOwnProperty(key)) {
          console.log(`${key}: ${allSales[key]}`);
        }
    }


}


