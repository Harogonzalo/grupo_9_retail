-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-09-2022 a las 19:02:27
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
-- Base de datos: `solo_lo_mejor_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'masVendidos'),
(2, 'masBuscados');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images_products`
--

CREATE TABLE `images_products` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `images_products`
--

INSERT INTO `images_products` (`id`, `name`) VALUES
(1, 'product-1657110953499.jpg'),
(2, 'product-1657113824499.jpg'),
(3, 'product-1657113994191.jpg'),
(4, 'product-1657114413101.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `fulldescription` varchar(200) NOT NULL,
  `price` double NOT NULL,
  `discount` double NOT NULL,
  `category` int(11) NOT NULL,
  `id_image_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `fulldescription`, `price`, `discount`, `category`, `id_image_product`) VALUES
(1, 'Horno Electrico', 'bla bl bla', 'Un horno eléctrico es aquel aparato para la cocción que funciona con energía eléctrica. Esta es convertida en calor por resistencias. Los hornos eléctricos son totalmente automatizados; la cocción es ', 34200, 10, 0, 0),
(2, 'Cafetera Moulinex', 'Juego Red Dead Redemption II para xbox, Rockstar Games', 'Viene con el juego Red Dead Redemption II. Alta cafetera.', 30500, 40, 0, 0),
(3, 'Pava Electrica Atma', 'PAva bla bla bla', 'La pava eléctrica Atma PE0821NAP tiene un diseño clásico en color metalico y una capacidad de 1,7 litros. Posee indicador de nivel de agua. Corta automáticamente al hervir el agua y es ideal para toma', 6770, 15, 0, 0),
(4, 'Notebook Lenovo', 'Intel Core i5 10210U 12GB de RAM 512GB SSD, Intel UHD Graphics 620 1920x1080px', 'Notebook Intel Core i5 10210U 12GB de RAM 512GB SSD, Intel UHD Graphics 620 1920x1080px', 154999, 15, 0, 0),
(5, 'Samsung Galaxy A33', '5g 128 Gb Awesome Black 6 Gb Ram', 'Autonomía: muy buena autonomía, pero viene sin cargador, algo incomprensible. Conectividad y audio: sonido decente y conectividad con todo lo necesario hoy en día. Conclusión: un teléfono que puede so', 65000, 5, 0, 0),
(6, 'Heladera Pati:c k', 'HPK141M10 silver con freezer 355L 220V', 'Heladera caliente', 102000, 25, 0, 0),
(7, 'SmartTv Samsung 43', 'bla bnla bla', 'SmartTV para ver cosas no muy Smart', 60200, 5, 0, 0),
(8, 'Sbeve', 'ゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴゴ', '300', 2, 0, 0, 232),
(15, 'Panel Calefactor', 'Calefactor', 'El panel Hotpanel es un calefactor pensado para que puedas calefaccionar tu hogar de la forma más segura. Cuenta con una potencia de 1200 W y una gran convección natural de calor.', 300, 5, 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` text NOT NULL,
  `isAdmin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `isAdmin`) VALUES
(1, 'Cosme Fulanito', 'cosme_fulanito@gmail.com', '123456', 0),
(2, 'Esteban Quito', 'EstebanQuito@gmail.com', '123456', 0),
(3, 'Lalo Landa', 'Arrgorrarsda@hotmail.com', '$2a$10$3bnaI5V3zxQatCsL9g2PvuqHGZM4.VygsOxRbZQNp9uTFLC.hlOmu', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
