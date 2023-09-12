
// This function is to print the elements from menu Items file
export function printItemSelection(itemObject, menuItemColumn, productsObject, itemSelectionMultiplier){
    let itemSelection = {};

    const outputElement = document.getElementById("output");

    // Check if item in menuItemColumn, then update each item in plates
    // Iterate through each item of the object created from the CSV file
    for (const key in itemObject){
        // console.log(itemObject[key]['Parent Menu Selection']);
        // console.log(parseInt(itemObject[key]["Qty"]))
////////////////////////////////
        // if(menuItemColumn.includes(itemObject[key]['Menu Item'])){

       
        //         if(itemSelection.hasOwnProperty(productsObject[itemObject[key]['Menu Item']])){
        //             itemSelection[productsObject[itemObject[key]['Menu Item']]] += parseInt(itemObject[key]['Qty'])
        //         }
        //             // if the product is not in the plate object, create it and initialize it with the current Qty value
        //         else{
        //             itemSelection[productsObject[itemObject[key]['Menu Item']]] = parseInt(itemObject[key]['Qty'])
        //         }
        // }
////////////////////////////////

        if(menuItemColumn.includes(itemObject[key]['Menu Item'])){

       
            if(itemSelection.hasOwnProperty(itemObject[key]['Menu Item'])){
                // itemSelection[itemObject[key]['Menu Item']] += parseInt(itemObject[key]['Qty'])
                itemSelection[itemObject[key]['Menu Item']] += parseInt(itemObject[key]['Qty']) * itemSelectionMultiplier[itemObject[key]['Menu Item']]
            }
                // if the product is not in the plate object, create it and initialize it with the current Qty value
            else{
                // itemSelection[itemObject[key]['Menu Item']] = parseInt(itemObject[key]['Qty'])
                itemSelection[itemObject[key]['Menu Item']] = parseInt(itemObject[key]['Qty']) * itemSelectionMultiplier[itemObject[key]['Menu Item']]
            }
    }
        
    }


    // console.log(itemSelection);
    outputElement.textContent = JSON.stringify(itemSelection, null, 2);

    return itemSelection;
}

