import User from '../models/';

export async function getUsers() {
  return await User.find();
}

export async function createUser(data) {
  const newUser = new User(data);
  return await newUser.save();
}
