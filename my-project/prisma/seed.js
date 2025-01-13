import { PrismaClient, Role} from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();


async function main() {
   

    try {
        if(!process.env.PASSWORD) {
            throw new Error("No password provided");
        }
        const hashedPasswordAdmin = await bcrypt.hash(process.env.PASSWORD, 10);
        await prisma.user.create({
            data: 
                {
                    name: "Kiki",
                    password: hashedPasswordAdmin,
                    role: Role.admin,
                },
            
        });
    
    
    
    console.log(process.env.PASSWORD);
    console.log("bibite");

    const reactStack = await prisma.stack.create({
        data: {
            name: 'React',
        }
    });

    const nodeStack = await prisma.stack.create( {
        data: {
            name: 'nodeJs',
        }
    });

    const nextStack = await prisma.stack.create({
        data: {
            name: 'NextJs', 
        }
    });

    const postgresqlStack = await prisma.stack.create({
        data: {
            name: "postgreSQL",
        }
    });

    const sequelizeStack = await prisma.stack.create({
        data: {
            name: "sequelize",
        }
    });

    const sassStack = await prisma.stack.create({
        data: {
            name: "sass",
        },
    });

    const typescriptStack = await prisma.stack.create({
        data: {
            name: "typescript",
        },
    });

    const tailwindStack = await prisma.stack.create({
        data: {
            name: "tailwind",
        },
    });

    const prismaStack = await prisma.stack.create({
        data: {
            name: "prisma",
        },
    });

    const expressJsStack = await prisma.stack.create({
        data: {
            name: "expressJs",
        },
    });

    const projectCinedelice = await prisma.project.create({
        data: {
            title: "Cinedelice",
            description: "This project is a responsive web application built with React, NodeJs, PostgreSQL, and Sequelize. Users can explore a catalog of movies and TV shows, discovering recipes inspired by dishes seen in the films. Visitors can also create and share their own recipes linked to their favorite movies. With a user-friendly interface, the app offers a seamless experience across all devices. The backend is powered by NodeJs, with efficient database management through Sequelize and PostgreSQL.",
            enterprise: "This collaborative project was undertaken as part of our training program to prepare for the final exam. Its primary goals were to evaluate our individual strengths and weaknesses, enhance our technical expertise, and foster strong teamwork and communication skills. It also served as an opportunity to strengthen our collaboration and problem-solving abilities under real-world conditions.",
            role_date: "Design, Developpment & collaboration Project - 2024",
            stacks: {
                connect: [
                    {id: reactStack.id,},
                    {id: nodeStack.id,},
                    {id: postgresqlStack.id,},
                    {id: sequelizeStack.id,},
                    {id: typescriptStack.id,},
                    {id: expressJsStack.id,},
                    {id: sassStack.id,},
                ],
            },
            images: {
                create: [
                    {url: "/Images/cinedelices.webp",},
                    {url: "/Images/Cinedelice_Home_page.webp",},
                    {url: "/Images/detail.webp",},
                    {url: "/Images/recipes.webp",},
                    {url: "/Images/movies_series.webp",},
                ]
            },
            user: {
                connect: { id: 1 }, 
            },
        },
    });

   const projectSequentiel = await prisma.project.create({
        data: {
            title: "Sequentiel",
            description: "This project is an interactive calendar designed for developers, allowing them to retrieve their GitLab issues and organize them visually through an intuitive interface. Users can drag and drop their tasks into the calendar, accurately track the time spent on each project or issue, and create custom time blocks that can be assigned to developers as well as specific issues. A daily summary tab provides an overview of the completed tasks, with the option to validate the workdays. A future improvement could involve generating a detailed report showing the time spent on each project and task, further enhancing productivity tracking and management.",
            enterprise: "With over 30 years of experience, this company creates innovative and tailored solutions for SMEs, large enterprises, and associations. During my internship, I observed their focus on client needs, delivering effective tools while maintaining strong, professional relationships.",
            role_date: "Implementation & full Development - 2024",
            stacks: {
                connect: [
                    {id: nextStack.id},
                    {id: tailwindStack.id},
                    {id: postgresqlStack.id},
                    {id: prismaStack.id},
                    {id: typescriptStack.id},
                ],
            },
            images: {
                create: [
                    {url: "/Images/sequentiel.webp"},
                    {url: "/Images/edit_sequentiel.webp"},
                    {url: "/Images/calendarview.webp"},
                    {url: "/Images/sequentiel_issue.webp"},
                    {url: "/Images/sequentiel_avalider.webp"}
                ]
            },
            user: {
                connect: { id: 1 },  
            },
        },
       
    });
} catch (error) {
        console.error("Erreur lors de l'execution du seed :", error);
}}

main();