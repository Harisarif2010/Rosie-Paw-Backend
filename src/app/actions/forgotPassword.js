"use server";

import connectMongoDB from "../../../libs/dbConnect";
import ForgotPassword from "../../../models/ForgotPassword";
import Owner from "../../../models/OwnerDetail";
import { sendOTP } from "../../../utils/mailer";

export async function forgotPassword({ email }) {
  try {
    await connectMongoDB();
    //   // ! Validate the request body against the Joi schema For Pet
    //   const errorP = signUpSchemaForPet.validate(body);
    //   // ! Validate the request body against the Joi schema For Pet's Owner
    //   const errorO = signUpSchemaForPetOwner.validate(body);

    //   // If validation fails, return an error response
    //   if (errorP || errorO) {
    //     return NextResponse.json(
    //       { error: error.details[0].message }, // Extract the error message from Joi
    //       { status: 400 }
    //     );
    //   }

    // Hash the password
    // Create a new Owner instance

    const findEmail = await Owner.findOne({ email });
    if (!findEmail) return { success: false, message: "Email not exits" };

    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    let mailResult = await sendOTP(email, randomNumber);
    if (mailResult) {
      const otp = await ForgotPassword.create({
        code: randomNumber,
        user_id: findEmail?._id,
      });
      await otp.save();
      return { success: true, message: "OTP sent successfully" };
    }
    return { success: false, message: "Failed to sent OTP. Try Again" };
  } catch (err) {
    console.error("Forgot Password Error:", err);
    return { error: "Failed to sent OTP. Try Again" };
  }
}
