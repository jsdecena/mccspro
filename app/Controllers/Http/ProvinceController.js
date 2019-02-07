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

    async list({ params, response }) {

        const provinces = Helpers.resourcesPath('json/provinces.json')
        const parsed = JSON.parse(fs.readFileSync(provinces, 'utf8'))

        return response.json(parsed)
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

    async province({ params, response }) {

        const provinces = Helpers.resourcesPath('json/provinces.json')
        const parsed = JSON.parse(fs.readFileSync(provinces, 'utf8'))
        
        parsed.forEach(province => {
            if(province.id === +params.provId) {
                return response.json(province)
            }
        })
    }    

    async cities({ params, response }) {

        const cities = Helpers.resourcesPath('json/cities.json')
        const parsed = JSON.parse(fs.readFileSync(cities, 'utf8'))
        
        const collection = []
        parsed.forEach(city => {
            if(city.province_id === +params.provId) {
                collection.push(city)
            }
        })

        return response.json(collection)
    }
}

module.exports = ProvinceController
