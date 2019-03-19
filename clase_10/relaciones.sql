create database relaciones;
use relaciones;

-- Entidades furtes
create table tipos(
	id int not null auto_increment,
    tipos varchar(20) not null,
    primary key(id)
);



-- Entidades Debiles
create table alumnos(
	id int not null auto_increment,
    nombre varchar(20) not null,
    /*La columna que establece relacion tiene que ser del tipo de dato o superior que la columna a la cual apunta*/
    tipo int not null,
    primary key(id),
    constraint `relacion_entre_alumnos_y_tipos`
    foreign key(tipo) references tipos(id)
    on update cascade on delete restrict 
);


show databases;
use pepe;
show tables;










