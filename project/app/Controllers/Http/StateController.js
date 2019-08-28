'use strict'
const JsonHelper = use('App/Models/Traits/JsonHelper')

class StateController {
    
    async index({ params, response }) {
        const parsed = JsonHelper.readFile('json/states.json')

        const collection = []
        parsed.forEach(state => {
            if(state.country_id === +params.id || state.country_iso3 === params.id.toUpperCase()) {
                collection.push(state)
            }
        })

        return response.json(collection)
    }

    async show({ params, response }) {
        const parsed = JsonHelper.readFile('json/states.json')
        
        parsed.forEach(state => {
            if(state.country_id === +params.id && state.state_code === params.code.toUpperCase()) {
                return response.json(state)
            }
        })
    }

    async cities({ params, response }) {
        const parsed = JsonHelper.readFile('json/states.json')
        
        const collection = []
        parsed.forEach(city => {
            if(city.state_code === params.code.toUpperCase()) {
                collection.push(city)
            }
        })

        return response.json(collection)
    }    
}

module.exports = StateController
