const grains = [
  { name: "amaranth", category: "grain" },
  { name: "barley", category: "grain" },
  { name: "buckwheat", category: "grain" },
  { name: "popcorn", category: "grain" },
  { name: "hominy corn", category: "grain" },
  { name: "millet", category: "grain" },
  { name: "oats", category: "grain" },
  { name: "quinoa", category: "grain" },
  { name: "rice", category: "grain" },
  { name: "rye", category: "grain" },
  { name: "sorghum", category: "grain" },
  { name: "spelt", category: "grain" },
  { name: "teff", category: "grain" },
  { name: "tritcale", category: "grain" },
  { name: "wheat", category: "grain" },
  { name: "bulgur wheat", category: "grain" },
  { name: "semolina", category: "grain" },
  { name: "pasta", category: "grain" },
  { name: "couscous", category: "grain" },
  { name: "wild rice", category: "grain" },
  { name: "granola", category: "grain" },
];

const vegetables = [
  { name: "artichoke", category: "vegetable" },
  { name: "asparagus", category: "vegetable" },
  { name: "avocado", category: "vegetable" },
  { name: "bamboo shoots", category: "vegetable" },
  { name: "beetroot", category: "vegetable" },
  { name: "bell pepper", category: "vegetable" },
  { name: "bok choi", category: "vegetable" },
  { name: "broccoli", category: "vegetable" },
  { name: "brussels sprouts", category: "vegetable" },
  { name: "burdock root", category: "vegetable" },
  { name: "green cabbage", category: "vegetable" },
  { name: "red cabbage", category: "vegetable" },
  { name: "savoy cabbage", category: "vegetable" },
  { name: "calabash", category: "vegetable" },
  { name: "capers", category: "vegetable" },
  { name: "carrot", category: "vegetable" },
  { name: "cassava", category: "vegetable" },
  { name: "cauliflower", category: "vegetable" },
  { name: "celery", category: "vegetable" },
  { name: "celeriac", category: "vegetable" },
  { name: "chayote", category: "vegetable" },
  { name: "kai-lan", category: "vegetable" },
  { name: "baby corn", category: "vegetable" },
  { name: "cucumber", category: "vegetable" },
  { name: "gherkin", category: "vegetable" },
  { name: "daikon radish", category: "vegetable" },
  { name: "edamame", category: "vegetable" },
  { name: "aubergine", category: "vegetable" },
  { name: "elephant garlic", category: "vegetable" },
  { name: "endive", category: "vegetable" },
  { name: "fennel", category: "vegetable" },
  { name: "fiddlehead", category: "vegetable" },
  { name: "galangal", category: "vegetable" },
  { name: "garlic", category: "vegetable" },
  { name: "ginger", category: "vegetable" },
  { name: "grape leaves", category: "vegetable" },
  { name: "grean beans", category: "vegetable" },
  { name: "string beans", category: "vegetable" },
  { name: "wax beans", category: "vegetable" },
  { name: "amaranth leaves", category: "vegetable" },
  { name: "beet greens", category: "vegetable" },
  { name: "collard greens", category: "vegetable" },
  { name: "dandelion greens", category: "vegetable" },
  { name: "kale", category: "vegetable" },
  { name: "kohlrabi greens", category: "vegetable" },
  { name: "mustard greens", category: "vegetable" },
  { name: "rapini", category: "vegetable" },
  { name: "spinach", category: "vegetable" },
  { name: "swiss chard", category: "vegetable" },
  { name: "turnip greens", category: "vegetable" },
  { name: "hearts of palm", category: "vegetable" },
  { name: "horseradish", category: "vegetable" },
  { name: "sunchokes", category: "vegetable" },
  { name: "jícama", category: "vegetable" },
  { name: "kohlrabi", category: "vegetable" },
  { name: "leeks", category: "vegetable" },
  { name: "lemongrass", category: "vegetable" },
  { name: "butterhead lettuce", category: "vegetable" },
  { name: "iceberg lettuce", category: "vegetable" },
  { name: "green leaf lettuce", category: "vegetable" },
  { name: "red leaf lettuce", category: "vegetable" },
  { name: "romaine lettuce", category: "vegetable" },
  { name: "lotus root", category: "vegetable" },
  { name: "lotus seed", category: "vegetable" },
  { name: "chantrelle mushrooms", category: "vegetable" },
  { name: "baby bella mushrooms", category: "vegetable" },
  { name: "enoki mushrooms", category: "vegetable" },
  { name: "miatake mushrooms", category: "vegetable" },
  { name: "morel mushrooms", category: "vegetable" },
  { name: "oyster mushrooms", category: "vegetable" },
  { name: "porcini mushrooms", category: "vegetable" },
  { name: "royal trumpet mushrooms", category: "vegetable" },
  { name: "shiitake mushrooms", category: "vegetable" },
  { name: "truffles", category: "vegetable" },
  { name: "white button mushrooms", category: "vegetable" },
  { name: "chestnut mushrooms", category: "vegetable" },
  { name: "portobello mushrooms", category: "vegetable" },
  { name: "napa cabbage", category: "vegetable" },
  { name: "nopales", category: "vegetable" },
  { name: "okra", category: "vegetable" },
  { name: "green olive", category: "vegetable" },
  { name: "black olive", category: "vegetable" },
  { name: "white onion", category: "vegetable" },
  { name: "red onion", category: "vegetable" },
  { name: "parsley", category: "vegetable" },
  { name: "parsley root", category: "vegetable" },
  { name: "parsnip", category: "vegetable" },
  { name: "green peas", category: "vegetable" },
  { name: "snow peas", category: "vegetable" },
  { name: "sugar snap peas", category: "vegetable" },
  { name: "anaheim pepper", category: "vegetable" },
  { name: "banana pepper", category: "vegetable" },
  { name: "cherry pepper", category: "vegetable" },
  { name: "chipotle pepper", category: "vegetable" },
  { name: "fresno pepper", category: "vegetable" },
  { name: "habenero pepper", category: "vegetable" },
  { name: "hungarian pepper", category: "vegetable" },
  { name: "jalapeño pepper", category: "vegetable" },
  { name: "new mexico pepper", category: "vegetable" },
  { name: "poblano pepper", category: "vegetable" },
  { name: "serrano pepper", category: "vegetable" },
  { name: "sport pepper", category: "vegetable" },
  { name: "thai pepper", category: "vegetable" },
  { name: "cubanelle pepper", category: "vegetable" },
  { name: "pimento pepper", category: "vegetable" },
  { name: "sweet banana pepper", category: "vegetable" },
  { name: "plantain", category: "vegetable" },
  { name: "potato", category: "vegetable" },
  { name: "new potato", category: "vegetable" },
  { name: "pumpkin", category: "vegetable" },
  { name: "purslane", category: "vegetable" },
  { name: "radicchio", category: "vegetable" },
  { name: "radish", category: "vegetable" },
  { name: "rutabaga", category: "vegetable" },
  { name: "winged kelp", category: "vegetable" },
  { name: "aonori", category: "vegetable" },
  { name: "arame", category: "vegetable" },
  { name: "bladderwrack", category: "vegetable" },
  { name: "carageen moss", category: "vegetable" },
  { name: "chlorella", category: "vegetable" },
  { name: "digitata kelp", category: "vegetable" },
  { name: "dulse", category: "vegetable" },
  { name: "hijiki", category: "vegetable" },
  { name: "kelp", category: "vegetable" },
  { name: "kombu", category: "vegetable" },
  { name: "nori", category: "vegetable" },
  { name: "mozuku", category: "vegetable" },
  { name: "ogonori", category: "vegetable" },
  { name: "rockweed", category: "vegetable" },
  { name: "sea grape", category: "vegetable" },
  { name: "sea lettuce", category: "vegetable" },
  { name: "spirulina", category: "vegetable" },
  { name: "wakame", category: "vegetable" },
  { name: "shallots", category: "vegetable" },
  { name: "squash", category: "vegetable" },
  { name: "courgette", category: "vegetable" },
  { name: "sweet potato", category: "vegetable" },
  { name: "sweetcorn", category: "vegetable" },
  { name: "swiss chard", category: "vegetable" },
  { name: "taro", category: "vegetable" },
  { name: "tomatillo", category: "vegetable" },
  { name: "tomato", category: "vegetable" },
  { name: "turnip", category: "vegetable" },
  { name: "water chestnut", category: "vegetable" },
  { name: "water spinach", category: "vegetable" },
  { name: "watercress", category: "vegetable" },
  { name: "winter melon", category: "vegetable" },
  { name: "yams", category: "vegetable" },
];

