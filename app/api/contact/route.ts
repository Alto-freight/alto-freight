import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const data = await req.json()

  try {
    await resend.emails.send({
      from: "Alto Freight <onboarding@resend.dev>",
      to: "admin@altofreight.ca",
      subject: "New Quote Request",
      html: `
        <h2>New Freight Quote</h2>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Company:</b> ${data.company}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Message:</b> ${data.message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ error: "Failed" })
  }
}
