

//===========================================
// Puerto
//===========================================

process.env.PORT = process.env.PORT || 3000;

//===========================================
// Entorno
//===========================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

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

 