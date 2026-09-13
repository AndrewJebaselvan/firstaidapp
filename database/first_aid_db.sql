-- MySQL dump 10.13  Distrib 26.7.0, for Win64 (x86_64)
--
-- Host: localhost    Database: first_aid_db
-- ------------------------------------------------------
-- Server version	26.7.0

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
-- Table structure for table `first_aid_topics`
--

DROP TABLE IF EXISTS `first_aid_topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `first_aid_topics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `description` text NOT NULL,
  `instructions` text NOT NULL,
  `warnings` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `quiz_questions`
--

DROP TABLE IF EXISTS `quiz_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz_questions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `question` text NOT NULL,
  `options` json NOT NULL,
  `correct_answer` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `quiz_results`
--

DROP TABLE IF EXISTS `quiz_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz_results` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `score` int NOT NULL,
  `completed_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `quiz_results_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-13 15:45:27
-- MySQL dump 10.13  Distrib 26.7.0, for Win64 (x86_64)
--
-- Host: localhost    Database: first_aid_db
-- ------------------------------------------------------
-- Server version	26.7.0

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
-- Dumping data for table `first_aid_topics`
--

LOCK TABLES `first_aid_topics` WRITE;
/*!40000 ALTER TABLE `first_aid_topics` DISABLE KEYS */;
INSERT INTO `first_aid_topics` VALUES (2,'Burns','Basic awareness for responding to common burns and recognizing when medical attention may be needed.','For a minor thermal burn, cool the affected area with clean, cool running water as soon as possible. Remove clothing or jewelry that is not stuck to the burned area. Keep the person under observation and seek appropriate medical care when the burn is serious or extensive.','Do not apply ice, butter or greasy substances to a burn. Seek urgent medical help for severe or extensive burns, burns involving important body areas, or electrical, chemical or other serious burns.'),(3,'Cuts and Bleeding','Learn how to recognize significant bleeding and understand basic first-aid priorities for wounds.','For life-threatening external bleeding, apply firm direct pressure to the wound and call for emergency help. Continue monitoring the person and provide care appropriate to your level of training.','Continuous or spurting bleeding, a large amount of blood loss, or signs of shock can indicate a life-threatening emergency. Call 112 and seek professional medical care.'),(4,'Choking','Learn to recognize when a person may have a blocked airway and understand the importance of rapid emergency response.','If a person is choking and cannot cough, speak or cry, treat it as an emergency and call for help. Appropriate first-aid care depends on the person and your level of training. If the person becomes unresponsive, begin appropriate emergency care according to your training.','A person who cannot breathe, speak or cough normally may have a severe airway blockage. Call 112 for a life-threatening emergency. Do not perform techniques you have not been trained to perform.'),(5,'Nosebleeds','Basic awareness for helping someone with a nosebleed and recognizing when further medical attention may be required.','Have the person sit slightly forward and pinch the nostrils continuously for 10 to 15 minutes. Stay with them and monitor their condition.','Do not tilt the head backward. Seek urgent medical help for severe bleeding, bleeding that continues despite pressure, or a nosebleed associated with a serious head, neck or spine injury.'),(6,'Fainting','Learn how to respond safely when someone briefly loses consciousness and how to recognize situations requiring emergency help.','Make sure the surrounding area is safe, check the person, and monitor their breathing and responsiveness. If the person is unresponsive or shows signs of a life-threatening condition, call 112 and provide care appropriate to your training.','Do not assume every loss of consciousness is harmless. Emergency help is needed when the person remains unresponsive, is not breathing normally, has serious injuries, or has another obvious life-threatening condition.'),(7,'Sprains and Strains','Learn basic awareness for common muscle, ligament and joint injuries.','Protect the injured area from further harm and monitor the person. Use appropriate first-aid care according to your training and the severity of the injury.','Severe pain, significant swelling, deformity, inability to use the affected area, or other signs of a serious injury require medical evaluation.'),(8,'Insect Bites and Stings','Understand common reactions to insect bites and stings and recognize signs of a severe allergic reaction.','For an uncomplicated sting, remove a visible stinger, wash the area and use a wrapped cold pack. Continue to watch for changes in the person?s condition.','Breathing difficulty, severe allergic-reaction symptoms, or signs of shock require immediate emergency medical attention. Call 112 for a life-threatening emergency.'),(9,'Animal Bites','Learn why animal bites can require medical attention even when the wound appears small.','If an animal bite breaks the skin, clean the wound appropriately and arrange medical evaluation. For life-threatening bleeding, provide appropriate bleeding control and seek emergency help.','Animal bites can lead to infection and may involve rabies or tetanus considerations. Bites from stray or wild animals require prompt professional medical evaluation.'),(10,'Nosebleeds','Learn how to safely manage a common nosebleed and recognize when medical help is needed.','Have the person sit upright and lean slightly forward. Pinch the soft part of the nose continuously for 10 to 15 minutes and have them breathe through the mouth. If bleeding continues or is severe, seek emergency medical help.','Do not tilt the head backward because blood can run into the throat. Seek urgent medical help for heavy bleeding, bleeding after a significant head injury, difficulty breathing, or bleeding that does not stop after about 15 minutes of pressure.'),(11,'Sprains & Fractures','Learn how to recognize possible bone, muscle, and joint injuries and protect the injured area.','Treat a serious injury as a possible fracture. Keep the injured area as still as possible and avoid unnecessary movement. Get medical help for severe pain, deformity, major swelling, or difficulty using the injured area.','Do not try to straighten a deformed limb or push a protruding bone back into place. Emergency help is especially important for injuries involving the head, neck, spine, pelvis, or severe bleeding.'),(12,'Heat Exhaustion & Heatstroke','Understand the warning signs of heat-related illness and how to respond before the condition becomes life-threatening.','Move the person to a cooler environment, loosen excess clothing, and begin cooling the body. Use cool wet cloths, cool water, airflow, or other appropriate cooling methods. If the person has signs of heatstroke, call emergency services and continue rapid cooling.','Heatstroke is a medical emergency. Confusion, loss of responsiveness, seizures, or severe overheating require immediate emergency medical attention.'),(13,'Seizures','Learn how to keep a person safe during and after a seizure.','Protect the person from nearby hazards and allow the seizure to run its course. Do not restrain them or put anything in their mouth. When possible and safe, place an unresponsive but breathing person in the recovery position and monitor their breathing.','Call emergency services for a seizure lasting more than 5 minutes, repeated seizures, a first seizure, serious injury, a seizure occurring in water, or if the person remains unresponsive or is not breathing normally.'),(14,'Poisoning','Learn the first steps to take when someone may have been exposed to a poisonous substance.','Check the scene for safety and identify the substance if it can be done safely. Get emergency medical or poison-control guidance promptly, especially when the person has trouble breathing, altered responsiveness, seizures, or other severe symptoms.','Do not make the person vomit unless specifically instructed by a qualified medical professional. Keep the substance container or label available for responders when possible.'),(15,'Stroke','Learn to recognize the warning signs of a stroke and understand why rapid emergency action matters.','Use the FAST approach: Face, Arms, Speech, Time. Check for facial drooping, weakness in an arm, or abnormal speech. If stroke is suspected, call emergency services immediately and note when the symptoms began or when the person was last known to be well.','Stroke is a time-critical emergency. Do not wait for symptoms to disappear or attempt to drive the person yourself when emergency medical services are available.');
/*!40000 ALTER TABLE `first_aid_topics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-13 15:46:10
-- MySQL dump 10.13  Distrib 26.7.0, for Win64 (x86_64)
--
-- Host: localhost    Database: first_aid_db
-- ------------------------------------------------------
-- Server version	26.7.0

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
-- Dumping data for table `quiz_questions`
--

