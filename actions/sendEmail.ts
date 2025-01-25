"use server";

import { Resend } from "resend";
import { validateString } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
        return error.message;
    }
    else if (error && typeof error === "object" && "message" in error) {
        return error.message;
    }
};

export const senderEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    // Validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid email",
        };
    }
    if (!validateString(message, 500)) {
        return {
            error: "Invalid message",
        };
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: "johnaden007@gmail.com",
            subject: "New Contact Form Submission",
            replyTo: senderEmail as string,
            text: message as string,
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
};