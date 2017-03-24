## 2.0.0

### Breaking changes:
Updated outfacing API to support plist, yaml, and json importing.
this broke the previous API which only imported the plist

```javascript
const tmLanguage = require('maniascript-tmlanguage')

// write to xml
fs.writeFileSync('ManiaScript.tmLanguage', tmLanguage.plist);

// write to yaml
fs.writeFileSync('ManiaScript.YAML-tmLanguage', tmLanguage.yaml);

// write to json
fs.writeFileSync('ManiaScript.JSON-tmLanguage', tmLanguage.json);

```

### Build fixes
Build scripts were not escaping invalid characters, thus breaking the xml file.  This was fixed (see issue #1)

### language fixes
* Fixed string punctuation issue where strings werent being closed with new lines.
* Added keywords: *#Command*, *assert*, *persistent*, *netread*, *netwrite*
* Added the `---` markers for labels
* Removed keywords: *try*, *catch*, *throw*, *finally*
* Removed **bitwise** operators 
* Removed `--` and `++` arithmetic operators
* Fixed various typos `.sm` -> `.ms`

## 1.0.0

Initial release, decomposed from original library (vscode-maniascript)