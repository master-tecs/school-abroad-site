import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    // Initialize Resend only when needed (lazy initialization)
    const resend = new Resend(process.env.RESEND_API_KEY);
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
          <h2>New Institution Partnership Request</h2>
          
          <h3>Institution Details</h3>
          <div class="detail"><strong>Institution Name:</strong> ${data.institutionName || "N/A"}</div>
          <div class="detail"><strong>Type of Institution:</strong> ${data.institutionType || "N/A"}</div>
          <div class="detail"><strong>Country:</strong> ${data.country || "N/A"}</div>
          <div class="detail"><strong>City:</strong> ${data.city || "N/A"}</div>
          <div class="detail"><strong>Website:</strong> ${data.website || "N/A"}</div>
          
          <h3>Contact Information</h3>
          <div class="detail"><strong>Contact Person:</strong> ${data.contactName || "N/A"}</div>
          <div class="detail"><strong>Email:</strong> ${data.contactEmail || "N/A"}</div>
          <div class="detail"><strong>Phone:</strong> ${data.contactPhone || "N/A"}</div>
          
          <h3>Program Information</h3>
          <div class="detail"><strong>Programs/Courses Offered:</strong><br>${data.programs || "N/A"}</div>
          <div class="detail"><strong>Student Level of Interest:</strong> ${Array.isArray(data.studentLevels) ? data.studentLevels.join(", ") : data.studentLevels || "N/A"}</div>
          <div class="detail"><strong>Collaboration Interest:</strong> ${Array.isArray(data.collaborationInterests) ? data.collaborationInterests.join(", ") : data.collaborationInterests || "N/A"}</div>
          <div class="detail"><strong>Estimated Annual International Student Capacity:</strong> ${data.annualCapacity || "N/A"}</div>
          
          <h3>Additional Information</h3>
          <div class="detail">${data.additionalInfo || "N/A"}</div>
        </div>
      </body>
      </html>
    `;

    // Send emails
    await resend.batch.send([
      {
        from: "School Abroad <info@schoolabroad.org>",
        to: ["schloutside.int@gmail.com"],
        subject: "New Institution Partnership Request",
        html: adminEmailContent,
      },
      {
        from: "noreply@schoolabroad.org",
        to: [data.contactEmail as string],
        subject: "Thank You for Your Partnership Interest - School Abroad",
        html: confirmationEmail,
      },
    ]);

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing partner submission:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process submission" },
      { status: 500 }
    );
  }
}
