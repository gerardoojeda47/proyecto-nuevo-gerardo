const express = require("express");
const router = express.Router();
const UsuarioController = require("../controller/usuarioController");

router.get("/usuario", UsuarioController.listarUsuarios);
router.post("/usuario", UsuarioController.crearUsuario);
router.delete("/usuario/:id", UsuarioController.eliminarUsuario);
router.put("/usuario/:id", UsuarioController.actualizarUsuario);
router.get("/usuario/buscar", UsuarioController.buscarUsuario);

module.exports = router;
