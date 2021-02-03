const express = require('express');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario');

const app = express();


app.post('/login', (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email}, (err, usuarioDB)=> {

        if(err){
            return res.status(500).json({ //Es 500 porque seria un error del servidor
                ok: false,
                err  

            }); //La palabra return se usa para terminar el programa
        }

        if(!usuarioDB){
            return res.status(400).json({
                ok: false,
                err: {
                    message:'El (usuario) o la contraseña son incorrectos'
                }
            });
        };

        if( !bcrypt.compareSync(body.password, usuarioDB.password)){

            return res.status(400).json({
                ok: false,
                err: {
                    message:'El usuario o la (contraseña) son incorrectos'
                }
            });

        };

        let token = jwt.sign({
            usuario: usuarioDB
        },process.env.SEED, {expiresIn: process.env.CADUCIDAD_TOKEN })

        res.json({
            ok:true,
            usuario: usuarioDB,
            token
        })



    })

})




module.exports = app;