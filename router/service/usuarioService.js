const { where } = require("sequelize");
const { Usuario } = require("../models");

class UsuarioService {
    static async listarUsuarios() {
        try {
            return await Usuario.findAll();
        } catch (e) {
            console.log(e);
        }
    }

    static async crearUsuario(nombre, correo, contrasena) {
        try {
            return await Usuario.create({ nombre, correo, contrasena });
        } catch (e) {
            console.log("Error en el servicio al guardar:");
        }
    }

    static async eliminarUsuario(id) {
        try {
            let usuario = await Usuario.findByPk(id);
            if (usuario) {
                await usuario.destroy();
                return "usuario elimnado"
            }
        } catch (e) {
            console.log("Error en el servicio al eliminar:");
        }
    }

    static async actualizarUsuario(id, datos) {
        try {
            let usuario = await Usuario.findByPk(id);
            if (usuario) {
                await usuario.update(datos);
            }
        } catch (e) {
            console.log("Error en el servicio al actualizar:");
        }
    }

    static async buscarUsuario(correo) {
        try {
            return await Usuario.findOne({ where: correo });
        } catch (e) {
            console.log("Error en el servicio al buscar:");
        }
    }
}

module.exports = UsuarioService;
    

