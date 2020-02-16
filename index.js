/*# Clases mediante objeto

- Crear mediante objeto una clase vehículo que contenga una propiedad 'nombre', 
a la que se le debe asignar un valor de tipo string, una propiedad 'modelo', 
a la que le deberá asignar un string y otra propiedad 'ruedas' 
a la que se le debe asignar un valor de tipo entero.*/


var vehiculo = {
  nombre: 'coche',
  modelo: 'golf',
  ruedas: 4
}
console.log(vehiculo);

/*- Añadir a la clase del ejercicio anterior 
una función que devuelva por consola la información
del vehículo en un solo string. Por ejemplo: 
"El Piaggio MP3 LT tiene 3 ruedas". 
Estaría bien utilizar otro modelo diferente al del
ejemplo.*/

var vehiculo = {
  nombre: 'moto',
  modelo: 'Piaggio MP3 LT',
  ruedas: 3,
  obtenerInfo: function() {
    console.log(['nombre: ' + this.nombre, 
    'modelo: ' + this.modelo, 'ruedas: ' + this.ruedas]);
  }
}
vehiculo.obtenerInfo();



/*- Añadir a la clase vehículo una función que cambie 
las propiedades de nombre, modelo y ruedas y 
saque la información por consola igual que en el 
ejercicio anterior. La función debe admitir 
argumentos.*/

var vehiculo = {
  nombre: 'moto',
  modelo: 'Piaggio MP3 LT',
  ruedas: 3,
  changeProperties: function() {
    console.log([vehiculo.nombre = 'moto',
    vehiculo.modelo = 'Yamaha aerox',
    vehiculo.ruedas = 2]);
  }
}
vehiculo.changeProperties();


/*# Clases mediante funciones y new

- Crea una clase Album mediante la palabra clave new
que tenga una propiedad 'Título' y una propiedad
'minutos'.*/

const songs = [
{
  name: 'Delilah',
  minutes: 4.10
}, 
{
  name: 'There it is',
  minutes: 3.50
},
{
  name: 'Haunted',
  minutes: 3.30
},
{
  name: 'Hellhound',
  minutes: 4.25
}];

function Album2(trackList, title, minutes) {
  this.generateInfo = function() {
    console.log(this.title, this.minutes, this.trackList);
  }
  this.getSongs = function() {
    this.trackList.forEach(element => {
      console.log(element.name);
    });
    console.log(this.title, this.minutes, this.trackList);
  }
  this.getTotalMinutes = function(minutes) {
    console.log(this.minutes + minutes);
  }
  this.title = title;
  this.minutes = minutes;
  this.trackList = trackList;
}



const newAlbum = new Album2(songs, title = 'On the Manjon of Giants', minutes = 14);
newAlbum.generateInfo();
newAlbum.getSongs();
newAlbum.getTotalMinutes(10);

class Album {
  constructor(trackList, title = '', minutes = 0) {
    this.a = 2;
    this.title = title;
    this.minutes = minutes;
    this.trackList = trackList;
  }
  ganerateInfo() {
    console.log(this.title, this.minutes, this.trackList, this.a);
  }
}

const album1 = new Album(); // ReferenceError
const album2 = new Album(title = 'Show me love', minutes = 4.35 );


console.log(album1, album2);


/*- Añadir a la clase Album una propiedad 'tracklist' 
que sea un array de 4 canciones.Cada canción debe 
ser un objeto con su propio nombr1e y sus propios 
minutos.*/

const album3 = new Album(songs, title = 'On the Shoulders of Giants', minutes = 14);
console.log(album3);


/*- Añadir al prototipo de la clase Album una 
función "generateInfo" que saque por consola 
la información del album en el siguiente 
formato:

```
    Título: titulo del album
    Duración: minutos de duración del album,
    Tracklist:
        Título: título del track; Duración: minutos del track
```

El apartado tracklist deberá contener la 
información de todas las canciones del 
tracklist.*/

const album4 = new Album(songs, title = 'On the Shoulders of Giants', minutes = 14);
album4.ganerateInfo();



/*- Crear una clase Disco que herede de la 
clase Album sus propiedades y su prototipo,
pero que añada la propiedad 'Label',
que contendrá la información de la discográfica,
y crear en su prototipo una función "labelInfo"
que saque esa información por consola.*/

function Disco(title, minutes, trackList, label) {
  Album2.call(this, title, minutes, trackList);
  this.label = label;
}
var disco1 = new Disco(songs, title ='', minutes = 50, label = 'Manjon');

Disco.prototype.labelInfo = function() {
  console.log(this.label);
}
disco1.labelInfo();
disco1.getSongs();
console.log(disco1);



/*- Generar el disco escogido (el que queráis) 
con su título, minutos, discográfica y tracklist
de 6 canciones. Comprobar con la función generateInfo
pinta la información en consola correctamente. 
Comprobar que la función 'labelInfo' saca la 
información de la discográfica por consola 
correctamente.*/





/*- Crear una función en el prototipo de Disco 
que nos informe de la existencia o no de la
propiedad label sin recorrer la cadena de
prototipos.*/

/*- Hacer todo lo anterior, pero esta vez 
utilizando las clases de es6.*/