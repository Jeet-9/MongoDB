const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "dj.patel673@gmail.com",
        pass: "rjruolklabwhhyeb",
    },
});

module.exports.sendOtp = (to,otp) => {
    let mailOptions = {
        from: "dj.patel673@gmail.com",
        to: to,
        subject: "Your OTP is Here",
        text:`your otp is ${otp}`,
    };

    transport.sendMail(mailOptions, (err) => {
        err && console.log(err);
    });
};
