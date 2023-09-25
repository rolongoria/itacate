let pupusaOriginal = 0;
let plate3pupusas = 0;
let halfDozenPupusas = 0;
let halfDozenPupusasDot = 0;
let dozenPupusas = 0;
let tablaFor4 = 0;
let atacateCust = 0;
let atacateOriginal = 0;

// This function is to print the elements from menu Items file
export function printItemSelection(itemObject, menuItemColumn, productsObject, itemSelectionMultiplier){
    let itemSelection = {};

    // const outputElement = document.getElementById("output");

    // Check if item in menuItemColumn, then update each item in plates
    // Iterate through each item of the object created from the CSV file
    for (const key in itemObject){
        // console.log(itemObject[key]['Parent Menu Selection']);
        // console.log(Number(itemObject[key]["Qty"]))
////////////////////////////////
        // if(menuItemColumn.includes(itemObject[key]['Menu Item'])){

       
        //         if(itemSelection.hasOwnProperty(productsObject[itemObject[key]['Menu Item']])){
        //             itemSelection[productsObject[itemObject[key]['Menu Item']]] += Number(itemObject[key]['Qty'])
        //         }
        //             // if the product is not in the plate object, create it and initialize it with the current Qty value
        //         else{
        //             itemSelection[productsObject[itemObject[key]['Menu Item']]] = Number(itemObject[key]['Qty'])
        //         }
        // }
////////////////////////////////

        if(menuItemColumn.includes(itemObject[key]['Menu Item'])){

            //ADD ATACATE ITEMS

            if(itemObject[key]['Menu Item'] == 'PLATE 9 - ATACATE ORIGINAL'){
                
                atacateOriginal += Number(itemObject[key]['Qty']);

                //PUPUSAS

                if(itemSelection.hasOwnProperty('PUPUSA ORIGINAL')){
                    // itemSelection[itemObject[key]['Menu Item']] += Number(itemObject[key]['Qty'])
                    itemSelection['PUPUSA ORIGINAL'] += 1 * Number(itemObject[key]['Qty']);
                }
                    // if the product is not in the plate object, create it and initialize it with the current Qty value
                else{
                    // itemSelection[itemObject[key]['Menu Item']] = Number(itemObject[key]['Qty'])
                    itemSelection['PUPUSA ORIGINAL'] = 1 * Number(itemObject[key]['Qty']);
                }

                //TACO PLANCHA

                if(itemSelection.hasOwnProperty('TACO PLANCHA')){
                    // itemSelection[itemObject[key]['Menu Item']] += Number(itemObject[key]['Qty'])
                    itemSelection['TACO PLANCHA'] += 1 * Number(itemObject[key]['Qty']);
                }
                    // if the product is not in the plate object, create it and initialize it with the current Qty value
                else{
                    // itemSelection[itemObject[key]['Menu Item']] = Number(itemObject[key]['Qty'])
                    itemSelection['TACO PLANCHA'] = 1 * Number(itemObject[key]['Qty']);
                }

                //TACO LLORARAS

                if(itemSelection.hasOwnProperty('TACO LLORARAS')){
                    // itemSelection[itemObject[key]['Menu Item']] += Number(itemObject[key]['Qty'])
                    itemSelection['TACO LLORARAS'] += 1 * Number(itemObject[key]['Qty']);
                }
                    // if the product is not in the plate object, create it and initialize it with the current Qty value
                else{
                    // itemSelection[itemObject[key]['Menu Item']] = Number(itemObject[key]['Qty'])
                    itemSelection['TACO LLORARAS'] = 1 * Number(itemObject[key]['Qty']);
                }

                //GORDITA

                if(itemSelection.hasOwnProperty('GORDITA ORIGINAL (PORK)')){
                    // itemSelection[itemObject[key]['Menu Item']] += Number(itemObject[key]['Qty'])
                    itemSelection['GORDITA ORIGINAL (PORK)'] += 1 * Number(itemObject[key]['Qty']);
                }
                    // if the product is not in the plate object, create it and initialize it with the current Qty value
                else{
                    // itemSelection[itemObject[key]['Menu Item']] = Number(itemObject[key]['Qty'])
                    itemSelection['GORDITA ORIGINAL (PORK)'] = 1 * Number(itemObject[key]['Qty']);
                }

            }

            //EVERY OTHER ITEM

            else {

                if(itemSelection.hasOwnProperty(itemObject[key]['Menu Item'])){
                    // itemSelection[itemObject[key]['Menu Item']] += Number(itemObject[key]['Qty'])
                    itemSelection[itemObject[key]['Menu Item']] += Number(itemObject[key]['Qty']) * itemSelectionMultiplier[itemObject[key]['Menu Item']]
                }
                    // if the product is not in the plate object, create it and initialize it with the current Qty value
                else{
                    // itemSelection[itemObject[key]['Menu Item']] = Number(itemObject[key]['Qty'])
                    itemSelection[itemObject[key]['Menu Item']] = Number(itemObject[key]['Qty']) * itemSelectionMultiplier[itemObject[key]['Menu Item']]
                }

                //For testing///////////////

                if(itemObject[key]['Menu Item'] == 'PUPUSA ORIGINAL'){
                    pupusaOriginal +=  1 * Number(itemObject[key]['Qty']);
                }
                //For testing
            }
       
        }
        
    }


    // console.log(itemSelection);
    // outputElement.textContent = JSON.stringify(itemSelection, null, 2);
    // console.log('Atacate Original: ',atacateOriginal);
    // console.log('Pupusa Original: ', pupusaOriginal);

    return itemSelection;
}

