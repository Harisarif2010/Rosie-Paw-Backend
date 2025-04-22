"use server";

import connectMongoDB from "../../../libs/dbConnect";
import ForgotPassword from "../../../models/ForgotPassword";

export async function verifyOtp(code) {
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

    const findCode = await ForgotPassword.findOne({ code, verified: false });
    if (!findCode) return { success: false, message: "Wrong OTP" };

    // Check if the code is expired manually
    if (new Date() > findCode.expiredAt) {
      return { success: false, message: "OTP has expired" };
    }

    const addVerified = await  ForgotPassword.findByIdAndUpdate(
      findCode._id,
      { verified: true },
      { new: true }
    );
    return { success: true, message: "OTP Verified" , data: addVerified?.user_id };
  } catch (err) {
    console.error("OTP Verify Error:", err);
    return { error: "Failed to Verify OTP. Try Again" };
  }
}
