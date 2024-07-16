-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mariadb
-- Généré le : mar. 16 juil. 2024 à 21:38
-- Version du serveur : 11.4.2-MariaDB-ubu2404
-- Version de PHP : 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gmao_database`
--

--
-- Déchargement des données de la table `emplacement`
--

INSERT INTO `emplacement` (`id`, `emplacement`) VALUES
(2, 'A1'),
(3, 'A2'),
(4, 'B1'),
(5, 'B2'),
(6, 'C1'),
(7, 'C2'),
(8, 'Zone de livraison');

--
-- Déchargement des données de la table `fabricant`
--

INSERT INTO `fabricant` (`id`, `nom`) VALUES
(1, 'Clid Industrie'),
(2, 'Haco Industries'),
(3, 'Niryo'),
(5, 'SIEM'),
(4, 'Standard Industrie International');

--
-- Déchargement des données de la table `fournisseur`
--

INSERT INTO `fournisseur` (`id`, `nom`) VALUES
(1, 'Clid Industrie'),
(3, 'Espace Equipement'),
(5, 'MANUTAN'),
(2, 'Micron France'),
(4, 'SEQUEM');

--
-- Déchargement des données de la table `intervalle`
--

INSERT INTO `intervalle` (`nb_jours`, `id`) VALUES
(0, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 6),
(6, 7),
(7, 8),
(8, 9),
(9, 10),
(10, 11),
(11, 12),
(12, 13),
(13, 14),
(14, 15),
(15, 16),
(16, 17),
(17, 18),
(18, 19),
(19, 20),
(20, 21),
(21, 22),
(22, 23),
(23, 24),
(24, 25),
(25, 26),
(26, 27),
(27, 28),
(28, 29),
(29, 30),
(30, 31),
(31, 32),
(32, 33),
(33, 34),
(34, 35),
(35, 36),
(36, 37),
(37, 38),
(38, 39),
(39, 40),
(40, 41),
(41, 42),
(42, 43),
(43, 44),
(44, 45),
(45, 46),
(46, 47),
(47, 48),
(48, 49),
(49, 50),
(50, 51),
(51, 52),
(52, 53),
(53, 54),
(54, 55),
(55, 56),
(56, 57),
(57, 58),
(58, 59),
(59, 60),
(60, 61),
(61, 62),
(62, 63),
(63, 64),
(64, 65),
(65, 66),
(66, 67),
(67, 68),
(68, 69),
(69, 70),
(70, 71),
(71, 72),
(72, 73),
(73, 74),
(74, 75),
(75, 76),
(76, 77),
(77, 78),
(78, 79),
(79, 80),
(80, 81),
(81, 82),
(82, 83),
(83, 84),
(84, 85),
(85, 86),
(86, 87),
(87, 88),
(88, 89),
(89, 90),
(90, 91),
(91, 92),
(92, 93),
(93, 94),
(94, 95),
(95, 96),
(96, 97),
(97, 98),
(98, 99),
(99, 100),
(100, 101),
(101, 102),
(102, 103),
(103, 104),
(104, 105),
(105, 106),
(106, 107),
(107, 108),
(108, 109),
(109, 110),
(110, 111),
(111, 112),
(112, 113),
(113, 114),
(114, 115),
(115, 116),
(116, 117),
(117, 118),
(118, 119),
(119, 120),
(120, 121),
(121, 122),
(122, 123),
(123, 124),
(124, 125),
(125, 126),
(126, 127),
(127, 128),
(128, 129),
(129, 130),
(130, 131),
(131, 132),
(132, 133),
(133, 134),
(134, 135),
(135, 136),
(136, 137),
(137, 138),
(138, 139),
(139, 140),
(140, 141),
(141, 142),
(142, 143),
(143, 144),
(144, 145),
(145, 146),
(146, 147),
(147, 148),
(148, 149),
(149, 150),
(150, 151),
(151, 152),
(152, 153),
(153, 154),
(154, 155),
(155, 156),
(156, 157),
(157, 158),
(158, 159),
(159, 160),
(160, 161),
(161, 162),
(162, 163),
(163, 164),
(164, 165),
(165, 166),
(166, 167),
(167, 168),
(168, 169),
(169, 170),
(170, 171),
(171, 172),
(172, 173),
(173, 174),
(174, 175),
(175, 176),
(176, 177),
(177, 178),
(178, 179),
(179, 180),
(180, 181),
(181, 182),
(182, 183),
(183, 184),
(184, 185),
(185, 186),
(186, 187),
(187, 188),
(188, 189),
(189, 190),
(190, 191),
(191, 192),
(192, 193),
(193, 194),
(194, 195),
(195, 196),
(196, 197),
(197, 198),
(198, 199),
(199, 200);

--
-- Déchargement des données de la table `intervention_preventive`
--

INSERT INTO `intervention_preventive` (`id`, `intervalle_id`, `description`, `titre`) VALUES
(1, 32, 'Changement simple de courroie de distribution', 'Changement de courroie'),
(2, 16, 'Revision complète chariot elevateur', 'Revision Chariot elevateur '),
(3, 4, 'Mise à niveau de l\'huile dans le convoyeur', 'Niveau d\'huile convoyeur'),
(4, 3, 'Révision bac à huile chariot elevateur', 'Révision bac à huile '),
(5, 12, 'Revue stock complet', 'Revue stock');

--
-- Déchargement des données de la table `machine`
--

INSERT INTO `machine` (`actif`, `emplacement_id`, `fabricant_id`, `fournisseur_id`, `id`, `modele`) VALUES
(b'1', 8, 4, 2, 1, 'Chariot Elevateur 1400 '),
(b'1', 5, 2, 5, 2, 'Etiqueteuse ET-78453848-M3'),
(b'1', 3, 2, 4, 3, 'Convoyeur CM-284-01'),
(b'1', 7, 3, 3, 4, 'Découpe Laser DL-1598-L07');

--
-- Déchargement des données de la table `piece`
--

INSERT INTO `piece` (`stock`, `fabricant_id`, `fournisseur_id`, `id`, `description`, `nom`) VALUES
(125, 5, 5, 1, 'Boulon 20 pouces', 'Boulon 20'),
(57, 4, 4, 2, 'Boulon 10 pouces', 'Boulon 10'),
(12, 5, 5, 3, 'Courroie cuir 120cm', 'Courroie 120cm'),
(3, 4, 4, 4, 'Bidon de 20 litres', 'Huile 5w15'),
(8, 3, 3, 5, 'Chaine chariot elevateur Tucson', 'Chaine 75 pouces');

--
-- Déchargement des données de la table `statut`
--

INSERT INTO `statut` (`id`, `statut`) VALUES
(3, 'Arret'),
(2, 'En suspen '),
(4, 'Intervention en cours'),
(1, 'Investigation en cours');


--
-- Déchargement des données de la table `type_panne`
--

INSERT INTO `type_panne` (`id`, `nom`) VALUES
(4, 'Courroie craquée'),
(2, 'Fuite d\'huile'),
(1, 'Fuite de liquide'),
(3, 'Pannes multiples');

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`actif`, `emplacement_id`, `id`, `email`, `mdp`, `nom`, `prenom`, `telephone`, `role`) VALUES
(b'1', 8, 2, 'jean.dupont@mail.com', '$2a$10$zw5hXyqpPY3KtGnvVdQ4x.yTY8064ktAXTeaxJMOpdviLyXM4ktJW', 'Dupont', 'Jean', '0645789621', 'RESP_TECH');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
