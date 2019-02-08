'use strict'
const JsonHelper = use('App/Models/Traits/JsonHelper')

class ProvinceController {
    
    async index({ params, response }) {

        const parsed = JsonHelper.readFile('json/provinces.json')
        
        const collection = []
        parsed.forEach(province => {
            if(province.country_id === +params.id) {
                collection.push(province)
            }
        })

        return response.json(collection)
    }

    async list({ response }) {

        const parsed = JsonHelper.readFile('json/provinces.json')

        return response.json(parsed)
    }

    async show({ params, response }) {

        const parsed = JsonHelper.readFile('json/provinces.json')
        
        parsed.forEach(province => {
            if(province.country_id === +params.id && province.id === +params.provId) {
                return response.json(province)
            }
        })
    }

    async province({ params, response }) {

        const parsed = JsonHelper.readFile('json/provinces.json')
        
        parsed.forEach(province => {
            if(province.id === +params.provId) {
                return response.json(province)
            }
        })
    }    

    async cities({ params, response }) {

        const parsed = JsonHelper.readFile('json/cities.json')
        
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
