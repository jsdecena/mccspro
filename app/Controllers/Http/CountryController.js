'use strict'
const Helpers = use('Helpers');
let fs = require('fs');

class CountryController {

    async index() {
        const countries = Helpers.resourcesPath('json/countries.json')
        return JSON.parse(fs.readFileSync(countries, 'utf8'))
    }

    async show({ params, response }) {
        const countries = Helpers.resourcesPath('json/countries.json')
        const parsed = JSON.parse(fs.readFileSync(countries, 'utf8'))

        parsed.forEach(country => {
            if(country.id === +params.id || country.iso3 === params.id.toUpperCase()) {
                return response.json(country)
            }
        });
    }
}

module.exports = CountryController
