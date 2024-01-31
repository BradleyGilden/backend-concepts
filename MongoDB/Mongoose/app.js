#!/usr/bin/node

/**
 * Setup for mongoose ODM
 * 
 * Author: Bradley Dillion Gilden
 * Date: 31-01-2024
 */

const mongoose = require('mongoose');
const User = require('./User');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

//createUser();

async function createUser () {
  try {
    const user = new User(
      { 
        name: "Bradley",
        age: 32,
        email: "MYEmaIL@gmail.com",
      });
    await user.save();
    user.name = "Karl";
    await user.save()
    console.log(user);
  } catch (err) {
    console.log(err.message)
  }
};

async function querys() {
  try {
                                             // filtering                // projection (use - to exclude fields)
    const users = await User.find({ age: {$gt: 30} }).limit(1).sort({createdAt: 1}).populate('bestfriend').select("-__v");
    // users[0].bestfriend = '65ba41420e337abde4f61146';
    // await users.forEach( async (user) => { 
    //   user.email = "brad@gmail.com";
    //   await user.save();
    // });
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}

querys();
