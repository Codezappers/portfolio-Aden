"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const SenderEmail = async (formData: FormData) => {
    console.log("Running on the server");
    console.log(formData.get('SenderEmail'));
    console.log(formData.get('message'));

    resend.emails.send({
        from:'onboarding@resend.dev',
        to:"johnaden007@gmial.com",
        subject:"New Contact Form Submission",
    });
};