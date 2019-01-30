# Clases
Aunque javascript no es lenguaje de clases, sí que existe una manera de trabajar con algo parecido a las clases de otros lenguajes. Os proponemos estos ejercicios para comprender las diferentes maneras de crear clases en javascript y su utilidad.

# Clases mediante objeto

- Crear mediante objeto una clase vehículo que contenga una propiedad 'nombre', a la que se le debe asignar un valor de tipo string, una propiedad 'modelo', a la que le deberá asignar un string y otra propiedad 'ruedas' a la que se le debe asignar un valor de tipo entero.

- Añadir a la clase del ejercicio anterior una función que devuelva por consola la información del vehículo en un solo string. Por ejemplo: "El Piaggio MP3 LT tiene 3 ruedas". Estaría bien utilizar otro modelo diferente al del ejemplo.

- Añadir a la clase vehículo una función que cambie las propiedades de nombre, modelo y ruedas y saque la información por consola igual que en el ejercicio anterior. La función debe admitir argumentos.

# Clases mediante funciones y new

- Crea una clase Album mediante la palabra clave new que tenga una propiedad 'Título' y una propiedad 'minutos'.

- Añadir a la clase Album una propiedad 'tracklist' que sea un array de 4 canciones. Cada canción debe ser un objeto con su propio nombre y sus propios minutos.

- Añadir al prototipo de la clase Album una función "generateInfo" que saque por consola la información del album en el siguiente formato:
```
    Título: titulo del album
    Duración: minutos de duración del album,
    Tracklist:
        Título: título del track; Duración: minutos del track
```

  El apartado tracklist deberá contener la información de todas las canciones del tracklist.

- Crear una clase Disco que herede de la clase Album sus propiedades y su prototipo, pero que añada la propiedad 'Label', que contendrá la información de la discográfica, y crear en su prototipo una función "labelInfo" que saque esa información por consola.

- Generar el disco escogido (el que queráis) con su título, minutos, discográfica y tracklist de 6 canciones. Comprobar con la función generateInfo pinta la información en consola correctamente. Comprobar que la función 'labelInfo' saca la información de la discográfica por consola correctamente.
