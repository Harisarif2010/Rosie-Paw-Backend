import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/dbConnect";
import Owner from "../../../../../models/OwnerDetail";
import Pet from "../../../../../models/PetDetails";
import { hash } from "bcrypt";
import { signUpSchemaForPet, signUpSchemaForPetOwner } from "../../../../../validations/authValidation";
// import { corsHeaders } from "../../../lib/cors.js";

// 🚫 CORS
// export async function OPTIONS() {
//   return new Response(null, {
//     status: 204,
//     headers: corsHeaders,
//   });
// }
export async function POST(req) {
  try {
    await connectMongoDB();
    const body = await req.json(); // this reads the ReadableStream internally

    // ! Validate the request body against the Joi schema For Pet
    const errorP = signUpSchemaForPet.validate(body);
    // ! Validate the request body against the Joi schema For Pet's Owner
    const errorO = signUpSchemaForPetOwner.validate(body);

    // If validation fails, return an error response
    if (errorP || errorO) {
      return NextResponse.json(
        { error: error.details[0].message }, // Extract the error message from Joi
        { status: 400 }
      );
    }

    // Hash the password
    const saltRounds = 10;
    const hashP = await hash(body?.password.toString(), saltRounds);
    // Create a new Owner instance
    const owner = new Owner({
      name: body?.name,
      password: hashP,
      email: body?.email,
      mobile: body?.mobile,
      country: body?.country,
    });
    await owner.save();

    // Create a new pet associated with the owner
    const pet = new Pet({
      name: "Buddy",
      breed: "Golden Retriever",
      type: "Dog",
      age: 3,
      gender: "Male",
      owner: owner._id, // Reference to the owner
    });

    await pet.save();
  } catch (err) {
    console.error("Sign-in error:", err);
    return req.json({ error: "Internal server error" }, { status: 500 });
  }
}

// // middleware.ts
// import { NextResponse } from "next/server";
// // import type { NextRequest } from "next/server";

// export function middleware(request) {
//   console.log("🔥 Middleware Triggered: ", request.nextUrl.pathname);

//   // Allow the request to continue
//   return NextResponse.next();
// }

// export const config = {
//     matcher: ["/((?!_next|favicon.ico).*)"], // Match everything except Next.js internals
// };
