'use strict'
const Helpers = use('Helpers');
let fs = require('fs');

class CountryStateController {
    
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
            } else {
                return response.status(404).json({
                    message: 'State not found',
                    status_code: 404
                })
            }
        })
    }    
}

module.exports = CountryStateController
