const tmLanguagePath = 'build/syntaxes/ManiaScript.tmLanguage'
const langFile = require('path').resolve(__dirname, '../', tmLanguagePath)
const tmLanguage = require('fs').readFileSync(langFile, 'utf8');

module.exports = tmLanguage