export function printItemModifiers(itemObject, productsObject, modifierColumn, parentMenuSelectionColumn){

    let itemModifier = {};

    const outputElement = document.getElementById("output");


    // function sumAtacateItems(parentSelection, item){

    //     if(itemModifier.hasOwnProperty(itemObject[key]['Parent Menu Selection'] + ' ' +
    //                                             itemObject[key]["Modifier"])){
    //                 itemModifier[[itemObject[key]['Parent Menu Selection']] + ' ' +
    //                             itemObject[key]["Modifier"]] += parseInt(itemObject[key]["Qty"])
    //                             // console.log(itemModifier)
    //             }
    //                 // if the modifier is not in the object, create it and initialize it with the current Qty value
    //             else{
    //                 itemModifier[itemObject[key]['Parent Menu Selection'] + ' ' +
    //                             itemObject[key]["Modifier"]] = parseInt(itemObject[key]["Qty"])
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
                        itemModifier[itemObject[key]["Modifier"]] += parseInt(itemObject[key]["Qty"])
                                // console.log(itemModifier)
                    }
                        // if the modifier is not in the object, create it and initialize it with the current Qty value
                    else{
                        itemModifier[itemObject[key]["Modifier"]] = parseInt(itemObject[key]["Qty"])
                    }                  
                        
                }


                // TABLA FOR 4 /////////////////////////////////////////
                else if(itemObject[key]['Parent Menu Selection'] == 'TABLA FOR 4'){

                    // console.log('Tabla for 4: ', itemObject[key]['Modifier'])

                    //PUPUSAS ORIGINALES TODAS
                    if(itemObject[key]['Modifier'] == 'Pupusas ORIGINALES TODAS'){
                        console.log('Tabla for 4: ', itemObject[key]['Modifier'])

                        if(itemModifier.hasOwnProperty('PUPUSAS Original / Pork')){
                            itemModifier['PUPUSAS Original / Pork'] += (3 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['PUPUSAS Original / Pork'] = (3 * parseInt(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('TACO PLANCHA')){
                            itemModifier['TACO PLANCHA'] += (4 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['TACO PLANCHA'] = (4 * parseInt(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('TACO LLORARAS')){
                            itemModifier['TACO LLORARAS'] += (3 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['TACO LLORARAS'] = (3 * parseInt(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('OVNIS')){
                            itemModifier['OVNIS'] += (2 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['OVNIS'] = (2 * parseInt(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('FLAUTAS')){
                            itemModifier['FLAUTAS'] += (0.5 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['FLAUTAS'] = (0.5 * parseInt(itemObject[key]["Qty"]))
                        }

                        
                    }
                    else{

                        // ADD ORIGINAL/ PORK  PUPUSAS TO ARRAY
                        if(itemModifier.hasOwnProperty('PUPUSAS Original / Pork')){
                            itemModifier['PUPUSAS Original / Pork'] += (1 * parseInt(itemObject[key]["Qty"]))
                                            // console.log(itemModifier)
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['PUPUSAS Original / Pork'] = (1 * parseInt(itemObject[key]["Qty"]))
                        }
    
                        // ADD RES  PUPUSAS TO ARRAY
                        if(itemModifier.hasOwnProperty('PUPUSAS Res / Beef')){
                            itemModifier['PUPUSAS Res / Beef'] += (1 * parseInt(itemObject[key]["Qty"]))
                                            // console.log(itemModifier)
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['PUPUSAS Res / Beef'] = (1 * parseInt(itemObject[key]["Qty"]))
                        }
    
                        // ADD RES  PUPUSAS TO ARRAY
                        if(itemModifier.hasOwnProperty('PUPUSAS Rajas Poblanas')){
                            itemModifier['PUPUSAS Rajas Poblanas'] += (1 * parseInt(itemObject[key]["Qty"]))
                                            // console.log(itemModifier)
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['PUPUSAS Rajas Poblanas'] = (1 * parseInt(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('TACO PLANCHA')){
                            itemModifier['TACO PLANCHA'] += (4 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['TACO PLANCHA'] = (4 * parseInt(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('TACO LLORARAS')){
                            itemModifier['TACO LLORARAS'] += (3 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['TACO LLORARAS'] = (3 * parseInt(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('OVNIS')){
                            itemModifier['OVNIS'] += (2 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['OVNIS'] = (2 * parseInt(itemObject[key]["Qty"]))
                        }

                        if(itemModifier.hasOwnProperty('FLAUTAS')){
                            itemModifier['FLAUTAS'] += (0.5 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['FLAUTAS'] = (0.5 * parseInt(itemObject[key]["Qty"]))
                        }

                    } //END PUPUSAS IF/ELSE


                    if((itemObject[key]['Modifier'] == 'Chicharron VERDE') | (itemObject[key]['Modifier'] == 'Chicharron ROJO')){

                        if(itemModifier.hasOwnProperty('CHICHARRON')){
                            itemModifier['CHICHARRON'] += (1 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['CHICHARRON'] = (1 * parseInt(itemObject[key]["Qty"]))
                        }
                    }
                    
                    if((itemObject[key]['Modifier'] == 'Panela en salsa VERDE') | (itemObject[key]['Modifier'] == 'Panela') | (itemObject[key]['Modifier'] == 'Panela en salsa ROJA')){

                        if(itemModifier.hasOwnProperty('PANELA')){
                            itemModifier['PANELA'] += (0.5 * parseInt(itemObject[key]["Qty"]))
                        }
                                // if the modifier is not in the object, create it and initialize it with the current Qty value
                        else{
                            itemModifier['PANELA'] = (0.5 * parseInt(itemObject[key]["Qty"]))
                        }
                    }




                    
                } // END TABLA FOR 4 ///////////////////////////////////////


                // ALL OTHER PRODUCTS
                else{
                    // if the current modifier is in the object, update the value by adding the current quantity
                    // The current modified string is concatenated first (Pupusa Original/Pork, Gordita Chicharron Rojo)
    ////////////////////////////////////////////
                    if(itemModifier.hasOwnProperty(productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                                    itemObject[key]["Modifier"])){
                        itemModifier[productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                    itemObject[key]["Modifier"]] += parseInt(itemObject[key]["Qty"])
                                    // console.log(itemModifier)
                    }
                        // if the modifier is not in the object, create it and initialize it with the current Qty value
                    else{
                        itemModifier[productsObject[itemObject[key]['Parent Menu Selection']] + ' ' +
                                    itemObject[key]["Modifier"]] = parseInt(itemObject[key]["Qty"])
                    }
    ////////////////////////////////////////////////
                        // if(itemModifier.hasOwnProperty(itemObject[key]['Parent Menu Selection'] + ' ' +
                        //                                 itemObject[key]["Modifier"])){
                        //     itemModifier[[itemObject[key]['Parent Menu Selection']] + ' ' +
                        //                 itemObject[key]["Modifier"]] += parseInt(itemObject[key]["Qty"])
                        //                 // console.log(itemModifier)
                        // }
                        //     // if the modifier is not in the object, create it and initialize it with the current Qty value
                        // else{
                        //     itemModifier[itemObject[key]['Parent Menu Selection'] + ' ' +
                        //                 itemObject[key]["Modifier"]] = parseInt(itemObject[key]["Qty"])
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
    outputElement.textContent = JSON.stringify(itemModifier, null, 2);

    return itemModifier;
}

