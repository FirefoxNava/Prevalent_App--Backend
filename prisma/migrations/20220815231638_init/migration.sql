/*
  Warnings:

  - Added the required column `archivos` to the `Empresas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nit` to the `Empresas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Empresas` ADD COLUMN `archivos` CHAR(225) NOT NULL,
    ADD COLUMN `nit` CHAR(225) NOT NULL;
