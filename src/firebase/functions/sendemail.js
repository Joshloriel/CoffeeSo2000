const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('YOUR_SENDGRID_API_KEY');

exports.sendEmail = functions.https.onRequest(async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const msg = {
            to: 'joshlorielsoo@gmail.com', // Replace with recipient email
            from: email,
            subject: `New message from ${name}`,
            text: message,
        };

        await sgMail.send(msg);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('An error occurred while sending the email.');
    }
});
