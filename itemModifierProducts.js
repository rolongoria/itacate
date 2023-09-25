export const parentMenuSelection = [
    'PLATE 1 - 3 PUPUSAS', 
    '1/2 DOZEN PUPUSAS',
    '1/2 DOZEN PUPUSAS.', 
    'DOZEN PUPUSAS',
    'PLATE 3 - 3 TACOS LLORARAS',
    'PLATE 3 - 3 TACOS LLORARAS.',
    'TACO LLORARAS',
    '1/2 DOZEN TACOS LLORARAS',
    'DOZEN TACOS LLORARAS',
    'PLATE 4 - 4 GORDITAS',
    'PLATE 4 - 4 GORDITAS.',
    // // 'PLATE 6 - ENCHILADAS',  //On item file
    // // 'PLATE 7 - 2 OVNIS',     //On item file
    'PLATE 8 - FLAUTAS CON PAPAS',
    'PLATE 9 - ATACATE CUST',
    'TABLA FOR 4',
    '1/2 ORDER FLAUTAS & PAPAS',
    'KIDS - FLAUTAS & PAPAS (3)',

];

// Estos son los mods de cada producto
const pupusasMod = ['Original / Pork', 'Chicharron', 'Rajas Poblanas', 'Res / Beef', 'Beans & Cheese', 'Cheese', 'Pup. Original', 'Pup. Frijol / Queso'];
const gorditasMod = ['Chicharron ROJO', 'Res / Beef', 'Beans / Frijoles', 'Beans & Cheese', 'Chicharron VERDE', 'Original (Pork)', 'Cheese / Queso', 'Gor. Frijol'];
const llorarasMod = ['Lloraras ORIGINAL', 'Lloraras VEGGIE'];
const flautasMod = ['POLLO', 'RES'];
const atacateMod = ['Gor. Chicharron VERDE', 'Pup. Original', 'Taco Plancha', 'Llor. Original', 'Pup. Rajas', 
                    'Gor. Original (pork)', 'Gor. Res (beef)', 'Gor. Chicharron ROJO','Pup. Res', 
                    'Pup. Frijol / Queso','Pup. Chicharron', 'Gor. Queso', 'Gor. Frijol / Queso',
                    'Llor. Veggie', 'Pup. Queso', 'Gor. Frijol'];
const enchiladasMod = '';
const ovnisMod = '';
const tablaMod = ['Chicharron VERDE', 'Chicharron ROJO', 'Panela','Panela en salsa VERDE', 'Panela en salsa ROJA'];

// Este objeto tiene los modifiers de cada plato
export const modifierColumnNames = {
    'PLATE 1 - 3 PUPUSAS': pupusasMod,
    '1/2 DOZEN PUPUSAS': pupusasMod,
    '1/2 DOZEN PUPUSAS.': pupusasMod,
    'DOZEN PUPUSAS': pupusasMod,
    'PLATE 3 - 3 TACOS LLORARAS': llorarasMod,
    'PLATE 3 - 3 TACOS LLORARAS.': llorarasMod,
    'TACO LLORARAS': llorarasMod,
    '1/2 DOZEN TACOS LLORARAS': llorarasMod,
    'DOZEN TACOS LLORARAS': llorarasMod,
    'PLATE 4 - 4 GORDITAS': gorditasMod,
    'PLATE 4 - 4 GORDITAS.': gorditasMod,
    // 'PLATE 6 - ENCHILADAS': enchiladasMod,
    // 'PLATE 7 - 2 OVNIS': ovnisMod,
    'PLATE 8 - FLAUTAS CON PAPAS': flautasMod,
    'PLATE 9 - ATACATE CUST': atacateMod,
    'TABLA FOR 4': tablaMod,
    '1/2 ORDER FLAUTAS & PAPAS': flautasMod,
    'KIDS - FLAUTAS & PAPAS (3)': flautasMod,


};

