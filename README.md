# FIFA
 # Front: 
Es una app que muestra información de Jugadores esta fue creada con JavaScript,React, CSS yRedux con la API de FIFA complementando con una base de datos utilizando Express, Sequelize y PostgreSQL.

La app tiene un campo de búsqueda que permita realizar búsquedas de equipos por su nombre consumiendo el endpoint de la API de fifa 2021, mostrando de forma simple los resultados de la búsqueda.

 
 # Api : 
 La api esta protegida por medio de JSON Web Tokens
 Para  acceder a todos los endspoints api por medio de este token 
  Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDY3ODk5OTk5OSIsIm5hbWUiOiJKZWFuIE92aWVkbyIsImlhdCI6MTUxNjIzOTAyMn0.pZLVmIJYqsAsob26CBRWk5FS083TnKLqa8LY3ZvH0yY

 Orden ascendente : GET http://localhost:3001/players?search=ma&order=asc  donde "ma" es la pabra a buscar. 
 Orden Descendente  :  GET http://localhost:3001/players?search=ma&order=desc  donde "ma" es la pabra a buscar. 
 Muestra Jugadores de api y guarda en bd :  GET http://localhost:3001/players al igual que http://localhost:3001/players?page=8 donde 8 es el numero de la pagina.
 Muestra los equipos con sus jugadores  POST http://localhost:3001/teams  y GET http://localhost:3001/teams/get
 
 Es importante configurar las variables de entorno : por defecto esta configurado como 
 DB_USER=postgres
 DB_PASSWORD=123
 DB_HOST=localhost
 SECRET=secretoo



  <img height="700" src="https://github.com/JeanOviedo/Fifa/blob/main/Client/src/Icos/dise-min.png?raw=true" />
 <img height="600" src="https://github.com/JeanOviedo/Fifa/blob/main/Client/src/Icos/dise2-min.png?raw=true" />



