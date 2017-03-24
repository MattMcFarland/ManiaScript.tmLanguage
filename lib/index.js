const { readFileSync } = require('fs')
const resolveLangFile = (filepath) => require('path').resolve(__dirname, '../', filepath)

const paths = {
  json: resolveLangFile('build/syntaxes/ManiaScript.JSON-tmLanguage'),
  plist: resolveLangFile('build/syntaxes/ManiaScript.tmLanguage'),
  yaml: resolveLangFile('build/syntaxes/ManiaScript.YAML-tmLanguage')
}

module.exports = Object.keys(paths).reduce((acc, key) => { 
  acc[key] = readFileSync(paths[key], 'utf8')
  return acc
}, {})

