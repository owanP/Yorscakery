-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 02, 2025 at 05:52 AM
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
  `price` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `Category`, `price`) VALUES
(1, 'Fudgy Brownies Large Premium', 'Cake', 175000),
(2, 'Tiramisu Mousse Cake Premium', 'Cake', 125000),
(3, 'Tiramisu Mousse Cake Large', 'Cake', 188000),
(4, 'Khaliat Nahl Mini', 'Cake', 20000),
(5, 'Mousse Cake Magnum Large', 'Cake', 188000),
(6, 'Roti Keset Makyoss', 'Dry Cake', 25000),
(7, 'Pandan Cake', 'Dry Cake', 25000),
(8, 'Red Velvet Cheesecake Medium', 'Cake', 130000),
(9, 'Fudgy Brownies Choco X Matcha (10pcs)', 'Dry Cake', 40000),
(10, 'Burn Cheese Cake', 'Cake', 25000),
(11, 'Slice Cake Magnum', 'Cake', 22000),
(12, 'Cake Tiramisu', 'Cake', 22000),
(13, 'Roti Keset Makyos', 'Dry Cake', 25000),
(14, 'Roti Khaliat Nahl', 'Cake', 50000),
(15, 'Kue Christmas Edition', 'Cake', 109000);

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
