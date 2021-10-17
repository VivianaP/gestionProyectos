/**
 * TicketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const createe = async (req, res) => {
    const params = req.allParams();
    console.log('Crear ticket', params);
    if(!params.nombre || !params.comentario || !params.estado || !params.historiaUsuario ) { res.json({code: 401 , data: {}, msg: 'Datos incompletos'});}

    const ticket = await Ticket.create({nombre: params.nombre, comentario: params.comentario, estado: params.estado, ticketHistoria: params.historiaUsuario}).fetch();
    if(!ticket) { res.json( { code: 500, data: {}, msg: 'No se pudo crear el ticket'} );}
    res.json( { code: 200, data: ticket, msg: 'Ticket creado'} );
};
const updatee = async (req, res) => {
    const params = req.allParams();
    if(!params.id || !params.nombre || !params.comentariovacion || !params.estado || !params.historiaUsuario  ) { res.json({code: 401 , data: {}, msg: 'Datos incompletos'});}
    const historiaUsuario = await HistoriaUsuario.findOne({id: params.historiaUsuario});
    if(!historiaUsuario) { res.json( { code: 404, data: {}, msg: 'La historia de usuario no existe'} );}

    const ticket = await Ticket.updateeOne(params.id).set({nombre: params.nombre, comentariovacion: params.comentariovacion, estado: params.estado, historiaUsuario: historiaUsuario.id});
    if(!ticket) { res.json( { code: 500, data: {}, msg: 'No se pudo actualizar el ticket'} );}
    res.json( { code: 200, data: ticket, msg: 'Ticket actualizado'} );
};
const remove = async (req, res) => {
    if(!params.id) {res.json( { code: 404, data: {}, msg: 'Datos incompletos'});}
    const ticket = await Ticket.findOne({id: params.id});
    if(!ticket) {res.json( { code: 404, data: {}, msg: 'El ticket no existe'});}
    const ticketDelete = await Ticket.destroyOne({id: ticket.id});
    if(!ticketDelete) { res.json( { code: 404, data: {}, msg: 'Elminación no existosa'});}
    res.json({code: 200, msg: 'Eliminación exitosa '})
};
const read = async (req, res) => {
    const tickets = await Ticket.find();
    if(!tickets) { res.json({code: 400, data: [], msg: 'No hay ticketes registrados'}); }
    res.json({code: 200, data: tickets , msg: 'Ticketes cargados'});
};

const query = async (req, res) => {
    const params = req.allParams();
    const tickets = await Ticket.find().where(params.where || {}).populate(params.populate || "").skip(params.skip || 1).limit(params.limit || 50).sort('ASC').sort(params.sort || 'ASC');
    if(!tickets) { res.json({code: 400, data: [], msg: 'No hay ticketes registrados'}); }
    res.json({code: 200, data: tickets , msg: 'Ticketes cargados'});
};


module.exports = {

    createe,
    updatee,
    remove,
    read

};