const nuts = [
  { name: "acorn", category: "nut" },
  { name: "almond", category: "nut" },
  { name: "beech nut", category: "nut" },
  { name: "brazil nut", category: "nut" },
  { name: "candlenut", category: "nut" },
  { name: "cashew nut", category: "nut" },
  { name: "chestnut", category: "nut" },
  { name: "chilean hazel nut", category: "nut" },
  { name: "egusi", category: "nut" },
  { name: "fox nut", category: "nut" },
  { name: "guinea peanut", category: "nut" },
  { name: "hazelnut", category: "nut" },
  { name: "pecan", category: "nut" },
  { name: "kola nut", category: "nut" },
  { name: "macadamia nut", category: "nut" },
  { name: "malabar almond", category: "nut" },
  { name: "malabar chestnut", category: "nut" },
  { name: "mamoncillo", category: "nut" },
  { name: "mongongo", category: "nut" },
  { name: "ogbono", category: "nut" },
  { name: "peanut", category: "nut" },
  { name: "pine nut", category: "nut" },
  { name: "pistachio", category: "nut" },
  { name: "soy nuts", category: "nut" },
  { name: "trail mix", category: "nut" },
  { name: "paradise nut", category: "nut" },
  { name: "pili", category: "nut" },
  { name: "shea nut", category: "nut" },
  { name: "walnut", category: "nut" },
];
const seeds = [
  { name: "pumpkin seed", category: "seed" },
  { name: "poppy seed", category: "seed" },
  { name: "sesame seed", category: "seed" },
  { name: "sunflower seed", category: "seed" },
  { name: "pomegranete seed", category: "seed" },
  { name: "watermelon seed", category: "seed" },
  { name: "alfalfa seeds", category: "seed" },
  { name: "chia seeds", category: "seed" },
  { name: "flaxseed", category: "seed" },
  { name: "hemp seeds", category: "seed" },
  { name: "kalonji seeds", category: "seed" },
  { name: "milk thistle seeds", category: "seed" },
  { name: "mustard seeds", category: "seed" },
  { name: "mixed seeds", category: "seed" },
];

