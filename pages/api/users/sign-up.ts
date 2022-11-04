import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method, body } = req;
    switch (method) {
        case 'POST':
            try {
                const { email, password, name, phone } = body;
                const hashedPassword = bcrypt.hashSync(password, 10);
                const data = { email, password: hashedPassword, name, phone };
                const user = await prisma.user.create({
                    data: data,
                });
                return res.status(200).json({ message: 'Your account has been registered.', user });
            } catch (error) {
                console.log(error);
                return res.status(500).json({ message: 'Something went wrong please try again.', error });
            }
        default:
            return res.json({ message: 'This HTTP method is not allowed' });
    }
}
