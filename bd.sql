/*

Crear una base de datos
Crear una tabla
Actualizar un registro
Borrar un registro
Consultar registros

*/
-- crear la BD
create database node;
-- usar la BD
use node;

-- crear una table
create table alumnos(
	id  int auto_increment not null, 
	nombre varchar(30) not null, 
    edad tinyint not null,
    fecha_creacion date not null,
    email varchar(50) unique,
    primary key (id)
);

/*
tipos de datos:
	cadenas:
		- char: no se usa porque no optimiza el espacio en disco y reserva memoria innecesariamente
        - varchar : es el que usamos para guardar strings
        - text : strings mas largos
	numeros: 
		- tinyint = 2^8 = 256 -1 = 255 || tinyint(30) puede leer hasta 30 caracteres
        - smallint  2^16 
        - mediumint 2^24
        - int 2^32 aprox 17 1/2M
        - bigint 2^64
        - float
        - decimal
        
	especiales: 
		- date YYYY-MM-DD
        - time HH:MM:SS
        - datetime YYYY-MM-DD HH:MM:SS
        - timestamp 
        modificadores => not null - auto increment - default = <valor> - unsigned - zero fill
        
*/