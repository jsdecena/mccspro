'use strict'
const Helpers = use('Helpers');
let fs = require('fs');

class StateController {
    
    async index({ params, response }) {
        const states = Helpers.resourcesPath('json/states.json')
        const parsed = JSON.parse(fs.readFileSync(states, 'utf8'))
        
        const collection = []
        parsed.forEach(state => {
            if(state.country_id === +params.id) {
                collection.push(state)
            }
        })

        return response.json(collection)
    }

    async show({ params, response }) {
        const states = Helpers.resourcesPath('json/states.json')
        const parsed = JSON.parse(fs.readFileSync(states, 'utf8'))
        
        parsed.forEach(state => {
            if(state.country_id === +params.id && state.state_code === params.code.toUpperCase()) {
                return response.json(state)
            }
        })
    }

    async cities({ params, response }) {
        const cities = Helpers.resourcesPath('json/cities.json')
        const parsed = JSON.parse(fs.readFileSync(cities, 'utf8'))
        
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
