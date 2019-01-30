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

- Crear una función en el prototipo de Disco que nos informe de la existencia o no de la propiedad label sin recorrer la cadena de prototipos.

# Patrones

# Prototype

- Crea un prototipo Vivienda que tenga un prototipo con una propiedad 'habitaciones' y otra propiedad 'plantas'.

- Crea una instancia 'duplex' a partir de la clase Vivienda con el número de habitaciones y plantas (ambas propiedades tienen que tener como valor un entero) cuyo constructor apunte al prototipo de Vivienda.

- Haz lo mismo que en el ejercicio anterior, pero esta vez el constructor de la instancia Duples no debe apuntar al prototipo Vivienda.

- Cambiar la propiedad habitaciones del duplex a otro número a través del prototipo.

- Utilizar un patrón híbrido entre patrón constructor y prototipo para crear otra vez la Vivienda con las mismas propiedades y además un método "construir" que saque por consola el número habitaciones y plantas que se están construyendo. Crear una instancia de esta Vivienda y comprobar su correcto funcionamiento.

# Module

En los siguientes ejercicios hay que utilizar el patrón modulo.

- Crear un módulo con un método privado y uno público y comprobar su correcto funcionamiento.

- Crear en el módulo anterior una variable privada y crear un método público que la pinte en la consola.

- Crear una variable global 'number' y asignarle un entero como valor. Dentro del módulo, crear otra variable con el nombre 'number' y asignarle otro entero con valor diferente. Crear un método público que devuelva su suma utilizando uno privado.

- Crear una variable global 'number' y asignarle un entero como valor. Dentro del módulo, crear una variable privada 'number' con diferente valor y una variable 'publicNumber' con diferente valor a los dos anteriores. Crear un método público que utilice a su vez un método privado para devolver la suma de la variable global 'number' y la variable pública del módulo 'publicNumber';

- Con el módulo creado en el ejercicio anterior, crear un método público que llame a uno privado que sume el number privado y el number público del módulo.

- Crear una variable global 'number' con un valor y otra privada 'number' con diferente valor. Crear una función pública que devuelva la suma de ambos sin utilizar una función privada entre medias.

# Reveal module

En los siguientes ejercicios hay que utilizar el patrón reveal module.

- Crear un módulo con un método privado y uno público y comprobar su correcto funcionamiento.

- Crear en el módulo anterior una variable privada y crear un método público que la pinte en la consola.

- Crear una variable global 'number' y asignarle un entero como valor. Dentro del módulo, crear otra variable con el nombre 'number' y asignarle otro entero con valor diferente. Crear un método público que devuelva su suma utilizando uno privado.

- Crear una variable global 'number' y asignarle un entero como valor. Dentro del módulo, crear una variable privada 'number' con diferente valor y una variable 'publicNumber' con diferente valor a los dos anteriores. Crear un método público que utilice a su vez un método privado para devolver la suma de la variable global 'number' y la variable pública del módulo 'publicNumber';

- Con el módulo creado en el ejercicio anterior, crear un método público que llame a uno privado que sume el number privado y el number público del módulo.

- Crear una variable global 'number' con un valor y otra privada 'number' con diferente valor. Crear una función pública que devuelva la suma de ambos sin utilizar una función privada entre medias.