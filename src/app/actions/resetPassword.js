"use server";

import { hash } from "bcrypt";
import connectMongoDB from "../../../libs/dbConnect";
import Owner from "../../../models/OwnerDetail";

export async function resetPassword(password, userId) {
  try {
    await connectMongoDB();
    //   // ! Validate the request body against the Joi schema For Pet,
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

    // Hash the password

    // Hash the Password
    const saltRounds = 10;
    const hashP = await hash(password.toString(), saltRounds);
    const findEmail = await Owner.findByIdAndUpdate(
      userId,
      { password: hashP },
      { new: true }
    );
    if (findEmail) {
      return { success: true, message: "Password Changed Successfully" };
    }
    return { success: true, message: "Password Not Changed: Please Try Again" };
  } catch (err) {
    console.error("Password Reset Error:", err);
    return { error: "Failed to Reset Password. Try Again" };
  }
}
