import { Resend } from resend

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req Request) {
  const data = await req.json()

  try {
    await resend.emails.send({
      from Alto Freight onboarding@resend.dev,
      to admin@altofreight.ca,  👈 change if needed
      subject New Quote Request,
      html `
        h2New Freight Quote Requesth2
        pbNameb ${data.name}p
        pbCompanyb ${data.company}p
        pbEmailb ${data.email}p
        pbPhoneb ${data.phone}p
        pbMessagebbr${data.message}p
      `,
    })

    return Response.json({ success true })
  } catch (error) {
    console.error(error)
    return Response.json({ error Email failed })
  }
}