export function printItemModifiers(itemObject, productsObject, modifierColumn, parentMenuSelectionColumn){

    // console.log(itemObject)

    let itemModifier = {};

    // const outputElement = document.getElementById("output");


    // function sumAtacateItems(parentSelection, item){

    //     if(itemModifier.hasOwnProperty(itemObject[key]['Parent Menu Selection'] + ' ' +
    //                                             itemObject[key]["Modifier"])){
    //                 itemModifier[[itemObject[key]['Parent Menu Selection']] + ' ' +
    //                             itemObject[key]["Modifier"]] += Number(itemObject[key]["Qty"])
    //                             // console.log(itemModifier)
    //             }
    //                 // if the modifier is not in the object, create it and initialize it with the current Qty value
    //             else{
    //                 itemModifier[itemObject[key]['Parent Menu Selection'] + ' ' +
    //                             itemObject[key]["Modifier"]] = Number(itemObject[key]["Qty"])
    //             }

    // }



    // Check if item in parentMenuSelectionColumn, then update each modifier
    // Iterate through each item of the object created from the CSV file
    for (const key in itemObject){


        // console.log(itemObject[key]['Parent Menu Selection']);
        if(parentMenuSelectionColumn.includes(itemObject[key]['Parent Menu Selection'])){


            
            
            // Check if the current itemModifier is in the itemModifier Array (Modifiers that we are interested to count)
            
            if(modifierColumn[itemObject[key]['Parent Menu Selection']].includes(itemObject[key]["Modifier"])){

                
                // ATACATE
                if(itemObject[key]['Parent Menu Selection'] == 'PLATE 9 - ATACATE CUST'){


                    if(itemModifier.hasOwnProperty(itemObject[key]["Modifier"])){
                        itemModifier[itemObject[key]["Modifier"]] += Number(itemObject[key]["Qty"])
                                // console.log(itemModifier)
                    }
                        // if the modifier is not in the object, create it and initialize it with the current Qty value
                    else{
                        itemModifier[itemObject[key]["Modifier"]] = Number(itemObject[key]["Qty"])
                    }
                    
                    //For Testing
                    if(itemObject[key]['Modifier'] == 'Pup. Original'){

                        atacateCust += Number(itemObject[key]["Qty"]);
                        // console.log(atacateCust)
                    }
                         
                }


                // TABLA FOR 4 /////////////////////////////////////////
                else if(itemObject[key]['Parent Menu Selection'] == 'TABLA FOR 4'){

                    // console.log('Tabla for 4: ', itemObject[key]['Modifier'])

                        //For Testing
                        tablaFor4 += Number(itemObject[key]["Qty"]);
                        //For testing

                        // ADD ORIGINAL/ PORK  PUPUSAS TO ARRAY
                        if(itemModifier.hasOwnProperty('PUPUSAS Original / Pork')){
                            // console.log('Una original')
                            itemModifier['PUPUSAS Original / Pork'] += (1 * Number(itemObject[key]["Qty"]))
                                            // console.log(itemModifier)
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['PUPUSAS Original / Pork'] = (1 * Number(itemObject[key]["Qty"]))
                        }
    
                        // ADD RES  PUPUSAS TO ARRAY
                        if(itemModifier.hasOwnProperty('PUPUSAS Res / Beef')){
                            itemModifier['PUPUSAS Res / Beef'] += (1 * Number(itemObject[key]["Qty"]))
                                            // console.log(itemModifier)
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['PUPUSAS Res / Beef'] = (1 * Number(itemObject[key]["Qty"]))
                        }
    
                        // ADD RES  PUPUSAS TO ARRAY
                        if(itemModifier.hasOwnProperty('PUPUSAS Rajas Poblanas')){
                            itemModifier['PUPUSAS Rajas Poblanas'] += (1 * Number(itemObject[key]["Qty"]))
                                            // console.log(itemModifier)
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['PUPUSAS Rajas Poblanas'] = (1 * Number(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('TACO PLANCHA')){
                            itemModifier['TACO PLANCHA'] += (4 * Number(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['TACO PLANCHA'] = (4 * Number(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('TACO LLORARAS')){
                            itemModifier['TACO LLORARAS'] += (3 * Number(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['TACO LLORARAS'] = (3 * Number(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('OVNIS')){
                            itemModifier['OVNIS'] += (2 * Number(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['OVNIS'] = (2 * Number(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('FLAUTAS RES')){
                            itemModifier['FLAUTAS RES'] += (0.5 * Number(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['FLAUTAS RES'] = (0.5 * Number(itemObject[key]["Qty"]))
                        }

                         


                    if((itemObject[key]['Modifier'] == 'Chicharron VERDE') | (itemObject[key]['Modifier'] == 'Chicharron ROJO')){

                        if(itemModifier.hasOwnProperty('CHICHARRON')){
                            itemModifier['CHICHARRON'] += (1 * Number(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['CHICHARRON'] = (1 * Number(itemObject[key]["Qty"]))
                        }
                    }
                    
                    if((itemObject[key]['Modifier'] == 'Panela en salsa VERDE') | (itemObject[key]['Modifier'] == 'Panela') | (itemObject[key]['Modifier'] == 'Panela en salsa ROJA')){

                        if(itemModifier.hasOwnProperty('PANELA')){
                            itemModifier['PANELA'] += (0.5 * Number(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['PANELA'] = (0.5 * Number(itemObject[key]["Qty"]))
                        }
                        
                    }
                    
                } // END TABLA FOR 4 ///////////////////////////////////////

                // MEDIA ORDEN DE FLAUTAS
                
                else if(itemObject[key]['Parent Menu Selection'] == '1/2 ORDER FLAUTAS & PAPAS'){
              

                    if(itemModifier.hasOwnProperty(productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                                    itemObject[key]["Modifier"])){
                        itemModifier[productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                    itemObject[key]["Modifier"]] += Number(itemObject[key]["Qty"] * 0.5)
                                    // console.log(itemModifier)
                    }
                        // if the modifier is not in the object, create it and initialize it with the current Qty value
                    else{
                        itemModifier[productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                    itemObject[key]["Modifier"]] = Number(itemObject[key]["Qty"] * 0.5)
                    }
                                             
                }


                // KIDS FLAUTAS
                
                else if(itemObject[key]['Parent Menu Selection'] == 'KIDS - FLAUTAS & PAPAS (3)'){
              

                    if(itemModifier.hasOwnProperty(productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                                    itemObject[key]["Modifier"])){
                        itemModifier[productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                    itemObject[key]["Modifier"]] += Number(itemObject[key]["Qty"] * 0.5)
                                    // console.log(itemModifier)
                    }
                        // if the modifier is not in the object, create it and initialize it with the current Qty value
                    else{
                        itemModifier[productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                    itemObject[key]["Modifier"]] = Number(itemObject[key]["Qty"] * 0.5)
                    }
                                             
                }


                // ALL OTHER PRODUCTS
                else{
                    // if the current modifier is in the object, update the value by adding the current quantity
                    // The current modified string is concatenated first (Pupusa Original/Pork, Gordita Chicharron Rojo)
    ////////////////////////////////////////////
                    if(itemModifier.hasOwnProperty(productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                                    itemObject[key]["Modifier"])){
                        itemModifier[productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                    itemObject[key]["Modifier"]] += Number(itemObject[key]["Qty"])
                                    // console.log(itemModifier)
                    }
                        // if the modifier is not in the object, create it and initialize it with the current Qty value
                    else{
                        itemModifier[productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                    itemObject[key]["Modifier"]] = Number(itemObject[key]["Qty"])
                    }
    ////////////////////////////////////////////////
                        // if(itemModifier.hasOwnProperty(itemObject[key]['Parent Menu Selection'] + ' ' +
                        //                                 itemObject[key]["Modifier"])){
                        //     itemModifier[[itemObject[key]['Parent Menu Selection']] + ' ' +
                        //                 itemObject[key]["Modifier"]] += Number(itemObject[key]["Qty"])
                        //                 // console.log(itemModifier)
                        // }
                        //     // if the modifier is not in the object, create it and initialize it with the current Qty value
                        // else{
                        //     itemModifier[itemObject[key]['Parent Menu Selection'] + ' ' +
                        //                 itemObject[key]["Modifier"]] = Number(itemObject[key]["Qty"])
                        // }
    ///////////////////////////////////////////////

                    }
         
            }
            else{

                // ///////////////////////////


            }    

        }
    }




    // console.log(itemModifier);
    // outputElement.textContent = JSON.stringify(itemModifier, null, 2);

    // console.log('Atacate Cust: ', atacateCust);
    // console.log('Tabla for 4', tablaFor4);

    return itemModifier;
}

