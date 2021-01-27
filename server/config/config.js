

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
    urlDB = 'mongodb+srv://Strider:MmTPf63enpv8AJyB@cluster0.p384v.mongodb.net/cafe' //Url de coneccion remota
}

process.env.URLDB = urlDB;

 