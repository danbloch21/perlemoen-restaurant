import images from "./images";

const champagnes = [
  {
    title: "Benguela Cove Cuvée 58",
    price: "R285",
    tags: "Glass | R75",
  },
  {
    title: "Benguela Cove Cuvée 58 Rosé",
    price: "R285",
  },
  {
    title: "Creation Elation",
    price: "R510",
  },
];

const cocktails = [
  {
    title: "Mimosa",
    price: "R70",
    tags: "Brut MCC | Orange juice",
  },
  {
    title: "Italian Job",
    price: "R89",
    tags: "Prosecco | Limoncello | Basil | Lime",
  },
  {
    title: "Cosmopolitan",
    price: "R70",
    tags: "Vodka | Triple Sec | Lime | Cranberry juice",
  },
  {
    title: "Mojito",
    price: "R80",
    tags: "Bacardi | Lime | Fresh mint",
  },
  {
    title: "Tequila Sunrise",
    price: "R87",
    tags: "Tequila | Orange juice | Grenadine",
  },
  {
    title: "Aperol Spritz",
    price: "R79",
    tags: "Prosecco | Aperol | Soda | Orange garnish",
  },
  {
    title: "Negroni",
    price: "R75",
    tags: "Gin | Vermouth | Campari",
  },
  {
    title: "Pink Gin Cocktail",
    price: "R85",
    tags: "Fiddler's gin | Pink tonic | Fresh berries",
  },
  {
    title: "Lady Hoy Gin Cocktail",
    price: "R85",
    tags: "Tanqueray gin | Mint | Lime | Cucumber | Indian tonic",
  },
  {
    title: "Bloody Mary",
    price: "R85",
  },
];

const beers = [
  {
    title: "Old Harbour Beer",
    price: "R50",
  },
  {
    title: "Carling Black Label",
    price: "R30",
  },
  {
    title: "Castle Light",
    price: "R30",
  },
  {
    title: "Folk & Goode IPA",
    price: "R50",
  },
  {
    title: "Savannah Dry",
    price: "R35",
  },
  {
    title: "Hunter’s Dry",
    price: "R35",
  },
  {
    title: "Brutal Fruit",
    price: "R35",
  },
  {
    title: "Heineken 0.0",
    price: "R35",
    tags: "Non-alcoholic",
  },
  {
    title: "Savannah Lemon",
    price: "R35",
    tags: "Non-alcoholic",
  },
];

const sauvignons = [
  {
    title: "Ataraxia",
    price: "R230",
    tags: "Glass | R60",
  },
  {
    title: "Southern Right",
    price: "R260",
  },
  {
    title: "Benguela Cove Lighthouse",
    price: "R180",
  },
  {
    title: "Benguela Cove Estate Sauvignon",
    price: "R275",
  },
];

const chenins = [
  {
    title: "Gabriëlskloof",
    price: "R220",
    tags: "Glass | R60",
  },
  {
    title: "Creation Cool Climate",
    price: "R300",
  },
];

const viogniers = [
  {
    title: "Creation",
    price: "R245",
  },
];

const chardonnays = [
  {
    title: "Bouchard Finlayson Sans Barrique",
    price: "R295",
  },
  {
    title: "Bouchard Finlayson Kaaimansgat",
    price: "R360",
  },
  {
    title: "La Vierge Redemption",
    price: "R200",
  },
  {
    title: "Hamilton Russell Estate",
    price: "R895",
  },
];

const whiteblends = [
  {
    title: "Bouchard Finlayson Blanc De Mer",
    price: "R175",
  },
  {
    title: "Whale Haven Abalone",
    price: "R165",
    tags: "Glass | R50",
  },
  {
    title: "Ashbourne Sandstone",
    price: "R470",
  },
];

const roses = [
  {
    title: "Gabriëlskloof Rosebud",
    price: "R185",
    tags: "Glass | R55",
  },
  {
    title: "Creation Rosé",
    price: "R185",
  },
];

const pinots = [
  {
    title: "Ataraxia",
    price: "R535",
  },
  {
    title: "Bouchard Finlayson Galpin Peak",
    price: "R665",
  },
];

const shirazes = [
  {
    title: "Creation Reserve Syrah",
    price: "R580",
  },
  {
    title: "Gabriëlskloof Syrah",
    price: "R296",
  },
];

const pinotages = [
  {
    title: "Whalehaven",
    price: "R325",
  },
  {
    title: "Southern Right",
    price: "R575",
  },
];

const redblends = [
  {
    title: "La Vierge Nymphomane",
    price: "R290",
  },
  {
    title: "Whalehaven Abalone",
    price: "R165",
    tags: "Glass | R50",
  },
];

const dessertwines = [
  {
    title: "Creation Fine Cape Vintage Port",
    tags: "Glass | R50",
  },
];

const spirits = [
  {
    title: "Absolut Vodka",
    price: "R25",
  },
  {
    title: "Smirnoff",
    price: "R20",
  },
  {
    title: "Bacardi Rum",
    price: "R20",
  },
  {
    title: "Tanqueray Gin",
    price: "R25",
  },
  {
    title: "Fiddler's Gin",
    price: "R28",
  },
  {
    title: "Gordon's Gin",
    price: "R20",
  },
  {
    title: "Bells Scotch Whiskey",
    price: "R20",
  },
  {
    title: "Jameson Irish Whiskey",
    price: "R35",
  },
  {
    title: "Glenlivet 12-year-old single malt whiskeys",
    price: "R50",
  },
  {
    title: "Olofberg Brandy",
    price: "R20",
  },
  {
    title: "Grappa",
    price: "R40",
  },
  {
    title: "Jägermeister",
    price: "R30",
  },
];

