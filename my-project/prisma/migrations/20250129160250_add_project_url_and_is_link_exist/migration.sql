-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "isLinkExist" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "project_url" TEXT;
