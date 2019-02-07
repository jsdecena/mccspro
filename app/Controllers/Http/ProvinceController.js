'use strict'
const Helpers = use('Helpers');
let fs = require('fs');

class ProvinceController {
    
    async index({ params, response }) {

        const provinces = Helpers.resourcesPath('json/provinces.json')
        const parsed = JSON.parse(fs.readFileSync(provinces, 'utf8'))
        
        const collection = []
        parsed.forEach(province => {
            if(province.country_id === +params.id) {
                collection.push(province)
            }
        })

        return response.json(collection)
    }

    async show({ params, response }) {

        const provinces = Helpers.resourcesPath('json/provinces.json')
        const parsed = JSON.parse(fs.readFileSync(provinces, 'utf8'))
        
        parsed.forEach(province => {
            if(province.country_id === +params.id && province.id === +params.provId) {
                return response.json(province)
            }
        })
    }
}

module.exports = ProvinceController
