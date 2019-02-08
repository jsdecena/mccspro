'use strict'
const Helpers = use('Helpers');
let fs = require('fs');

class JsonHelper {
  static readFile(path) {
    const states = Helpers.resourcesPath(path)
    return JSON.parse(fs.readFileSync(states, 'utf8'))
  }
}

module.exports = JsonHelper
