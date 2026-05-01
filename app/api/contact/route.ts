import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Send email to Alto Freight
    await resend.emails.send({
      from: "Alto Freight Website <onboarding@resend.dev>",
      to: "admin@altofreight.ca",
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0f1729; padding: 20px; text-align: center;">
            <h1 style="color: #d4a553; margin: 0;">New Quote Request</h1>
          </div>
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #0f1729; border-bottom: 2px solid #d4a553; padding-bottom: 10px;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0f1729; width: 120px;">Name:</td>
                <td style="padding: 10px 0; color: #333;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0f1729;">Email:</td>
                <td style="padding: 10px 0; color: #333;"><a href="mailto:${email}" style="color: #d4a553;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0f1729;">Phone:</td>
                <td style="padding: 10px 0; color: #333;"><a href="tel:${phone}" style="color: #d4a553;">${phone}</a></td>
              </tr>
              ` : ""}
              ${company ? `
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #0f1729;">Company:</td>
                <td style="padding: 10px 0; color: #333;">${company}</td>
              </tr>
              ` : ""}
            </table>
            
            <h2 style="color: #0f1729; border-bottom: 2px solid #d4a553; padding-bottom: 10px; margin-top: 30px;">Message</h2>
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #d4a553;">
              <p style="color: #333; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background-color: #0f1729; padding: 15px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">This email was sent from the Alto Freight Network website contact form.</p>
          </div>
        </div>
      `,
      replyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send email:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
