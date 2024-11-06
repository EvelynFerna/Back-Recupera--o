DROP DATABASE IF EXISTS StockCar;
CREATE DATABASE IF NOT EXISTS StockCar;
USE StockCar;

CREATE TABLE clientes(
    cliente_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    cpf varchar(11) NOT NULL UNIQUE,
    email varchar(255) NOT NULL UNIQUE,
    endereco varchar(255) NOT NULL,
    data_nascimento date NOT NULL,
    data_cadastro date NOT NULL   
);

CREATE TABLE telefone (
    telefone_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cliente_id int(10) NOT NULL,
    numero varchar(20) NOT NULL,
    tipo enum('residencial', 'comercial', 'celular') NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

CREATE TABLE carros (
    carros_id int(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    marca_veiculo VARCHAR(252) NOT NULL,
    modelo_veiculo VARCHAR(252) NOT NULL,
    ano_veiculo date NOT NULL,
    fabricacao_veiculo date NOT NULL,
    cliente_id int(10) NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

INSERT INTO clientes (nome, cpf, email, endereco, data_nascimento, data_cadastro)
VALUES
('Joao Silva', '12345678901', 'joao.silva@email.com', 'Rua das Flores, 123, Centro', '1990-05-15', '2024-01-20'),
('Maria Oliveira', '23456789012', 'maria.oliveira@email.com', 'Avenida Brasil, 456, Bairro Novo', '1985-08-22', '2023-12-10'),
('Carlos Souza', '34567890123', 'carlos.souza@email.com', 'Rua das Acácias, 789, Jardim das Palmeiras', '1992-11-30', '2024-02-05'),
('Fernanda Santos', '45678901234', 'fernanda.santos@email.com', 'Rua do Comércio, 321, Centro', '1994-01-10', '2024-03-15');

INSERT INTO telefone (cliente_id, numero, tipo)
VALUES
(1, '11987654321', 'celular'),
(1, '1132456789', 'residencial'),
(2, '21987654321', 'celular'),
(2, '2132456789', 'comercial'),
(3, '31987654321', 'celular'),
(3, '3132456789', 'residencial'),
(4, '41987654321', 'celular'),
(4, '4132456789', 'comercial');

INSERT INTO carros (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiculo, cliente_id)
VALUES
('Toyota', 'Corolla', '2022-01-01', '2021-12-01', 1),
('Honda', 'Civic', '2021-01-01', '2020-12-01', 2),
('Ford', 'Fusion', '2020-01-01', '2019-12-01', 3),
('Chevrolet', 'Onix', '2023-01-01', '2022-12-01', 4);
