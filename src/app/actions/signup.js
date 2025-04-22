"use server";

import { revalidatePath } from "next/cache";
import connectMongoDB from "../../../libs/dbConnect";
import { hash } from "bcrypt";
import Owner from "../../../models/OwnerDetail";
import Pet from "../../../models/PetDetails";

export async function registerUser(formData) {
  const {
    petName,
    petType,
    petGender,
    breed,
    age,
    ownerName,
    email,
    country,
    phone,
    password,
  } = formData;

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
    
    const findEmail = await Owner.findOne({ email });
    if (findEmail) return { success: false, message: "Email already exists" };
    const saltRounds = 10;
    const hashP = await hash(password.toString(), saltRounds);
    // Create a new Owner instance
    const owner = new Owner({
      name: ownerName,
      password: hashP,
      email: email,
      mobile: phone,
      country: country,
    });
    await owner.save();
    // Create a new pet associated with the owner
    const pet = new Pet({
      name: petName,
      breed: breed,
      type: petType,
      age: age,
      gender: petGender,
      owner: owner._id, // Reference to the owner
    });

    await pet.save();
    return { success: true };
  } catch (err) {
    console.error("Sign-in error:", err);
    return { message: "Failed to register user." };
  }
}

// export async function loginUser(formData) {
//   const { email, password } = formData;

//   try {
//     await connectMongoDB();
//     //   // ! Validate the request body against the Joi schema For Pet
//     //   const errorP = signUpSchemaForPet.validate(body);
//     //   // ! Validate the request body against the Joi schema For Pet's Owner
//     //   const errorO = signUpSchemaForPetOwner.validate(body);

//     //   // If validation fails, return an error response
//     //   if (errorP || errorO) {
//     //     return NextResponse.json(
//     //       { error: error.details[0].message }, // Extract the error message from Joi
//     //       { status: 400 }
//     //     );
//     //   }

//     // Hash the password
//     const saltRounds = 10;
//     const hashP = await hash(password.toString(), saltRounds);
//     // Create a new Owner instance
//     const owner = new Owner({
//       name: ownerName,
//       password: hashP,
//       email: email,
//       mobile: phone,
//       country: country,
//     });
//     await owner.save();
//     // Create a new pet associated with the owner
//     const pet = new Pet({
//       name: petName,
//       breed: breed,
//       type: petType,
//       age: age,
//       gender: petGender,
//       owner: owner._id, // Reference to the owner
//     });

//     await pet.save();
//     return { success: true };
//   } catch (err) {
//     console.error("Sign-in error:", err);
//     return { error: "Failed to register user." };
//   }
// }
