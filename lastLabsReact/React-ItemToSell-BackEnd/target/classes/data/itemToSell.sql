-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE, SQL_MODE = ''ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION'';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP DATABASE IF EXISTS `itemtosell`;
CREATE SCHEMA IF NOT EXISTS `itemtosell` DEFAULT CHARACTER SET utf8;
USE `itemtosell`;

-- -----------------------------------------------------
-- Table `itemtosell`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itemtosell`.`item`
(
    `id`          INT           NOT NULL AUTO_INCREMENT,
    `title`       VARCHAR(45)   NULL,
    `description` VARCHAR(1023) NULL,
    PRIMARY KEY (`id`),
    INDEX `by_title` (`title` ASC) VISIBLE
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `itemtosell`.`tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itemtosell`.`tags`
(
    `id`  INT         NOT NULL AUTO_INCREMENT,
    `tag` VARCHAR(45) NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `itemtosell`.`item_has_tags`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `itemtosell`.`item_has_tags`
(
    `item_id` INT NOT NULL,
    `tags_id` INT NOT NULL,
    PRIMARY KEY (`item_id`, `tags_id`),
    INDEX `fk_item_has_tags_tags1_idx` (`tags_id` ASC) VISIBLE,
    INDEX `fk_item_has_tags_item_idx` (`item_id` ASC) VISIBLE,
    CONSTRAINT `fk_item_has_tags_item`
        FOREIGN KEY (`item_id`)
            REFERENCES `itemtosell`.`item` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION,
    CONSTRAINT `fk_item_has_tags_tags1`
        FOREIGN KEY (`tags_id`)
            REFERENCES `itemtosell`.`tags` (`id`)
            ON DELETE NO ACTION
            ON UPDATE NO ACTION
)
    ENGINE = InnoDB;


SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `itemtosell`.`item`
-- -----------------------------------------------------
START TRANSACTION;
USE `itemtosell`;
INSERT INTO `itemtosell`.`item` (`id`, `title`, `description`)
VALUES (1, ''zack'', ''lorem ipsum tralalala'');
INSERT INTO `itemtosell`.`item` (`id`, `title`, `description`)
VALUES (2, ''apple'', ''very tasty fruit with tralalalalalalala'');
INSERT INTO `itemtosell`.`item` (`id`, `title`, `description`)
VALUES (3, ''orange'', ''very tasty fruit with tralalalalalalala'');
INSERT INTO `itemtosell`.`item` (`id`, `title`, `description`)
VALUES (4, ''ananas'', ''very tasty fruit with tralalalalalalala'');
INSERT INTO `itemtosell`.`item` (`id`, `title`, `description`)
VALUES (5, ''pineapple'', ''very tasty fruit with tralalalalalalala'');
INSERT INTO `itemtosell`.`item` (`id`, `title`, `description`)
VALUES (6, ''pomagrade'', ''very tasty fruit with tralalalalalalala'');

COMMIT;


-- -----------------------------------------------------
-- Data for table `itemtosell`.`tags`
-- -----------------------------------------------------
START TRANSACTION;
USE `itemtosell`;
INSERT INTO `itemtosell`.`tags` (`id`, `tag`)
VALUES (1, ''fruit'');
INSERT INTO `itemtosell`.`tags` (`id`, `tag`)
VALUES (2, ''veggitable'');
INSERT INTO `itemtosell`.`tags` (`id`, `tag`)
VALUES (3, ''stuff'');

COMMIT;


-- -----------------------------------------------------
-- Data for table `itemtosell`.`item_has_tags`
-- -----------------------------------------------------
START TRANSACTION;
USE `itemtosell`;
INSERT INTO `itemtosell`.`item_has_tags` (`item_id`, `tags_id`)
VALUES (2, 1);
INSERT INTO `itemtosell`.`item_has_tags` (`item_id`, `tags_id`)
VALUES (3, 1);
INSERT INTO `itemtosell`.`item_has_tags` (`item_id`, `tags_id`)
VALUES (4, 1);
INSERT INTO `itemtosell`.`item_has_tags` (`item_id`, `tags_id`)
VALUES (5, 1);
INSERT INTO `itemtosell`.`item_has_tags` (`item_id`, `tags_id`)
VALUES (6, 1);
INSERT INTO `itemtosell`.`item_has_tags` (`item_id`, `tags_id`)
VALUES (1, 3);

COMMIT;

