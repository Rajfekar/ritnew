import nodemailer from "nodemailer"

export async function sendMail() {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // replace with your email
        pass: "your-password", // replace with your password
      },
    })

    // setup email data with unicode symbols
    let mailOptions = {
      from: "your-email@gmail.com", // sender address
      to: "recipient-email@example.com", // list of receivers
      subject: "Hello from Nodemailer", // Subject line
      text: "Hello world!", // plain text body
      html: "<b>Hello world!</b>", // html body
    }

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions)
    console.log("Email sent: " + info.response)
  } catch (error) {
    console.log(error)
  }
}
