-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-09-2022 a las 08:51:22
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `paddle_house_db`
--

CREATE DATABASE IF NOT EXISTS `solo_lo_mejor_db`;
USE `solo_lo_mejor_db`;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `categories`
--
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'lentesRecetados'),
(2, 'lentesSol'),
(3, 'lentesContacto'),
(4, 'accesorios');--
-- Estructura de tabla para la tabla `inventory`
--

CREATE TABLE `inventory` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `qty` int(10) NOT NULL,
  `warehouse` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `inventory`
--

INSERT INTO `inventory` (`id`, `name`, `qty`, `warehouse`) VALUES
(1, 'PALETA ADIDAS', 5, 'Flores'),
(2, 'PALETA KELME', 4, 'San isidro'),
(3, 'PALETA ADIDAS', 5, 'Rafael Castillo'),
(4, 'ACCESORIO ADIDAS', 7, 'Flores'),
(5, 'ACCESORIO NEXUS', 10, 'San isidro'),
(6, 'ACCESORIO ADIDAS', 5, 'Rafael Castillo'),
(8, 'BOLSO-PALETERO ADIDAS', 3, 'Flores'),
(9, 'BOLSO-PALETERO ADIDAS', 10, 'San isidro'),
(10, 'BOLSO-PALETERO ADIDAS', 10, 'Rafael Castillo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `inventory_id` int(10) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `category`, `description`, `image`, `price`, `brand`, `inventory_id`, `model`) VALUES
(1, 'PALETA', 'Paleta ultra liviana especial para damas', '1658613375355.jpg', 35000, 'ADIDAS', 1, 'MatchLigth'),
(2, 'PALETA', 'Paleta sin vibraciones, ultra compacta.', '1658613375366.jpg', 22500, 'KELME', 1, 'Falcon'),
(3, 'PALETA', 'Paleta liviana especial para jóvenes', '1658359374447.jpg', 27600, 'SOFTEE', 1, 'Lycan'),
(4, 'ACCESORIOS', 'Estuche por 60', '1658360213826.jpg', 1650, 'SOFTEE', 1, 'Cubre Grip Confort 100'),
(5, 'ACCESORIOS', 'Nexus Blanco Estuche de 60 unidades', '1658360880554.jpg', 1450, 'NEXUS', 1, 'Grip Paddle Performance Blanco'),
(6, 'ACCESORIOS', 'Estuche de Grid Adidas color rojo para mangos de paletas de padel', '1658526716543.jpg', 250, 'ADIDAS', 1, 'Grid Paddle Performance Rojo'),
(7, 'BOLSOS-PALETERO', 'Bolso para paletas de padel impermeable de gran capacidad', '1658526842632.jpg', 19810, 'ADIDAS', 1, 'Multigame Lite White C'),
(8, 'BOLSOS-PALETERO', 'Bolso para paletas de padel color blanco individual', '1658527023807.jpg', 15430, 'ADIDAS', 1, 'Weekend White'),
(9, 'BOLSOS-PALETERO', 'Bolso para paletas de padel casual individual', '1658527157663.jpg', 16100, 'ADIDAS', 1, 'Weekend green');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `isAdmin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `avatar`, `isAdmin`) VALUES
(27, 'Admin', 'pruebaAdmin@gmail.com', '$2a$10$FfFr2ehOmpYDScB4LN4pM.qCd9uWWkO/t1GwJw4S0XuuallJ9jm1e', 'image-1663023400511.jpg', 1),
(28, 'UserNormal', 'User@gmail.com', '$2a$10$iTrXRi4gnU2gwWza96XoSumQ59dFtWBCSl5OrliwB1800EziXmmk6', 'image-1663023482122.jpg', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_FK` (`inventory_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `inventory`
--
ALTER TABLE `inventory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `category_FK` FOREIGN KEY (`inventory_id`) REFERENCES `inventory` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
