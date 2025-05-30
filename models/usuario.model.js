const db = require('../config/database');

const Usuario = {
    crear: (usuario, callback) => {
        const query = `
        INSERT INTO usuario (Nombre, Apellido, Correo, Contraseña, Id_Rol)
        VALUES (?, ?, ?, ?, ?)
        `;
        db.query(query, [
            usuario.Nombre,
            usuario.Apellido,
            usuario.Correo,
            usuario.Contraseña,
            usuario.Id_Rol
           ], callback); 
    },

    buscarPorCorreo: (correo, callback) => {
        db.query('SELECT * FROM usuario WHERE Correo = ?', [correo], callback);
    }
};

module.exports= Usuario;