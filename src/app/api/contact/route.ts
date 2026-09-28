import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { adminTemplate, userTemplate, AppointmentData } from '@/lib/templates'; // Adjust path if needed

export async function POST(req: Request) {
    try {
        const data: AppointmentData = await req.json();

        // Set up your SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const adminEmailHtml = adminTemplate(data);
        const userEmailHtml = userTemplate(data);

        // 1. Send Email to Admin (Clinic)
        await transporter.sendMail({
            from: `Dr. Prachi's Dental Clinic <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL || process.env.SMTP_USER, // Your receiving email
            replyTo: data.email,
            subject: `New Appointment Request from ${data.name}`,
            html: adminEmailHtml,
        });

        // 2. Send Auto-Reply to User
        await transporter.sendMail({
            from: `Dr. Prachi's Dental Clinic <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
            to: data.email,
            subject: 'Appointment Request Received - Dr. Prachi\'s Dental Clinic',
            html: userEmailHtml,
        });

        return NextResponse.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('SMTP Error:', error);
        return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
    }
}