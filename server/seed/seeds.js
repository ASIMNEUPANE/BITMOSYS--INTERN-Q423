require("dotenv").config();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Controller = require("../modules/users/controller");
const coinsController = require("../modules/coins/controller");

mongoose.connect(process.env.DB_URL);

var setup = {
  initialize: async () => {
    try {
      await mongoose.connection.dropDatabase();
      console.log("DB reset");

      console.log("Creating user");
      const saltRounds = parseInt(process.env.SALT_ROUND);
      if (isNaN(saltRounds)) {
        throw new Error("Invalid SALT_ROUND value");
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync("12345", salt);

      const payload = {
        name: "Asim Admin",
        email: "asimneupane11@gmail.com",
        password: hashedPassword,
        isEmailVerified: true,
        isActive: true,
        roles: ["users"],
      };
      await Controller.create(payload);



      console.log("Creating coins");
      const 
     

    

      console.log("---------DONE----------");
    } catch (error) {
      console.error("Error during setup:", error);
    } finally {
      mongoose.disconnect(); // Close the database connection when done
    }
  },
};

setup.initialize();
