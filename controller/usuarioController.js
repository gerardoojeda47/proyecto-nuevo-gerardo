const UsuarioService = require("../service/usuarioService");

class UsuarioController {
    static async listarUsuarios(req, res) {
        try {
            let lista = await UsuarioService.listarUsuarios();
            res.json(lista);
        } catch (e) {
            res.json({ error: "error en el servicio" });
        }
    }

    static async crearUsuario(req, res) {
        try {
            let { nombre, correo, contrasena } = req.body;
            let usuario = await UsuarioService.crearUsuario(nombre, correo, contrasena);
            res.json(usuario);
        } catch (e) {
            res.json({ error: "error en el servicio" });
        }
    }

    static async eliminarUsuario(req, res) {
        try {
            let { id } = req.params;
            await UsuarioService.eliminarUsuario(id);
            res.json({ message: "Usuario eliminado correctamente" });
        } catch (e) {
            res.json({ error: "error en el servicio" });
        }
    }

    static async actualizarUsuario(req, res) {
        try {
            let { id } = req.params;
            let nuevosDatos = req.body;
            await UsuarioService.actualizarUsuario(id, nuevosDatos);
            res.json({ message: "Usuario actualizado correctamente" });
        } catch (e) {
            res.json({ error: "error en el servicio" });
        }
    }

    static async buscarUsuario(req, res) {
        try {
            let { correo } = req.query;
            let usuario = await UsuarioService.buscarUsuario(correo);
            res.json(usuario);
        } catch (e) {
            res.json({ error: "error en el servicio" });
        }
    }
}

module.exports = UsuarioController;