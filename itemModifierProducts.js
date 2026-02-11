// Estos son los platos de Parent Menu Selection que se van a contabilizar
export const parentMenuSelection = [
  "PLATE 1 - 3 PUPUSAS",
  "1/2 DOZEN PUPUSAS",
  "1/2 DOZEN PUPUSAS.",
  "DOZEN PUPUSAS",
  "PLATE 3 - 3 TACOS LLORARAS",
  "PLATE 3 - 3 TACOS LLORARAS.",
  "TACO LLORARAS",
  "1/2 DOZEN TACOS LLORARAS",
  "DOZEN TACOS LLORARAS",
  "PLATE 4 - 4 GORDITAS",
  "PLATE 4 - 4 GORDITAS.",
  // // 'PLATE 6 - ENCHILADAS',  //On item file
  // // 'PLATE 7 - 2 OVNIS',     //On item file
  "PLATE 8 - FLAUTAS CON PAPAS",
  "PLATE 9 - ATACATE CUST",
  "TABLA FOR 4",
  "1/2 ORDER FLAUTAS & PAPAS",
  "KIDS - FLAUTAS & PAPAS (3)",
  /////
  "REKETES",
  "MINI REKETES",
  "PL HUEVOS RANCHEROS",
  "PL HUEVOS AL GUSTO",
  "PL HUEVOS A LA MEXICANA",
  "PL HUEVOS AL GUSTO",
  "GALLITO",
  "PL CHILAQUILES",
  "PL HAM & CHEESE OMELLETE",
  "PL CHILAQUILES",
  "SIDES DESAYUNOS",
  "PL MOLLETES",
  "KIDS - BREAKFAST PLATE",
];

// Estos son los mods de cada producto que nos interesan contabilizar
const pupusasMod = [
  "Original / Pork",
  "Chicharron",
  "Rajas Poblanas",
  "Res / Beef",
  "Beans & Cheese",
  "Cheese",
  "Pup. Original",
  "Pup. Frijol / Queso",
];
const gorditasMod = [
  "Chicharron ROJO",
  "Res / Beef",
  "Beans / Frijoles",
  "Beans & Cheese",
  "Chicharron VERDE",
  "Original (Pork)",
  "Cheese / Queso",
  "Gor. Frijol",
];
const llorarasMod = ["Lloraras ORIGINAL", "Lloraras VEGGIE"];
const flautasMod = ["POLLO", "RES"];
const atacateMod = [
  "Gor. Chicharron VERDE",
  "Pup. Original",
  "Taco Plancha",
  "Llor. Original",
  "Pup. Rajas",
  "Gor. Original (pork)",
  "Gor. Res (beef)",
  "Gor. Chicharron ROJO",
  "Pup. Res",
  "Pup. Frijol / Queso",
  "Pup. Chicharron",
  "Gor. Queso",
  "Gor. Frijol / Queso",
  "Llor. Veggie",
  "Pup. Queso",
  "Gor. Frijol",
];
const enchiladasMod = "";
const ovnisMod = "";
const tablaMod = [
  "Chicharron VERDE",
  "Chicharron ROJO",
  "Panela",
  "Panela en salsa VERDE",
  "Panela en salsa ROJA",
];
const panelaMod = [
  "ADD Panela Arriba",
  "ADD Panela SD",
  "SD Panela",
  "Side Panela",
  "Panela Asado",
];
const panelaAndPancakesMod = [
  "ADD Panela Arriba",
  "ADD Panela SD",
  "SD Panela",
  "Side Panela",
  "Panela Asado",
  "SD Pancake (1)",
  "SD Pancake (1) con chocolate",
  "SD Pancakes (2)",
  "SD Pancakes (2) con chocolate",
  "Side Pancakes (2)",
  "Extra Mini Pancake (1)",
];

// Este objeto tiene los modifiers de cada plato
export const modifierColumnNames = {
  "PLATE 1 - 3 PUPUSAS": pupusasMod,
  "1/2 DOZEN PUPUSAS": pupusasMod,
  "1/2 DOZEN PUPUSAS.": pupusasMod,
  "DOZEN PUPUSAS": pupusasMod,
  "PLATE 3 - 3 TACOS LLORARAS": llorarasMod,
  "PLATE 3 - 3 TACOS LLORARAS.": llorarasMod,
  "TACO LLORARAS": llorarasMod,
  "1/2 DOZEN TACOS LLORARAS": llorarasMod,
  "DOZEN TACOS LLORARAS": llorarasMod,
  "PLATE 4 - 4 GORDITAS": gorditasMod,
  "PLATE 4 - 4 GORDITAS.": gorditasMod,
  // 'PLATE 6 - ENCHILADAS': enchiladasMod,
  // 'PLATE 7 - 2 OVNIS': ovnisMod,
  "PLATE 8 - FLAUTAS CON PAPAS": flautasMod,
  "PLATE 9 - ATACATE CUST": atacateMod,
  "TABLA FOR 4": tablaMod,
  "1/2 ORDER FLAUTAS & PAPAS": flautasMod,
  "KIDS - FLAUTAS & PAPAS (3)": flautasMod,

  //////QUESO PANELA  && PANCAKES
  REKETES: panelaAndPancakesMod,
  "MINI REKETES": panelaAndPancakesMod,
  "PL HUEVOS RANCHEROS": panelaAndPancakesMod,
  "PL HUEVOS AL GUSTO": panelaAndPancakesMod,
  "PL HUEVOS A LA MEXICANA": panelaAndPancakesMod,
  GALLITO: panelaAndPancakesMod,
  "PL CHILAQUILES": panelaAndPancakesMod,
  "PL HAM & CHEESE OMELLETE": panelaAndPancakesMod,
  "SIDES DESAYUNOS": panelaAndPancakesMod,
  "PL MOLLETES": panelaAndPancakesMod,

  "KIDS - BREAKFAST PLATE": panelaAndPancakesMod,
  "PL LIGHT OMELLETE": panelaAndPancakesMod,
  "PL MACHACADO": panelaAndPancakesMod,
};

// //Este arreglo se hizo ya que el queso panela y los pancakes pueden estar dentro de items del Parent Menu Selection
// que tienen mas de un mod que contabilizar.
export const panelaAndPancakesParentMenuSelection = [
  "PL CHILAQUILES",
  "REKETES",
  "PL HUEVOS AL GUSTO",
  "GALLITO",
  "MINI REKETES",
  "SIDES DESAYUNOS",
  "PL HUEVOS RANCHEROS",
  "PL MOLLETES",
  "PL HUEVOS A LA MEXICANA",
  "PL HAM & CHEESE OMELLETE",

  //Parent Menu Selection Items where pancakes can be found.
  "KIDS - BREAKFAST PLATE",
  "PL LIGHT OMELLETE",
  "PL MACHACADO",
];
