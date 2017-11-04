
const ArrayUtils = require("./src/ArrayUtils").ArrayUtils;
const ObjectUtils = require("./src/ObjectUtils").ObjectUtils;
const Checkers = require("./src/Checkers");
const GElement = require("./src/GElement").GElement;
const MiscUtils = require("./src/MiscUtils");
const StringUtils = require("./src/StringUtils").StringUtils;
const Manipulation = require("./src/dom/Manipulation");
const Getters = require("./src/traversing/Getters");
const MatahUtils = require("./src/MathUtils");
const BrowserAnalyzer = require("./src/analitics/BrowserAnalyzer");

module.exports.array = ArrayUtils.applyTo();
module.exports.object = ObjectUtils.applyTo();
module.exports.checkers = Checkers;
module.exports.gelement = GElement();
module.exports.misc = MiscUtils;
module.exports.string = StringUtils.applyTo();
module.exports.manipulation = Manipulation;
module.exports.getters = Getters;
module.exports.math = MatahUtils;
module.exports.broseranalyzer = BrowserAnalyzer;

console.log("size: ", MiscUtils.roughSizeOfObject(module.exports));

console.log("exports: ", module.exports);