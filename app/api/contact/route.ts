import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, phone, company, message } = body

    await resend.emails.send({
      from: "Alto Freight <onboarding@resend.dev>",
      to: "Admin@altofreight.ca",
      subject: "New Quote Request",
      html: `
        <h2>New Freight Quote</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    })

    return Response.json({ success: true })

  } catch (error) {
    console.error(error)
    return Response.json(
      { error: "Email failed" },
      { status: 500 }
    )
  }
}