const fruits = [
  { name: "acai", category: "fruit" },
  { name: "red apple", category: "fruit" },
  { name: "green apple", category: "fruit" },
  { name: "akee", category: "fruit" },
  { name: "apricot", category: "fruit" },
  { name: "blueberry", category: "fruit" },
  { name: "blackberry", category: "fruit" },
  { name: "black cherry", category: "fruit" },
  { name: "barberry", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "breadfruit", category: "fruit" },
  { name: "bael fruit", category: "fruit" },
  { name: "boysenberry", category: "fruit" },
  { name: "blackcurrant", category: "fruit" },
  { name: "clementine", category: "fruit" },
  { name: "cherry", category: "fruit" },
  { name: "canary melon", category: "fruit" },
  { name: "cantaloupe melon", category: "fruit" },
  { name: "cranberry", category: "fruit" },
  { name: "currants", category: "fruit" },
  { name: "date", category: "fruit" },
  { name: "durian", category: "fruit" },
  { name: "fig", category: "fruit" },
  { name: "gooseberry", category: "fruit" },
  { name: "guava", category: "fruit" },
  { name: "grapefruit", category: "fruit" },
  { name: "grape", category: "fruit" },
  { name: "jackfruit", category: "fruit" },
  { name: "kiwi fruit", category: "fruit" },
  { name: "lemon", category: "fruit" },
  { name: "lime", category: "fruit" },
  { name: "mango", category: "fruit" },
  { name: "mandarin", category: "fruit" },
  { name: "melon", category: "fruit" },
  { name: "nectarine", category: "fruit" },
  { name: "orange", category: "fruit" },
  { name: "pineapple", category: "fruit" },
  { name: "passion fruit", category: "fruit" },
  { name: "papaya", category: "fruit" },
  { name: "pomegranate", category: "fruit" },
  { name: "pear", category: "fruit" },
  { name: "plum", category: "fruit" },
  { name: "peach", category: "fruit" },
  { name: "raspberry", category: "fruit" },
  { name: "star fruit", category: "fruit" },
  { name: "satsuma", category: "fruit" },
  { name: "strawberry", category: "fruit" },
  { name: "satsuma", category: "fruit" },
  { name: "tangerine", category: "fruit" },
  { name: "watermelon", category: "fruit" },
];

const herbs = [];
const spices = [];

module.exports = { grains, vegetables, seeds, nuts };
