import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
    createUser: async ({ name, email, password }) => {
        try {
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password,
                },
            });
            return user;
        } catch (error) {
            throw new Error('Error creating user');
        }
    },

    findUserByEmail: async (email) => {
        try {
            return await prisma.user.findUnique({ where: { email } });
        } catch (error) {
            console.log(error);
            throw new Error('Error finding user by email');
        }
    },

};
