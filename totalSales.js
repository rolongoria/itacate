const listContainer = document.getElementById("list-container");

export function totalSalesFunc(allProducts) {
  let allSales = {};

  // NaN values fixed by adding an or with ), if an undefined value is present, it's processed as 0
  allSales = {
    PRODUCTO: "CANTIDAD",
    "PUPUSAS ORIGINAL/PORK":
      (allProducts["modifiers"]["PUPUSAS Original / Pork"] || 0) +
      (allProducts["modifiers"]["Pup. Original"] || 0) +
      (allProducts["selection"]["PUPUSA ORIGINAL"] || 0),

    "PUPUSAS CHICHARRON":
      (allProducts["modifiers"]["PUPUSAS Chicharron"] || 0) +
      (allProducts["modifiers"]["Pup. Chicharron"] || 0) +
      (allProducts["selection"]["PUPUSA CHICHARRON"] || 0),

    "PUPUSAS RAJAS":
      (allProducts["modifiers"]["PUPUSAS Rajas Poblanas"] || 0) +
      (allProducts["modifiers"]["Pup. Rajas"] || 0) +
      (allProducts["selection"]["PUPUSA RAJAS POBLANAS"] || 0),

    "PUPUSAS RES/BEEF":
      (allProducts["modifiers"]["PUPUSAS Res / Beef"] || 0) +
      (allProducts["modifiers"]["Pup. Res"] || 0) +
      (allProducts["selection"]["PUPUSA BEEF"] || 0),

    "PUPUSAS BEANS & CHEESE":
      (allProducts["modifiers"]["PUPUSAS Beans & Cheese"] || 0) +
      (allProducts["modifiers"]["Pup. Frijol / Queso"] || 0) +
      (allProducts["selection"]["PUPUSA BEANS & CHEESE"] || 0),

    "PUPUSAS CHEESE":
      (allProducts["modifiers"]["PUPUSAS Cheese"] || 0) +
      (allProducts["modifiers"]["Pup. Queso"] || 0) +
      (allProducts["selection"]["PUPUSA CHEESE/QUESO"] || 0),

    "GORDITAS ORIGINAL/PORK":
      (allProducts["modifiers"]["GORDITAS Original (Pork)"] || 0) +
      (allProducts["modifiers"]["Gor. Original (pork)"] || 0) +
      (allProducts["selection"]["GORDITA ORIGINAL (PORK)"] || 0),

    "GORDITAS CHICHARRON ROJO":
      (allProducts["modifiers"]["GORDITAS Chicharron ROJO"] || 0) +
      (allProducts["modifiers"]["Gor. Chicharron ROJO"] || 0) +
      (allProducts["selection"]["GORDITA CHICHARRON SALSA ROJA"] || 0),

    "GORDITAS CHICHARRON VERDE":
      (allProducts["modifiers"]["GORDITAS Chicharron VERDE"] || 0) +
      (allProducts["modifiers"]["Gor. Chicharron VERDE"] || 0) +
      (allProducts["selection"]["GORDITA CHICHARRON SALSA VERDE"] || 0),

    "GORDITAS RES/BEEF":
      (allProducts["modifiers"]["GORDITAS Res / Beef"] || 0) +
      (allProducts["modifiers"]["Gor. Res (beef)"] || 0) +
      (allProducts["selection"]["GORDITA BEEF"] || 0),

    "GORDITAS BEANS/FRIJOLES":
      (allProducts["modifiers"]["GORDITAS Beans / Frijoles"] || 0) +
      (allProducts["modifiers"]["Gor. Frijol"] || 0) +
      (allProducts["selection"]["GORDITA BEANS"] || 0),

    "GORDITAS BEANS & CHEESE":
      (allProducts["modifiers"]["GORDITAS Beans & Cheese"] || 0) +
      (allProducts["modifiers"]["Gor. Frijol / Queso"] || 0) +
      (allProducts["selection"]["GORDITA BEANS & CHEESE"] || 0),

    "GORDITAS CHEESE":
      (allProducts["modifiers"]["Gor. Queso"] || 0) +
      (allProducts["modifiers"]["GORDITAS Cheese / Queso"] || 0) +
      (allProducts["selection"]["GORDITA CHEESE"] || 0),

    "LLORARAS ORIGINAL/PORK":
      (allProducts["modifiers"]["TACO LLORARAS Lloraras ORIGINAL"] || 0) +
      (allProducts["modifiers"]["TACO LLORARAS"] || 0) +
      (allProducts["modifiers"]["Llor. Original"] || 0) +
      (allProducts["selection"]["TACO LLORARAS"] || 0),

    "LLORARAS VEGGIE":
      (allProducts["modifiers"]["TACO LLORARAS Lloraras VEGGIE"] || 0) +
      (allProducts["modifiers"]["Llor. Veggie"] || 0) +
      (allProducts["selection"]["TACO LLORARAS VEGGIE"] || 0),

    "TACOS PLANCHA":
      (allProducts["modifiers"]["TACO PLANCHA"] || 0) +
      (allProducts["modifiers"]["Taco Plancha"] || 0) +
      (allProducts["selection"]["TACO PLANCHA"] || 0) +
      (allProducts["selection"]["PLATE 2 - 4 TACOS PLANCHA"] || 0) +
      (allProducts["selection"]["1/2 DOZEN TACOS PLANCHA"] || 0) +
      (allProducts["selection"]["DOZEN TACOS PLANCHA"] || 0) +
      (allProducts["selection"]["KIDS - TACOS PLANCHA (2)"] || 0),

    "TACO DE CHICHARRON":
      (allProducts["selection"]["TACO CHICHARRON EN SALSA VERDE"] || 0) +
      (allProducts["selection"]["TACO CHICHARRON EN SALSA ROJA"] || 0) +
      (allProducts["selection"]["ORDEN TACOS CHICHARRON EN SALSA (3)"] || 0),

    TORTAS: allProducts["selection"]["PLATE 5 - TORTA CON PAPAS"] || 0,

    "FLAUTAS POLLO": allProducts["modifiers"]["FLAUTAS POLLO"] || 0,

    "FLAUTAS RES": allProducts["modifiers"]["FLAUTAS RES"] || 0,

    ENCHILADAS: +(allProducts["selection"]["PLATE 6 - ENCHILADAS"] || 0),

    OVNIS:
      (allProducts["modifiers"]["OVNIS"] || 0) +
      (allProducts["selection"]["PLATE 7 - 2 OVNIS"] || 0) +
      (allProducts["selection"]["OVNI"] || 0),

    "CALDO TLALPENO": allProducts["selection"]["CALDO TLALPENO"] || 0,

    "CARNE EN SU JUGO":
      (allProducts["selection"]["CARNE EN SU JUGO"] || 0) +
      (allProducts["selection"]["CARNE EN SU JUGO (SMALL/SIDE)"] || 0) +
      (allProducts["selection"]["CARNE EN SU JUGO (SMALL)"] || 0),

    CHILAQUILES:
      (allProducts["selection"]["PL CHILAQUILES"] || 0) +
      (allProducts["selection"]["SALSA VERDE CHILAQUILES"] || 0) +
      (allProducts["selection"]["SALSA ROJA CHILAQUILES"] || 0),

    CHICHARRON:
      (allProducts["modifiers"]["CHICHARRON"] || 0) +
      (allProducts["selection"]["CAZUELA DE CHICHARRON EN SALSA VERDE"] || 0) +
      (allProducts["selection"]["CAZUELA DE CHICHARRON EN SALSA ROJA"] || 0),

    QUESADILLAS:
      (allProducts["selection"]["PL QUESADILLAS FRITAS"] || 0) +
      (allProducts["selection"]["KIDS - QUESADILLAS (2)"] || 0) +
      (allProducts["selection"]["QUESADILLA HARINA"] || 0) +
      (allProducts["selection"]["QUESADILLA MAIZ"] || 0),

    PANELA:
      (allProducts["modifiers"]["PANELA"] || 0) +
      (allProducts["selection"]["GRILLED PANELA CAZUELA"] || 0),

    "QUESO FRESCO": allProducts["selection"]["QUESO FRESCO"] || 0,

    "PLATE HUEVOS":
      (allProducts["selection"]["PL HUEVOS RANCHEROS"] || 0) +
      (allProducts["selection"]["PL HUEVOS AL GUSTO"] || 0) +
      (allProducts["selection"]["PL HUEVOS A LA MEXICANA"] || 0) +
      (allProducts["selection"]["PL HUEVOS DIVORCIADOS"] || 0),

    "HOUSE OMELLETE": allProducts["selection"]["PL HOUSE OMELLETE"] || 0,

    "LIGHT OMELLETE": allProducts["selection"]["PL LIGHT OMELLETE"] || 0,

    "HAM & CHEESE OMELLETE":
      allProducts["selection"]["PL HAM & CHEESE OMELLETE"] || 0,

    "MEAT LOVERS OMELLETE":
      allProducts["selection"]["PL MEAT LOVERS OMELLETE"] || 0,

    MOLLETES: allProducts["selection"]["PL MOLLETES"] || 0,

    REKETES: allProducts["selection"]["REKETES"] || 0,

    "REKETES VEGGIE": allProducts["selection"]["REKETES VEGGIE"] || 0,

    "MINI REKETES": allProducts["selection"]["MINI REKETES"] || 0,

    GALLITO: allProducts["selection"]["GALLITO"] || 0,

    "MINI REKETES VEGGIE": allProducts["selection"]["MINI REKETES VEGGIE"] || 0,

    "FRIJOLES CON VENENO":
      allProducts["selection"]["CAZUELA DE FRIJOLES CON VENENO"] || 0,

    "ARROZ/RICE": allProducts["selection"]["ARROZ / RICE"] || 0,

    "PAN DE ELOTE": allProducts["selection"]["PAN DE ELOTE"] || 0,

    "GORDITAS DE AZUCAR":
      allProducts["selection"]["GORDITAS DE AZUCAR W/ICE CREAM"] || 0,

    "PLATE PANCAKES (3)": allProducts["selection"]["PL PANCAKES (3)"] || 0,

    "GALLETAS/EMPANADAS":
      allProducts["selection"]["DON DELI GALLETAS/EMPANADAS"] || 0,

    COFFEE: allProducts["selection"]["COFFEE"] || 0,

    MACHACADO: allProducts["selection"]["PL MACHACADO"] || 0,
    "MACHACADO A LA MEX":
      allProducts["selection"]["PL MACHACADO A LA MEX"] || 0,
    "TABLA FOR 4": allProducts["selection"]["TABLA FOR 4"] || 0,
    "TORTILLAS DE HARINA":
      ((allProducts["selection"]["TABLA FOR 4"] || 0) +
        (allProducts["selection"]["PL MACHACADO A LA MEX"] || 0) +
        (allProducts["selection"]["PL MACHACADO"] || 0) +
        (allProducts["selection"]["PL HUEVOS RANCHEROS"] || 0) +
        (allProducts["selection"]["PL HUEVOS AL GUSTO"] || 0) +
        (allProducts["selection"]["PL HUEVOS A LA MEXICANA"] || 0) +
        (allProducts["selection"]["PL HUEVOS DIVORCIADOS"] || 0) +
        (allProducts["selection"]["GRILLED PANELA CAZUELA"] || 0)) *
      3,
    PANCAKES:
      (allProducts["selection"]["PL PANCAKES (3)"] || 0) * 3 +
      (allProducts["modifiers"]["PANCAKES"] || 0),
    "TAQUITOS DE PAPA": allProducts["selection"]["TAQUITOS DE PAPA"] || 0,
  };

  // console.log(Object.keys(allSales));
  // console.log(allSales);

  // console.log(allProducts['modifiers']['FLAUTAS RES'] || 0)
  // console.log(allProducts['modifiers']['FLAUTAS'] || 0)
  // console.log(allProducts['selection']['1/2 ORDER FLAUTAS & PAPAS'] || 0)
  // console.log(allProducts['selection']['KIDS - FLAUTAS & PAPAS (3)'] || 0)

  // for (const key in allSales) {
  //     if (allSales.hasOwnProperty(key)) {
  //       console.log(`${key}: ${allSales[key]}`);
  //     }
  // }

  // Loop through the object and create rows with two columns (key and value)
  for (var key in allSales) {
    if (allSales.hasOwnProperty(key)) {
      var listItem = document.createElement("li");
      listItem.classList.add("list-group");
      listItem.classList.add("list-group-horizontal");
      listItem.classList.add("row");

      var keyColumn = document.createElement("span");
      keyColumn.classList.add("list-group-item");
      keyColumn.classList.add("column");
      keyColumn.textContent = key;

      var valueColumn = document.createElement("span");
      valueColumn.classList.add("list-group-item");
      valueColumn.classList.add("column");
      valueColumn.textContent = allSales[key];

      listItem.appendChild(keyColumn);
      listItem.appendChild(valueColumn);

      listContainer.appendChild(listItem);
    }
  }
  // outputElement.textContent = JSON.stringify(allSales, null, 2);

  return allSales;
}
