let mermeladas = '{ "mermeladas" : [' +
'{ "nombre":"Quinotos" , "precio":"$550" },' +
'{ "nombre":"Frutilla" , "precio":"$680" },' +
'{ "nombre":"Durazno" , "precio":"$480" },' +
'{ "nombre":"Frambuesa" , "precio":"$480" },' +
'{ "nombre":"Higos" , "precio":"$700" } ]}';

const obj = JSON.parse(mermeladas);

document.getElementById("mermelada1").innerHTML = obj.mermeladas[0].nombre;
document.getElementById("precio1").innerHTML = obj.mermeladas[0].precio;
document.getElementById("mermelada2").innerHTML = obj.mermeladas[1].nombre;
document.getElementById("precio2").innerHTML = obj.mermeladas[1].precio;
document.getElementById("mermelada3").innerHTML = obj.mermeladas[2].nombre;
document.getElementById("precio3").innerHTML = obj.mermeladas[2].precio;
document.getElementById("mermelada4").innerHTML = obj.mermeladas[3].nombre;
document.getElementById("precio4").innerHTML = obj.mermeladas[3].precio;
document.getElementById("mermelada5").innerHTML = obj.mermeladas[4].nombre;
document.getElementById("precio5").innerHTML = obj.mermeladas[4].precio;