# orderIceCreamApp
NodeJs Application

OrderIceCreamApp es un node.js web application que busca solucionar la problemática de ordenar helados para los empleados de la empresa Rantic. La problemática, en detalle, es que un usuario (user) pueda crear una lista (OrdersPack), la cual va a recibir ordenes (order), la lista de las ordenes tendra un tiempo de disponibilidad para ser modificada o editada, es decir, que cualquier usuario que tenga acceso a la lista puede agregar su orden siempre y cuando el tiempo en minutos, desde su tiempo de creación, no exceda el tiempo especificado por el usuario creador de la lista. Una vez finalizado el tiempo de disponibilidad de la lista, debe de enviarse un correo a un usuario aleatorio, quien será el encargado de crear la siguiente lista de ordenes, informandole que el sera el encargado de la creación de la siguiente lista con el número telefónico y dirección de la tienda o heladería donde se van a ordenar todos los pedidos.

Cómo es la estructura de la aplicación?
El patrón de diseño seleccionado es MVC (Modelo-vista-controlador), seleccinado para separar tanto los datos, lógica de negocio, representación, y el módulo encargado de gestionar los eventos y las comunicaciones. Dicho patrón define componentes para la representación de información e interacción del usuario.

La estructura del proyecto consta de: 
	-carpeta components (donde estara cada feature o componente) 

	-carpeta network (conteniendo archivos intermediarios al servidor)

	-carpeta node_modules (generada automaticamente por node.js al momento de instalación 	de alguna libreria) archivo app.js( este archivo es -el servidor quien procesa las 	peticiones del usuario desde la web)

	-archivo config.js (declara las variables de entorno para nuestro servidor y los 	componentes, tales como: url de base de datos, puerto y host a utilizar por el 	servidor...) 
 
	-archivo db.js (gestiona la conexión a la base de datos, en este caso, mongoDB)

	-middleware.js (despues de un inicio de sesión se encarga de verificar que por cada 	solicitud que se haga el usuario tenga un token de autentificación para la 	autorización de hacer las peticiones disponibles.)

	-archivo package-lock.json (contiene la información, dependencias y librerias 	utilizadas, de el proyecto)

Descomposición de estructura:

Carpeta network:
Compuesta por los archivos: response.js, con las funciones de success y error, para tener una forma estructurada de cualquier response o respuesta que venga desde el servidor, y routes.js, tendrá importadas las rutas y peticiones de cada componente del servidor.

Carpeta components:
Hay que saber que cada componente tiene su propia carpeta, los archivos dentro de cada feature o componente esta compuesta solamente por todos los elementos relacionados a esa característica especificamente. En este proyecto se creó 4 archivos .js para cada componente, dichos archivos son: 

1-model.js  //Encargado de generar el esquema o modelo del componente donde este ubicado para la base de datos (MongoFB)

2-store.js // Encargado de utilizar las funcionesd de un modelo de mongoDB para almacenar la informacion solicitada por el servidor en la base de datos.

3-controller.js // Encargado de tener las funciones a ejecutar dentro de cada petición por el usuario.

4-network.js //Enccargado de llamar las funciones del controller y hacer las peticiones al servidor unicamente del componente donde esta ubicado.

Generalmente las funciones en los archivos store.js, controller.js y network.js seran: para peticiones http: post, get, patch y delete. (crear, obtener, editar y borrar un componente de la base de datos.)


Cómo puedo utilizar la aplicación?
Como ya se especificó, la aplicación es un node.js web application, para su ejecución se necesitará un entorno de desarrollo de Api's como Postman.

Peticiones disponibles en OrderIceCreamApp:
A partir de aqui, todas las pruebas demostradas serán desde un ambiente de desarrollo de Api's. Asegurese de que haya ejecutado el proyecto y de tener instalado node.js, se hace de la siguiente manera:

1-Abra su terminal
2-Dirijase al directorio del proyecto.
3-Ejecute el comando npm install, esto instalará las dependencias para las librerias que estan siendo utilizadas en el proyecto.
4-Ejecute el comando "nodemon app"
5-Espere que en consola el servidor le notifique "[db] Conectada con éxito"
6-Abra postman o cualquier otro ambiente de desarrollo de Api's y proceda a hacer las siguientes peticiones:

