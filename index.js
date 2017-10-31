
const ArrayUtils = require("./src/ArrayUtils")
const ObjectUtils = require("./src/ObjectUtils")
const Checkers = require("./src/Checkers");
const GElement = require("./src/GElement");
const MiscUtils = require("./src/MiscUtils");
const StringUtils = require("./src/StringUtils");
const Manipulation = require("./src/dom/Manipulation");
const Getters = require("./src/traversing/Getters");
const MatahUtils = require("./src/MathUtils");
const BrowserAnalyzer = require("./src/analitics/BrowserAnalyzer");

module.exports.array = ArrayUtils;
module.exports.object = ObjectUtils;
module.exports.checkers = Checkers;
module.exports.gelement = GElement;
module.exports.misc = MiscUtils;
module.exports.string = StringUtils;
module.exports.manipulation = Manipulation;
module.exports.getters = Getters;
module.exports.math = MatahUtils;
module.exports.broseranalyzer = BrowserAnalyzer;

console.log("exports: ", module.exports);