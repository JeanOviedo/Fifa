# Fifa
Es una app que muestra información de Jugadores esta fue creada con JavaScript,React, CSS yRedux con la API de FIFA complementando con una base de datos utilizando Express, Sequelize y PostgreSQL.

La app tiene un campo de búsqueda que permita realizar búsquedas de equipos por su nombre consumiendo el endpoint de la API de fifa 2021, mostrando de forma simple los resultados de la búsqueda.

  <img height="700" src="https://github.com/JeanOviedo/Fifa/blob/main/Client/src/Icos/dise-min.png?raw=true" />
 <img height="600" src="https://github.com/JeanOviedo/Fifa/blob/main/Client/src/Icos/dise2-min.png?raw=true" />
 
 # Api : 
 Orden ascendente : http://localhost:3001/players?search=ma&order=asc  donde "ma" es la pabra a buscar. 
 Orden Descendente  : http://localhost:3001/players?search=ma&order=desc  donde "ma" es la pabra a buscar. 
 Muestra Jugadores de api y guarda en bd http://localhost:3001/players al igual que http://localhost:3001/players?page=8 donde 8 es el numero de la pagina.


