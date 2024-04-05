-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: j10a708.p.ssafy.io    Database: artchain
-- ------------------------------------------------------
-- Server version	11.3.2-MariaDB-1:11.3.2+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coin`
--

DROP TABLE IF EXISTS `coin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `coin_amount` decimal(19,2) DEFAULT NULL,
  `inout_flag` varchar(255) DEFAULT NULL,
  `member_id` bigint(20) DEFAULT NULL,
  `transaction_hash` varchar(255) DEFAULT NULL,
  `currency_flow` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coin`
--

LOCK TABLES `coin` WRITE;
/*!40000 ALTER TABLE `coin` DISABLE KEYS */;
INSERT INTO `coin` VALUES (1,'2024-04-04 01:15:25.675006',NULL,'2024-04-04 01:15:25.675006',500.00,'충전',13,'0x6fad3ba489f3d005afed2e9913dcc195824461756875c769099d832445297384',500000),(2,'2024-04-04 01:16:00.901595',NULL,'2024-04-04 01:16:00.901595',500.00,'충전',3,'0x2f751775d95d4b05db230975bc28256b0f5f67bff6fec26e5f9bbee06efd60e3',500000),(3,'2024-04-04 01:17:25.345511',NULL,'2024-04-04 01:17:25.345511',500.00,'충전',12,'0xabf0f6ba21061bccfbaf99607ef169c0e497b39a1a967741d8e1d81c06329c7b',500000),(4,'2024-04-04 01:23:49.995190',NULL,'2024-04-04 01:23:49.995190',500.00,'충전',17,'0xfa564f48e47a244829a6a86035ffd059705af52041dd3cc133996ca0688cdcc4',500000),(5,'2024-04-04 01:24:02.273017',NULL,'2024-04-04 01:24:02.273017',50.00,'충전',18,'0xcc4b3b26c68647e2948487d1f7d687edb5e39db32dd8f50c6d724802693642e1',50000),(7,'2024-04-04 01:41:13.411123',NULL,'2024-04-04 01:41:13.411123',100.00,'충전',22,'0x658ece3da0e37a108d8505aa8365ffa6714fa9c4f77a84f323147f83ce959f9c',100000),(8,'2024-04-04 03:19:14.039643',NULL,'2024-04-04 03:19:14.039643',500.00,'충전',7,'0x78482d2c612e17e5e849ceed9ebe3348f28e72f8143ccbd84d60772622a1db78',500000),(9,'2024-04-04 03:19:26.595151',NULL,'2024-04-04 03:19:26.595151',500.00,'충전',22,'0xe7b6883a22963ae2c0664fd438e244eeda828624ad20a0f47cbf1a501df6680d',500000),(10,'2024-04-04 03:27:01.447659',NULL,'2024-04-04 03:27:01.447659',100.00,'충전',13,'0x5261977764291f0930d7c5694b9d66f801921193b596d8efd1b990c592e46d2c',100000),(11,'2024-04-04 03:28:37.166135',NULL,'2024-04-04 03:28:37.166135',100.00,'충전',3,'0x9088bbdfe3c1e3a80149250be15dfcda4f85d59137dd7229ecfbe721657550a1',100000),(12,'2024-04-04 03:36:14.764759',NULL,'2024-04-04 03:36:14.764759',50.00,'충전',36,'0xb5d654edd40ecd1e51d40972e34c65627f78879a23cc11bd975d86ba2a196d18',50000),(13,'2024-04-04 03:46:48.898356',NULL,'2024-04-04 03:46:48.898356',1000.00,'충전',37,'0x98cbe5cdb0cfe762fdc343f4f65ce4552155efc6f9bb455acc7f9e2abcaf4c9a',1000000),(14,'2024-04-04 03:51:13.458183',NULL,'2024-04-04 03:51:13.458183',1000.00,'충전',3,'0x34eeea5a3598b264b3b8b66498dac0f28a9e6e1f2d516e79eeca98156d9d4936',1000000),(15,'2024-04-04 05:14:49.699595',NULL,'2024-04-04 05:14:49.699595',1000.00,'충전',37,'0x08e7efd96b49ed6c338d331097ca1b14161cb601307222644743a66e58721f20',1000000),(16,'2024-04-04 05:17:50.408511',NULL,'2024-04-04 05:17:50.408511',1000.00,'충전',38,'0xfe5a2d0b5ce15a321a083b39e1223a08de4b9ee0f4a0ec38ddef12d46b4405f1',1000000),(17,'2024-04-04 08:17:49.357640',NULL,'2024-04-04 08:17:49.357640',500.00,'충전',13,'0x36bc7a0e7b81c32e1ae29b140571c1d5e16f6a2b6aac31f1d0c3de759d62ee5e',500000),(18,'2024-04-04 08:18:13.229413',NULL,'2024-04-04 08:18:13.229413',500.00,'환전',13,'0xed3a3842d33b1dbb4822f91aba40d145e65b6a39ce5b6388280778a17e30df4d',500000),(19,'2024-04-04 09:00:37.609286',NULL,'2024-04-04 09:00:37.609286',1000.00,'충전',39,'0xd14bf3f138566e2e4cb7da0f8e0d096b47c4d30336c3aa9ec77285d6a83e1b5d',1000000),(20,'2024-04-04 09:07:01.747555',NULL,'2024-04-04 09:07:01.747555',5000.00,'충전',13,'0x17bd4ed9a9d53650d5e3ea3a28856494d6f3e4ed6f60a41c0949188ebeed800b',5000000),(21,'2024-04-04 09:08:25.089559',NULL,'2024-04-04 09:08:25.089559',1000.00,'충전',3,'0xd3a7be19e44f9270ad247c827a7e6cb70b4e4f0ff4dfb8d2d8f624d1d596b7fb',1000000);
/*!40000 ALTER TABLE `coin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_log`
--

DROP TABLE IF EXISTS `event_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `event_date` datetime NOT NULL,
  `event_type` varchar(256) NOT NULL,
  `event_content` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=228 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_log`
--

LOCK TABLES `event_log` WRITE;
/*!40000 ALTER TABLE `event_log` DISABLE KEYS */;
INSERT INTO `event_log` VALUES (61,'2024-04-04 02:09:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(62,'2024-04-04 02:12:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(63,'2024-04-04 02:15:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(64,'2024-04-04 02:18:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(65,'2024-04-04 02:21:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(66,'2024-04-04 02:24:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(67,'2024-04-04 02:27:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(68,'2024-04-04 02:30:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(69,'2024-04-04 02:33:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(70,'2024-04-04 02:36:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(71,'2024-04-04 02:39:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(72,'2024-04-04 02:40:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(73,'2024-04-04 02:41:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(74,'2024-04-04 02:42:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(75,'2024-04-04 02:42:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(76,'2024-04-04 02:43:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(77,'2024-04-04 02:44:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(78,'2024-04-04 02:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(79,'2024-04-04 02:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(80,'2024-04-04 02:48:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(81,'2024-04-04 02:51:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(82,'2024-04-04 02:54:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(83,'2024-04-04 02:57:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(84,'2024-04-04 03:00:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(85,'2024-04-04 03:03:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(86,'2024-04-04 03:06:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(87,'2024-04-04 03:09:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(88,'2024-04-04 03:12:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(89,'2024-04-04 03:15:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(90,'2024-04-04 03:15:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(91,'2024-04-04 03:18:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(92,'2024-04-04 03:21:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(93,'2024-04-04 03:24:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(94,'2024-04-04 03:27:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(95,'2024-04-04 03:30:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(96,'2024-04-04 03:30:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(97,'2024-04-04 03:33:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(98,'2024-04-04 03:33:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(99,'2024-04-04 03:36:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(100,'2024-04-04 03:36:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(101,'2024-04-04 03:39:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(102,'2024-04-04 03:39:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(103,'2024-04-04 03:42:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(104,'2024-04-04 03:42:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(105,'2024-04-04 03:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(106,'2024-04-04 03:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(107,'2024-04-04 03:48:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[{\"isRecruitSuccess\":true,\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\"}]}'),(108,'2024-04-04 03:48:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(109,'2024-04-04 03:51:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(110,'2024-04-04 03:54:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(111,'2024-04-04 03:57:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(112,'2024-04-04 04:00:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(113,'2024-04-04 04:03:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(114,'2024-04-04 04:06:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(115,'2024-04-04 04:09:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(116,'2024-04-04 04:12:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(117,'2024-04-04 04:15:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(118,'2024-04-04 04:18:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(119,'2024-04-04 04:21:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(120,'2024-04-04 04:24:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(121,'2024-04-04 04:27:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(122,'2024-04-04 04:30:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(123,'2024-04-04 04:33:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(124,'2024-04-04 04:36:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(125,'2024-04-04 04:36:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(126,'2024-04-04 04:39:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(127,'2024-04-04 04:39:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(128,'2024-04-04 04:42:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(129,'2024-04-04 04:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(130,'2024-04-04 04:45:25','settlementAllow','{\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\",\"totalPieceCount\":80,\"settlementAllowResultList\":[{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":49},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10},{\"pieceOwnerWalletAddress\":\"0xbb663a8955b4e4ac2d486a252acee87bf6e7358d\",\"settlementCoinCount\":3}]}'),(131,'2024-04-04 04:47:47','settlementAllow','{\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\",\"totalPieceCount\":80,\"settlementAllowResultList\":[{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":49},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10},{\"pieceOwnerWalletAddress\":\"0xbb663a8955b4e4ac2d486a252acee87bf6e7358d\",\"settlementCoinCount\":3}]}'),(132,'2024-04-04 04:48:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(133,'2024-04-04 04:49:47','settlementAllow','{\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\",\"totalPieceCount\":80,\"settlementAllowResultList\":[{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":49},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10},{\"pieceOwnerWalletAddress\":\"0xbb663a8955b4e4ac2d486a252acee87bf6e7358d\",\"settlementCoinCount\":3}]}'),(134,'2024-04-04 04:51:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[{\"isRecruitSuccess\":true,\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\"}]}'),(135,'2024-04-04 04:52:16','settlementAllow','{\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\",\"totalPieceCount\":80,\"settlementAllowResultList\":[{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":49},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10},{\"pieceOwnerWalletAddress\":\"0xbb663a8955b4e4ac2d486a252acee87bf6e7358d\",\"settlementCoinCount\":3},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":52},{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10}]}'),(136,'2024-04-04 04:53:54','settlementAllow','{\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\",\"totalPieceCount\":80,\"settlementAllowResultList\":[{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":49},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10},{\"pieceOwnerWalletAddress\":\"0xbb663a8955b4e4ac2d486a252acee87bf6e7358d\",\"settlementCoinCount\":3},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":52},{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10}]}'),(137,'2024-04-04 04:54:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(138,'2024-04-04 04:55:08','settlementAllow','{\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\",\"totalPieceCount\":80,\"settlementAllowResultList\":[{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":49},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10},{\"pieceOwnerWalletAddress\":\"0xbb663a8955b4e4ac2d486a252acee87bf6e7358d\",\"settlementCoinCount\":3},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":52},{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10}]}'),(139,'2024-04-04 04:57:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(140,'2024-04-04 05:00:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[{\"isRecruitSuccess\":true,\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\"}]}'),(141,'2024-04-04 05:00:28','settlementAllow','{\"fundingContractAddress\":\"0x91a74Fa7bA4507466F5d09c473488eE49E53192D\",\"totalPieceCount\":80,\"settlementAllowResultList\":[{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":49},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10},{\"pieceOwnerWalletAddress\":\"0xbb663a8955b4e4ac2d486a252acee87bf6e7358d\",\"settlementCoinCount\":3},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":52},{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10},{\"pieceOwnerWalletAddress\":\"0x67F07AFaD0f1528391a0CF8C5058370114B262d6\",\"settlementCoinCount\":21},{\"pieceOwnerWalletAddress\":\"0xf48edbbd8b15ae1025865bb95056b8c97f3852f0\",\"settlementCoinCount\":10},{\"pieceOwnerWalletAddress\":\"0xdabd9681c6fa9c2675f883fb67a1485038087dd3\",\"settlementCoinCount\":52}]}'),(142,'2024-04-04 05:03:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(143,'2024-04-04 05:06:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(144,'2024-04-04 05:09:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(145,'2024-04-04 05:12:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(146,'2024-04-04 05:15:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(147,'2024-04-04 05:18:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(148,'2024-04-04 05:21:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(149,'2024-04-04 05:24:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(150,'2024-04-04 05:27:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(151,'2024-04-04 05:30:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[{\"isRecruitSuccess\":true,\"fundingContractAddress\":\"0xFBf106e6c2f01b5fEc08973fb0877e47066029D7\"}]}'),(152,'2024-04-04 05:33:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(153,'2024-04-04 05:36:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(154,'2024-04-04 05:39:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(155,'2024-04-04 05:42:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(156,'2024-04-04 05:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(157,'2024-04-04 05:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(158,'2024-04-04 05:48:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(159,'2024-04-04 05:48:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(160,'2024-04-04 05:51:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(161,'2024-04-04 05:54:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(162,'2024-04-04 05:57:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(163,'2024-04-04 06:00:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(164,'2024-04-04 06:03:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(165,'2024-04-04 06:06:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(166,'2024-04-04 06:09:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(167,'2024-04-04 06:12:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(168,'2024-04-04 06:15:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(169,'2024-04-04 06:18:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(170,'2024-04-04 06:21:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(171,'2024-04-04 06:24:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(172,'2024-04-04 06:27:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(173,'2024-04-04 06:30:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(174,'2024-04-04 06:33:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(175,'2024-04-04 06:36:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(176,'2024-04-04 06:39:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(177,'2024-04-04 06:42:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(178,'2024-04-04 06:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(179,'2024-04-04 06:48:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(180,'2024-04-04 06:51:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(181,'2024-04-04 06:54:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(182,'2024-04-04 06:57:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(183,'2024-04-04 07:00:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(184,'2024-04-04 07:03:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(185,'2024-04-04 07:06:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(186,'2024-04-04 07:09:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(187,'2024-04-04 07:12:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(188,'2024-04-04 07:15:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(189,'2024-04-04 07:18:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(190,'2024-04-04 07:21:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(191,'2024-04-04 07:24:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(192,'2024-04-04 07:27:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(193,'2024-04-04 07:30:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(194,'2024-04-04 07:33:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(195,'2024-04-04 07:36:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(196,'2024-04-04 07:39:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(197,'2024-04-04 07:42:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(198,'2024-04-04 07:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(199,'2024-04-04 07:48:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(200,'2024-04-04 07:51:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(201,'2024-04-04 07:54:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(202,'2024-04-04 07:57:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(203,'2024-04-04 08:00:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(204,'2024-04-04 08:03:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(205,'2024-04-04 08:06:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(206,'2024-04-04 08:09:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(207,'2024-04-04 08:12:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(208,'2024-04-04 08:15:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(209,'2024-04-04 08:18:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(210,'2024-04-04 08:21:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(211,'2024-04-04 08:24:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(212,'2024-04-04 08:27:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(213,'2024-04-04 08:30:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(214,'2024-04-04 08:33:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(215,'2024-04-04 08:36:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(216,'2024-04-04 08:39:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(217,'2024-04-04 08:42:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(218,'2024-04-04 08:45:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[{\"isRecruitSuccess\":false,\"fundingContractAddress\":\"0x2c9A9865E52a99F283D398a0eFaeB04a3FB985E7\"},{\"isRecruitSuccess\":false,\"fundingContractAddress\":\"0xf91490d34D43989b4a4a9465B8c69A76b761F08c\"}]}'),(219,'2024-04-04 08:48:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[{\"isRecruitSuccess\":true,\"fundingContractAddress\":\"0x628F48169D82626efdA50Be417DB69712EAa5B11\"}]}'),(220,'2024-04-04 08:51:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[{\"isRecruitSuccess\":true,\"fundingContractAddress\":\"0xF46cc1F22dB635bC573cCe109D7047271d95e4e9\"}]}'),(221,'2024-04-04 08:54:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(222,'2024-04-04 08:57:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(223,'2024-04-04 09:00:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[{\"isRecruitSuccess\":false,\"fundingContractAddress\":\"0x2c9A9865E52a99F283D398a0eFaeB04a3FB985E7\"},{\"isRecruitSuccess\":false,\"fundingContractAddress\":\"0xf91490d34D43989b4a4a9465B8c69A76b761F08c\"}]}'),(224,'2024-04-04 09:03:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(225,'2024-04-04 09:06:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(226,'2024-04-04 09:09:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}'),(227,'2024-04-04 09:12:00','fundingProgressStatusCron','{\"fundingRecruitResultList\":[]}');
/*!40000 ALTER TABLE `event_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding`
--

DROP TABLE IF EXISTS `funding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ent_id` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL,
  `poster` varchar(2048) NOT NULL,
  `category` varchar(100) NOT NULL,
  `description_img` varchar(2048) NOT NULL,
  `recruit_start` date NOT NULL,
  `recruit_end` date NOT NULL,
  `settlement` date NOT NULL,
  `goal_coin_count` bigint(20) NOT NULL,
  `now_coin_count` bigint(20) NOT NULL,
  `contract_address` varchar(10000) DEFAULT NULL,
  `total_budget` bigint(20) NOT NULL,
  `unit_price` int(11) NOT NULL,
  `bep` int(11) NOT NULL,
  `progress_status` varchar(255) NOT NULL,
  `is_allow` tinyint(1) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding`
