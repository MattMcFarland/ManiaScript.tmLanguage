#!/usr/bin/env node

require('events').EventEmitter.prototype._maxListeners = 100;

const fs = require('fs')
const YAML = require('yamljs')
const chalk = require('chalk')
const plist = require('plist')
const yamlLoader = require('./yaml-import-loader')

yamlLoader('src/syntaxes/_index.yaml', (err, res) => {
  if (err) throw new Error(err)

  const encodeObject = (obj) => {
    const str = JSON.stringify(obj)
    const esc = str
      .replace(/&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/'/g, '&apos;')    

    return JSON.parse(esc)
  }

  const yamlString = res.buffer
  const pojo = encodeObject(YAML.parse(yamlString))
  const jsonString = JSON.stringify(YAML.parse(yamlString), null, 4)
  const plistString = plist.build(pojo)
  const builds = [
    ['build/syntaxes/ManiaScript.YAML-tmLanguage', yamlString],
    ['build/syntaxes/ManiaScript.json', jsonString],
    ['build/syntaxes/ManiaScript.tmLanguage', plistString]
  ]

  builds.forEach(([path, buffer]) => 
    fs.writeFileSync(path, buffer, 'utf8', 
      console.log(chalk.yellow('write'), chalk.green(`${path}... done!`))))
})
