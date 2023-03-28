import en from "./file_translate/en";
import ja from "./file_translate/ja";

let resultEn = Object.assign({}, en);
let resultJa = Object.assign({}, ja);

const fs = require("fs").promises;

var dictstringEn = JSON.stringify(resultEn);
fs.writeFile("en.json", dictstringEn);

var dictstringJa = JSON.stringify(resultJa);
fs.writeFile("ja.json", dictstringJa);
