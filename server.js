const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const nodemailer = require('nodemailer');
const { text } = require('body-parser');


const PORT = process.env.PORT || 8000;


app.use(express.static('doc'));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
	res.sendFile(__dirname +'/index.html')
})
app.get('/about.html',(req,res)=>{
	res.sendFile(__dirname +'/about.html')
})
app.get('/services.html',(req,res)=>{
	res.sendFile(__dirname +'/services.html')
})
app.get('/payment.html',(req,res)=>{
	res.sendFile(__dirname +'/payment.html')
})
app.get('/contact.html',(req,res)=>{
	res.sendFile(__dirname +'/contact.html')
})
app.post('/contact.html',(req,res)=>{
	console.log(req.body);
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user:'sayakofflical@gmail.com',
			pass: 'avzzvcibqjvaghdx'
		}
	})

	const mailOptions = {
		from: req.body.email,
		to:'sayakofflical@gmail.com',
		subject:`Message from ${req.body.email}:  ${req.body.message}`,
		text: `Name: ${req.body.name}  
		Email: ${req.body.email} 
		Phone: ${req.body.phone} 
		Message: ${req.body.message}` 
	}

	transporter.sendMail(mailOptions,(error,info) =>{
		if (error) {
			console.log(error);
			res.send('error');
		}else{
			console.log('Email sent' + info.response);
			res.send('success')
		}
	})


})

app.listen(PORT,()=>{
	console.log(`server running on port ${PORT}`)
})