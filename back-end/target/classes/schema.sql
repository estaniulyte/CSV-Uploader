create table employee(
    id int auto_increment,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(255) NOT NULL
);

insert into employee(name, email, phone) values ('John Smith', 'john.smith@gmail.com', '86-554-232');