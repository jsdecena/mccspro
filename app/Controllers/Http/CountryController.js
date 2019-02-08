'use strict'
const JsonHelper = use('App/Models/Traits/JsonHelper')

class CountryController {

    async index() {
        return JsonHelper.readFile('json/countries.json')
    }

    async show({ params, response }) {
        const parsed = JsonHelper.readFile('json/countries.json')

        parsed.forEach(country => {
            if(country.id === +params.id || country.iso3 === params.id.toUpperCase()) {
                return response.json(country)
            }
        });
    }
}

module.exports = CountryController
