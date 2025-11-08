"use server";

import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "Loaded ✅" : "Missing ❌");
export const sendEmail = async (data) => {
    try {
      // Format the email content
      const emailContent = `
        <h1>New Appointment Request</h1>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>City:</strong> ${data.city}</p>
        <p><strong>Course:</strong> ${data.course}</p>
        <p><strong>Study Abroad:</strong> ${data.studyAbroad}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `;

      const studentEmailContent = `
        <!DOCTYPE html>
    <html>
    <head>
    <style>
        body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        }
        .container {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #eaeaea;
        border-radius: 8px;
        background-color: #f9f9f9;
        }
        h1 {
        color: #0056b3;
        }
        .footer {
        margin-top: 20px;
        font-size: 12px;
        color: #999;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <h1>Thank You for Reaching Out!</h1>
        <p>Dear ${data.fullName},</p>
        <p>We have received your submission and our team is currently reviewing it. Below are the details of your submission:</p>
        <ul>
        <li><strong>Full Name:</strong> ${data.fullName}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>City:</strong> ${data.city}</li>
        <li><strong>Course:</strong> ${data.course}</li>
        <li><strong>Study Abroad Destination:</strong> ${data.studyAbroad}</li>
        <li><strong>Message:</strong> ${data.message}</li>
        </ul>
        <p>If any of the information above is incorrect, please contact us at <a href="mailto:info@schoolabroad.org">info@schoolabroad.org</a> to correct it.</p>
        <p>We’ll get back to you within 2-3 business days.</p>
        <p>Thank you for choosing School Abroad. We look forward to assisting you in your journey!</p>
        <p>Best regards,</p>
        <p><strong>The School Abroad Team</strong></p>
        <hr />
        <p class="footer">This is an automated email. Please do not reply to this address. For further assistance, contact <a href="mailto:info@schoolabroad.org">info@schoolabroad.org</a>.</p>
    </div>
    </body>
    </html>
      `;
  
      // Send the email
      await resend.batch.send([
        {
          from: 'School Abroad <info@schoolabroad.org>',
          to: ['schloutside.int@gmail.com'],
          subject: 'New Appointment Request',
          html: emailContent
        },
        {
          from: 'noreply@schoolabroad.org',
          to: [data.email],
          subject: 'Confirmation of Your Submission',
          html: studentEmailContent,
        },
      ]);
  
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