LOCK TABLES `quiz_questions` WRITE;
/*!40000 ALTER TABLE `quiz_questions` DISABLE KEYS */;
INSERT INTO `quiz_questions` VALUES (2,'What should you do first when approaching an injured or ill person?','[\"Check the scene for safety\", \"Immediately give them food\", \"Move them to another location\", \"Start asking about their medical history\"]','Check the scene for safety'),(3,'A person is unresponsive and not breathing or only gasping. What should you do?','[\"Leave them alone\", \"Call emergency services and begin appropriate care such as CPR\", \"Give them water\", \"Wait for them to wake up\"]','Call emergency services and begin appropriate care such as CPR'),(4,'What is an important first-aid action for life-threatening external bleeding?','[\"Apply direct pressure to the wound\", \"Wash the wound for several minutes\", \"Leave the wound uncovered and wait\", \"Give the person something to drink\"]','Apply direct pressure to the wound'),(5,'Which sign can indicate life-threatening external bleeding?','[\"Continuous or spurting blood flow\", \"A small scratch\", \"Mild skin dryness\", \"A small bruise without bleeding\"]','Continuous or spurting blood flow'),(6,'What should be used to cool a burn?','[\"Cool, clean running water\", \"Butter\", \"Toothpaste\", \"Very hot water\"]','Cool, clean running water'),(7,'What should you do with clothing or jewelry stuck to a burn?','[\"Leave it in place\", \"Pull it off immediately\", \"Cut deeply into the skin\", \"Cover it with butter\"]','Leave it in place'),(8,'Which is a common sign of severe choking?','[\"The person cannot cough, speak, or cry\", \"The person is speaking normally\", \"The person is calmly drinking water\", \"The person is sleeping normally\"]','The person cannot cough, speak, or cry'),(9,'If a choking person can still cough, cry, or speak, what should you generally do?','[\"Encourage them to keep coughing and continue observing them\", \"Give them food\", \"Leave them alone\", \"Force them to lie down\"]','Encourage them to keep coughing and continue observing them'),(10,'At what rate do American Red Cross adult CPR guidelines recommend chest compressions?','[\"40?60 per minute\", \"60?80 per minute\", \"100?120 per minute\", \"140?160 per minute\"]','100?120 per minute'),(11,'Which sequence best represents the basic emergency-action approach taught by the Red Cross?','[\"Check, Call, Care\", \"Run, Hide, Wait\", \"Eat, Rest, Recover\", \"Move, Wash, Cover\"]','Check, Call, Care');
/*!40000 ALTER TABLE `quiz_questions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-13 15:46:17
