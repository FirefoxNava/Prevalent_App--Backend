-- CreateTable
CREATE TABLE `Empresas` (
    `id` INTEGER NOT NULL,
    `nombre` CHAR(225) NOT NULL,
    `razonSocial` CHAR(225) NOT NULL,
    `numeroEmpleados` INTEGER NOT NULL,
    `logo` CHAR(225) NOT NULL,
    `estado` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
