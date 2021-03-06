

//===========================================
// Puerto
//===========================================

process.env.PORT = process.env.PORT || 3000;

//===========================================
// Entorno
//===========================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===========================================
// Vencimiento del token
//===========================================
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//===========================================
// SEED de autenticacion
//===========================================

process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';


//===========================================
// Base de datos
//===========================================

let urlDB;

if ( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe'  //Url de coneccion local
}else{
    urlDB = process.env.MONGO_URI //Url de coneccion remota
}

process.env.URLDB = urlDB;

 
//===========================================
// Google client Id
//===========================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '35834505651-5rt5rakdtgbl8jhrtlvbouo2knrhpq77.apps.googleusercontent.com';