const softs = [
  {
    title: "Coke, Coke Zero, Fanta, Cream Soda",
    price: "R25",
  },
  {
    title: "Appletiser, Red Grapetiser",
    price: "R30",
  },
  {
    title: "Soda, Lemonade, Dry Lemon",
    price: "R22",
  },
  {
    title: "Campari",
    price: "R32",
  },
  {
    title: "El Jimador Gold Tequila",
    price: "R32",
  },
  {
    title: "Martini Rosso Vermouth",
    price: "R20",
  },
  {
    title: "Limoncello",
    price: "R30",
  },
  {
    title: "Kahlua",
    price: "R28",
  },
  {
    title: "Amarula",
    price: "R20",
  },
];

const beverages = [
  {
    title: "Espresso single",
    price: "R20",
    tags: "Double | R29",
  },
  {
    title: "Macchiato/Cortado",
    price: "R32",
  },
  {
    title: "Americano",
    price: "R30",
  },
  {
    title: "Flat White",
    price: "R34",
  },
  {
    title: "Cappuccino",
    price: "R35",
  },
  {
    title: "Cafe Latte",
    price: "R36",
  },
  {
    title: "Chai Latte",
    price: "R36",
  },
  {
    title: "Decaf Cappuccino",
    price: "R36",
  },
  {
    title: "Rooibos Cappucino",
    price: "R36",
  },
  {
    title: "Mocha",
    price: "R36",
  },
  {
    title: "Ceylon/Rooibos Tea",
    price: "R23",
  },
  {
    title: "English Breakfast/Green Tea",
    price: "R25",
  },
];

const lunchstarters = [
  {
    title: "Pan-fried abalone with curried aioli",
    price: "R105",
  },
  {
    title: "Fish Cakes with tartare",
    price: "R85",
  },
  {
    title: "Abalone and prawn half-moons with cucumber and fennel slaw",
    price: "R90",
  },
  {
    title: "Beef carpaccio",
    price: "R110",
  },
  {
    title: "Patagonian squid tubes with chimicurri dressing and fragrant rice",
    price: "R120",
  },
  {
    title: "Mussels in a creamy white sauce",
    price: "R115",
    tags: "Also avaialable in tomato-based sauce",
  },
  {
    title: "Creamed abalone with rice and crostini",
    price: "R120",
  },
];

const lunchmains = [
  {
    title: "Caesar salad",
    price: "R90",
    tags: "Add chicken or avocado | R30",
  },
  {
    title: "Old Harbour Chowder",
    price: "R120",
    tags: "Line fish | Haddock | Mussels",
  },
  {
    title: "Seafood orecchiette pasta",
    price: "R160",
    tags: "Line fish | Mussels | Calamari | Prawns | Neapolitan sauce",
  },
  {
    title: "Pan-fried hake with potato and green bean salad",
    price: "R120",
  },
  {
    title:
      "Slow-roasted pork belly, creamy samp, green beans and caramelised onions",
    price: "R185",
  },
  {
    title: "Abalone risotto",
    price: "R140",
  },
  {
    title: "Abalone risotto",
    price: "R140",
  },
  {
    title: "Felafel",
    price: "R125",
  },
];

const lunchdesserts = [
  {
    title: "Chocolate ganache tart",
    price: "R80",
  },
  {
    title: "Tipsy tart",
    price: "R75",
  },
  {
    title: "Ice cream",
    price: "R35",
    tags: "Vanilla | Pistacchio | Chocolate brownie",
  },
  {
    title:
      "Affogato – with vanilla ice cream, espresso and a choice of liquors",
    price: "R75",
    tags: "Grappa | Amarula | Kahlua",
  },
];

const dinnerstarters = [
  {
    title: "Pan-fried abalone with curried aioli",
    price: "R105",
  },
  {
    title: "Beef carpaccio",
    price: "R110",
  },
  {
    title: "Patagonian squid tubes with chimicurri dressing and fragrant rice",
    price: "R120",
  },
  {
    title: "Butternut squash ravioli",
    price: "R105",
  },
  {
    title: "Creamed abalone",
    price: "R120",
  },
];

const dinnermains = [
  {
    title: "Sweat pea risotto with goats cheese croquettes",
    price: "R140",
  },
  {
    title: "Seafood orecchiette pasta",
    price: "R160",
    tags: "Line fish | Mussels | Calamari | Prawns | Neapolitan sauce",
  },
  {
    title: "Catch of the day with fontdant potatoes and oven vegetables",
    price: "R175",
  },
  {
    title:
      "Slow-roasted pork belly, creamy samp, green beans and caramelised onions",
    price: "R185",
  },
  {
    title: "Abalone risotto",
    price: "R145",
  },
  {
    title: "Seafood platter for two",
    price: "R590",
    tags: "Line fish | Prawns | Mussels | Calamari | Abalone",
  },
  {
    title: "Creammy sam or mixed salad",
    price: "R60",
  },
  {
    title: "Tirmaisu",
    price: "R85",
  },
];

const dinnerdesserts = [
  {
    title: "Chocolate ganache tart",
    price: "R80",
  },
  {
    title: "Tipsy tart",
    price: "R75",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default {
  champagnes,
  cocktails,
  beers,
  sauvignons,
  chenins,
  viogniers,
  chardonnays,
  whiteblends,
  roses,
  pinots,
  shirazes,
  pinotages,
  redblends,
  dessertwines,
  softs,
  beverages,
  lunchstarters,
  lunchmains,
  lunchdesserts,
  dinnerstarters,
  dinnermains,
  dinnerdesserts,
  awards,
};
