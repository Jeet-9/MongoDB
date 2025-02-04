const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "jeetdadhaniya4@gmail.com",
        pass: "lwkqzigpdtspswln"
    }
});

module.exports.sendOtp = (to, otp) => {
    let mailOptn = {
        from: "jeetdadhaniya4@gmail.com",
        to: to,
        subject: "Verification OPT",
        text: `Your verification OTP is ${otp}`
    }
    transport.sendMail(mailOptn, (err) => {
        console.log(err ? err : 'OTP send successfully')
    })
}

