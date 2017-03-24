# ManiaScript.tmLanguage
Native TextMate Language Grammar File

## Why?
This is the grammar resource for ManiaScript.  It's purpose is to be the single source of truth for 
the grammar files, so that text/code editors may use the same .tmLanguage files.

## How to use

The final .tmLanguage file is *not* in source control, instead it is built from the `src` path.

## Usage
```
git clone https://github.com/MattMcFarland/ManiaScript.tmLanguage
cd ManiaScript.tmLanguage
npm install
npm run build
```

Once you build the scripts, you can access it in the `build` path, then you may export that to your plugin.
I recommend using this as a dependency, instead of manually copying it over. However, it depends on the IDE you are supporting.

## Usage with a NodeJS editor
Editors like Atom and VS Code for example use the NodeJS runtime, so you can simply do this as part of your `publish` script

```javascript
const tmLanguage = require('maniascript-tmlanguage')

// write to xml
fs.writeFileSync('ManiaScript.tmLanguage', tmLanguage.plist);

// write to yaml
fs.writeFileSync('ManiaScript.YAML-tmLanguage', tmLanguage.yaml);

// write to json
fs.writeFileSync('ManiaScript.JSON-tmLanguage', tmLanguage.json);

```
