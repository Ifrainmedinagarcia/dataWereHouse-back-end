DATAWEREHOUSE

#Objetivo:
Herramienta que permite a una compañía de Marketing administrar todos los contactos de sus clientes para sus campañas.

#Acciones User:
- Registrarnos
- Identificarnos
- Crear Regiones
- Crear Países
- Crear Ciudades
- Crear Compañías
- Adminitras contactos
----------------------------------------------------------------------------------------------------------

1. Clonar el proyecto desde tu consola 🚀

copia y pega esta línea de comando:

```
https://github.com/Ifrainmedinagarcia/dataWereHouse-back-end.git
```

----------------------------------------------------------------------------------------------------------

2. Instalar dependencia 🔧

copia y pega esta línea de comando:

```
npm i
```

----------------------------------------------------------------------------------------------------------

3. La base de datos se creará una vez inicies el proyecto ⚙️

----------------------------------------------------------------------------------------------------------

4. Configurar archivo .env 🖇️

Debes crear un archivo .env para guardar las variables de entorno (en el proyecto tienes un archivo llamado .envTemplate para que puedas guiarte):

- TOKEN_SECRET
- ACCESS_KEY_ID
- SECRET_ACCESS_KEY
- BUCKET
- USERNAME
- PASSWORD
- DATABASE
- HOST

Debe estar escrito tal cual como se muestra en este documento.

- TOKEN_SECRET (es el token que se necesita para generar y decodificar 
el token de cada usuario y así poder hacer las diferentes acciones, 
recuerda que este token debe estar en una variable de entorno y el string debe estar oculto)

- ACCESS_KEY_ID (Este es el ID que necesita el cdk de AWS para entrar al BUCKET desde NODE y poder guardar archivos en la nube, recuerda que esto se configura desde AWS, así que si deseas tener esta funcionalidad en tu app debes configurar previamente este ID de acceso)

- SECRET_ACCESS_KEY (Esta es la clave del BUCKET para poder acceder, recuerda que esto se configura desde AWS, así que si deseas tener esta funcionalidad en tu app debes configurar previamente estas claves de acceso)

- USERNAME (Este es el nombre de usuario de tu base de datos, normalmente, si trabajas en un servidor local tu username es: root. Si trabajas con una base de datos como HEROKU, AWS o MONGOBD debes tener en cuenta que tu username será diferente)

- PASSWORD (Es la contraseña de tu base de datos, igualmente si trabajar en local no necesitas contraseña, esto solo es válido si te quieres conectar  a una base de datos como las mencionadas en el punto anterior)

- DATABASE (Nombre que le pusiste a tu base de datos)

- HOST (Es la dirección de acceso de tu base de datos, si trabajas en local normalmente es : localhost + el puerto). Ejemplo de puesto : 3000.

----------------------------------------------------------------------------------------------------------

5. Inicia el servidor 🚀

Tienes varias opciones para iniciar el servidor. Desde tu terminal o editor de código (en la consola) y estando en la carpeta delilah-resto puedes introducir este comando:

```
node app.js
```

----------------------------------------------------------------------------------------------------------

6. Puedes acceder a este link para visualizar la documentacion de la API 

```
https://documenter.getpostman.com/view/11695363/TzJx8c9H
```