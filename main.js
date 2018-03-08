// let correos = [
//     {usuario: 'JoseElMaquina', email: 'jose.el.maquina@gmail.com'},
//     {usuario: 'PepeElCorrecto', email: 'pepe@corecto.com'},
//     {usuario: 'JoseLuisDaBest', email: 'joseluis@dabest.com.eu'},
//     {usuario: 'EsteEstaBien', email: 'este@bien.com'},
//     {usuario: 'Elcarterista', email: 'elcarterista20@gmail.com'}
// ];
// console.log(correos);
// var emails=correos.filter(correo => correo.email.endsWith("gmail.com") != true);
// console.log(emails);

// let procesadores = [
//     {modelo: 'pentiumII', operacionesPorSegundo: 10500, tasaDeFallos: 15},
//     {modelo: 'i7', operacionesPorSegundo: 20000, tasaDeFallos: 60},
//     {modelo: '8086', operacionesPorSegundo: 30, tasaDeFallos: 26.3},
//     {modelo: 'i3', operacionesPorSegundo: 11389, tasaDeFallos: 58.4},
//     {modelo: 'i5', operacionesPorSegundo: 15000, tasaDeFallos: 10},
//     {modelo: 'celeron', operacionesPorSegundo: 200, tasaDeFallos: 80}
// ];
// console.log(procesadores); 
//     var cpus=procesadores.filter(procesador => procesador.tasaDeFallos<50);
// console.log(cpus);

// let alojamientos = [
//     {
//         nombre: 'Bahía Feliz',
//         comentarios: [
//             {
//                 usuario: 'Franz Kartofen',
//                 comentario: 'Gut',
//                 valoracion: 6
//             },
//             {
//                 usuario: 'Ferdinando',
//                 comentario: 'Muy bueno',
//                 valoracion: 9
//             },
//             {
//                 usuario: 'Roberthino',
//                 comentario: 'Molto malo',
//                 valoracion: 3
//             },    
//         ],
//         media:0
//     },
//     {
//         nombre: 'Nacho Sol',
//         comentarios: [
//             {
//                 usuario: 'Manolín',
//                 comentario: 'Estuvo chido',
//                 valoracion: 10
//             },
//             {
//                 usuario: 'Solete',
//                 comentario: 'Muy sucio',
//                 valoracion: 2
//             }    
//         ],
//         media:0
//     }
    
// ];
// console.log(alojamientos);
// function calcularMedia(numeros){
//     var media=0;
//     for(var i=0;i<numeros.length;i++){
//         media=media+numeros[i];
//     }
//     return media/numeros.length;
// } 
// function conseguirValoraciones(hotel){
//     return hotel.comentarios.map(comentario=>comentario.valoracion);
// }
// alojamientos.forEach(
// alojamiento => alojamiento.media=calcularMedia(conseguirValoraciones(alojamiento))
// );
// console.log(alojamientos);

// var alojamientos=[
//     {
//      "nombre": "RIU",
//      "comentarios": [{
//        "usuario": "Manolín Vega",
//        "comentario": "Estancia agradable",
//        "valoracion": 8.5
//      }, {
//        "usuario": "Orlando Florencio",
//        "comentario": "Bonito el sitio",
//        "valoracion": 7
//      }, {
//        "usuario": "Andrea Pérez",
//        "comentario": "Estancia inolvidable",
//        "valoracion": 10
//      }]
//    },
//    {
//      "nombre": "Nacho Sol",
//      "comentarios": [{
//        "usuario": "Floren Hi",
//        "comentario": "Un lugar para pensar en cryptos y mucho sol",
//        "valoracion": 10
//      }, {
//        "usuario": "Pedro García",
//        "comentario": "Decente tirando a bajo",
//        "valoracion": 4
//      }]
//    },
//    {
//      "nombre": "Hilton",
//      "comentarios": [{
//        "usuario": "Elena Ramírez",
//        "comentario": "Todo fantástico, acorde con el precio",
//        "valoracion": 10
//      }, {
//        "usuario": "Gustav Fransua",
//        "comentario": "Best sitio in the world",
//        "valoracion": 10
//      }, {
//        "usuario": "Francisco Paco",
//        "comentario": "Lo mejor la comida",
//        "valoracion": 9.5
//      }]
//    },
//    {
//      "nombre": "El desastrillo",
//      "comentarios": [{
//        "usuario": "Manolín Vega",
//        "comentario": "Chiquita porquería",
//        "valoracion": 3
//      }]
//    }
//  ];
//   var usuarios=[
//     {
//         "nombre": "Gustav Fransua",
//         "email": "gustav@gmail.com" 
//     },
//     {
//         "nombre": "Francisco Paco",
//         "email": "fran@gmail.com"
//     },
//     {
//         "nombre": "Manolín Vega",
//         "email": "vega.manolin@gmail.com"
//     },
//     {
//         "nombre": "Orlando Florencio",
//         "email": "orlan@gmail.com"
//     },
//     {
//         "nombre": "Andrea Pérez",
//         "email": "andre.perez@gmail.com"
//     },
//     {
//         "nombre": "Floren Hi",
//         "email": "crypto@gmail.com"
//     },
//     {
//         "nombre": "Pedro García",
//         "email": "pedrogar@gmail.com"
//     },
//     {
//         "nombre": "Elena Ramírez",
//         "email": "elenra@gmail.com"
//     }
// ];




// alojamientos.forEach(alojamiento=>{
//     alojamiento.comentarios.forEach(comentario=>{
//         var nombredeHotel=alojamiento.nombre;
//         var puntuacion=comentario.valoracion;
//         var nombreDelUsuario=comentario.usuario;

//         var usuario=usuarios.find(user=>user.nombre===nombreDelUsuario);

//         if (!usuario.valoraciones){
//             usuario.valoraciones=[];
//         }
//         usuario.valoraciones.push({hotel:nombredeHotel,nota:puntuacion});
        
//     })
// });
// console.log(usuarios);
// console.log(alojamientos);

let provincias = [
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Albacete', codigoPostal: '02653'},
    {nombre: 'Madrid', codigoPostal: '28223'},
    {nombre: 'Las Palmas', codigoPostal: '35118'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
    {nombre: 'Madrid', codigoPostal: '28001'},
    {nombre: 'Barcelona', codigoPostal: '08480'},
];
var cp=provincias.map(provincia=>provincia.codigoPostal);
var cpNoRepeat=_.uniq(cp);
console.log(cpNoRepeat);

let servidores = [
    {
        almacenan: '.mp4',
        nodos: ['ordenador1','ordenador2','ordenador3']
    },{
        almacenan: '.mp3',
        nodos: ['ordenador2','ordenador5']
    },{
        almacenan: '.json',
        nodos: ['ordenador1','ordenador4','ordenador6']
    },{
        almacenan: '.png',
        nodos: ['ordenador1', 'ordenador4']
    },{
        almacenan: '.avi',
        nodos: ['ordenador1','ordenador7']
    },
];


var myservers= servidores.filter(servidor=> (servidor.almacenan===".mp4")||(servidor.almacenan===".png"));
var myserversNoRepeat=myservers.map(myserver=>myserver.nodos);
console.log(myservers);
console.log(myserversNoRepeat);
myserversNoRepeat=_.flatten(myserversNoRepeat);
console.log(_.uniq(myserversNoRepeat));