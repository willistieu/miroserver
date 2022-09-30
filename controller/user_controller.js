import { user_model } from "../models/users_model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { secret_key } from "../utils/config.js";
import { user_router } from "../routers/user_router.js";

export const register = async (request, response) => {
  const { username, password, firstname, lastname, email } = request.body;
  const salt = 12;
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new user_model({
    username: username,
    password: hashedPassword,
    firstname: firstname,
    lastname: lastname,
    email: email,
  });

  try {
    await newUser.save();
    response.status(201).json(`The user ${newUser.username} is created!`);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const login = async (request, response) => {
    const { username, password} = request.body

    const user = await user_model.findOne({username: username})
    
    if (user) {
        const passCheck = await bcrypt.compare(password, user.password)

        if (passCheck) {
            const token = jwt.sign(JSON.stringify(user), secret_key)
            response.status(201).json({message: `The user ${username} is login`, token: token})
        } else {
            response.status(409).json({ message: error.message });
        }

    } else {
        response.status(409).json({ message: error.message });
    }

}
