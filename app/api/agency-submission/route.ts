import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { data, confirmationEmail } = await req.json();

    // Format the email content for admin
    const adminEmailContent = `
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
            max-width: 700px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #eaeaea;
            border-radius: 8px;
            background-color: #f9f9f9;
          }
          h2 {
            color: #0071e3;
          }
          h3 {
            color: #0051a0;
            margin-top: 20px;
          }
          .detail {
            margin: 10px 0;
          }
          .detail strong {
            color: #111;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>New Recruiting Agency Partnership Application</h2>
          
          <h3>Agency Details</h3>
          <div class="detail"><strong>Agency/Company Name:</strong> ${data.agencyName || "N/A"}</div>
          <div class="detail"><strong>Country & City of Operation:</strong> ${data.countryCity || "N/A"}</div>
          <div class="detail"><strong>Years of Experience:</strong> ${data.yearsExperience || "N/A"}</div>
          <div class="detail"><strong>Estimated Annual Student Volume:</strong> ${data.annualVolume || "N/A"}</div>
          <div class="detail"><strong>Website/Social Media:</strong> ${data.website || "N/A"}</div>
          
          <h3>Contact Information</h3>
          <div class="detail"><strong>Contact Person:</strong> ${data.contactPerson || "N/A"}</div>
          <div class="detail"><strong>Email:</strong> ${data.email || "N/A"}</div>
          <div class="detail"><strong>Phone:</strong> ${data.phone || "N/A"}</div>
          
          <h3>Target Regions</h3>
          <div class="detail"><strong>Target Student Region(s):</strong> ${Array.isArray(data.targetRegions) ? data.targetRegions.join(", ") : data.targetRegions || "N/A"}</div>
          
          <h3>Additional Information</h3>
          <div class="detail">${data.message || "N/A"}</div>
        </div>
      </body>
      </html>
    `;

    // Send emails
    await resend.batch.send([
      {
        from: "School Abroad <info@schoolabroad.org>",
        to: ["schloutside.int@gmail.com"],
        subject: "New Recruiting Agency Partnership Application",
        html: adminEmailContent,
      },
      {
        from: "noreply@schoolabroad.org",
        to: [data.email as string],
        subject: "Thank You for Your Partnership Interest - School Abroad",
        html: confirmationEmail,
      },
    ]);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing agency submission:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process submission" },
      { status: 500 }
    );
  }
}
