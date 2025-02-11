import nodemailer from "nodemailer";

async function sendEmail(req, res) {
    try {
        if (req.method !== "POST") {
            return res.status(405).json({
                message: "Method not allowed"
            })
        }
        const { name, email, message } = req.body;
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })
        const mailOptions = {
            from: email,
            to: "officialdev.mehta@gmail.com",
            subject: `Message from ${name}`,
            text: `Email: ${email}\nMessage: ${message}`
        }
        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
        res.status(500).json({ message: "Email sending failed!", error:error.message });
    }
}

export default sendEmail;