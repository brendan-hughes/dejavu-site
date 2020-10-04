const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

router.post('/', async function (req, res) {
	console.log('Sending email');
	const { name, email, message } = req.body;

	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.NEWSLETTER_EMAIL,
			pass: process.env.NEWSLETTER_PASSWORD,
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail(
		{
			from: email, // sender address
			to: 'dejavuband.getintouch@gmail.com', // list of receivers
			subject: 'Message From ' + name, // Subject line // plain text body
			html: message, // html body
		},
		function (err, data) {
			if (err) {
				console.log(err);
			} else {
				res.send('Success');
			}
		}
	);
});

module.exports = router;
