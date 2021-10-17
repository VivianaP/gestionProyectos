/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'POST /ticket/createe': { action: 'ticket/createe' },
    'POST /usuario/login': { action: 'usuario/login' },
    'POST /usuario/registrar': { action: 'usuario/registrar' },

};
