const mongoose = require("mongoose");
const mailSender = require("../utils/mailSender");
const emailTemplate = require("../mail/templates/emailVerificationTemplate")
const OTPSchema = new mongoose.Schema({
	email:{
		type:String,
		require:true,
	},
	otp:{
		type:String,
		require:true,
	},
	createdAt:{
		type:Date,
		default:Date.now,
		expires:60*5,
	},
});

async function sendVerificationEmail(email,otp) {
	try {
		const mailResponse = await mailSender(
			email,
			"Verification Email",
			emailTemplate(otp),
		);
		console.log("Email Sent Successfully:",mailResponse.response);
	} catch (error) {
		console.log("Error Ocuured While sending email",error);
		throw error
	}
}

OTPSchema.pre("save",async function (next) {
	console.log("New document saved to databse")

	if(this.isNew){
		await sendVerificationEmail(this.email,this.otp)
	}
	next();
})
module.exports = mongoose.model("OTP",OTPSchema);