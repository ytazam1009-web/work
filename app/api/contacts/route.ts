import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await req.json();

    const name = body?.name || "";
    const phone = body?.phone || "";
    const email = body?.email || "";
    const postcode = body?.postcode || "";
    const service = body?.service || "";
    const message = body?.message || "";

    await resend.emails.send({
      from: "GB Waste Removals <info@gbwasteremovals.co.uk>",
      to: "info@gbwasteremovals.co.uk",
      replyTo: email,
      subject: `New Waste Removal Quote Request - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f7f9; padding: 40px 20px;">
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e1e8ed;">

            <div style="background-color: #0A1F44; padding: 30px; text-align: center;">
              <h1 style="color: #CF142B; margin: 0; font-size: 24px;">
                New Quote Request
              </h1>
              <p style="color: #ffffff; margin-top: 10px;">
                GB Waste Removals
              </p>
            </div>

            <div style="padding: 40px;">

              <h3 style="color: #0A1F44; border-bottom: 2px solid #CF142B; display: inline-block; padding-bottom: 5px;">
                Customer Details
              </h3>

              <p style="color: #4b5563;">
                <strong>Name:</strong> ${name}
              </p>

              <p style="color: #4b5563;">
                <strong>Phone:</strong> ${phone}
              </p>

              <p style="color: #4b5563;">
                <strong>Email:</strong> ${email}
              </p>

              <p style="color: #4b5563;">
                <strong>Postcode:</strong> ${postcode}
              </p>

              <p style="color: #4b5563;">
                <strong>Service:</strong> ${service}
              </p>

              <h3 style="color: #0A1F44; border-bottom: 2px solid #CF142B; display: inline-block; padding-bottom: 5px; margin-top: 25px;">
                Message
              </h3>

              <div style="background-color: #f9fafb; padding: 20px; border-radius: 12px; border: 1px solid #e5e7eb; color: #374151; line-height: 1.6;">
                ${message}
              </div>

              <div style="text-align: center; margin-top: 30px;">
                <a
                  href="tel:${phone}"
                  style="background-color: #CF142B; color: #ffffff; padding: 15px 30px; border-radius: 12px; text-decoration: none; font-weight: bold; display: inline-block;"
                >
                  Call Customer
                </a>
              </div>

            </div>

            <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                Sent from GB Waste Removals website
              </p>
            </div>

          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);

    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}