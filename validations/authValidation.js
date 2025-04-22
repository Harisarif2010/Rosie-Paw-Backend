import Joi from "joi";

// Define the validation schema For Pet
export const signUpSchemaForPet = Joi.object({
  name: Joi.string().email().required().messages({
    "string.empty": "Pet Name is required",
  }),
  type: Joi.string().min(6).required().messages({
    "string.empty": "Pet Type is required",
  }),
  breed: Joi.string().min(6).required().messages({
    "string.empty": "Pet Breed is required",
  }),
  age: Joi.string().min(6).required().messages({
    "string.empty": "Pet Age is required",
  }),
  gender: Joi.string().min(6).required().messages({
    "string.empty": "Pet Gender is required",
  }),
});

// Define the validation schema For Pet's Owner
export const signUpSchemaForPetOwner = Joi.object({
  name: Joi.string().email().required().messages({
    "string.empty": "Owner Name is required",
  }),
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "string.empty": "Password is required",
  }),
  email: Joi.string().min(6).required().messages({
    "string.empty": "Email is required",
  }),
  country: Joi.string().min(6).required().messages({
    "string.empty": "Country is required",
  }),
  mobile: Joi.string().min(6).required().messages({
    "string.empty": "Mobile No is required",
  }),
});