--

LOCK TABLES `funding` WRITE;
/*!40000 ALTER TABLE `funding` DISABLE KEYS */;
INSERT INTO `funding` VALUES (1,14,'디어 에반 핸슨','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EB%94%94%EC%96%B4%20%EC%97%90%EB%B0%98%20%ED%95%B8%EC%8A%A8/cef875e7-f32d-4389-8175-30ff7fedd24c_dearevanhensen.jpg','SHOW','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EB%94%94%EC%96%B4%20%EC%97%90%EB%B0%98%20%ED%95%B8%EC%8A%A8/363c8419-bfa0-45e9-a7a6-2d71e97374ec_dearevanhensen_des.jpg','2024-04-01','2024-04-03','2024-05-04',100,80,'0x91a74Fa7bA4507466F5d09c473488eE49E53192D',200000000,110000,200000000,'SETTLED',1,'2024-04-04 01:47:58.180822',NULL,'2024-04-04 05:00:28.198958'),(4,14,'헬로키티 50주년 특별전','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%ED%97%AC%EB%A1%9C%ED%82%A4%ED%8B%B0%2050%EC%A3%BC%EB%85%84%20%ED%8A%B9%EB%B3%84%EC%A0%84/3c8cc8f6-d444-4db7-a1e4-4e71be4ae5b1_hellokitty.gif','EXHIBITION','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%ED%97%AC%EB%A1%9C%ED%82%A4%ED%8B%B0%2050%EC%A3%BC%EB%85%84%20%ED%8A%B9%EB%B3%84%EC%A0%84/bbdee9f5-fd06-4639-9a80-c6d880adb40b_hellokitty_des.jpg','2024-04-03','2024-04-03','2024-07-31',1000,800,'0xFBf106e6c2f01b5fEc08973fb0877e47066029D7',50000000,20000,50000000,'PENDING_SETTLEMENT',1,'2024-04-04 02:33:50.541131',NULL,'2024-04-04 05:30:00.095593'),(5,15,'애니멘즈 라이브 2024 서울','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A0%EB%8B%88%EB%A9%98%EC%A6%88%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%202024%20%EC%84%9C%EC%9A%B8/5f1c759b-3a8e-4e90-8395-68aa7e32b6ef_%ED%8F%AC%EC%8A%A4%ED%84%B0.gif','SHOW','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A0%EB%8B%88%EB%A9%98%EC%A6%88%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%202024%20%EC%84%9C%EC%9A%B8/3e6ef37c-98e4-4f5f-9c13-c66b7aaf6490_%EC%84%A4%EB%AA%85.jpg','2024-04-03','2024-04-03','2024-04-20',1000,210,'0x2c9A9865E52a99F283D398a0eFaeB04a3FB985E7',10000000,10000,5000000,'RECRUITMENT_FAILED',1,'2024-04-04 02:33:54.260834',NULL,'2024-04-04 09:00:00.006946'),(7,14,'씬','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%94%AC/1367892b-83df-4021-b75d-8ed5443fdd62_%EC%94%AC.jpg','MOVIE','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%94%AC/7046aca4-97c8-47ae-b1c6-031f3996dbd2_%EC%94%AC_des.PNG','2024-04-04','2024-04-18','2024-05-31',1000,0,NULL,1650000000,4300,900000000,'RECRUITMENT_STATUS',1,'2024-04-04 02:38:00.080775',NULL,'2024-04-04 09:12:00.010002'),(8,20,'시카고','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%8B%9C%EC%B9%B4%EA%B3%A0/c7787f58-6bb0-4daa-ad15-6ee82d171078_%EC%8B%9C%EC%B9%B4%EA%B3%A0.jpg','SHOW','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%8B%9C%EC%B9%B4%EA%B3%A0/cde3c65c-d1fe-4076-9c9f-8252641807de_Chicago_Poster.jpg','2024-04-04','2024-04-30','2024-07-30',1000,200,'0xd8F14678CFDD27ED7EB76bbe33c54F28211C13cD',1000000000,50000,1000000000,'RECRUITMENT_STATUS',1,'2024-04-04 02:38:26.959664',NULL,'2024-04-04 05:23:50.702733'),(9,14,'브론테','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EB%B8%8C%EB%A1%A0%ED%85%8C/77660590-efdb-45ff-acc5-98752c1fd7c7_%EB%B8%8C%EB%A1%A0%ED%85%8C.gif','SHOW','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EB%B8%8C%EB%A1%A0%ED%85%8C/954c901c-3a51-4ae5-90ff-2097568a02cc_%EB%B8%8C%EB%A1%A0%ED%85%8C_des.jpg','2024-02-15','2024-04-25','2024-05-31',1000,0,NULL,100000000,30000,50000000,'BEFORE_RECRUITMENT',NULL,'2024-04-04 02:49:14.501664',NULL,'2024-04-04 02:49:14.501664'),(10,20,'겨울왕국','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EA%B2%A8%EC%9A%B8%EC%99%95%EA%B5%AD/a7ad132e-8559-4dff-9278-7919e19b2bd4_%EA%B2%A8%EC%9A%B8%EC%99%95%EA%B5%AD.jpeg','MOVIE','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EA%B2%A8%EC%9A%B8%EC%99%95%EA%B5%AD/cc222a55-e768-4017-a047-d08970ba2a10_%EA%B2%A8%EC%99%95%EC%84%A4%EB%AA%85.jpeg','2024-04-04','2024-04-16','2024-06-30',999,830,'0x9a2276469418C05c48665F40a29660d8193407B4',1000000,10000,1000000,'RECRUITMENT_STATUS',1,'2024-04-04 02:55:08.402340',NULL,'2024-04-04 09:01:37.479337'),(11,15,'애니멘즈 라이브 2024 서울','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A0%EB%8B%88%EB%A9%98%EC%A6%88%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%202024%20%EC%84%9C%EC%9A%B8/670635d4-5b83-4a13-a1ab-c95b620b56e1_%ED%8F%AC%EC%8A%A4%ED%84%B02.gif','EXHIBITION','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A0%EB%8B%88%EB%A9%98%EC%A6%88%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%202024%20%EC%84%9C%EC%9A%B8/56e61cb6-5e27-40ac-ada9-bbdb9b617f50_%EC%84%A4%EB%AA%852.jpg','2024-04-07','2024-04-14','2024-05-01',1000,0,NULL,4000000,30000,2000000,'BEFORE_RECRUITMENT',1,'2024-04-04 02:56:05.625377',NULL,'2024-04-04 05:18:24.371077'),(12,20,'피카소','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%ED%94%BC%EC%B9%B4%EC%86%8C/aea9c216-936c-4de1-9a9e-c8339efaa516_%ED%94%BC%EC%B9%B4%EC%86%8C%EC%A0%84%EC%8B%9C%EC%A0%84.jpeg','EXHIBITION','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%ED%94%BC%EC%B9%B4%EC%86%8C/ff28447c-a6d9-4596-813c-bd8c7ecd7463_%ED%94%BC%EC%B9%B4%EC%86%8C%EC%84%A4%EB%AA%85.jpg','2024-04-03','2024-04-03','2024-06-01',1050,1040,'0x628F48169D82626efdA50Be417DB69712EAa5B11',4999999,10000,4999999,'PENDING_SETTLEMENT',1,'2024-04-04 03:13:14.680055',NULL,'2024-04-04 08:48:00.018515'),(13,14,'데이비드 호크니','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8D%B0%EC%9D%B4%EB%B9%84%EB%93%9C%20%ED%98%B8%ED%81%AC%EB%8B%88/e06d01dc-d82d-4f1a-af80-29f7cabb0583_%EB%8D%B0%EC%9D%B4%EB%B9%84%EB%93%9C%20%ED%98%B8%ED%81%AC%EB%8B%88.gif','EXHIBITION','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EB%8D%B0%EC%9D%B4%EB%B9%84%EB%93%9C%20%ED%98%B8%ED%81%AC%EB%8B%88/b2a3217b-ed62-4943-86fd-6a9b7805531c_%EB%8D%B0%EC%9D%B4%EB%B9%84%EB%93%9C%20%ED%98%B8%ED%81%AC%EB%8B%88_des.jpg','2024-04-04','2024-05-31','2024-06-30',1000,0,'',150000000,30000,100000000,'BEFORE_RECRUITMENT',NULL,'2024-04-04 03:17:05.123475',NULL,'2024-04-04 03:17:05.123475'),(14,20,'그랜드부다페스트호텔','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EA%B7%B8%EB%9E%9C%EB%93%9C%EB%B6%80%EB%8B%A4%ED%8E%98%EC%8A%A4%ED%8A%B8%ED%98%B8%ED%85%94/7a7dd4dc-b201-42f4-9afa-761fb68d73f6_%EA%B7%B8%EB%B6%80%ED%98%B8%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg','MOVIE','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EA%B7%B8%EB%9E%9C%EB%93%9C%EB%B6%80%EB%8B%A4%ED%8E%98%EC%8A%A4%ED%8A%B8%ED%98%B8%ED%85%94/d620e1d2-9935-4d85-b6ed-35cce9ff52cc_%EA%B7%B8%EB%B6%80%ED%98%B8%EC%84%A4%EB%AA%85.jpeg','2024-04-03','2024-04-03','2024-05-14',1000,186,'0xf91490d34D43989b4a4a9465B8c69A76b761F08c',9999998,20000,9999998,'RECRUITMENT_FAILED',1,'2024-04-04 03:18:14.008721',NULL,'2024-04-04 09:00:00.007294'),(15,28,'스튜디오 지브리 타카하타 이사오展','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4+%EC%A7%80%EB%B8%8C%EB%A6%AC+%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%EC%9D%98+%EA%B1%B0%EC%9E%A5+%ED%83%80%EC%B9%B4%ED%95%98%ED%83%80+%EC%9D%B4%EC%82%AC%EC%98%A4%E5%B1%95/image+(6).png','EXHIBITION','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%20%EC%A7%80%EB%B8%8C%EB%A6%AC%20%EC%95%A0%EB%8B%88%EB%A9%94%EC%9D%B4%EC%85%98%EC%9D%98%20%EA%B1%B0%EC%9E%A5%20%ED%83%80%EC%B9%B4%ED%95%98%ED%83%80%20%EC%9D%B4%EC%82%AC%EC%98%A4%E5%B1%95/90197eff-f034-495a-9a2f-958954654457_%E1%84%8C%E1%85%B5%E1%84%87%E1%85%B3%E1%84%85%E1%85%B51.jpeg','2024-04-03','2024-04-03','2024-05-01',300,290,'0xF46cc1F22dB635bC573cCe109D7047271d95e4e9',10000000,15000,5000000,'PENDING_SETTLEMENT',1,'2024-04-04 04:26:34.760484',NULL,'2024-04-04 08:51:00.011204');
/*!40000 ALTER TABLE `funding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding_cost`
--

DROP TABLE IF EXISTS `funding_cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding_cost` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `funding_id` bigint(20) NOT NULL,
  `main_variety` varchar(256) NOT NULL,
  `sub_variety` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding_cost`
--

LOCK TABLES `funding_cost` WRITE;
/*!40000 ALTER TABLE `funding_cost` DISABLE KEYS */;
INSERT INTO `funding_cost` VALUES (1,1,'대관료','60000000'),(2,2,'fes','234'),(3,3,'123','123'),(4,4,'대관료','5000000'),(5,4,'저작권료','10000000'),(6,5,'공연','공연대관비'),(7,5,'공연 외','홍보비'),(8,6,'배우 섭외비','400000000'),(9,7,'순 제작비','영화 제작비'),(10,7,'개봉 비용','33'),(11,8,'무대','40'),(12,8,'출연료(스텝포함)','60'),(13,9,'대관료','공연대관비'),(14,9,'순 제작비','영화 제작비'),(15,10,'인건비','70'),(16,10,'그래픽','30'),(17,11,'홍보','광고홍보비'),(18,11,'전시','전시 대관비'),(19,11,'섭외','연예인 섭외비'),(20,12,'대관료','100'),(21,13,'대관료','전시대관비'),(22,14,'대관','100'),(23,15,'대관비','60'),(24,15,'홍보비','40');
/*!40000 ALTER TABLE `funding_cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding_expected_return`
--

DROP TABLE IF EXISTS `funding_expected_return`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding_expected_return` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `funding_id` bigint(20) NOT NULL,
  `spectator_num` int(11) NOT NULL,
  `expected_return` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding_expected_return`
--

LOCK TABLES `funding_expected_return` WRITE;
/*!40000 ALTER TABLE `funding_expected_return` DISABLE KEYS */;
INSERT INTO `funding_expected_return` VALUES (1,1,30000,5),(2,1,40000,7),(3,1,60000,9),(4,2,32,234),(5,3,1231,23),(6,4,50000,4),(7,4,70000,6),(8,4,90000,8),(9,5,2000,5),(10,5,3000,7),(11,5,5000,10),(12,6,25000,25),(13,7,340000,0),(14,7,500000,27),(15,7,700000,60),(16,8,25000,25),(17,9,50000,3),(18,9,70000,5),(19,9,100000,10),(20,10,150,50),(21,11,2500,3),(22,11,5000,7),(23,11,10000,10),(24,12,550,8),(25,13,30000,2),(26,13,50000,6),(27,13,80000,10),(28,14,75,50),(29,15,15200,125);
/*!40000 ALTER TABLE `funding_expected_return` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding_notice`
--

DROP TABLE IF EXISTS `funding_notice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding_notice` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `funding_id` bigint(20) NOT NULL,
  `title` varchar(3000) NOT NULL,
  `content` text NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding_notice`
--

LOCK TABLES `funding_notice` WRITE;
/*!40000 ALTER TABLE `funding_notice` DISABLE KEYS */;
INSERT INTO `funding_notice` VALUES (1,5,'[추천사]','[박호철이 보증하는 재미]','2024-04-03 18:12:14.000000',NULL,NULL);
/*!40000 ALTER TABLE `funding_notice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding_sale`
--

DROP TABLE IF EXISTS `funding_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding_sale` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `funding_id` bigint(20) NOT NULL,
  `main_variety` varchar(256) NOT NULL,
  `sub_variety` varchar(256) NOT NULL,
  `percentage` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding_sale`
--

LOCK TABLES `funding_sale` WRITE;
/*!40000 ALTER TABLE `funding_sale` DISABLE KEYS */;
INSERT INTO `funding_sale` VALUES (1,1,'관객','티켓비용',100),(2,2,'wer','wer',23),(3,3,'123','123',123),(4,4,'관객','티켓비용',100),(5,5,'공연','관람비',65),(6,5,'공연 외','굿즈',35),(7,6,'관객','관객수',100),(8,7,'극장매출','티켓매출',73),(9,7,'부가매출','판권',15),(10,7,'해외매출','해외매출',12),(11,8,'관객','관람객수',100),(12,9,'관객','티켓비용',80),(13,9,'공연 외','굿즈',20),(14,10,'관람객','관람객',100),(15,11,'전시','관람비',40),(16,11,'전시 외','굿즈',60),(17,12,'관람객','관람객',100),(18,13,'관객','티켓비용',70),(19,13,'관객 외','굿즈',30),(20,14,'관람객','관람객',100),(21,15,'전시','관람',60),(22,15,'전시 외','굿즈',40);
/*!40000 ALTER TABLE `funding_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `funding_schedule`
--

DROP TABLE IF EXISTS `funding_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `funding_schedule` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `funding_id` bigint(20) NOT NULL,
  `schedule_name` varchar(64) NOT NULL,
  `schedule_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `funding_schedule`
--

LOCK TABLES `funding_schedule` WRITE;
/*!40000 ALTER TABLE `funding_schedule` DISABLE KEYS */;
INSERT INTO `funding_schedule` VALUES (1,1,'개막','2024-04-04'),(2,2,'er','2024-04-03'),(3,3,'123','2024-04-11'),(4,4,'전시 시작','2024-04-04'),(5,5,'공연 시작','2024-04-10'),(6,5,'공연 끝','2024-04-12'),(7,6,'중간결산','2024-08-08'),(8,7,'영화 개봉','2024-04-22'),(9,8,'중간결산','2024-06-05'),(10,9,'개봉일','2024-04-11'),(11,10,'중간결산','2024-05-31'),(12,11,'전시 홍보','2024-04-10'),(13,11,'전시 시작','2024-04-17'),(14,11,'전시 마감','2024-04-22'),(15,12,'중간결산','2024-05-15'),(16,13,'전시회 시작','2024-04-25'),(17,14,'호텔방문','2024-05-31'),(18,15,'팬사인회','2024-04-13'),(19,15,'굿즈 한정 판매일','2024-04-14');
/*!40000 ALTER TABLE `funding_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investment_log`
--

DROP TABLE IF EXISTS `investment_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `investment_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `funding_id` bigint(20) DEFAULT NULL,
  `member_id` bigint(20) DEFAULT NULL,
  `transaction_hash` varchar(255) DEFAULT NULL,
  `transaction_time` datetime DEFAULT NULL,
  `coin_count` bigint(20) DEFAULT NULL,
  `piece_count` bigint(20) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investment_log`
--

LOCK TABLES `investment_log` WRITE;
/*!40000 ALTER TABLE `investment_log` DISABLE KEYS */;
INSERT INTO `investment_log` VALUES (1,1,3,'0xfdba37ec1da73245feb73bfa833adc7e0913ae7175ac2556db248f274855b9cc',NULL,10,10,'2024-04-04 03:40:25.488888',NULL,'2024-04-04 03:40:25.488888'),(2,1,7,'0x62dff1536f7d64ba8aa5b56448aa6aedf5bf15a52fb46352a03b792153ea4c9f',NULL,20,20,'2024-04-04 03:40:51.073937',NULL,'2024-04-04 03:40:51.073937'),(3,1,13,'0xd8e813dd2f24eef2ea112b92f806aea83f679b82f627f778327fbbb745cc9e08',NULL,30,30,'2024-04-04 03:41:49.966679',NULL,'2024-04-04 03:41:49.966679'),(4,1,13,'0x2b184022c67eb4833a39122cc80ef641554497c95b88d54a8d2d265966f52c75',NULL,20,20,'2024-04-04 03:44:02.272238',NULL,'2024-04-04 03:44:02.272238'),(5,4,37,'0x9c26059e38f75074069b1cd43314174e594224ac6b3c8750269b8efd865f1125',NULL,500,500,'2024-04-04 03:50:13.629192',NULL,'2024-04-04 03:50:13.629192'),(6,4,3,'0xef9a3b7521fd1c2807174fd12efe4226d3d90af21cc769be10faeb0912a5f90d',NULL,200,200,'2024-04-04 03:50:24.984517',NULL,'2024-04-04 03:50:24.984517'),(7,4,13,'0xfd88fd3765edc12db528de896be92c3ace888c1939c64c2d44a9f8a561901e07',NULL,100,100,'2024-04-04 03:52:01.066966',NULL,'2024-04-04 03:52:01.066966'),(8,8,36,'0x20c92da1ba4a083ad4ce16e560798b0f6c7809db97383460d7f418d9ac5e4709',NULL,10,10,'2024-04-04 04:34:13.634122',NULL,'2024-04-04 04:34:13.634122'),(9,8,36,'0xe66610e409d3ecad47352e42a69b0eb26d8f94ccac8c887e61d4347c65303d55',NULL,10,10,'2024-04-04 04:37:27.461571',NULL,'2024-04-04 04:37:27.461571'),(10,8,36,'0xf7773726323424e0babcabd22417ffbbc5a61d0df665f8d3ddafb4f1398144d9',NULL,10,10,'2024-04-04 04:57:37.096392',NULL,'2024-04-04 04:57:37.096392'),(11,8,37,'0x2e57b1dfae0fa6c0af3630c8b1131c138b2a7754140dc383db35808af81fc3f6',NULL,30,30,'2024-04-04 04:59:02.052049',NULL,'2024-04-04 04:59:02.052049'),(12,12,13,'0xf38b68c73b9a707f1c478a2f95f5e62b751acf2bb6601377983064ef44675852',NULL,30,30,'2024-04-04 05:11:13.728731',NULL,'2024-04-04 05:11:13.728731'),(13,14,36,'0x723f04cc0800d1ccdf6e51ec629d7e97ce8b7e486bdfddae9e6e3754db35e590',NULL,6,6,'2024-04-04 05:15:37.263743',NULL,'2024-04-04 05:15:37.263743'),(14,14,37,'0x7a3491b4de45d9de47f98ab2660421fa46e07a767a48cd87c71b872a3b6df15a',NULL,100,100,'2024-04-04 05:15:51.077121',NULL,'2024-04-04 05:15:51.077121'),(15,14,3,'0x37310043bd12a13c2dc8dafab059e26dba0e2b79a31a7adf145e55248b13bf7b',NULL,30,30,'2024-04-04 05:16:13.323470',NULL,'2024-04-04 05:16:13.323470'),(16,14,38,'0xf139ed6e26934caddadf98822a5677a985d950c73ae07b4935dff686c5647cd6',NULL,50,50,'2024-04-04 05:18:36.821390',NULL,'2024-04-04 05:18:36.821390'),(17,10,38,'0x84dd742a9a95deb9d4f424d68c4bb34a0efb588c434fc344453cb8f398c61103',NULL,30,30,'2024-04-04 05:19:13.348074',NULL,'2024-04-04 05:19:13.348074'),(18,10,38,'0x02cab96ab595f40fe312044d4a8f70ccda8c8780ba4faa89f86bd41f41999733',NULL,100,100,'2024-04-04 05:20:13.056460',NULL,'2024-04-04 05:20:13.056460'),(19,12,38,'0xcbc89902c76abda352acc269dd2c411a579dde7d10a0d061c98277f91f2ead1b',NULL,100,100,'2024-04-04 05:20:49.758496',NULL,'2024-04-04 05:20:49.758496'),(20,15,38,'0xe4c328327b2feb8b5fcf247fe4c246a76274e7d24c6bee3ee720350f2fb9f759',NULL,80,80,'2024-04-04 05:21:37.602244',NULL,'2024-04-04 05:21:37.602244'),(21,5,13,'0xc8eef0fd7523984d99d96b0e8fae064af845252b5e68d53d0298cbfd445d7558',NULL,200,200,'2024-04-04 05:23:13.389894',NULL,'2024-04-04 05:23:13.389894'),(22,12,37,'0xdab51fa8307228bbd0087721676b5e8aef418b20fbb91213d0e638d3327b6de9',NULL,900,900,'2024-04-04 05:23:25.337457',NULL,'2024-04-04 05:23:25.337457'),(23,8,38,'0xe58bf75c3ac801f8708882d6411e0b397dd9bac5c7121cb0f55dff5f9de1fac1',NULL,140,140,'2024-04-04 05:23:50.701159',NULL,'2024-04-04 05:23:50.701159'),(24,15,13,'0xe8f2f4d01da29b995123bd6ece4d4afc9e415277980fed1f9e01595b8f96cf77',NULL,200,200,'2024-04-04 05:31:02.706514',NULL,'2024-04-04 05:31:02.706514'),(25,5,3,'0x3355da91a0d66b61076bfff6be4134bb9e8c5c2e9a833a332a05ac98702b84d7',NULL,10,10,'2024-04-04 08:44:25.505963',NULL,'2024-04-04 08:44:25.505963'),(26,12,3,'0x7fffcc51600e271cb082597d9843c45553737f665868e2c52e2f83460927c8ed',NULL,10,10,'2024-04-04 08:47:24.958525',NULL,'2024-04-04 08:47:24.958525'),(27,15,3,'0x074ebbaed86f11e683353ef39822e4e11dad163d1a4d2088f47e67d0f3963387',NULL,10,10,'2024-04-04 08:48:37.634979',NULL,'2024-04-04 08:48:37.634979'),(28,10,37,'0xfa2a3b25019e817e75c9da01057fabfedebb31ed0daab215c6217f619066b01c',NULL,200,200,'2024-04-04 08:53:13.698483',NULL,'2024-04-04 08:53:13.698483'),(29,10,39,'0xc53f09d2e8ac0b30ec7825c3f21b8f60e52c94e28436be0a9cfe30e33085770b',NULL,500,500,'2024-04-04 09:01:37.477560',NULL,'2024-04-04 09:01:37.477560');
/*!40000 ALTER TABLE `investment_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `market`
--

DROP TABLE IF EXISTS `market`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `market` (
  `coin_per_piece` decimal(19,2) NOT NULL,
  `buyer_id` bigint(20) DEFAULT NULL,
  `funding_id` bigint(20) NOT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `piece_count` bigint(20) NOT NULL,
  `seller_id` bigint(20) NOT NULL,
  `total_coin` bigint(20) NOT NULL,
  `transaction_time` datetime(6) DEFAULT NULL,
  `contract_address` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `transaction_hash` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market`
--

LOCK TABLES `market` WRITE;
/*!40000 ALTER TABLE `market` DISABLE KEYS */;
INSERT INTO `market` VALUES (3.00,37,1,1,2,13,6,NULL,'0x91a74Fa7bA4507466F5d09c473488eE49E53192D','SOLD','0xe83f0da52222fb819ae51071d1899aed890e0ee36aa2b596d65ad58691207d23','2024-04-04 03:54:51.260211',NULL,'2024-04-04 04:09:25.474499'),(6.00,NULL,1,2,5,3,30,NULL,'0x91a74Fa7bA4507466F5d09c473488eE49E53192D','UNLISTED','0xa15a47fe43781fad9d2fa1fe655179b7eca8c9c070c8cd655a8763acb79527cc','2024-04-04 03:56:25.528676',NULL,'2024-04-04 04:45:25.530869'),(2.00,37,1,3,1,13,2,NULL,'0x91a74Fa7bA4507466F5d09c473488eE49E53192D','SOLD','0x6b273f09807ca5f60ac38a6840a8957f492a841500a996f8d632f0ea903f5dc5','2024-04-04 04:00:02.859623',NULL,'2024-04-04 04:10:24.900803'),(2.00,NULL,1,4,5,13,10,NULL,'0x91a74Fa7bA4507466F5d09c473488eE49E53192D','UNLISTED','0xd49c5e3b00558dc64cd148dd6ec76a4e0900ef20964898c58f14eb5ebacfdeb3','2024-04-04 04:00:39.266372',NULL,'2024-04-04 04:45:25.537855'),(14.00,36,1,5,1,37,14,NULL,'0x91a74Fa7bA4507466F5d09c473488eE49E53192D','SOLD','0x79bb5dc9653848c00cc5f3819a33dc91ce91c0a4f6aa00b562dfaad450e2ab29','2024-04-04 05:00:48.817918',NULL,'2024-04-04 05:03:01.349438');
/*!40000 ALTER TABLE `market` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `market_log`
--

DROP TABLE IF EXISTS `market_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `market_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `market_flag` enum('판매','구매','취소') DEFAULT NULL,
  `transaction_hash` varchar(255) DEFAULT NULL,
  `market_id` bigint(20) DEFAULT NULL,
  `member_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `market_log`
--

LOCK TABLES `market_log` WRITE;
/*!40000 ALTER TABLE `market_log` DISABLE KEYS */;
INSERT INTO `market_log` VALUES (1,'2024-04-04 03:54:51.266650',NULL,'2024-04-04 03:54:51.266650','판매','0xe83f0da52222fb819ae51071d1899aed890e0ee36aa2b596d65ad58691207d23',1,13),(2,'2024-04-04 03:56:25.531280',NULL,'2024-04-04 03:56:25.531280','판매','0xa15a47fe43781fad9d2fa1fe655179b7eca8c9c070c8cd655a8763acb79527cc',2,3),(3,'2024-04-04 04:00:02.861843',NULL,'2024-04-04 04:00:02.861843','판매','0x6b273f09807ca5f60ac38a6840a8957f492a841500a996f8d632f0ea903f5dc5',3,13),(4,'2024-04-04 04:00:39.268575',NULL,'2024-04-04 04:00:39.268575','판매','0xd49c5e3b00558dc64cd148dd6ec76a4e0900ef20964898c58f14eb5ebacfdeb3',4,13),(5,'2024-04-04 04:09:25.469132',NULL,'2024-04-04 04:09:25.469132','구매','0x55ed11734e45846e28b4c680c4cc63c93999673d559537dd9462523e0aadcf2e',1,37),(6,'2024-04-04 04:10:24.898565',NULL,'2024-04-04 04:10:24.898565','구매','0x752fa345e554c4f9a97bc5176c66431a8320638c43116551c4e1b9fa0f2f4f1c',3,37),(7,'2024-04-04 05:00:48.825739',NULL,'2024-04-04 05:00:48.825739','판매','0x79bb5dc9653848c00cc5f3819a33dc91ce91c0a4f6aa00b562dfaad450e2ab29',5,37),(8,'2024-04-04 05:03:01.345215',NULL,'2024-04-04 05:03:01.345215','구매','0xb1e8aa5bf3c84138bb1f320ba3f563e31fb147851741ee7a5b14220df74f89cf',5,36);
/*!40000 ALTER TABLE `market_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `is_deleted` bit(1) DEFAULT NULL,
  `wallet_balance` decimal(19,2) DEFAULT 0.00,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `updated_at` datetime(6) DEFAULT NULL,
  `authority` varchar(255) DEFAULT NULL,
  `bank_account` varchar(255) DEFAULT NULL,
  `bank_name` varchar(255) DEFAULT NULL,
  `business_registration_number` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `member_id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `wallet_address` varchar(255) DEFAULT NULL,
  `wallet_password` varchar(255) DEFAULT NULL,
  `permission` enum('Y','N','HOLD') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (_binary '\0',NULL,'2024-04-03 23:27:59.169279',NULL,2,'2024-04-03 23:28:48.562518','ROLE_ADMIN','25391018163107','하나은행',NULL,'artAdmin@gmail.com','artAdmin','관리자','$2a$10$xnmXgcxMvcIEA590cr8Gfe3ObZTQPqa.JNZ83ty/IROL7ddw2e/6W',NULL,'0x2405c4692f8c9f3d149bbe4a4645f6fce66cf816','','Y'),(_binary '\0',2330.00,'2024-04-03 23:31:13.008125',NULL,3,'2024-04-04 09:08:25.090984','ROLE_USER','24697503184','국민은행',NULL,'j@j.com','kaka12','김지은','$2a$10$07YBV08kyol.sTZyJVXXu.kirfti56s3.mO02afPp9hF40qVvhCPm',NULL,'0xf48edbbd8b15ae1025865bb95056b8c97f3852f0','','Y'),(_binary '\0',480.00,'2024-04-03 23:39:26.684876',NULL,7,'2024-04-04 03:40:51.075560','ROLE_USER','2281192811','국민은행',NULL,'didifia@naver.com','didifia','박호철','$2a$10$uWUgvB7M2kUBGV/VORAFBuYrwd5ZrlbAdcg7wdcrmsV4aubT5jQD6',NULL,'0x67F07AFaD0f1528391a0CF8C5058370114B262d6','','Y'),(_binary '\0',500.00,'2024-04-04 01:09:02.678908',NULL,12,'2024-04-04 01:17:25.347264','ROLE_USER','123987309516','국민은행',NULL,'qwer@gmail.com','qwer','허준혁','$2a$10$m..eeMlWyyV1Ak7qgpJNvuahe07W5l0rlYm5MxIi/eJXQiMiQlaRa',NULL,'0xa12ad1c5f6d5558fc5c827795aa7c5d98466c097','','Y'),(_binary '\0',5028.00,'2024-04-04 01:09:53.974091',NULL,13,'2024-04-04 09:07:01.749027','ROLE_USER','7573020000000','국민은행',NULL,'wskyard96@gmail.com','wskyard96','김승우','$2a$10$kZUdsqAJcDiLhdeZ4cUv5u5oyLoeykpxZZH/qh35NHCyIJqn1wMne',NULL,'0xdabd9681c6fa9c2675f883fb67a1485038087dd3','','Y'),(_binary '\0',NULL,'2024-04-04 01:10:04.560251',NULL,14,'2024-04-04 01:26:56.273232','ROLE_COMPANY','1222444675','국민은행','15547799','jmedia@gmail.com','jcompany','제이미디어','$2a$10$L/qzk97xPMu5kQm3EtFP3.y23poWxo/hA8dNa5vVptHwS6Jqqc8Cq','01042338899','0xf48edbbd8b15ae1025865bb95056b8c97f3852f0','','Y'),(_binary '\0',NULL,'2024-04-04 01:10:27.550492',NULL,15,'2024-04-04 01:43:04.984753','ROLE_COMPANY','102039237123','국민은행','1231231123123','abcCom@gmail.com','abcCom','에이비씨컴퍼니','$2a$10$zZu2qJ8O4dN6zyz4XvS8qugy9WCXI4HKBysMNDSNfmnSaDTf06VRa','0101209381','0xcdf981a632bb0736179711327c3756ace09d0f7d','','Y'),(_binary '\0',NULL,'2024-04-04 01:21:17.271688',NULL,16,'2024-04-04 01:22:06.341167','ROLE_USER','1231235436','국민은행',NULL,'d@d.y','kaka123','김지금','$2a$10$L1LsI3MflCdjERFM9Fc3iuRuDbWttvpYIR7CAIzMNUrF6biVtyu1W',NULL,'0xf48edbbd8b15ae1025865bb95056b8c97f3852f0','','Y'),(_binary '\0',500.00,'2024-04-04 01:21:44.568752',NULL,17,'2024-04-04 01:23:49.996755','ROLE_USER','12341234','국민은행',NULL,'qwer@a.com','kimsw2826','박호철','$2a$10$6yTm27XXNFSwH3nPOK10Re7dpeeNc.7Mbvow9DoAF1ft7cIhP6ZPC',NULL,'0xdabd9681c6fa9c2675f883fb67a1485038087dd3','','Y'),(_binary '\0',50.00,'2024-04-04 01:22:54.146058',NULL,18,'2024-04-04 01:24:02.274604','ROLE_USER','13123213','국민은행',NULL,'ssafy@gmail.com','ssafy','김싸피','$2a$10$QOj8GnTp8MeIli1B9aDZQO.vo8EXwK1gjIMMzsEIJjtLG0lzOrgHq',NULL,'0x9630b4b3d0593c02a91836b4b985f1802757ebf4','','Y'),(_binary '\0',NULL,'2024-04-04 01:31:49.444799',NULL,20,'2024-04-04 01:35:10.238922','ROLE_COMPANY','25391018163107','국민은행','1234567891234','artcom@gmail.com','artCom','아트기업','$2a$10$CAc9aCV3SGNGExFmeoh/.OVhc9uolrDvAncOPh3X/lTMY5OXmVNhG','01012341234','0x2405c4692f8c9f3d149bbe4a4645f6fce66cf816','','Y'),(_binary '\0',NULL,'2024-04-04 02:12:04.997129',NULL,28,'2024-04-04 02:20:44.002492','ROLE_COMPANY','1234','국민은행','123','wskyard96@gmail.com','Jhibri','김승우','$2a$10$0JtOPnN3Hv8TJPcGw90JAeYxO40f3GXUrLoPYEUpSlf2cD5phOPje','1025792824','0xdabd9681c6fa9c2675f883fb67a1485038087dd3','','Y'),(_binary '\0',NULL,'2024-04-04 02:32:23.281989',NULL,29,'2024-04-04 02:32:51.023975','ROLE_USER','123123','국민은행',NULL,'a@a.com','asdf','박호철거','$2a$10$PYxqAB/8nk8.91QsJh0mMe4jlwBLbGNplXfdzjm7hooE.Gz5vitjq',NULL,'0xdabd9681c6fa9c2675f883fb67a1485038087dd3','','Y'),(_binary '\0',NULL,'2024-04-04 02:32:48.480984',NULL,30,'2024-04-04 02:32:56.404367','ROLE_USER','1231231','기업은행',NULL,'asdf','asdfgh','asdf','$2a$10$p1a5jVbkJaYTFa1No5C.HuBt.KT7RQty9fedf8W4PKhOHD59T9NlS',NULL,'0x67f07afad0f1528391a0cf8c5058370114b262d6','','Y'),(_binary '\0',NULL,'2024-04-04 02:41:37.902637',NULL,31,'2024-04-04 02:42:07.048692','ROLE_USER','1234','하나은행',NULL,'asdf','zxcv','asdf','$2a$10$bbRC1QgB7AopE29fiQYSHeIxmsJPPYN5C9fH7ipujMZflAxZeNRyC',NULL,'0xdbea880a25ec6dd5de015eb29e84ed388fb989f1','','Y'),(_binary '\0',NULL,'2024-04-04 02:49:47.502339',NULL,32,'2024-04-04 02:50:31.927059','ROLE_USER','123142312','하나은행',NULL,'qwer','gggg','asdf','$2a$10$kbTupxrYQB2B3nmBuSGM6.oU/5Uajs0q/BpFAF7lFgVjN7W8/y2AC',NULL,'0xe8e6620f53c22f8d7286aa4ef8c0536a40a04063','','Y'),(_binary '\0',NULL,'2024-04-04 03:03:12.644683',NULL,33,'2024-04-04 03:04:01.490187','ROLE_USER','123142','기업은행',NULL,'asdf','qqq','asdf','$2a$10$q1pNHEEQgHy5ohGDNpUmEOcYtOsGMXThk.KAqblh1nhlGS4sszCSi',NULL,'0xe8e6620f53c22f8d7286aa4ef8c0536a40a04063','','Y'),(_binary '\0',NULL,'2024-04-04 03:03:42.914652',NULL,34,'2024-04-04 03:04:04.453014','ROLE_USER','123123','국민은행',NULL,'asas12@a.com','asas12','김승우','$2a$10$ugydGDkPh02DGABi449cnuCbIWMl64NueI7hrz0.im36id46uVuZO',NULL,'0x1f3b4d4aa94cf19a212f959402685ac4cf9ff837','','Y'),(_binary '\0',0.00,'2024-04-04 03:35:16.874767',NULL,36,'2024-04-04 05:15:37.265374','ROLE_USER','25391018163107','하나은행',NULL,'uk@naver.com','dmnion','김영욱','$2a$10$L7pDE8YBNFvX4c0Cyp21CeMcx.oCRFi6aQBj.dsGyI2PahphitXSC',NULL,'0x2405c4692f8c9f3d149bbe4a4645f6fce66cf816','','Y'),(_binary '\0',276.00,'2024-04-04 03:45:32.346168',NULL,37,'2024-04-04 08:53:13.700002','ROLE_USER','3123123123','하나은행',NULL,'user1@gmail.com','user1','김말이','$2a$10$EZeGHbsfa4OqJEq9O1cWh.bpf3wwU/uOjQMdqrHxFg.Nn4s612Y5a',NULL,'0xbb663a8955b4e4ac2d486a252acee87bf6e7358d','','Y'),(_binary '\0',500.00,'2024-04-04 05:16:40.392959',NULL,38,'2024-04-04 05:23:50.702547','ROLE_USER','123123123123','국민은행',NULL,'art@gmail.com','artUser','아트유저','$2a$10$1CUsWy3MYDWA5eKhRDkSUeHyscoqBEUb7GpoPELIIjzTySbCL56vO',NULL,'0x2405c4692f8c9f3d149bbe4a4645f6fce66cf816','','Y'),(_binary '\0',500.00,'2024-04-04 08:58:58.327190',NULL,39,'2024-04-04 09:01:37.479039','ROLE_USER','123456789123','국민은행',NULL,'rhkxkd3@naver.com','rhkxkd3','시연용입니다','$2a$10$9rXKZC7tYUeZV5bFBDRc5uLUpfDlnt9VLcVDSbZMn0z.vVGDtk5GW',NULL,'0xa98152de411b3c2ecbccaa199a7f1f855e7c8e90','','Y');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `piece_owner`
--

DROP TABLE IF EXISTS `piece_owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `piece_owner` (
  `funding_id` bigint(20) NOT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` bigint(20) NOT NULL,
  `piece_count` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `piece_owner`
--

LOCK TABLES `piece_owner` WRITE;
/*!40000 ALTER TABLE `piece_owner` DISABLE KEYS */;
INSERT INTO `piece_owner` VALUES (1,1,7,20),(1,2,13,47),(1,3,3,10),(1,4,37,2),(1,5,13,50),(1,6,7,20),(1,7,3,10),(1,8,7,20),(1,9,3,10),(1,10,13,50),(1,11,36,1),(4,12,3,200),(4,13,13,100),(4,14,37,500),(12,15,38,100),(12,16,37,900),(12,17,13,30),(12,18,3,10),(15,19,13,200),(15,20,3,10),(15,21,38,80);
/*!40000 ALTER TABLE `piece_owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `refreshtoken`
--

DROP TABLE IF EXISTS `refreshtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refreshtoken` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `member_id` varchar(255) DEFAULT NULL,
  `refresh` varchar(255) DEFAULT NULL,
  `expiration` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deleted_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=316 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refreshtoken`
--

LOCK TABLES `refreshtoken` WRITE;
/*!40000 ALTER TABLE `refreshtoken` DISABLE KEYS */;
INSERT INTO `refreshtoken` VALUES (10,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE1NDU0NSwiZXhwIjoxNzEyMjQwOTQ1fQ.MePOqg3Lv4mUpBec27I4tjm1oQUpmaH36O9OvTcPdyI','Thu Apr 04 23:29:05 KST 2024','2024-04-03 23:29:05.976816',NULL,'2024-04-03 23:29:05.976816'),(11,'wskyard96','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Indza3lhcmQ5NiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE1NDkzMywiZXhwIjoxNzEyMjQxMzMzfQ.ZKCK732FfRHNJAennlVuZEdT8iglRmyjQv-Ddh2OoKg','Thu Apr 04 23:35:33 KST 2024','2024-04-03 23:35:33.764370',NULL,'2024-04-03 23:35:33.764370'),(17,'wskyard96','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Indza3lhcmQ5NiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE1NTIyMSwiZXhwIjoxNzEyMjQxNjIxfQ.KFmNb3gMhz-0zlUbwCBTZhbJKlvhY__fqZPLkfypE5M','Thu Apr 04 23:40:21 KST 2024','2024-04-03 23:40:21.311244',NULL,'2024-04-03 23:40:21.311244'),(19,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE1NTIyMSwiZXhwIjoxNzEyMjQxNjIxfQ.CCdtQgmNpVAv1MuXnqWhTvtouXOfFhq1CaKCTjf3CJE','Thu Apr 04 23:40:21 KST 2024','2024-04-03 23:40:21.927040',NULL,'2024-04-03 23:40:21.927040'),(22,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNTU1NjYsImV4cCI6MTcxMjI0MTk2Nn0.3br9svj-n7jDYA8_z15rYhNHbnqWuyU50XTdfE597ug','Thu Apr 04 23:46:06 KST 2024','2024-04-03 23:46:06.971153',NULL,'2024-04-03 23:46:06.971153'),(23,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE1NTc2OSwiZXhwIjoxNzEyMjQyMTY5fQ.3RlRk6bkj7MVkgQq2dZoWj3xdHR-58_hEVYWuhPkPdg','Thu Apr 04 23:49:29 KST 2024','2024-04-03 23:49:29.275536',NULL,'2024-04-03 23:49:29.275536'),(24,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE1NTgxNiwiZXhwIjoxNzEyMjQyMjE2fQ.UOnbhWzhuZPmaNP83TtqOLRQR3p-x2rRP0No9k4LJy0','Thu Apr 04 23:50:16 KST 2024','2024-04-03 23:50:16.787810',NULL,'2024-04-03 23:50:16.787810'),(26,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNTc4MzgsImV4cCI6MTcxMjI0NDIzOH0.12aL3ovHJVdD-ubVdWfGE88xU_SIUhK0MMcl48MUxow','Fri Apr 05 00:23:58 KST 2024','2024-04-04 00:23:58.193336',NULL,'2024-04-04 00:23:58.193336'),(28,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNjA0MDQsImV4cCI6MTcxMjI0NjgwNH0.F5VGJjwAizSqiv0D-nhns6EQ30-GNhBHkaM_E2_61Y8','Fri Apr 05 01:06:44 KST 2024','2024-04-04 01:06:44.510372',NULL,'2024-04-04 01:06:44.510372'),(29,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNjA0NDksImV4cCI6MTcxMjI0Njg0OX0.I1QOhzo1Zrv-1P08DoUuxjj7CU7DNLV0Jk6MGrRWDEg','Fri Apr 05 01:07:29 KST 2024','2024-04-04 01:07:29.232660',NULL,'2024-04-04 01:07:29.232660'),(33,'wskyard96','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Indza3lhcmQ5NiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE2MDYwNSwiZXhwIjoxNzEyMjQ3MDA1fQ.W9bL__NsP4gVhHboWQEsWbVdJexc0yKXy18Qy_irLsw','Fri Apr 05 01:10:05 KST 2024','2024-04-04 01:10:05.702886',NULL,'2024-04-04 01:10:05.702886'),(36,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE2MDc2NCwiZXhwIjoxNzEyMjQ3MTY0fQ.cphIHqiyjIvHRM4E6d8Y1ZVIR4Uyqdda2InhjaqbfBo','Fri Apr 05 01:12:44 KST 2024','2024-04-04 01:12:44.327601',NULL,'2024-04-04 01:12:44.327601'),(38,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE2MDk1OSwiZXhwIjoxNzEyMjQ3MzU5fQ._tstauk9f1vydTFiviK3-CyUNr_E_XGMAtuadIIZdIU','Fri Apr 05 01:15:59 KST 2024','2024-04-04 01:15:59.456081',NULL,'2024-04-04 01:15:59.456081'),(46,'jcompany','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Impjb21wYW55IiwiYXV0aG9yaXR5IjoiUk9MRV9DT01QQU5ZIiwiaWF0IjoxNzEyMTYxNjE2LCJleHAiOjE3MTIyNDgwMTZ9.8kPdR9d3pAmpi9BL14jbd7uY13Hv6qvhL--mSD-rr28','Fri Apr 05 01:26:56 KST 2024','2024-04-04 01:26:56.215292',NULL,'2024-04-04 01:26:56.215292'),(49,'jcompany','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Impjb21wYW55IiwiYXV0aG9yaXR5IjoiUk9MRV9DT01QQU5ZIiwiaWF0IjoxNzEyMTYxNzk1LCJleHAiOjE3MTIyNDgxOTV9.07XGU18DmWtM7HMeBObpgBDmH-sPzkGVP2SVVOER8XQ','Fri Apr 05 01:29:55 KST 2024','2024-04-04 01:29:55.449154',NULL,'2024-04-04 01:29:55.449154'),(59,'wskyard96','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Indza3lhcmQ5NiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE2MjcxOCwiZXhwIjoxNzEyMjQ5MTE4fQ.0YVE-usvB9_JJRVMH3lAb6PhoIVUcE2AtMaQnL5TyAQ','Fri Apr 05 01:45:18 KST 2024','2024-04-04 01:45:18.355074',NULL,'2024-04-04 01:45:18.355074'),(65,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE2MzA4NywiZXhwIjoxNzEyMjQ5NDg3fQ.JgDl9bePxktdAxZ56U2MPI-ZoeCPpziBN-XDtYwLV44','Fri Apr 05 01:51:27 KST 2024','2024-04-04 01:51:27.040562',NULL,'2024-04-04 01:51:27.040562'),(102,'asdf','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFzZGYiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNjM1MzAsImV4cCI6MTcxMjI0OTkzMH0.fLnpREryEjvzBpdYie9Q5zSVrvmQ37LWeIqVNbLsrdw','Fri Apr 05 01:58:50 KST 2024','2024-04-04 01:58:50.466762',NULL,'2024-04-04 01:58:50.466762'),(104,'asdfgh','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFzZGZnaCIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE2MzczMSwiZXhwIjoxNzEyMjUwMTMxfQ.HpK_NKssrb-yNR_erdc2yKD31jtG7ssh79MxVYL2SS4','Fri Apr 05 02:02:11 KST 2024','2024-04-04 02:02:11.999000',NULL,'2024-04-04 02:02:11.999000'),(109,'artCom','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydENvbSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2NDM1MiwiZXhwIjoxNzEyMjUwNzUyfQ.138vaKo1V65BWnN38J4gwjYbhfLqOUoE8dftsl04fvU','Fri Apr 05 02:12:32 KST 2024','2024-04-04 02:12:32.136753',NULL,'2024-04-04 02:12:32.136753'),(110,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE2NDM3NywiZXhwIjoxNzEyMjUwNzc3fQ.CAC_6xDl__lFer-s6vCnKD5l24B9A4iE4Q_XimzzMJ8','Fri Apr 05 02:12:57 KST 2024','2024-04-04 02:12:57.959126',NULL,'2024-04-04 02:12:57.959126'),(115,'Jhibri','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6IkpoaWJyaSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2NDkzMSwiZXhwIjoxNzEyMjUxMzMxfQ.4zBs6uUlgyqdJ1Sg2La6p9bBzgWZOvrcGESGs-EPWl8','Fri Apr 05 02:22:11 KST 2024','2024-04-04 02:22:11.044732',NULL,'2024-04-04 02:22:11.044732'),(116,'artCom','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydENvbSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2NDkzMSwiZXhwIjoxNzEyMjUxMzMxfQ.QjFNmz5JleBxxQYoxhzg6abIKRL2_pWI5Y_k_hoOjIY','Fri Apr 05 02:22:11 KST 2024','2024-04-04 02:22:11.694360',NULL,'2024-04-04 02:22:11.694360'),(118,'Jhibri','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6IkpoaWJyaSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2NDk4MywiZXhwIjoxNzEyMjUxMzgzfQ.BhHpKNnUWeeMVTSmVTOJSj8jG0dK0YABtpvEkJGs7Q0','Fri Apr 05 02:23:03 KST 2024','2024-04-04 02:23:03.489536',NULL,'2024-04-04 02:23:03.489536'),(124,'artCom','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydENvbSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2NTIzMiwiZXhwIjoxNzEyMjUxNjMyfQ.dTzsr6ob8pNst-gcqjtrLcLoad3Zr1_9DZxVMDpBikM','Fri Apr 05 02:27:12 KST 2024','2024-04-04 02:27:12.786016',NULL,'2024-04-04 02:27:12.786016'),(134,'zxcv','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Inp4Y3YiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNjYxMjYsImV4cCI6MTcxMjI1MjUyNn0.CIPTdqpO4cjyrVNhOaMKepHFEOIHz9aDhF63h24BI1Y','Fri Apr 05 02:42:06 KST 2024','2024-04-04 02:42:06.909522',NULL,'2024-04-04 02:42:06.909522'),(136,'jcompany','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Impjb21wYW55IiwiYXV0aG9yaXR5IjoiUk9MRV9DT01QQU5ZIiwiaWF0IjoxNzEyMTY2MzMyLCJleHAiOjE3MTIyNTI3MzJ9.Xj3QO6b-XMt3bOGckDkl4F5WBlINxat5NQ4iYLFlLBM','Fri Apr 05 02:45:32 KST 2024','2024-04-04 02:45:32.640006',NULL,'2024-04-04 02:45:32.640006'),(140,'artCom','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydENvbSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2NjQzNSwiZXhwIjoxNzEyMjUyODM1fQ.Opjv8ReeIkB0JO29pE66xubrzf2yb8EMv82ljOYLmQg','Fri Apr 05 02:47:15 KST 2024','2024-04-04 02:47:15.926537',NULL,'2024-04-04 02:47:15.926537'),(143,'gggg','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImdnZ2ciLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNjY2MzEsImV4cCI6MTcxMjI1MzAzMX0.wHbzx0razJXL6ZMsFDOorFOy4Xo_97LGBXu8ZBsUIqs','Fri Apr 05 02:50:31 KST 2024','2024-04-04 02:50:31.831414',NULL,'2024-04-04 02:50:31.831414'),(144,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE2Njc2MSwiZXhwIjoxNzEyMjUzMTYxfQ.dmHXM9-2u43K64WEyrdYdlzkZaMRfaYn4oXczFV1a4Y','Fri Apr 05 02:52:41 KST 2024','2024-04-04 02:52:41.834483',NULL,'2024-04-04 02:52:41.834483'),(159,'Jhibri','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6IkpoaWJyaSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2Nzk3OCwiZXhwIjoxNzEyMjU0Mzc4fQ.oQ7kNFW8fJoaU5WIKHIO747NiTJPRjpR7IpB9wKMv-M','Fri Apr 05 03:12:58 KST 2024','2024-04-04 03:12:58.008197',NULL,'2024-04-04 03:12:58.008197'),(161,'Jhibri','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6IkpoaWJyaSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2Nzk5NCwiZXhwIjoxNzEyMjU0Mzk0fQ.Jsh-W9ZKQp1LKKW-wetroAp0fCBjjgfhVVffEkw1z4k','Fri Apr 05 03:13:14 KST 2024','2024-04-04 03:13:14.756789',NULL,'2024-04-04 03:13:14.756789'),(163,'Jhibri','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6IkpoaWJyaSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2ODAxMywiZXhwIjoxNzEyMjU0NDEzfQ.VFbhwyGY4DFLYaQL-MQaiOon8CUqs5Z6Hrpo4jpKsig','Fri Apr 05 03:13:33 KST 2024','2024-04-04 03:13:33.733959',NULL,'2024-04-04 03:13:33.733959'),(164,'Jhibri','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6IkpoaWJyaSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE2ODAyOSwiZXhwIjoxNzEyMjU0NDI5fQ.oPTUUbiGW1cZJR6Bgv4amET36guyhqH_wXLLGOBwgW4','Fri Apr 05 03:13:49 KST 2024','2024-04-04 03:13:49.495632',NULL,'2024-04-04 03:13:49.495632'),(167,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNjgxNDAsImV4cCI6MTcxMjI1NDU0MH0.0KyhhUNIIx-pI1MNQwS4pZMT4SGdmmlx8nksMRd9g-M','Fri Apr 05 03:15:40 KST 2024','2024-04-04 03:15:40.799580',NULL,'2024-04-04 03:15:40.799580'),(168,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNjgxNTAsImV4cCI6MTcxMjI1NDU1MH0.zaXkxAtPklbiD9tj9dLSJqexE1b5m1Iz6i3bNt_FQhc','Fri Apr 05 03:15:50 KST 2024','2024-04-04 03:15:50.517362',NULL,'2024-04-04 03:15:50.517362'),(169,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNjgyMjAsImV4cCI6MTcxMjI1NDYyMH0.GGClwRcUGkP1iKin3HubPN5OlKOi6PMS2yabOWzIO_A','Fri Apr 05 03:17:00 KST 2024','2024-04-04 03:17:00.455505',NULL,'2024-04-04 03:17:00.455505'),(174,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTY4MzI1LCJleHAiOjE3MTIyNTQ3MjV9.OaS4Wr6YHqPPG6arrJ8-2sUno5DFvJoXgaRWzpy92fo','Fri Apr 05 03:18:45 KST 2024','2024-04-04 03:18:45.200522',NULL,'2024-04-04 03:18:45.200522'),(175,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE2ODU1MCwiZXhwIjoxNzEyMjU0OTUwfQ.5Htg3ACJzuN9IxRUNsoDId6U3pgg8erf3_NSGi6sfRk','Fri Apr 05 03:22:30 KST 2024','2024-04-04 03:22:30.466399',NULL,'2024-04-04 03:22:30.466399'),(176,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE2ODkxMCwiZXhwIjoxNzEyMjU1MzEwfQ.4-R-hyywRfs807vxRW2beAB9UP8sWsg_vwS5etT3Mcw','Fri Apr 05 03:28:30 KST 2024','2024-04-04 03:28:30.582191',NULL,'2024-04-04 03:28:30.582191'),(177,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE2OTA2NiwiZXhwIjoxNzEyMjU1NDY2fQ.BLzgTPGfaP6_ORUFn0r43u9_AuPw4Kb1aWQkTeXoA30','Fri Apr 05 03:31:06 KST 2024','2024-04-04 03:31:06.185747',NULL,'2024-04-04 03:31:06.185747'),(178,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE2OTMyNiwiZXhwIjoxNzEyMjU1NzI2fQ.sP2ZksjxGILz4T--c7x6Khzfh1E7poE62ftyF8TOo_4','Fri Apr 05 03:35:26 KST 2024','2024-04-04 03:35:26.385197',NULL,'2024-04-04 03:35:26.385197'),(185,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTY5NTkwLCJleHAiOjE3MTIyNTU5OTB9.IqsEQLU8gtO571khG5LRkhxX9bkvnwu0ZpNPRDD1vcQ','Fri Apr 05 03:39:50 KST 2024','2024-04-04 03:39:50.519355',NULL,'2024-04-04 03:39:50.519355'),(186,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTY5NjE3LCJleHAiOjE3MTIyNTYwMTd9.miZBgyJAIaXkbipRXa8Rmn_y9qaPETzjKZpWt_7Z_u4','Fri Apr 05 03:40:17 KST 2024','2024-04-04 03:40:17.967516',NULL,'2024-04-04 03:40:17.967516'),(187,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTY5NjM5LCJleHAiOjE3MTIyNTYwMzl9.zb6PVJ1qPYWyKplauoZGxW9Eg2KU_HNvyvNZm11XlSM','Fri Apr 05 03:40:39 KST 2024','2024-04-04 03:40:39.497411',NULL,'2024-04-04 03:40:39.497411'),(188,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTY5Njk2LCJleHAiOjE3MTIyNTYwOTZ9.Z5bWa7QsZSXZQo_2Fw0HcecnGXrOfyJ8RfO9-vhwYMo','Fri Apr 05 03:41:36 KST 2024','2024-04-04 03:41:36.289187',NULL,'2024-04-04 03:41:36.289187'),(190,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTY5NzEzLCJleHAiOjE3MTIyNTYxMTN9.6QBnDZ7UzJe2dFh5kR3SIjg84xjTEU1f4YvRnW6y45c','Fri Apr 05 03:41:53 KST 2024','2024-04-04 03:41:53.512395',NULL,'2024-04-04 03:41:53.512395'),(199,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE3MDIyNSwiZXhwIjoxNzEyMjU2NjI1fQ.8KgO7IDZVtqv8xizmLfMIz19KcZcRQlSONId8zEq8bs','Fri Apr 05 03:50:25 KST 2024','2024-04-04 03:50:25.231107',NULL,'2024-04-04 03:50:25.231107'),(202,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE3MDQxNywiZXhwIjoxNzEyMjU2ODE3fQ.dsbDEflUZybKw6oKYBWhchHGcrxJw6fqkcXXTKETQwM','Fri Apr 05 03:53:37 KST 2024','2024-04-04 03:53:37.910743',NULL,'2024-04-04 03:53:37.910743'),(217,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE3MTcxNSwiZXhwIjoxNzEyMjU4MTE1fQ.fTpqd4VPj9hT5_98wKZyD0HLT4J5Tj278_HsiwIOS7s','Fri Apr 05 04:15:15 KST 2024','2024-04-04 04:15:15.899502',NULL,'2024-04-04 04:15:15.899502'),(219,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE3MTc4NCwiZXhwIjoxNzEyMjU4MTg0fQ.CO6GJQR5x3Jg4VXstXLWGXLuaLj407RjHDhPNOTWUtQ','Fri Apr 05 04:16:24 KST 2024','2024-04-04 04:16:24.151465',NULL,'2024-04-04 04:16:24.151465'),(221,'Jhibri','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6IkpoaWJyaSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE3MTg2MCwiZXhwIjoxNzEyMjU4MjYwfQ.HqQL3LbP9p3nXGy_3tlrVxl9Zbu1-7b8BSN_wv_CyNo','Fri Apr 05 04:17:40 KST 2024','2024-04-04 04:17:40.356278',NULL,'2024-04-04 04:17:40.356278'),(222,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNzIwNjIsImV4cCI6MTcxMjI1ODQ2Mn0.N0jZU2yVqRZuhCI_Wp9hvohx-qF5NxXsZ0UloSiJOgs','Fri Apr 05 04:21:02 KST 2024','2024-04-04 04:21:02.939060',NULL,'2024-04-04 04:21:02.939060'),(228,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE3MjQwMiwiZXhwIjoxNzEyMjU4ODAyfQ.tJ8nvpBgqP-9e03QQ_cirAF9Gea-VtTx32Kd-ZVINGc','Fri Apr 05 04:26:42 KST 2024','2024-04-04 04:26:42.388283',NULL,'2024-04-04 04:26:42.388283'),(230,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE3MjQ5OCwiZXhwIjoxNzEyMjU4ODk4fQ.U28Bh1qm-BBS48ShjF76gWPLHM0wnEqfzAaarcDQhYQ','Fri Apr 05 04:28:18 KST 2024','2024-04-04 04:28:18.236538',NULL,'2024-04-04 04:28:18.236538'),(234,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE3MjY4NiwiZXhwIjoxNzEyMjU5MDg2fQ.z8IiqbpmIZOS3rXtB257U6R60oYXaNAFrBGQ8rfG9eg','Fri Apr 05 04:31:26 KST 2024','2024-04-04 04:31:26.403590',NULL,'2024-04-04 04:31:26.403590'),(235,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE3MjczOCwiZXhwIjoxNzEyMjU5MTM4fQ.rWWkBIRPtZ2DWiBWkmU4e0kx1gEOA-8Qn-7ey9yoln4','Fri Apr 05 04:32:18 KST 2024','2024-04-04 04:32:18.722776',NULL,'2024-04-04 04:32:18.722776'),(237,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTczMDgxLCJleHAiOjE3MTIyNTk0ODF9.nbL9m4a5LjLYSbRKoC7EPl-S1cHK695nTPaSkrweNEY','Fri Apr 05 04:38:01 KST 2024','2024-04-04 04:38:01.937764',NULL,'2024-04-04 04:38:01.937764'),(238,'Jhibri','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6IkpoaWJyaSIsImF1dGhvcml0eSI6IlJPTEVfQ09NUEFOWSIsImlhdCI6MTcxMjE3MzE2MiwiZXhwIjoxNzEyMjU5NTYyfQ.Gw6UkdW7ATd8F1WiIarZfxP-MtZvlpr3yE8_-W8JIQI','Fri Apr 05 04:39:22 KST 2024','2024-04-04 04:39:22.638017',NULL,'2024-04-04 04:39:22.638017'),(247,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE3MzY0NywiZXhwIjoxNzEyMjYwMDQ3fQ.jvF0VJlOiRs_BFAjZjI3ECmIrDnq1Pw8ohCoNDOngYg','Fri Apr 05 04:47:27 KST 2024','2024-04-04 04:47:27.312343',NULL,'2024-04-04 04:47:27.312343'),(248,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE3MzkyMCwiZXhwIjoxNzEyMjYwMzIwfQ.81JFePuAtqtiEjvMaXRfVPwDGucgSZgQkfu6ujf6Nq0','Fri Apr 05 04:52:00 KST 2024','2024-04-04 04:52:00.348196',NULL,'2024-04-04 04:52:00.348196'),(254,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTc0MjQ0LCJleHAiOjE3MTIyNjA2NDR9.kmsA0fpHS6fFTK4B0dJDDyz9NrMCbiFQdJInDKHLgi8','Fri Apr 05 04:57:24 KST 2024','2024-04-04 04:57:24.848125',NULL,'2024-04-04 04:57:24.848125'),(255,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTc0MjQ1LCJleHAiOjE3MTIyNjA2NDV9.h5rZdy2Bgt9dDlNkE3lY-Q8y_RiOsqk8PPStLLlPdXU','Fri Apr 05 04:57:25 KST 2024','2024-04-04 04:57:25.349718',NULL,'2024-04-04 04:57:25.349718'),(264,'jcompany','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Impjb21wYW55IiwiYXV0aG9yaXR5IjoiUk9MRV9DT01QQU5ZIiwiaWF0IjoxNzEyMTc1MDUzLCJleHAiOjE3MTIyNjE0NTN9.P4B6D9ahyI19LY5Ki4Qp_IrYaHQn6YEy8K6tvyNs5w8','Fri Apr 05 05:10:53 KST 2024','2024-04-04 05:10:53.549896',NULL,'2024-04-04 05:10:53.549896'),(266,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE3NTIyMiwiZXhwIjoxNzEyMjYxNjIyfQ.V4kPemGoBpv7kv4dR1UgDninfcPZCHqHsTpksjNjqf0','Fri Apr 05 05:13:42 KST 2024','2024-04-04 05:13:42.696416',NULL,'2024-04-04 05:13:42.696416'),(268,'dmnion','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRtbmlvbiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE3NTI3NiwiZXhwIjoxNzEyMjYxNjc2fQ.aVUyOGrUrDfG3jjqBNaSCTiOuyFxTAYEelpBUY2JHKM','Fri Apr 05 05:14:36 KST 2024','2024-04-04 05:14:36.607786',NULL,'2024-04-04 05:14:36.607786'),(272,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNzUzNjAsImV4cCI6MTcxMjI2MTc2MH0.bkucaj2p5bN32OLYgaU8vngjCFHXuVOOAVxs8H1KrRU','Fri Apr 05 05:16:00 KST 2024','2024-04-04 05:16:00.222043',NULL,'2024-04-04 05:16:00.222043'),(273,'didifia','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImRpZGlmaWEiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNzUzNzcsImV4cCI6MTcxMjI2MTc3N30.06739jLTPE0bxYpX0RAjnus4OHvYJe-B8Ewc1VGg0Qc','Fri Apr 05 05:16:17 KST 2024','2024-04-04 05:16:17.218636',NULL,'2024-04-04 05:16:17.218636'),(275,'artUser','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydFVzZXIiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxNzU0MDYsImV4cCI6MTcxMjI2MTgwNn0.3uyHRqkfEHw6jI91Xw-HpZ8MbzAMTdxBtTlyWeKTdhU','Fri Apr 05 05:16:46 KST 2024','2024-04-04 05:16:46.726273',NULL,'2024-04-04 05:16:46.726273'),(277,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTc1NDc2LCJleHAiOjE3MTIyNjE4NzZ9.XAg3Y4mrWCNM5pxk_u7l0rWMJyxodW2y4gc5jYki07w','Fri Apr 05 05:17:56 KST 2024','2024-04-04 05:17:56.798259',NULL,'2024-04-04 05:17:56.798259'),(285,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE3NjQ3NSwiZXhwIjoxNzEyMjYyODc1fQ.kgM-52NBobQa_xckDeyZ9uAt94nJ0SwAKAs9lErkUII','Fri Apr 05 05:34:35 KST 2024','2024-04-04 05:34:35.431623',NULL,'2024-04-04 05:34:35.431623'),(286,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTc2NTg2LCJleHAiOjE3MTIyNjI5ODZ9.NBHM0zPz3szlqZWYx_GjpU4Z5Bsmx4Gjz4I0dXB8dy8','Fri Apr 05 05:36:26 KST 2024','2024-04-04 05:36:26.963493',NULL,'2024-04-04 05:36:26.963493'),(291,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTc2OTg2LCJleHAiOjE3MTIyNjMzODZ9.ceiPCqBFS9NsMxCQEl_FlA9AGwVH4XNN8u4FSLYtgaY','Fri Apr 05 05:43:06 KST 2024','2024-04-04 05:43:06.848892',NULL,'2024-04-04 05:43:06.848892'),(293,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE3NzQzOSwiZXhwIjoxNzEyMjYzODM5fQ.8M873mAc70Wo1rgMAauW5ZFd6DXqnAqrncKpXLYN7tc','Fri Apr 05 05:50:39 KST 2024','2024-04-04 05:50:39.936022',NULL,'2024-04-04 05:50:39.936022'),(294,'wskyard96','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Indza3lhcmQ5NiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE4MzMyMSwiZXhwIjoxNzEyMjY5NzIxfQ.1CYgH3TpH-BycB2MQOlA_f66erkl4-401MY04zruAJw','Fri Apr 05 07:28:41 KST 2024','2024-04-04 07:28:41.616902',NULL,'2024-04-04 07:28:41.616902'),(295,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE4NDI2NSwiZXhwIjoxNzEyMjcwNjY1fQ.cy1gLdEGkJv_bGYAVs-p2pwr8Q7yafagspwHlmFGj_Y','Fri Apr 05 07:44:25 KST 2024','2024-04-04 07:44:25.640136',NULL,'2024-04-04 07:44:25.640136'),(300,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE4Njk3NywiZXhwIjoxNzEyMjczMzc3fQ.qTRFOkjdbGZcZ-0XnxwG5oGg7FY2j5EN2X8w0v1tGg4','Fri Apr 05 08:29:37 KST 2024','2024-04-04 08:29:37.131462',NULL,'2024-04-04 08:29:37.131462'),(304,'user1','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InVzZXIxIiwiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIiwiaWF0IjoxNzEyMTg4MzI5LCJleHAiOjE3MTIyNzQ3Mjl9.xpowGHCs64zYZHRngjTRlOP-63ROawpA1U6Ryyr4kx0','Fri Apr 05 08:52:09 KST 2024','2024-04-04 08:52:09.100888',NULL,'2024-04-04 08:52:09.100888'),(305,'artUser','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydFVzZXIiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxODg1NTQsImV4cCI6MTcxMjI3NDk1NH0.gSyJRV2qUAZPT7LlmGbGTSRnjeIn0ettTYz3Ab1jzfA','Fri Apr 05 08:55:54 KST 2024','2024-04-04 08:55:54.346177',NULL,'2024-04-04 08:55:54.346177'),(306,'artUser','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydFVzZXIiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxODg2MjIsImV4cCI6MTcxMjI3NTAyMn0.dwnA8upg08HLDQSTsSPac9prIQWh5QDSGj7JZ28tZ7A','Fri Apr 05 08:57:02 KST 2024','2024-04-04 08:57:02.840191',NULL,'2024-04-04 08:57:02.840191'),(307,'rhkxkd3','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InJoa3hrZDMiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxODg3NDgsImV4cCI6MTcxMjI3NTE0OH0.7xQPok3__ZMFYgwYdG-d1E3dUXFgLMRMKgTiWxNjZj4','Fri Apr 05 08:59:08 KST 2024','2024-04-04 08:59:08.828235',NULL,'2024-04-04 08:59:08.828235'),(308,'artAdmin','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6ImFydEFkbWluIiwiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMjE4OTEzNCwiZXhwIjoxNzEyMjc1NTM0fQ.e8Q5w97TPnJ7Nkc-6OO1ljm90aU0uPwC_v_1TfcD83w','Fri Apr 05 09:05:34 KST 2024','2024-04-04 09:05:34.764246',NULL,'2024-04-04 09:05:34.764246'),(310,'qwer','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6InF3ZXIiLCJhdXRob3JpdHkiOiJST0xFX1VTRVIiLCJpYXQiOjE3MTIxODkxMzcsImV4cCI6MTcxMjI3NTUzN30.YmH7qgqZ-vDj2m8hLAKI7TP4ULX-92lE-ipL7yUfPTw','Fri Apr 05 09:05:37 KST 2024','2024-04-04 09:05:37.302633',NULL,'2024-04-04 09:05:37.302633'),(311,'wskyard96','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Indza3lhcmQ5NiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE4OTE2MCwiZXhwIjoxNzEyMjc1NTYwfQ.-BAxWKzJjZo0tKWQwPyEsX6HRdyvxvAsxaJFBbZNimw','Fri Apr 05 09:06:00 KST 2024','2024-04-04 09:06:00.141541',NULL,'2024-04-04 09:06:00.141541'),(314,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE4OTI1MSwiZXhwIjoxNzEyMjc1NjUxfQ.n0sB8WPCysgFXAPmratYNow2DXa3W74h-ih2KrRcrGU','Fri Apr 05 09:07:31 KST 2024','2024-04-04 09:07:31.316805',NULL,'2024-04-04 09:07:31.316805'),(315,'kaka12','eyJhbGciOiJIUzI1NiJ9.eyJjYXRlZ29yeSI6InJlZnJlc2giLCJtZW1iZXJJZCI6Imtha2ExMiIsImF1dGhvcml0eSI6IlJPTEVfVVNFUiIsImlhdCI6MTcxMjE4OTI1MSwiZXhwIjoxNzEyMjc1NjUxfQ.n0sB8WPCysgFXAPmratYNow2DXa3W74h-ih2KrRcrGU','Fri Apr 05 09:07:31 KST 2024','2024-04-04 09:07:31.940622',NULL,'2024-04-04 09:07:31.940622');
/*!40000 ALTER TABLE `refreshtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `settlement`
--

DROP TABLE IF EXISTS `settlement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `settlement` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `ent_id` bigint(20) NOT NULL,
  `funding_id` bigint(20) NOT NULL,
  `settlement_price` bigint(20) NOT NULL,
  `return_rate` int(11) NOT NULL,
  `deposit_date` date NOT NULL,
  `settlement_file` varchar(2048) NOT NULL,
  `status` varchar(64) NOT NULL DEFAULT 'REQUEST' COMMENT 'REQUEST, ALLOW, REJECT',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `settlement`
--

LOCK TABLES `settlement` WRITE;
/*!40000 ALTER TABLE `settlement` DISABLE KEYS */;
INSERT INTO `settlement` VALUES (1,14,1,10000,5,'2024-04-05','https://artchain-bucket.s3.ap-northeast-2.amazonaws.com/%EB%94%94%EC%96%B4%20%EC%97%90%EB%B0%98%20%ED%95%B8%EC%8A%A8/2f2364a5-64a2-4231-b944-102e65ed8f3d_dearevanhensen.jpg','ALLOW');
/*!40000 ALTER TABLE `settlement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'artchain'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-04  9:12:15
