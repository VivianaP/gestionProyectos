/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcrypt = require("bcrypt");

const registrar = async (req, res) => {
    const params = req.allParams();
    console.log('Registro de usuario', params);
    if (!params.password) {
        res.badRequest({ status: 404, msg: 'el usuario no trae contaseña' });
    }
    const hash = await bcrypt.hash(params.password, 10);

    if (!hash) return res.json({ code: 404, msg: 'La contraseña no es valida' });

    const newUser = await usuario.create({
        nombre: params.nombre,
        cedula: params.cedula,
        telefono: params.telefono,
        email: params.email,
        password: hash,
        direccion: params.direccion,
        compania: params.compania
    }).fetch();

    if (!newUser) res.badRequest({ status: 500, data: err, msg: 'El usuario o correo ya existen' });

    return res.ok({ status: 200, data: newUser, msg: 'Usuario creado' });
};

const login = async (req, res) => {
    const params = req.allParams();
    console.log('Login', params);

    if (!params.password) {
        res.badRequest({ status: 404, msg: 'el usuario no trae contaseña' });
    }

    const user = await usuario.findOne({ email: params.email });

    if (!user) return res.json({ code: 400, msg: 'Usuario o Contraseña invalid user' });

    const hash = await bcrypt.compare(params.password, user.password);
    if (!hash) return res.json({ code: 400, msg: 'Usuario o Contraseña invalidd' });

    if (hash) {return res.ok({ status: 200, data: user, msg: 'ok' });}

    return res.json({ code: 401, msg: 'Error al cargar la informacion del usuario' });
};


module.exports = {
    login, registrar

};

