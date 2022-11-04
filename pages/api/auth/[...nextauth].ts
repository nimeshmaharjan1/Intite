import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';

import EmailProvider from 'next-auth/providers/email';

import { readFileSync } from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';

import Handlebars from 'handlebars';

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: 465,
    auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    secure: true,
});

const emailsDir = path.resolve(process.cwd(), 'emails');

const sendVerificationRequest = ({ identifier, url }: { identifier: any; url: string }) => {
    const emailFile = readFileSync(path.join(emailsDir, 'confirm-email.html'), {
        encoding: 'utf8',
    });
    const emailTemplate = Handlebars.compile(emailFile);
    transporter.sendMail({
        from: `"✨ Base" ${process.env.EMAIL_FROM}`,
        to: identifier,
        subject: 'Your sign-in link for Base',
        html: emailTemplate({
            base_url: process.env.NEXTAUTH_URL,
            signin_url: url,
            email: identifier,
        }),
    });
};
const sendWelcomeEmail = async ({ user }: { user: any }) => {
    const { email } = user;

    try {
        const emailFile = readFileSync(path.join(emailsDir, 'welcome.html'), {
            encoding: 'utf8',
        });
        const emailTemplate = Handlebars.compile(emailFile);
        await transporter.sendMail({
            from: `"✨ Base" ${process.env.EMAIL_FROM}`,
            to: email,
            subject: 'Welcome to Base! 🎉',
            html: emailTemplate({
                base_url: process.env.NEXTAUTH_URL,
                support_email: 'maharjannimesh11@gmail.com',
            }),
        });
    } catch (error) {
        console.log(`❌ Unable to send welcome email to user (${email})`);
    }
};

const options = {
    providers: [
        EmailProvider({
            maxAge: 10 * 60,
            sendVerificationRequest,
        }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async signIn(params: any) {
            const {
                user: { email },
            } = params;
            try {
                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
                if (!user) {
                    return false;
                }
                return true;
            } catch (error) {
                return false;
            }
        },
    },
    events: {
        createUser: sendWelcomeEmail,
    },
};
export default NextAuth(options);
