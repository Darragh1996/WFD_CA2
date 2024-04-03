-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2024 at 10:00 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gaanfl2024`
--

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `round` varchar(2) NOT NULL,
  `division` varchar(1) NOT NULL,
  `team1` varchar(9) NOT NULL,
  `team1ID` varchar(3) NOT NULL,
  `team2` varchar(9) NOT NULL,
  `team2ID` varchar(3) NOT NULL,
  `team1Score` varchar(4) NOT NULL,
  `team1Goals` int(11) NOT NULL,
  `team1Points` int(11) NOT NULL,
  `team2Score` varchar(4) NOT NULL,
  `team2Goals` int(11) NOT NULL,
  `team2Points` int(11) NOT NULL,
  `date` varchar(50) NOT NULL,
  `time` varchar(8) NOT NULL,
  `competition` varchar(50) NOT NULL,
  `season` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `round`, `division`, `team1`, `team1ID`, `team2`, `team2ID`, `team1Score`, `team1Goals`, `team1Points`, `team2Score`, `team2Goals`, `team2Points`, `date`, `time`, `competition`, `season`) VALUES
(16389, '1', '1', 'Kerry', '13', 'Derry', '7', '2-8', 2, 8, '0-15', 0, 15, '27 January 2024', '5:30 pm', 'NFL Division 1', '2024'),
(16390, '1', '1', 'Dublin', '10', 'Monaghan', '22', '1-14', 1, 14, '3-9', 3, 9, '27 January 2024', '7:30 pm', 'NFL Division 1', '2024'),
(16391, '1', '1', 'Galway', '12', 'Mayo', '20', '0-10', 0, 10, '2-12', 2, 12, '28 January 2024', '1:45 pm', 'NFL Division 1', '2024'),
(16392, '1', '1', 'Tyrone', '27', 'Roscommon', '24', '0-17', 0, 17, '1-11', 1, 11, '28 January 2024', '3:45 pm', 'NFL Division 1', '2024'),
(16393, '2', '1', 'Mayo', '20', 'Dublin', '10', '1-12', 1, 12, '0-14', 0, 14, '3 February 2024', '7:30 pm', 'NFL Division 1', '2024'),
(16394, '2', '1', 'Monaghan', '22', 'Kerry', '13', '1-12', 1, 12, '3-15', 3, 15, '4 February 2024', '1:00 pm', 'NFL Division 1', '2024'),
(16395, '2', '1', 'Roscommon', '24', 'Galway', '12', '0-9', 0, 9, '0-9', 0, 9, '4 February 2024', '2:00 pm', 'NFL Division 1', '2024'),
(16396, '2', '1', 'Derry', '7', 'Tyrone', '27', '1-12', 1, 12, '0-9', 0, 9, '4 February 2024', '3:45 pm', 'NFL Division 1', '2024'),
(16397, '3', '1', 'Derry', '7', 'Monaghan', '22', '3-17', 3, 17, '0-13', 0, 13, '17 February 2024', '5:00 pm', 'NFL Division 1', '2024'),
(16398, '3', '1', 'Dublin', '10', 'Roscommon', '24', '1-19', 1, 19, '1-12', 1, 12, '17 February 2024', '5:00 pm', 'NFL Division 1', '2024'),
(16399, '3', '1', 'Kerry', '13', 'Mayo', '20', '0-16', 0, 16, '0-15', 0, 15, '17 February 2024', '7:30 pm', 'NFL Division 1', '2024'),
(16400, '3', '1', 'Tyrone', '27', 'Galway', '12', '0-12', 0, 12, '1-10', 1, 10, '18 February 2024', '1:45 pm', 'NFL Division 1', '2024'),
(16401, '4', '1', 'Tyrone', '27', 'Mayo', '20', '1-15', 1, 15, '1-11', 1, 11, '24 February 2024', '5:15 pm', 'NFL Division 1', '2024'),
(16402, '4', '1', 'Dublin', '10', 'Kerry', '13', '3-18', 3, 18, '1-14', 1, 14, '24 February 2024', '7:30 pm', 'NFL Division 1', '2024'),
(16403, '4', '1', 'Galway', '12', 'Derry', '7', '1-11', 1, 11, '3-10', 3, 10, '25 February 2024', '1:45 pm', 'NFL Division 1', '2024'),
(16404, '4', '1', 'Roscommon', '24', 'Monaghan', '22', '1-16', 1, 16, '0-7', 0, 7, '25 February 2024', '1:45 pm', 'NFL Division 1', '2024'),
(16405, '5', '1', 'Derry', '7', 'Dublin', '10', '0', 0, 0, '0', 0, 0, '2 March 2024', '5:00 pm', 'NFL Division 1', '2024'),
(16406, '5', '1', 'Mayo', '20', 'Roscommon', '24', '0', 0, 0, '0', 0, 0, '2 March 2024', '7:30 pm', 'NFL Division 1', '2024'),
(16407, '5', '1', 'Kerry', '13', 'Tyrone', '27', '0', 0, 0, '0', 0, 0, '3 March 2024', '1:15 pm', 'NFL Division 1', '2024'),
(16408, '5', '1', 'Monaghan', '22', 'Galway', '12', '0', 0, 0, '0', 0, 0, '3 March 2024', '3:15 pm', 'NFL Division 1', '2024'),
(16409, '6', '1', 'Galway', '12', 'Dublin', '10', '0', 0, 0, '0', 0, 0, '15 March 2024', '3:15 pm', 'NFL Division 1', '2024'),
(16410, '6', '1', 'Tyrone', '27', 'Monaghan', '22', '0', 0, 0, '0', 0, 0, '15 March 2024', '7:30 pm', 'NFL Division 1', '2024'),
(16411, '6', '1', 'Roscommon', '24', 'Kerry', '13', '0', 0, 0, '0', 0, 0, '17 March 2024', '1:45 pm', 'NFL Division 1', '2024'),
(16412, '6', '1', 'Mayo', '20', 'Derry', '7', '0', 0, 0, '0', 0, 0, '17 March 2024', '3:45 pm', 'NFL Division 1', '2024'),
(16413, '7', '1', 'Derry', '7', 'Roscommon', '24', '0', 0, 0, '0', 0, 0, '24 March 2024', '1:45 pm', 'NFL Division 1', '2024'),
(16414, '7', '1', 'Dublin', '10', 'Tyrone', '27', '0', 0, 0, '0', 0, 0, '24 March 2024', '1:45 pm', 'NFL Division 1', '2024'),
(16415, '7', '1', 'Kerry', '13', 'Galway', '12', '0', 0, 0, '0', 0, 0, '24 March 2024', '1:45 pm', 'NFL Division 1', '2024'),
(16416, '7', '1', 'Monaghan', '22', 'Mayo', '20', '0', 0, 0, '0', 0, 0, '24 March 2024', '1:45 pm', 'NFL Division 1', '2024'),
(16418, '1', '2', 'Meath', '21', 'Fermanagh', '11', '0-12', 0, 12, '1-9', 1, 9, '27 January 2024', '2:30 pm', 'NFL Division 2', '2024'),
(16419, '1', '2', 'Kildare', '', 'Cavan', '4', '0-12', 0, 12, '0-16', 0, 16, '27 January 2024', '5:00 pm', 'NFL Division 2', '2024'),
(16420, '1', '2', 'Armagh', '2', 'Louth', '19', '0-12', 0, 12, '0-11', 0, 11, '27 January 2024', '6:00 pm', 'NFL Division 2', '2024'),
(16421, '1', '2', 'Donegal', '8', 'Cork', '6', '1-20', 1, 20, '2-6', 2, 6, '28 January 2024', '1:45 pm', 'NFL Division 2', '2024'),
(16422, '2', '2', 'Armagh', '2', 'Meath', '21', '2-16', 2, 16, '0-10', 0, 10, '3 February 2024', '6:00 pm', 'NFL Division 2', '2024'),
(16423, '2', '2', 'Fermanagh', '11', 'Kildare', '', '2-10', 2, 10, '0-12', 0, 12, '3 February 2024', '6:00 pm', 'NFL Division 2', '2024'),
(16424, '2', '2', 'Louth', '19', 'Cork', '6', '2-9', 2, 9, '0-13', 0, 13, '4 February 2024', '1:00 pm', 'NFL Division 2', '2024'),
(16425, '2', '2', 'Cavan', '4', 'Donegal', '8', '0-12', 0, 12, '0-13', 0, 13, '4 February 2024', '4:00 pm', 'NFL Division 2', '2024'),
(16426, '3', '2', 'Donegal', '8', 'Fermanagh', '11', '2-16', 2, 16, '0-8', 0, 8, '17 February 2024', '2:00 pm', 'NFL Division 2', '2024'),
(16427, '3', '2', 'Cork', '6', 'Cavan', '4', '0-16', 0, 16, '0-17', 0, 17, '17 February 2024', '4:00 pm', 'NFL Division 2', '2024'),
(16428, '3', '2', 'Meath', '21', 'Louth', '19', '1-11', 1, 11, '1-9', 1, 9, '18 February 2024', '2:00 pm', 'NFL Division 2', '2024'),
(16429, '3', '2', 'Kildare', '', 'Armagh', '2', '0-8', 0, 8, '2-16', 2, 16, '18 February 2024', '3:45 pm', 'NFL Division 2', '2024'),
(16430, '4', '2', 'Fermanagh', '11', 'Cork', '6', '0-16', 0, 16, '1-14', 1, 14, '25 February 2024', '2:00 pm', 'NFL Division 2', '2024'),
(16431, '4', '2', 'Louth', '19', 'Cavan', '4', '3-9', 3, 9, '2-13', 2, 13, '25 February 2024', '2:00 pm', 'NFL Division 2', '2024'),
(16432, '4', '2', 'Meath', '21', 'Kildare', '', '0-12', 0, 12, '0-9', 0, 9, '25 February 2024', '2:00 pm', 'NFL Division 2', '2024'),
(16433, '4', '2', 'Armagh', '2', 'Donegal', '8', '1-9', 1, 9, '0-12', 0, 12, '25 February 2024', '3:00 pm', 'NFL Division 2', '2024'),
(16447, '1', '3', 'Limerick', '16', 'Antrim', '1', '2-7', 2, 7, '2-14', 2, 14, '28 January 2024', '12:30 pm', 'NFL Division 3', '2024'),
(16448, '1', '3', 'Clare', '5', 'Sligo', '25', '0-9', 0, 9, '1-5', 1, 5, '28 January 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16449, '1', '3', 'Offaly', '23', 'Westmeath', '29', '0-10', 0, 10, '1-11', 1, 11, '28 January 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16450, '1', '3', 'Wicklow', '31', 'Down', '9', '0-13', 0, 13, '0-18', 0, 18, '28 January 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16451, '2', '3', 'Down', '9', 'Limerick', '16', '3-16', 3, 16, '0-9', 0, 9, '3 February 2024', '6:00 pm', 'NFL Division 3', '2024'),
(16452, '2', '3', 'Antrim', '1', 'Offaly', '23', '2-5', 2, 5, '1-7', 1, 7, '4 February 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16453, '2', '3', 'Sligo', '25', 'Wicklow', '31', '2-10', 2, 10, '1-11', 1, 11, '4 February 2024', '1:00 pm', 'NFL Division 3', '2024'),
(16454, '2', '3', 'Westmeath', '29', 'Clare', '5', '1-11', 1, 11, '0-13', 0, 13, '4 February 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16455, '3', '3', 'Antrim', '1', 'Down', '9', '1-6', 1, 6, '1-15', 1, 15, '18 February 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16456, '3', '3', 'Limerick', '16', 'Sligo', '25', '0-10', 0, 10, '1-12', 1, 12, '18 February 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16457, '3', '3', 'Offaly', '23', 'Clare', '5', '1-12', 1, 12, '2-10', 2, 10, '18 February 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16458, '3', '3', 'Wicklow', '31', 'Westmeath', '29', '0-10', 0, 10, '1-13', 1, 13, '18 February 2024', '1:00 pm', 'NFL Division 3', '2024'),
(16459, '4', '3', 'Down', '9', 'Offaly', '23', '4-12', 4, 12, '2-14', 2, 14, '24 February 2024', '6:00 pm', 'NFL Division 3', '2024'),
(16460, '4', '3', 'Clare', '5', 'Wicklow', '31', '2-15', 2, 15, '0-8', 0, 8, '25 February 2024', '1:00 pm', 'NFL Division 3', '2024'),
(16461, '4', '3', 'Sligo', '25', 'Antrim', '1', '1-20', 1, 20, '1-13', 1, 13, '25 February 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16462, '4', '3', 'Westmeath', '29', 'Limerick', '16', '0-14', 0, 14, '1-8', 1, 8, '25 February 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16463, '5', '3', 'Limerick', '16', 'Clare', '5', '0', 0, 0, '0', 0, 0, '2 March 2024', '6:00 pm', 'NFL Division 3', '2024'),
(16464, '5', '3', 'Antrim', '1', 'Westmeath', '29', '0', 0, 0, '0', 0, 0, '3 March 2024', '1:00 pm', 'NFL Division 3', '2024'),
(16465, '5', '3', 'Down', '9', 'Sligo', '25', '0', 0, 0, '0', 0, 0, '3 March 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16466, '5', '3', 'Offaly', '23', 'Wicklow', '31', '0', 0, 0, '0', 0, 0, '3 March 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16467, '6', '3', 'Wicklow', '31', 'Limerick', '16', '0', 0, 0, '0', 0, 0, '16 March 2024', '3:00 pm', 'NFL Division 3', '2024'),
(16468, '6', '3', 'Clare', '5', 'Antrim', '1', '0', 0, 0, '0', 0, 0, '17 March 2024', '12:30 pm', 'NFL Division 3', '2024'),
(16469, '6', '3', 'Sligo', '25', 'Offaly', '23', '0', 0, 0, '0', 0, 0, '17 March 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16470, '6', '3', 'Westmeath', '29', 'Down', '9', '0', 0, 0, '0', 0, 0, '17 March 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16471, '7', '3', 'Antrim', '1', 'Wicklow', '31', '0', 0, 0, '0', 0, 0, '24 March 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16472, '7', '3', 'Down', '9', 'Clare', '5', '0', 0, 0, '0', 0, 0, '24 March 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16473, '7', '3', 'Offaly', '23', 'Limerick', '16', '0', 0, 0, '0', 0, 0, '24 March 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16474, '7', '3', 'Sligo', '25', 'Westmeath', '29', '0', 0, 0, '0', 0, 0, '24 March 2024', '2:00 pm', 'NFL Division 3', '2024'),
(16476, '1', '4', 'Laois', '14', 'Longford', '18', '1-12', 1, 12, '2-7', 2, 7, '27 January 2024', '6:00 pm', 'NFL Division 4', '2024'),
(16477, '1', '4', 'Tipperary', '26', 'Carlow', '3', '1-14', 1, 14, '3-10', 3, 10, '27 January 2024', '6:00 pm', 'NFL Division 4', '2024'),
(16478, '1', '4', 'London', '17', 'Wexford', '30', '1-9', 1, 9, '1-13', 1, 13, '28 January 2024', '1:00 pm', 'NFL Division 4', '2024'),
(16479, '1', '4', 'Waterford', '28', 'Leitrim', '15', '1-5', 1, 5, '2-17', 2, 17, '28 January 2024', '2:00 pm', 'NFL Division 4', '2024'),
(16480, '2', '4', 'Carlow', '3', 'Waterford', '28', '1-17', 1, 17, '0-9', 0, 9, '3 February 2024', '6:00 pm', 'NFL Division 4', '2024'),
(16481, '2', '4', 'Wexford', '30', 'Laois', '14', '0-12', 0, 12, '1-19', 1, 19, '3 February 2024', '6:00 pm', 'NFL Division 4', '2024'),
(16482, '2', '4', 'Leitrim', '15', 'London', '17', '1-8', 1, 8, '0-6', 0, 6, '4 February 2024', '1:00 pm', 'NFL Division 4', '2024'),
(16483, '2', '4', 'Longford', '18', 'Tipperary', '26', '0-14', 0, 14, '0-16', 0, 16, '4 February 2024', '2:00 pm', 'NFL Division 4', '2024'),
(16484, '3', '4', 'Waterford', '28', 'Longford', '18', '0-13', 0, 13, '0-16', 0, 16, '17 February 2024', '4:10 pm', 'NFL Division 4', '2024'),
(16485, '3', '4', 'Laois', '14', 'Carlow', '3', '2-14', 2, 14, '0-9', 0, 9, '17 February 2024', '6:00 pm', 'NFL Division 4', '2024'),
(16486, '3', '4', 'London', '17', 'Tipperary', '26', '1-8', 1, 8, '0-11', 0, 11, '18 February 2024', '1:00 pm', 'NFL Division 4', '2024'),
(16487, '3', '4', 'Leitrim', '15', 'Wexford', '30', '3-7', 3, 7, '2-9', 2, 9, '18 February 2024', '2:00 pm', 'NFL Division 4', '2024'),
(16488, '4', '4', 'Wexford', '30', 'Waterford', '28', '0-21', 0, 21, '1-7', 1, 7, '24 February 2024', '5:00 pm', 'NFL Division 4', '2024'),
(16489, '4', '4', 'Longford', '18', 'London', '17', '3-11', 3, 11, '1-10', 1, 10, '25 February 2024', '1:00 pm', 'NFL Division 4', '2024'),
(16490, '4', '4', 'Carlow', '3', 'Leitrim', '15', '2-14', 2, 14, '1-16', 1, 16, '25 February 2024', '2:00 pm', 'NFL Division 4', '2024'),
(16491, '4', '4', 'Tipperary', '26', 'Laois', '14', '1-7', 1, 7, '0-11', 0, 11, '25 February 2024', '2:00 pm', 'NFL Division 4', '2024'),
(16492, '5', '4', 'Carlow', '3', 'Wexford', '30', '0', 0, 0, '0', 0, 0, '2 March 2024', '7:00 pm', 'NFL Division 4', '2024'),
(16493, '5', '4', 'Laois', '14', 'London', '17', '0', 0, 0, '0', 0, 0, '2 March 2024', '7:00 pm', 'NFL Division 4', '2024'),
(16494, '5', '4', 'Tipperary', '26', 'Waterford', '28', '0', 0, 0, '0', 0, 0, '3 March 2024', '2:00 pm', 'NFL Division 4', '2024'),
(16495, '5', '4', 'Longford', '18', 'Leitrim', '15', '0', 0, 0, '0', 0, 0, '3 March 2024', '2:30 pm', 'NFL Division 4', '2024'),
(16496, '6', '4', 'London', '17', 'Waterford', '28', '0', 0, 0, '0', 0, 0, '16 March 2024', '1:00 pm', 'NFL Division 4', '2024'),
(16497, '6', '4', 'Laois', '14', 'Leitrim', '15', '0', 0, 0, '0', 0, 0, '16 March 2024', '4:15 pm', 'NFL Division 4', '2024'),
(16498, '6', '4', 'Tipperary', '26', 'Wexford', '30', '0', 0, 0, '0', 0, 0, '16 March 2024', '6:00 pm', 'NFL Division 4', '2024'),
(16499, '6', '4', 'Longford', '18', 'Carlow', '3', '0', 0, 0, '0', 0, 0, '17 March 2024', '2:00 pm', 'NFL Division 4', '2024'),
(16500, '7', '4', 'Carlow', '3', 'London', '17', '0', 0, 0, '0', 0, 0, '24 March 2024', '1:00 pm', 'NFL Division 4', '2024'),
(16501, '7', '4', 'Waterford', '28', 'Laois', '14', '0', 0, 0, '0', 0, 0, '24 March 2024', '1:00 pm', 'NFL Division 4', '2024'),
(16502, '7', '4', 'Wexford', '30', 'Longford', '18', '0', 0, 0, '0', 0, 0, '24 March 2024', '1:00 pm', 'NFL Division 4', '2024'),
(16503, '7', '4', 'Leitrim', '15', 'Tipperary', '26', '0', 0, 0, '0', 0, 0, '24 March 2024', '1:00 pm', 'NFL Division 4', '2024');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
