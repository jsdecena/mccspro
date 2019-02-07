'use strict'
const Env = use('Env');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => { return Env.get('APP_VERSION', 'v0.0.1'); });

Route.get('countries', 'CountryController.index').as('countries.index');
Route.get('countries/:id', 'CountryController.show').as('countries.show');

Route.get('countries/:id/states', 'StateController.index').as('countries.states.index');
Route.get('countries/:id/states/:code', 'StateController.show').as('countries.states.show');

Route.get('countries/:id/provinces', 'ProvinceController.index').as('countries.provinces.index');
Route.get('countries/:id/provinces/:provId', 'ProvinceController.show').as('countries.provinces.show');