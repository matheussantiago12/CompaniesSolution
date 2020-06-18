-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.11-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para api
CREATE DATABASE IF NOT EXISTS `api` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `api`;

-- Copiando estrutura para tabela api.companies
CREATE TABLE IF NOT EXISTS `companies` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `score` double(8,2) NOT NULL DEFAULT 50.00,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela api.companies: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` (`id`, `score`, `name`, `created_at`, `updated_at`) VALUES
	(1, 50.66, 'Empresa Ficticia', '2020-06-17 22:51:00', '2020-06-17 22:56:17'),
	(2, 46.94, 'Matheus Santiago', '2020-06-17 22:51:49', '2020-06-17 22:53:54'),
	(3, 50.00, 'Nome para teste', '2020-06-17 23:03:45', '2020-06-17 23:03:45');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;

-- Copiando estrutura para tabela api.declarations
CREATE TABLE IF NOT EXISTS `declarations` (
  `declarations_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `type` int(11) NOT NULL,
  `company_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`declarations_id`),
  KEY `declarations_company_id_foreign` (`company_id`),
  CONSTRAINT `declarations_company_id_foreign` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela api.declarations: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `declarations` DISABLE KEYS */;
INSERT INTO `declarations` (`declarations_id`, `date`, `type`, `company_id`) VALUES
	(1, '2020-04-15', 0, 1),
	(2, '2020-04-15', 0, 1),
	(3, '2020-04-15', 0, 1),
	(4, '2020-04-15', 1, 1),
	(5, '2020-06-15', 0, 1),
	(6, '2020-06-15', 0, 1),
	(7, '2020-06-15', 0, 1),
	(8, '2020-06-15', 1, 1),
	(9, '2020-06-15', 1, 1),
	(10, '2020-06-15', 1, 1),
	(11, '2020-06-15', 0, 2),
	(12, '2020-06-15', 0, 2),
	(13, '2020-06-15', 0, 2),
	(14, '2020-06-15', 1, 2),
	(15, '2020-06-15', 1, 2),
	(16, '2020-06-15', 1, 2),
	(17, '2020-05-15', 0, 1),
	(18, '2020-05-15', 0, 1),
	(19, '2020-05-15', 0, 1),
	(20, '2020-05-15', 0, 1),
	(21, '2020-05-15', 0, 1),
	(22, '2020-05-15', 0, 1),
	(23, '2020-05-15', 0, 1),
	(24, '2020-05-15', 1, 1),
	(25, '2020-05-15', 1, 1);
/*!40000 ALTER TABLE `declarations` ENABLE KEYS */;

-- Copiando estrutura para tabela api.migrations
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Copiando dados para a tabela api.migrations: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2020_06_12_214107_create_companies_table', 1),
	(2, '2020_06_14_044818_create_declarations_table', 1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
