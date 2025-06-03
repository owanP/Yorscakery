-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 04:07 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_yors`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `Category` varchar(15) NOT NULL,
  `price` int(15) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `Category`, `price`, `image_url`) VALUES
(1, 'Fudgy Brownies Large Premium', 'Cake', 175000, 'images/1.jpg'),
(2, 'Tiramisu Mousse Cake Premium', 'Cake', 125000, 'images/2.jpg'),
(3, 'Tiramisu Mousse Cake Large', 'Cake', 188000, 'images/3.jpg'),
(4, 'Khaliat Nahl Mini', 'Cake', 20000, 'images/4.jpg'),
(5, 'Mousse Cake Magnum Large', 'Cake', 188000, 'images/5.jpg'),
(6, 'Roti Keset dengan Toping Melimpah', 'Dry Cake', 25000, 'images/6.jpg'),
(7, 'Pandan Cake', 'Dry Cake', 25000, 'images/7.jpg'),
(8, 'Red Velvet Cheesecake Medium', 'Cake', 130000, 'images/8.jpg'),
(9, 'Fudgy Brownies Choco X Matcha (10pcs)', 'Dry Cake', 40000, 'images/9.jpg'),
(10, 'Burn Cheese Cake', 'Cake', 25000, 'images/10.jpg'),
(11, 'Slice Cake Magnum', 'Cake', 22000, 'images/11.jpg'),
(12, 'Cake Tiramisu', 'Cake', 22000, 'images/12.jpg'),
(13, 'Roti Keset Makyos', 'Dry Cake', 25000, 'images/13.jpg'),
(14, 'Roti Khaliat Nahl', 'Cake', 50000, 'images/14.jpg'),
(15, 'Kue Christmas Edition', 'Cake', 109000, 'images/15.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