Cómo puede un usuario iniciar sesión?
Con la siguiente petición tipo POST:

http://localhost:4000/session/login

req.body = 
	{
	"email":"arielsolano39@gmail.com",
	"password":"ariel123"
	}
  
response = 
    {
      "error": "",
      "body": {
        "_id": "5dbb2c0835b508391ce76bc4",
        "user": {
          "order": [],
          "ordersPack": [],
          "_id": "5db6e9729f3a45b32034cec1",
          "name": "Ariel",
          "email": "arielsolano39@gmail.com",
          "password": "ariel123",
          "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRVc2VyIjp7ImVtYWlsIjoiYXJpZWxzb2xhbm8zOUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImFyaWVsMTIzIn0sImlhdCI6MTU3MjU0NzU5Mn0.D94K-1Ygb6Xz9T86fM6AkXkVusq6LcJuAoOThwLrB8c"
      }
    }

Como un usuario en caso de no tener cuenta puede crearse un usuario?

POST:http://localhost:4000/user/register

req.body = 
    {
	      "name":"Alejandro",
	      "email":"ariel_solano10@hotmail.com",
	      "password":"virgilio123"
  }

response = {
       "error": "",
       "body": {
         "order": [],
         "ordersPack": [],
         "_id": "5db84235692cbb726481b00a",
         "name": "Alejandro",
         "email": "ariel_solano10@hotmail.com",
         "password": "virgilio123",
         "__v": 0
       }
}

Como un usuario puede crear una lista de ordenes?

POST:http://localhost:4000/ordersPack

req.body = {
	      "user":"5db6e9ae9f3a45b32034cec2",
	      "duration": 5
}

response = {
  "error": "",
  "body": {
    "userCreator": "5db6e9ae9f3a45b32034cec2",
    "startTime": "2019-10-31T21:14:35.751Z",
    "expirationDate": 1572556475751
  }
}


Como un usuario puede eliminar una lista de ordenes?

DELETE: http://localhost:4000/ordersPack/*id*

response = {
  "error": "",
  "body": "Lista de orden *id* eliminada"
}

Como un usuario puede agregar una orden a una lista de ordenes?

POST:http://localhost:4000/order

req.body = {
	"ordersPackId":"5dbaa238778ab342d48a612c",
	"productName":"Barquilla",
	"size":"Medium",
	"flavor":"Chocolate",
	"user":"5db6e9729f3a45b32034cec1",
	"paymentMethod":"creditCard"
}

response = {
  "error": "",
  "body": {
    "ordersPack": "5dbaa238778ab342d48a612c",
    "description": {
      "productName": "Barquilla",
      "size": "Chocolate",
      "flavor": "Medium"
    },
    "userId": "5db6e9729f3a45b32034cec1",
    "paymentMethod": "creditCard"
  }
}

Como un usuario puede eliminar una orden?

DELETE: http://localhost:4000/order/*id*

response = {
  "error": "",
  "body": "Orden *id* eliminada"
}

Como un usuario puede editar su orden?

PATCH: http://localhost:4000/order/*id*

req.body ={
	"productName":"Barquilla",
	"size":"Large",
	"flavor":"Chocolate"
}

response = {
  "error": "",
  "body": {
    "_id": "5dbc4631d18c59993487a95b",
    "ordersPack": "5dbaa238778ab342d48a612c",
    "description": {
      "productName": "Barquilla",
      "flavor": "Chocolate",
      "size": "Large"
    },
    "userId": "5db6e9729f3a45b32034cec1",
    "paymentMethod": "creditCard",
    "__v": 0
  }
}

Cómo un usuario puede identificar el nombre del usuario de quien creo la lista?

GET: http://localhost:4000/ordersPack?ordersPack=*id*

response: {
  "error": "",
  "body": [
    {
      "orders": [],
      "_id": "5dbaa238778ab342d48a612c",
      "userCreator": {
        "order": [],
        "ordersPack": [],
        "_id": "5db6e9ae9f3a45b32034cec2",
        "name": "Virgilio",
        "email": "arielsolanog@hotmail.com",
        "password": "virgilio123",
        "__v": 0
      },
      "__v": 0
    }
  ]
}


