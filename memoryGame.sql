create database memoryGame;
use memoryGame;

create table usuario (
    userId int not null auto_increment,
    userEmail varchar(200) unique not null,
    userCpf int unique not null,
    userPassword char(64) not null,
    userName varchar(100) not null,
    userBirthday date not null,
    userPhone int not null,
    primary key (userId)
);

create table game (
    gameId int not null auto_increment,
    userId int not null,
    gameResult binary not null,
    gameGrid tinyint not null,
    gameMode binary not null,
    gameDuration int not null,
    gameScore tinyint not null,
    createTime date not null,
    primary key (gameId),
    foreign key (userId) references usuario(userId) on delete cascade
);

create index idxuserid_game on game(userId);