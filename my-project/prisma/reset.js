import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function resetDatabase() {
  try {
    console.log("🔄 Réinitialisation de la base de données...");

    // Supprime toutes les tables et réinitialise les ID
    await prisma.$executeRaw`TRUNCATE TABLE "User", "Stack", "Project", "Image" RESTART IDENTITY CASCADE;`;
    console.log("✅ Toutes les tables ont été réinitialisées avec succès.");

    // Exécute le script de seed pour recréer les données
    console.log("🌱 Exécution du script de seed...");
    await main(); // Appelle la fonction main du script de seed
    console.log("✅ Données insérées avec succès !");
  } catch (error) {
    console.error("❌ Erreur lors de la réinitialisation de la base de données :", error);
  } finally {
    await prisma.$disconnect();
  }
}

async function main() {
  try {
    if (!process.env.PASSWORD) {
      throw new Error("❌ Aucun mot de passe n'a été fourni dans les variables d'environnement.");
    }

    const hashedPasswordAdmin = await bcrypt.hash(process.env.PASSWORD, 10);
    const adminUser = await prisma.user.create({
      data: {
        name: "Kiki",
        password: hashedPasswordAdmin,
        role: Role.admin,
      },
    });

    console.log("✅ Admin inséré :", adminUser);

    // Création des stacks
    const stacks = [
      { name: "React" },
      { name: "NodeJs" },
      { name: "NextJs" },
      { name: "PostgreSQL" },
      { name: "Sequelize" },
      { name: "Sass" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Prisma" },
      { name: "ExpressJs" },
    ];

    const createdStacks = await Promise.all(
      stacks.map((stack) => prisma.stack.create({ data: stack }))
    );

    console.log("✅ Stacks insérées :", createdStacks);

    // Création des projets
    const projectCinedelice = await prisma.project.create({
      data: {
        title: "Cinedelice",
        description:
          "This project is a responsive web application built with React, NodeJs, PostgreSQL, and Sequelize. Users can explore a catalog of movies and TV shows, discovering recipes inspired by dishes seen in the films. Visitors can also create and share their own recipes linked to their favorite movies. With a user-friendly interface, the app offers a seamless experience across all devices. The backend is powered by NodeJs, with efficient database management through Sequelize and PostgreSQL.",
        enterprise:
          "This collaborative project was undertaken as part of our training program to prepare for the final exam. Its primary goals were to evaluate our individual strengths and weaknesses, enhance our technical expertise, and foster strong teamwork and communication skills. It also served as an opportunity to strengthen our collaboration and problem-solving abilities under real-world conditions.",
        role_date: "Design, Development & Collaboration Project - 2024",
        stacks: {
          connect: createdStacks
            .filter((stack) =>
              ["React", "NodeJs", "PostgreSQL", "Sequelize", "Sass", "TypeScript", "ExpressJs"].includes(stack.name)
            )
            .map((stack) => ({ id: stack.id })),
        },
        images: {
          create: [
            { url: "/Images/cinedelices.webp" },
            { url: "/Images/Cinedelice_Home_page.webp" },
            { url: "/Images/detail.webp" },
            { url: "/Images/recipes.webp" },
            { url: "/Images/movies_series.webp" },
          ],
        },
        user: {
          connect: { id: adminUser.id },
        },
      },
    });

    console.log("✅ Projet Cinedelice inséré :", projectCinedelice);

    const projectSequentiel = await prisma.project.create({
      data: {
        title: "Sequentiel",
        description:
          "This project is an interactive calendar designed for developers, allowing them to retrieve their GitLab issues and organize them visually through an intuitive interface. Users can drag and drop their tasks into the calendar, accurately track the time spent on each project or issue, and create custom time blocks that can be assigned to developers as well as specific issues. A daily summary tab provides an overview of the completed tasks, with the option to validate the workdays. A future improvement could involve generating a detailed report showing the time spent on each project and task, further enhancing productivity tracking and management.",
        enterprise:
          "With over 30 years of experience, this company creates innovative and tailored solutions for SMEs, large enterprises, and associations. During my internship, I observed their focus on client needs, delivering effective tools while maintaining strong, professional relationships.",
        role_date: "Implementation & Full Development - 2024",
        stacks: {
          connect: createdStacks
            .filter((stack) =>
              ["NextJs", "Tailwind", "PostgreSQL", "Prisma", "TypeScript"].includes(stack.name)
            )
            .map((stack) => ({ id: stack.id })),
        },
        images: {
          create: [
            { url: "/Images/sequentiel.webp" },
            { url: "/Images/edit_sequentiel.webp" },
            { url: "/Images/calendarview.webp" },
            { url: "/Images/sequentiel_issue.webp" },
            { url: "/Images/sequentiel_avalider.webp" },
          ],
        },
        user: {
          connect: { id: adminUser.id },
        },
      },
    });

    console.log("✅ Projet Sequentiel inséré :", projectSequentiel);
  } catch (error) {
    console.error("❌ Erreur lors de l'exécution du seed :", error);
  }
}

resetDatabase();
